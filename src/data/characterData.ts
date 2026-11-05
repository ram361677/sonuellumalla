export interface CharacterTheme {
  name: string;
  number: string;
  primaryHex: string;
  secondaryHex: string;
  accentHex: string;
  cardBg: string;
  borderClass: string;
  glowRgba: string;
  glowShadow: string;
  badgeBg: string;
  badgeText: string;
  highlightText: string;
  laserBeam: string;
  radarColor: string;
  pillColor: string;
}

export interface CyberCharacter {
  id: string;
  name: string;
  role: string;
  codename: string;
  tagline: string;
  avatarVariant: 'sonu' | 'sonu-btech' | 'sonu-intermediate' | 'asuka' | 'shiro' | 'kaede';
  specialty: string;
  coreTopics?: string;
  coreSubjects?: string[];
  foundationalUnits?: string[];
  secondaryParagraph?: string;
  backstory: string;
  primaryWeapon: {
    name: string;
    description: string;
  };
  specialAbility: {
    name: string;
    description: string;
  };
  tools: string[];
  stats: {
    defense: number;
    offense: number;
    intelligence: number;
    speed: number;
  };
  rating: number;
  institutionOrOrg: string;
  theme: CharacterTheme;
  batmanTheme?: CharacterTheme;
}

// Exactly 4 Playable Character Cards with authentic Cyber Teal & Emerald video palettes (ZERO RED in Cyber Teal):
// 1. Cyber Teal / Neon Cyan (#06b6d4 / #0284c7)
// 2. Electric Emerald / Mint Green (#10b981 / #059669)
// 3. Sapphire / Electric Sky Blue (#0ea5e9 / #0284c7)
// 4. Marine Teal / Turquoise (#14b8a6 / #0d9488)
export const CYBER_CHARACTERS: CyberCharacter[] = [
  {
    id: 'sonu',
    name: 'ELLUMALLA SONU',
    role: 'MASTER OF CYBERSECURITY',
    codename: 'The Cybersecurity Architect // Field 01',
    tagline: 'Curtin University Dubai · Master of Cybersecurity (2026 – Present)',
    avatarVariant: 'sonu',
    specialty: 'Offensive Security, Defensive Operations & Secure Engineering',
    coreTopics: 'Penetration testing, intrusion detection, incident handling and forensics in network defence, secure DevOps (DevSecOps), data network security.',
    coreSubjects: [
      'Penetration Testing',
      'Intrusion Detection',
      'Incident Handling and Forensics in Network Defence',
      'Secure DevOps (DevSecOps)',
      'Data Network Security'
    ],
    backstory: 'Currently pursuing a Master of Cybersecurity at Curtin University Dubai, Sonu is developing advanced knowledge across offensive security, defensive operations, digital forensics, network protection, and secure software engineering.',
    secondaryParagraph: 'The programme combines practical security techniques with foundational research and security architecture concepts, preparing him to understand, investigate, prevent, and respond to modern cyber threats.',
    foundationalUnits: [
      'Fundamental Concepts of Data Security',
      'STEM Research Methodologies'
    ],
    primaryWeapon: {
      name: 'Splunk SIEM & Wireshark Deep Dissector',
      description: 'Core telemetry engine capable of packet-level dissection, log aggregation, and anomalous signature detection across enterprise infrastructures.'
    },
    specialAbility: {
      name: 'AI-Powered Intrusion Sentinel',
      description: 'Machine learning heuristics detecting brute-force surges, stealth port sweeps, and DDoS volumetric flood patterns before breach.'
    },
    tools: ['Penetration Testing', 'Intrusion Detection', 'Incident Handling & Forensics', 'DevSecOps', 'Data Network Security', 'Splunk SIEM', 'Wireshark', 'Python 3'],
    stats: {
      defense: 99,
      offense: 95,
      intelligence: 98,
      speed: 92
    },
    rating: 5,
    institutionOrOrg: 'Curtin University Dubai · Master of Cybersecurity (2026 – Present)',
    theme: {
      name: 'Cybersecurity Academic Core',
      number: '01',
      primaryHex: '#06b6d4',
      secondaryHex: '#0284c7',
      accentHex: '#22d3ee',
      cardBg: 'from-[#042435] via-[#071d2b] to-[#030e16]',
      borderClass: 'border-cyan-400',
      glowRgba: 'rgba(6, 182, 212, 0.75)',
      glowShadow: '0 0 45px rgba(6, 182, 212, 0.65), 0 0 90px rgba(2, 132, 199, 0.45)',
      badgeBg: 'bg-[#042435]/90 border-cyan-500/50 text-cyan-200',
      badgeText: 'text-cyan-200',
      highlightText: 'text-cyan-300',
      laserBeam: 'from-transparent via-cyan-400 to-transparent',
      radarColor: '#06b6d4',
      pillColor: '#06b6d4'
    }
  },
  {
    id: 'shiro',
    name: 'Ellumalla Sonu',
    role: "BACHELOR'S IN COMPUTER SCIENCE AND ENGINEERING",
    codename: 'Network Defense Engineer // Field 02',
    tagline: 'Aditya Institute of Technology and Management · Overall CGPA: 7.47',
    avatarVariant: 'sonu-btech',
    specialty: 'Computer Science & Engineering',
    coreTopics: 'Computer networks, operating systems, database management systems, cryptography, distributed computing, and software engineering.',
    backstory: 'Undergraduate foundation at Aditya Institute of Technology and Management (AITAM). Excelling in computer networks, cryptography, and enterprise systems with an overall 7.47 CGPA, forming the bedrock for advanced cybersecurity mastery.',
    primaryWeapon: {
      name: 'Computer Networks & Packet Analysis',
      description: 'TCP/IP architecture, socket programming, cryptographic protocol implementations, and network perimeter design.'
    },
    specialAbility: {
      name: 'Engineering Foundation Defense',
      description: 'Comprehensive software engineering, operating system internals, and database management system hardening.'
    },
    tools: ['Java', 'C/C++', 'Python', 'Computer Networks', 'MySQL', 'Linux', 'Cryptography', 'Wireshark'],
    stats: {
      defense: 94,
      offense: 88,
      intelligence: 94,
      speed: 90
    },
    rating: 5,
    institutionOrOrg: 'Aditya Institute of Technology and Management · Overall CGPA: 7.47',
    theme: {
      name: 'Electric Emerald Core',
      number: '02',
      primaryHex: '#10b981',
      secondaryHex: '#059669',
      accentHex: '#34d399',
      cardBg: 'from-[#03261d] via-[#061d1b] to-[#030e16]',
      borderClass: 'border-emerald-400',
      glowRgba: 'rgba(16, 185, 129, 0.75)',
      glowShadow: '0 0 45px rgba(16, 185, 129, 0.65), 0 0 90px rgba(5, 150, 105, 0.45)',
      badgeBg: 'bg-[#03261d]/90 border-emerald-500/50 text-emerald-200',
      badgeText: 'text-emerald-200',
      highlightText: 'text-emerald-300',
      laserBeam: 'from-transparent via-emerald-400 to-transparent',
      radarColor: '#10b981',
      pillColor: '#10b981'
    }
  },
  {
    id: 'kaede',
    name: 'Ellumalla Sonu',
    role: 'Senior Secondary Sentinel · Intermediate MPC',
    codename: 'Analytical & STEM Specialist // Field 03',
    tagline: 'VDA Junior College · Visakhapatnam · Scored: 68%',
    avatarVariant: 'sonu-intermediate',
    specialty: 'Mathematics, Physics & Chemistry (MPC)',
    backstory: 'Senior secondary intermediate education at VDA Junior College (Visakha Defence Academy), Visakhapatnam (June 2020 – April 2022) with 68% score. Cultivating disciplined analytical reasoning and mathematical proficiency.',
    primaryWeapon: {
      name: 'Mathematical Logic & Analytical Reasoning',
      description: 'Foundational algebra, discrete mathematics principles, calculus, and logical deduction applied to computational systems.'
    },
    specialAbility: {
      name: 'STEM Problem Solving',
      description: 'Systematic discipline, scientific reasoning, and analytical stamina cultivated through rigorous secondary academics.'
    },
    tools: ['Mathematics', 'Physics', 'Chemistry', 'Algorithmic Logic', 'Analytical Modeling'],
    stats: {
      defense: 90,
      offense: 85,
      intelligence: 95,
      speed: 90
    },
    rating: 5,
    institutionOrOrg: 'VDA Junior College · Scored 68%',
    theme: {
      name: 'Sapphire Sky Core',
      number: '03',
      primaryHex: '#0ea5e9',
      secondaryHex: '#0284c7',
      accentHex: '#38bdf8',
      cardBg: 'from-[#031d33] via-[#061729] to-[#030e16]',
      borderClass: 'border-sky-400',
      glowRgba: 'rgba(14, 165, 233, 0.7)',
      glowShadow: '0 0 45px rgba(14, 165, 233, 0.55), 0 0 90px rgba(2, 132, 199, 0.5)',
      badgeBg: 'bg-[#031d33]/90 border-sky-500/50 text-sky-200',
      badgeText: 'text-sky-200',
      highlightText: 'text-sky-300',
      laserBeam: 'from-transparent via-sky-400 to-transparent',
      radarColor: '#0ea5e9',
      pillColor: '#0ea5e9'
    }
  },
  {
    id: 'tenth',
    name: 'Ellumalla Sonu',
    role: 'SECONDARY SCHOOLING · SSC 10TH STANDARD',
    codename: 'Foundational Education // Field 04',
    tagline: 'Sri Chaitanya School · Palasa · Scored: 92%',
    avatarVariant: 'asuka',
    specialty: 'Secondary School Certificate (SSC) · State Board',
    backstory: 'Successfully completed Secondary School Education at Sri Chaitanya School, Palasa, in 2020 under the Board of Secondary Education, Andhra Pradesh, achieving 92%. Developed a strong foundation in mathematics, science, and analytical thinking, supporting subsequent academic growth.',
    primaryWeapon: {
      name: 'Secondary Science & Mathematics Core',
      description: 'Foundational STEM curriculum, analytical reasoning, and disciplined academic foundation.'
    },
    specialAbility: {
      name: 'Academic Discipline & Quantitative Logic',
      description: 'Secondary education excellence under the AP State Board.'
    },
    tools: ['Mathematics', 'Physical Sciences', 'Biological Sciences', 'Social Studies', 'English', 'Telugu'],
    stats: {
      defense: 88,
      offense: 82,
      intelligence: 92,
      speed: 86
    },
    rating: 5,
    institutionOrOrg: 'Sri Chaitanya School · Scored 92%',
    theme: {
      name: 'Marine Turquoise Core',
      number: '04',
      primaryHex: '#14b8a6',
      secondaryHex: '#0d9488',
      accentHex: '#2dd4bf',
      cardBg: 'from-[#021f1d] via-[#041a1a] to-[#030e16]',
      borderClass: 'border-teal-400',
      glowRgba: 'rgba(20, 184, 166, 0.7)',
      glowShadow: '0 0 45px rgba(20, 184, 166, 0.55), 0 0 90px rgba(13, 148, 136, 0.5)',
      badgeBg: 'bg-[#021f1d]/90 border-teal-500/50 text-teal-200',
      badgeText: 'text-teal-200',
      highlightText: 'text-teal-300',
      laserBeam: 'from-transparent via-teal-400 to-transparent',
      radarColor: '#14b8a6',
      pillColor: '#14b8a6'
    }
  }
];

export const getCharacterTheme = (character: CyberCharacter, _isBatman?: boolean): CharacterTheme => {
  return character.theme;
};
