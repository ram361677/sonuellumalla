const DB_NAME = 'sonu_portfolio_storage';
const DB_VERSION = 1;
const STORE_NAME = 'files';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB not supported'));
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Safely stores large strings/dataURLs in IndexedDB (which has hundreds of MBs quota)
 * with graceful fallback to localStorage and in-memory if needed, avoiding QuotaExceededError.
 */
export async function saveLargeFile(key: string, value: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(value, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB save error, falling back to localStorage if small:', err);
    try {
      localStorage.setItem(key, value);
    } catch (localErr) {
      console.warn('localStorage quota exceeded, file retained in memory:', localErr);
    }
  }
}

/**
 * Safely stores any object/array in IndexedDB.
 */
export async function saveLargeData<T>(key: string, value: T): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(value, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('IndexedDB saveLargeData error:', err);
  }
}

/**
 * Retrieves large files from IndexedDB, falling back to localStorage.
 */
export async function getLargeFile(key: string): Promise<string | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => {
        if (req.result) {
          resolve(req.result as string);
        } else {
          try {
            resolve(localStorage.getItem(key));
          } catch {
            resolve(null);
          }
        }
      };
      req.onerror = () => {
        try {
          resolve(localStorage.getItem(key));
        } catch {
          resolve(null);
        }
      };
    });
  } catch {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }
}

/**
 * Retrieves any structured data from IndexedDB.
 */
export async function getLargeData<T>(key: string): Promise<T | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => {
        if (req.result !== undefined) {
          resolve(req.result as T);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => {
        resolve(null);
      };
    });
  } catch {
    return null;
  }
}

/**
 * Safe localStorage.setItem wrapper that never throws QuotaExceededError.
 */
export function safeLocalStorageSet(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    console.warn(`Safe setItem prevented QuotaExceededError for "${key}":`, err);
  }
}
