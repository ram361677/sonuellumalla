import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Wrench, 
  Cpu, 
  Layers, 
  Database, 
  X, 
  ChevronLeft,
  ChevronRight,
  Shield,
  Terminal,
  Info,
  CheckCircle2,
  Lock,
  Compass,
  Zap,
  Radio
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

/* =========================================================================
   TYPE DEFINITIONS
   ========================================================================= */

export interface SkillDetail {
  name: string;
  shortDescription: string;
  categoryTag: string;
  iconEmoji?: string;
  iconSymbol?: string;
  primaryPurpose: string;
  keyCapabilities: string[];
  concepts: string[];
  securityUseCases: string[];
  codeSnippet?: string;
}

export interface SkillCategorySlide {
  id: string;
  slideNumber: string; // '01 / 05'
  slideIndex: number;
  mainTitle: string;
  subtitle: string;
  description: string;
  accentColor: string; // Primary neon
  accentGlow: string; // Drop shadow rgba
  secondaryColor: string;
  gradient: string;
  themeBase: string; // Background tint
  icon: React.ElementType;
  skills: SkillDetail[];
  floatingSnippets: string[];
}

/* Backwards-compatibility interface for AdventureRoadmap */
export interface SkillItem {
  name: string;
  iconEmoji?: string;
  categoryTag?: string;
  description: string;
}

export interface SkillStage {
  id: string;
  title: string;
  spelling: string;
  subtitle: string;
  summary: string;
  color: string;
  badgeBg: string;
  icon: React.ElementType;
  skills: SkillItem[];
}

/* =========================================================================
   THE EXACT 5 CATEGORY SLIDES
   ========================================================================= */

export const RADIAL_SLIDES: SkillCategorySlide[] = [
  // -----------------------------------------------------------------------
  // SLIDE 01 — TOOLS
  // -----------------------------------------------------------------------
  {
    id: 'tools',
    slideNumber: '01 / 05',
    slideIndex: 0,
    mainTitle: 'TOOLS',
    subtitle: 'MY CYBERSECURITY ARSENAL',
    description: 'Exploring systems, analyzing networks, and understanding security through practical tools.',
    accentColor: '#06b6d4', // Neon Cyan
    accentGlow: 'rgba(6, 182, 212, 0.45)',
    secondaryColor: '#0284c7', // Electric Blue
    gradient: 'from-white via-[#7fe6fa] to-[#06b6d4]',
    themeBase: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.14) 0%, rgba(3,14,22,0.98) 75%)',
    icon: Wrench,
    floatingSnippets: [
      'nmap -sS -sV 192.168.1.1',
      'services.port: 443',
      'index=security EventCode=4625',
      'spiderfoot -s example.com',
      'theHarvester -d domain.com',
      'netdiscover -r 192.168.1.0/24',
      'telnet lab.local 25'
    ],
    skills: [
      {
        name: 'Nmap',
        categoryTag: 'Network Discovery & Scanning',
        iconEmoji: '📡',
        iconSymbol: 'Nmap',
        shortDescription: 'I use Nmap to discover devices on a network, scan open ports, and identify running services in authorized lab environments.',
        primaryPurpose: 'Host discovery, port state analysis, OS detection, and network service fingerprinting in authorized lab networks.',
        keyCapabilities: [
          'TCP SYN stealth scanning (-sS) and UDP port inspection',
          'Service and version detection (-sV)',
          'Operating system fingerprinting (-O)',
          'Nmap Scripting Engine (NSE) vulnerability checks'
        ],
        concepts: [
          'TCP 3-Way Handshake (SYN, SYN-ACK, ACK, RST)',
          'Port States (Open, Closed, Filtered)',
          'Subnet CIDR range scanning',
          'Service banner grabbing'
        ],
        securityUseCases: [
          'Authorized network inventory and mapping',
          'Detecting unexpected open ports on servers',
          'Auditing network firewall rules and port filters'
        ],
        codeSnippet: 'nmap -sS -sV -T4 192.168.1.0/24 -oN lab_scan.txt'
      },
      {
        name: 'Censys',
        categoryTag: 'Attack Surface Management',
        iconEmoji: '🌐',
        iconSymbol: 'Censys',
        shortDescription: 'I use Censys to explore internet-facing devices, identify exposed services, and understand an organization\'s public-facing attack surface.',
        primaryPurpose: 'Exploring internet-wide scan data to uncover public-facing devices, open ports, certificates, and potential exposures.',
        keyCapabilities: [
          'Querying global internet IPv4/IPv6 host datasets',
          'Discovering SSL/TLS certificates and certificate history',
          'Autonomous System Number (ASN) and geographic filtering',
          'Mapping an organization\'s public digital footprint'
        ],
        concepts: [
          'Public-facing attack surface reduction',
          'Internet-wide scanning data architecture',
          'Certificate transparency logs',
          'Exposed cloud assets and service configurations'
        ],
        securityUseCases: [
          'Identifying exposed database or admin ports on public IPs',
          'Finding expired or misconfigured SSL/TLS certificates',
          'Assessing organization exposure without active scanning'
        ],
        codeSnippet: 'services.port: 443 and location.country: "US" and protocols: "http"'
      },
      {
        name: 'Splunk',
        categoryTag: 'Log Analytics & SIEM',
        iconEmoji: '📊',
        iconSymbol: 'Splunk',
        shortDescription: 'I use Splunk to explore and analyze machine data and security logs to help identify unusual activities and potential security threats.',
        primaryPurpose: 'Ingesting, indexing, and analyzing high-velocity log feeds to detect suspicious anomalies and security incidents.',
        keyCapabilities: [
          'Search Processing Language (SPL) queries for log investigation',
          'Interactive security monitoring dashboards and reports',
          'Real-time threshold alert correlation',
          'Centralized log parsing from multiple endpoints and firewalls'
        ],
        concepts: [
          'Security Information and Event Management (SIEM)',
          'Event correlation and anomaly detection',
          'Windows Event Logs and Syslog normalization',
          'Incident response investigation timelines'
        ],
        securityUseCases: [
          'Detecting brute-force authentication spikes across servers',
          'Monitoring unauthorized administrative account activity',
          'Investigating suspicious network connection timelines'
        ],
        codeSnippet: 'index=security sourcetype=wineventlog:security EventCode=4625 \n| stats count by src_ip \n| where count > 10'
      },
      {
        name: 'SpiderFoot',
        categoryTag: 'Automated OSINT Recon',
        iconEmoji: '🕷️',
        iconSymbol: 'SF',
        shortDescription: 'I use SpiderFoot to automate Open-Source Intelligence (OSINT) gathering and collect publicly available information about domains, IP addresses, and organizations.',
        primaryPurpose: 'Automating multi-source OSINT collection to uncover domains, IP blocks, credentials, and digital assets associated with a target.',
        keyCapabilities: [
          'Target domain, IP address, and ASN footprinting',
          'Integration with dozens of public intelligence modules',
          'Passive reconnaissance without touching target networks',
          'Visual relationship mapping and data export'
        ],
        concepts: [
          'Open-Source Intelligence (OSINT) methodologies',
          'Passive vs. active reconnaissance workflows',
          'Information leakage and public metadata',
          'Attack surface mapping'
        ],
        securityUseCases: [
          'Mapping an organization’s external public footprint',
          'Detecting leaked credentials and sensitive subdomains',
          'Gathering intelligence before authorized security audits'
        ],
        codeSnippet: 'spiderfoot -s example.com -m sfp_dns,sfp_whois -u cli'
      },
      {
        name: 'Maltego',
        categoryTag: 'Visual Link Analysis',
        iconEmoji: '🕸️',
        iconSymbol: 'Maltego',
        shortDescription: 'I use Maltego to visualize relationships between domains, IP addresses, email addresses, and other publicly available information during investigations.',
        primaryPurpose: 'Graphing and connecting entities into structured visual intelligence diagrams during digital investigations.',
        keyCapabilities: [
          'Interactive graph and node link visualization',
          'Running automated transforms to expand intelligence nodes',
          'Mapping relationships between domains, nameservers, and IPs',
          'Investigative case documentation and reporting'
        ],
        concepts: [
          'Link analysis and entity relationships',
          'Intelligence pivot points and data enrichment',
          'Threat infrastructure correlation',
          'Graph visual hierarchy and clustering'
        ],
        securityUseCases: [
          'Visualizing relationships between suspicious domains and servers',
          'Connecting email addresses to registered digital identities',
          'Mapping infrastructure during security investigations'
        ],
        codeSnippet: '# Transform Pipeline: Domain -> DNS Names -> IP Addresses -> Netblock'
      },
      {
        name: 'theHarvester',
        categoryTag: 'OSINT Gathering',
        iconEmoji: '🌾',
        iconSymbol: 'tH',
        shortDescription: 'I use theHarvester to collect publicly available information, such as email addresses, subdomains, and hostnames, during authorized reconnaissance.',
        primaryPurpose: 'Harvesting public OSINT intelligence including email addresses, subdomains, and employee names using public search engines and APIs.',
        keyCapabilities: [
          'Searching across search engines (Google, Bing, Yahoo)',
          'Subdomain enumeration via Certificate Transparency logs',
          'Email pattern discovery for authorized audits',
          'Clean command-line execution and reporting'
        ],
        concepts: [
          'Search engine dorking and passive discovery',
          'Domain name system hierarchy and subdomains',
          'Public exposure analysis',
          'Pre-assessment intelligence gathering'
        ],
        securityUseCases: [
          'Discovering forgotten test or staging subdomains',
          'Identifying employee email conventions for phishing defense training',
          'Auditing public domain footprints before launching services'
        ],
        codeSnippet: 'theHarvester -d target-domain.com -l 200 -b google,bing,crtsh'
      },
      {
        name: 'Angry IP Scanner',
        categoryTag: 'Fast IP Range Scanning',
        iconEmoji: '⚡',
        iconSymbol: 'AngryIP',
        shortDescription: 'I use Angry IP Scanner to scan IP address ranges and identify active devices on a network.',
        primaryPurpose: 'Quickly pinging IP address ranges to locate active network devices and discover responsive host addresses.',
        keyCapabilities: [
          'Fast multi-threaded ICMP ping sweeps across subnets',
          'Hostname resolution and NetBIOS name detection',
          'Custom port probing for responsive services',
          'Exporting scan results to CSV and TXT files'
        ],
        concepts: [
          'ICMP Echo Request and Reply mechanisms',
          'Multi-threaded network probing',
          'Subnet boundaries and IP address ranges',
          'Host reachability verification'
        ],
        securityUseCases: [
          'Rapidly locating live devices on local lab networks',
          'Identifying unassigned vs. active IP addresses in a subnet',
          'Verifying host responsiveness after network configuration changes'
        ],
        codeSnippet: '# Rapid multi-threaded sweep across range:\n# 192.168.1.1 - 192.168.1.254\n# Identifies active IP addresses and hostnames'
      },
      {
        name: 'Netdiscover',
        categoryTag: 'ARP Network Recon',
        iconEmoji: '🔍',
        iconSymbol: 'Netdisc',
        shortDescription: 'I use Netdiscover to discover devices on local networks and identify their IP and MAC addresses.',
        primaryPurpose: 'Performing active and passive ARP reconnaissance on local subnets to find connected machines and vendor MAC identifiers.',
        keyCapabilities: [
          'Active ARP request sweeps across IP ranges',
          'Passive ARP sniffing mode for stealth detection',
          'Hardware MAC address vendor (OUI) lookup',
          'Continuous terminal-based network monitoring'
        ],
        concepts: [
          'Address Resolution Protocol (ARP) broadcast packets',
          'Layer 2 data link addressing and MAC prefixes',
          'Passive network listening vs. active transmission',
          'Local area network host identification'
        ],
        securityUseCases: [
          'Discovering devices connected to a Wi-Fi or Ethernet lab network',
          'Detecting new rogue devices appearing on local subnets',
          'Finding the IP address of newly booted lab virtual machines'
        ],
        codeSnippet: 'sudo netdiscover -r 192.168.1.0/24 -i eth0'
      },
      {
        name: 'Telnet',
        categoryTag: 'Connectivity & Banner Probing',
        iconEmoji: '📟',
        iconSymbol: 'Telnet',
        shortDescription: 'I use Telnet to connect to remote systems and test basic network connectivity where the service is available.',
        primaryPurpose: 'Establishing raw TCP connections to test port reachability, service responsiveness, and manual banner grabbing.',
        keyCapabilities: [
          'Direct bidirectional TCP socket communication',
          'Testing connectivity to specific service ports (e.g. 25, 80, 110)',
          'Manual service command testing and banner reading',
          'Troubleshooting firewall reachability without complex tools'
        ],
        concepts: [
          'Raw TCP stream communication',
          'Cleartext data transmission risks vs. encrypted protocols (SSH, TLS)',
          'Service banner analysis and protocol headers',
          'Network port reachability diagnosis'
        ],
        securityUseCases: [
          'Testing whether specific ports are accepting TCP connections',
          'Manually querying email or web servers to verify response banners',
          'Demonstrating cleartext packet capture risks in educational security labs'
        ],
        codeSnippet: 'telnet mail.lab.local 25\n# EHLO lab.local\n# QUIT'
      }
    ]
  },

  // -----------------------------------------------------------------------
  // SLIDE 02 — PROGRAMMING
  // -----------------------------------------------------------------------
  {
    id: 'programming',
    slideNumber: '02 / 05',
    slideIndex: 1,
    mainTitle: 'PROGRAMMING',
    subtitle: 'LANGUAGES THAT POWER MY LOGIC',
    description: 'Building logical solutions through programming, scripting, and problem-solving.',
    accentColor: '#10b981', // Emerald Green
    accentGlow: 'rgba(16, 185, 129, 0.45)',
    secondaryColor: '#059669', // Mint Dark
    gradient: 'from-white via-[#6ee7b7] to-[#10b981]',
    themeBase: 'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.14) 0%, rgba(3,14,22,0.98) 75%)',
    icon: Code2,
    floatingSnippets: [
      'def solve_packet(raw):',
      '#include <stdio.h>',
      'public class SecurityApp {',
      'template <typename T>',
      '<!DOCTYPE html>',
      'int count = 0;',
      'ptr = &value;'
    ],
    skills: [
      {
        name: 'Python',
        categoryTag: 'Scripting & Automation',
        iconEmoji: '🐍',
        iconSymbol: 'Py',
        shortDescription: 'I use Python to write programs, automate tasks, and develop applications. I am interested in using Python for cybersecurity and AI projects.',
        primaryPurpose: 'Rapid development of automation scripts, security testing utilities, algorithmic problem solving, and AI prototypes.',
        keyCapabilities: [
          'High-productivity scripting with clean syntax and extensive standard libraries',
          'Network socket programming and automated port probing',
          'Data analysis, AI/ML exploration, and pattern detection',
          'File processing, regex text parsing, and cryptographic hashing'
        ],
        concepts: [
          'Object-Oriented Programming (OOP) & Modularity',
          'Data structures (lists, dictionaries, sets, tuples)',
          'File I/O, error handling, and automation scripting',
          'Security automation and AI model integration'
        ],
        securityUseCases: [
          'Automating network reconnaissance and port scans in authorized lab environments',
          'Parsing security log files to identify abnormal spikes or patterns',
          'Developing custom cybersecurity scripts and AI classification prototypes'
        ],
        codeSnippet: 'import socket\n\ndef scan_port(host, port):\n    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:\n        s.settimeout(1.0)\n        return s.connect_ex((host, port)) == 0\n\nprint("Port 80 status:", scan_port("127.0.0.1", 80))'
      },
      {
        name: 'C',
        categoryTag: 'Systems & Logic Fundamentals',
        iconEmoji: '⚙️',
        iconSymbol: 'C',
        shortDescription: 'I understand the basics of C programming, including variables, loops, functions, and problem-solving.',
        primaryPurpose: 'Understanding core computational logic, procedural programming, direct memory addressing, and structured algorithm design.',
        keyCapabilities: [
          'Core programming logic: variables, conditionals, loops, and functions',
          'Pointers, memory addresses, and array manipulation',
          'Standard I/O stream operations and formatted buffers',
          'Structured data modeling with structs and custom types'
        ],
        concepts: [
          'Variables, data types, and operator precedence',
          'Control flow execution, iterative loops, and recursion',
          'Pointers and direct memory addressing',
          'Algorithmic problem-solving and procedural architecture'
        ],
        securityUseCases: [
          'Understanding low-level memory layout and stack execution',
          'Studying buffer boundaries and memory safety principles',
          'Writing efficient command-line utilities with low resource footprints'
        ],
        codeSnippet: '#include <stdio.h>\n\nvoid compute(int n) {\n    for (int i = 0; i < n; i++) {\n        printf("Step %d: logic verified\\n", i + 1);\n    }\n}\n\nint main(void) {\n    compute(3);\n    return 0;\n}'
      },
      {
        name: 'C++',
        categoryTag: 'OOP & Systems Logic',
        iconEmoji: '⚡',
        iconSymbol: 'C++',
        shortDescription: 'I use C++ to learn programming logic, object-oriented programming, and efficient problem-solving.',
        primaryPurpose: 'Applying object-oriented design principles, Standard Template Library (STL) algorithms, and high-efficiency computational problem-solving.',
        keyCapabilities: [
          'Object-Oriented Programming (Classes, Objects, Inheritance)',
          'Standard Template Library (STL) vectors, maps, and algorithms',
          'Strict type safety and reference handling',
          'Algorithmic optimization and computational efficiency'
        ],
        concepts: [
          'Encapsulation, Data Abstraction, and Class Hierarchies',
          'Standard Template Library (STL) containers and iterators',
          'Constructors, destructors, and object lifetimes',
          'Algorithmic logic and computational time complexity'
        ],
        securityUseCases: [
          'Building high-performance data processing routines',
          'Studying memory management and avoiding out-of-bounds references',
          'Analyzing compiled binary behavior and reverse-engineering logic'
        ],
        codeSnippet: '#include <iostream>\n#include <vector>\n\nclass ScannerNode {\npublic:\n    void probe(const std::string& target) {\n        std::cout << "Inspecting node: " << target << "\\n";\n    }\n};\n\nint main() {\n    ScannerNode node;\n    node.probe("192.168.1.1");\n    return 0;\n}'
      },
      {
        name: 'Java',
        categoryTag: 'Object-Oriented Applications',
        iconEmoji: '☕',
        iconSymbol: 'Java',
        shortDescription: 'I understand Java programming concepts and object-oriented programming for developing applications.',
        primaryPurpose: 'Developing structured, platform-independent applications using robust object-oriented software engineering methodologies.',
        keyCapabilities: [
          'Object-oriented principles: Inheritance, Polymorphism, Encapsulation',
          'Java Virtual Machine (JVM) platform independence',
          'Robust collections framework (ArrayList, HashMap, HashSet)',
          'Structured exception handling and error resilience'
        ],
        concepts: [
          'Classes, Interfaces, and Abstract definitions',
          'Garbage collection and automatic memory management',
          'Access modifiers and data encapsulation',
          'Modular application architecture'
        ],
        securityUseCases: [
          'Building structured application services with strict access controls',
          'Understanding JVM sandboxing and secure class execution',
          'Foundational knowledge for Android application security auditing'
        ],
        codeSnippet: 'public class SecurityService {\n    private final String serviceName;\n    \n    public SecurityService(String name) {\n        this.serviceName = name;\n    }\n    \n    public void status() {\n        System.out.println(serviceName + " operational");\n    }\n}'
      },
      {
        name: 'HTML',
        categoryTag: 'Web Foundations & Semantics',
        iconEmoji: '🌐',
        iconSymbol: 'HTML',
        shortDescription: 'I use HTML to create the structure of web pages and organize content for websites.',
        primaryPurpose: 'Creating semantic, accessible DOM hierarchies that organize text, media, links, forms, and interactive layout elements.',
        keyCapabilities: [
          'Semantic layout elements (<header>, <nav>, <main>, <section>, <footer>)',
          'Organizing text, images, multimedia, tables, and hyperlinks',
          'Building interactive form controls with validation attributes',
          'Document metadata, viewport definitions, and resource linkage'
        ],
        concepts: [
          'Document Object Model (DOM) tree hierarchy and node nesting',
          'Web accessibility principles (ARIA roles and landmarks)',
          'Hyperlink target attributes and cross-origin security flags',
          'Input attribute sanitization and form boundary rules'
        ],
        securityUseCases: [
          'Preventing DOM XSS by enforcing strict semantic elements and encoding',
          'Securing hyperlinks using rel="noopener noreferrer"',
          'Sandboxing iframe embeds to restrict script execution'
        ],
        codeSnippet: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Security Lab Portal</title>\n</head>\n<body>\n  <header>\n    <h1>Cybersecurity & CS Portfolio</h1>\n  </header>\n</body>\n</html>'
      }
    ]
  },

  // -----------------------------------------------------------------------
  // SLIDE 03 — OPERATING SYSTEMS
  // -----------------------------------------------------------------------
  {
    id: 'operating-systems',
    slideNumber: '03 / 05',
    slideIndex: 2,
    mainTitle: 'OPERATING SYSTEMS',
    subtitle: 'UNDERSTANDING THE SYSTEM BENEATH',
    description: 'Working across operating systems to explore security, administration, and system behavior.',
    accentColor: '#0ea5e9', // Electric Sky Blue
    accentGlow: 'rgba(14, 165, 233, 0.45)',
    secondaryColor: '#0284c7', // Blue Deep
    gradient: 'from-white via-[#7dd3fc] to-[#0ea5e9]',
    themeBase: 'radial-gradient(circle at 50% 50%, rgba(14,165,233,0.14) 0%, rgba(3,14,22,0.98) 75%)',
    icon: Cpu,
    floatingSnippets: [
      'sudo apt update',
      'kali@sonu:~$ recon',
      'parrot --anonsurf start',
      'C:\\Windows\\System32>',
      'Get-Service | Where-Object',
      'chmod +x tool.sh',
      'ps aux | grep daemon'
    ],
    skills: [
      {
        name: 'Kali Linux',
        categoryTag: 'Penetration Testing OS',
        iconEmoji: '🐉',
        iconSymbol: 'Kali',
        shortDescription: 'I use Kali Linux to explore cybersecurity tools, practice network reconnaissance, and learn penetration-testing techniques in authorized lab environments.',
        primaryPurpose: 'Running specialized cybersecurity tools, practicing ethical hacking techniques, and studying security workflows in controlled environments.',
        keyCapabilities: [
          'Pre-configured suite of 600+ cybersecurity utilities',
          'Customized Linux kernel with wireless packet injection support',
          'Debian rolling release model for updated security tools',
          'Live forensic mode to operate safely without altering disks'
        ],
        concepts: [
          'Debian package management and command-line navigation',
          'Linux Filesystem Hierarchy Standard (/etc, /var, /proc)',
          'Sudo privilege management and root permissions',
          'Lab sandbox environments and CTF practice'
        ],
        securityUseCases: [
          'Conducting authorized security lab exercises and scans',
          'Learning penetration testing techniques in controlled sandboxes',
          'Practicing digital forensics and memory analysis'
        ],
        codeSnippet: 'sudo apt update && sudo apt dist-upgrade -y'
      },
      {
        name: 'Parrot OS',
        categoryTag: 'Security & Privacy OS',
        iconEmoji: '🦜',
        iconSymbol: 'Parrot',
        shortDescription: 'I use Parrot OS to explore security tools, practice Linux commands, and learn cybersecurity techniques in controlled environments.',
        primaryPurpose: 'Practicing Linux commands, exploring security tools, and experimenting with privacy and system management in controlled environments.',
        keyCapabilities: [
          'Lightweight desktop environment with low resource consumption',
          'Pre-installed security and programming utilities',
          'Integrated privacy tools (AnonSurf Tor routing)',
          'Solid Debian-based development and administration platform'
        ],
        concepts: [
          'Linux terminal commands (navigation, file editing, pipes)',
          'System process monitoring and service management',
          'Network configuration and troubleshooting utilities',
          'Privacy awareness and anonymized routing concepts'
        ],
        securityUseCases: [
          'Practicing Linux command-line workflows and shell scripting',
          'Running security utilities on lightweight virtual machines',
          'Learning privacy-focused system configuration'
        ],
        codeSnippet: 'sudo parrot-upgrade'
      },
      {
        name: 'Windows',
        categoryTag: 'Everyday Computing & Development',
        iconEmoji: '🪟',
        iconSymbol: 'Win',
        shortDescription: 'I use Windows for everyday computing, software development, programming, and working with different applications.',
        primaryPurpose: 'Everyday computing, software development, writing code, and running diverse productivity and development tools.',
        keyCapabilities: [
          'PowerShell and Command Prompt administration',
          'Integrated development with Visual Studio Code and modern IDEs',
          'Windows Subsystem for Linux (WSL) for Linux workflows',
          'Managing applications, multitasking, and system settings'
        ],
        concepts: [
          'Windows file system architecture and folder structures',
          'Task management, running services, and performance monitoring',
          'Environment variables and developer path configurations',
          'Windows security settings, accounts, and Defender management'
        ],
        securityUseCases: [
          'Managing secure development workspaces and credentials',
          'Analyzing Windows processes and system telemetry in Task Manager',
          'Using WSL to bridge Linux CLI tools with the Windows desktop'
        ],
        codeSnippet: 'Get-Service | Where-Object {$_.Status -eq "Running"}'
      }
    ]
  },

  // -----------------------------------------------------------------------
  // SLIDE 04 — DEVELOPMENT
  // -----------------------------------------------------------------------
  {
    id: 'development',
    slideNumber: '04 / 05',
    slideIndex: 3,
    mainTitle: 'DEVELOPMENT',
    subtitle: 'FROM IDEAS TO INTERACTIVE EXPERIENCES',
    description: 'Developing responsive interfaces, practical applications, and functional digital experiences.',
    accentColor: '#14b8a6', // Marine Teal
    accentGlow: 'rgba(20, 184, 166, 0.45)',
    secondaryColor: '#0d9488', // Dark Teal
    gradient: 'from-white via-[#5eead4] to-[#14b8a6]',
    themeBase: 'radial-gradient(circle at 50% 50%, rgba(20,184,166,0.14) 0%, rgba(3,14,22,0.98) 75%)',
    icon: Layers,
    floatingSnippets: [
      '<form action="/submit">',
      'display: flex; gap: 1rem;',
      'document.addEventListener()',
      'const model = await ai.load()',
      'fetch("/api/data")',
      'margin: 0 auto;',
      'transform: perspective(1000px)'
    ],
    skills: [
      {
        name: 'HTML',
        categoryTag: 'Web Structure & Content',
        iconEmoji: '🌐',
        iconSymbol: 'HTML',
        shortDescription: 'I use HTML to create the structure of web pages and organize content such as headings, images, links, and forms.',
        primaryPurpose: 'Creating clear semantic document structures that organize headings, images, forms, and navigation for websites.',
        keyCapabilities: [
          'Structuring headings, paragraphs, lists, and tables',
          'Building interactive user input forms with validation tags',
          'Embedding multimedia, images, and external resources',
          'Semantic markup (<header>, <nav>, <main>, <section>, <footer>)'
        ],
        concepts: [
          'Document Object Model (DOM) hierarchy and tag nesting',
          'Semantic web structure for accessibility and search readability',
          'Form input fields, submission types, and action handlers',
          'Hyperlink security attributes and target behaviors'
        ],
        securityUseCases: [
          'Structuring user input forms with explicit type constraints',
          'Using rel="noopener noreferrer" on external links',
          'Maintaining clean semantic DOM hierarchy to reduce injection risks'
        ],
        codeSnippet: '<form action="/submit" method="POST">\n  <label for="username">Username:</label>\n  <input type="text" id="username" name="username" required />\n  <button type="submit">Submit</button>\n</form>'
      },
      {
        name: 'CSS',
        categoryTag: 'Layouts, Styling & Animation',
        iconEmoji: '🎨',
        iconSymbol: 'CSS',
        shortDescription: 'I use CSS to style web pages, create attractive layouts, add animations, and make websites responsive across different devices.',
        primaryPurpose: 'Designing responsive layouts, styling web elements, crafting smooth transitions, and adapting interfaces to all screen sizes.',
        keyCapabilities: [
          'Responsive layouts using Flexbox and CSS Grid',
          'Media queries adapting styles for mobile, tablet, and desktop',
          'Smooth CSS transitions, keyframe animations, and hover effects',
          'Modern visual styling: glassmorphism, glowing borders, and shadows'
        ],
        concepts: [
          'CSS Box Model (margins, borders, padding, and content dimensions)',
          'Responsive design principles and viewport scaling (rem, vw, vh, %)',
          'Cascading rules, class specificity, and selector priorities',
          'CSS custom properties (variables) for theme management'
        ],
        securityUseCases: [
          'Ensuring critical security warnings remain visible on all screen sizes',
          'Designing clear, honest visual hierarchies that prevent clickjacking confusion',
          'Maintaining consistent accessible contrast ratios'
        ],
        codeSnippet: '@media (max-width: 768px) {\n  .grid-container {\n    grid-template-columns: 1fr;\n    padding: 1rem;\n  }\n}'
      },
      {
        name: 'JavaScript',
        categoryTag: 'Dynamic Interactivity & Client Logic',
        iconEmoji: '⚡',
        iconSymbol: 'JS',
        shortDescription: 'I use JavaScript to make websites interactive by adding dynamic elements, animations, and user-friendly features.',
        primaryPurpose: 'Adding dynamic interactions, responsive animations, event listeners, and asynchronous capabilities to web pages.',
        keyCapabilities: [
          'DOM manipulation and dynamic element creation',
          'Event handling (clicks, inputs, scrolling, hover states)',
          'Asynchronous operations with Fetch API, Promises, and async/await',
          'Form validation and interactive client-side logic'
        ],
        concepts: [
          'Variables (const, let), functions, and modern arrow syntax',
          'Event-driven programming and event listener lifecycles',
          'Objects, arrays, and JSON data parsing',
          'Asynchronous control flow and REST API communication'
        ],
        securityUseCases: [
          'Validating user input before sending requests to backend services',
          'Preventing DOM XSS by sanitizing dynamic text injection',
          'Securely handling authentication state and session tokens'
        ],
        codeSnippet: 'document.getElementById("btn-scan").addEventListener("click", () => {\n  console.log("Interactive event triggered");\n});'
      },
      {
        name: 'Artificial Intelligence (AI)',
        categoryTag: 'Intelligent Applications',
        iconEmoji: '🤖',
        iconSymbol: 'AI',
        shortDescription: 'I explore AI to develop intelligent applications that analyze information, solve problems, and provide useful results.',
        primaryPurpose: 'Exploring AI techniques to analyze complex data patterns, automate tasks, solve problems, and build intelligent modern tools.',
        keyCapabilities: [
          'Analyzing data to detect anomalies and patterns',
          'Exploring AI API integrations and intelligent prompt engineering',
          'Automating repetitive problem-solving workflows with machine models',
          'Building smart application prototypes that process text and data'
        ],
        concepts: [
          'Machine learning fundamentals and neural network concepts',
          'Pattern recognition, classification, and predictive logic',
          'API integration with intelligent models',
          'Data privacy, model evaluation, and ethical AI practices'
        ],
        securityUseCases: [
          'Using AI pattern detection to uncover anomalous security log activity',
          'Automating phishing email classification and malicious text detection',
          'Exploring AI-assisted source code review and bug identification'
        ],
        codeSnippet: '// Exploring AI pattern detection\nfunction flagSuspiciousEvents(logs) {\n  return logs.filter(event => event.anomalyScore > 0.85);\n}'
      }
    ]
  },

  // -----------------------------------------------------------------------
  // SLIDE 05 — DATABASE
  // -----------------------------------------------------------------------
  {
    id: 'database',
    slideNumber: '05 / 05',
    slideIndex: 4,
    mainTitle: 'DATABASE',
    subtitle: 'STRUCTURING AND MANAGING INFORMATION',
    description: 'Organizing data, writing queries, and understanding how applications store and retrieve information.',
    accentColor: '#22d3ee', // Bright Cyan
    accentGlow: 'rgba(34, 211, 238, 0.45)',
    secondaryColor: '#06b6d4', // Deep Cyan
    gradient: 'from-white via-[#a5f3fc] to-[#22d3ee]',
    themeBase: 'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.14) 0%, rgba(3,14,22,0.98) 75%)',
    icon: Database,
    floatingSnippets: [
      'SELECT * FROM students;',
      'CREATE TABLE audit_logs (...);',
      'INSERT INTO records VALUES (...);',
      'WHERE status = "active"',
      'INNER JOIN profiles ON...',
      'SHOW TABLES;',
      'ORDER BY date DESC;'
    ],
    skills: [
      {
        name: 'MySQL',
        categoryTag: 'Relational Database (RDBMS)',
        iconEmoji: '🔵',
        iconSymbol: 'MySQL',
        shortDescription: 'I use MySQL to store, organize, and manage data in relational databases. I work with SQL queries to retrieve and manage structured data.',
        primaryPurpose: 'Designing normalized relational tables, executing SQL queries, and reliably storing, organizing, and retrieving application data.',
        keyCapabilities: [
          'Creating and structuring relational database tables with keys',
          'Executing SQL queries (SELECT, INSERT, UPDATE, DELETE)',
          'Joining data across multiple tables (INNER JOIN, LEFT JOIN)',
          'Filtering, sorting, and aggregating records (WHERE, ORDER BY, GROUP BY)'
        ],
        concepts: [
          'Relational database architecture and table schemas',
          'Primary keys, foreign keys, and referential integrity',
          'Data types (VARCHAR, INT, DATETIME, BOOLEAN, TEXT)',
          'SQL query optimization and database indexing'
        ],
        securityUseCases: [
          'Preventing SQL Injection (SQLi) using prepared statements and parameterized queries',
          'Configuring least-privilege user permissions (GRANT SELECT ON specific_db.*)',
          'Securing database connection strings and enforcing encrypted connections'
        ],
        codeSnippet: 'SELECT student_id, name, course\nFROM students\nWHERE status = \'active\'\nORDER BY enrollment_date DESC;'
      }
    ]
  }
];

/* Backwards-compatible SKILL_STAGES for AdventureRoadmap.tsx */
export const SKILL_STAGES: SkillStage[] = RADIAL_SLIDES.map(slide => ({
  id: slide.id,
  title: slide.mainTitle,
  spelling: slide.mainTitle,
  subtitle: slide.skills.map(s => s.name).join(', '),
  summary: slide.description,
  color: slide.accentColor,
  badgeBg: slide.accentColor + '22',
  icon: slide.icon,
  skills: slide.skills.map(s => ({
    name: s.name,
    iconEmoji: s.iconEmoji,
    categoryTag: s.categoryTag,
    description: s.shortDescription
  }))
}));

/* =========================================================================
   CANVAS BACKGROUND: AMBIENT 3D PARTICLES
   ========================================================================= */

const AmbientCanvas: React.FC<{ accentColor: string }> = ({ accentColor }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Particle nodes
    const particleCount = 42;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.4 + 0.2
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint constellation links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = accentColor;
            ctx.globalAlpha = (1 - dist / 120) * 0.12;
            ctx.lineWidth = 0.75;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = accentColor;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = accentColor;
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, [accentColor]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0 opacity-70"
    />
  );
};

/* =========================================================================
   MAIN COMPONENT: RADIAL SKILL MATRIX
   ========================================================================= */

export const TealSkillsNetwork: React.FC = () => {
  const { theme } = useTheme();
  const isBatman = theme === 'batman';

  // Current active slide index (0 to 4)
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  
  // Hover previewed skill
  const [hoveredSkill, setHoveredSkill] = useState<SkillDetail | null>(null);
  
  // Click-locked active skill detail modal
  const [lockedSkill, setLockedSkill] = useState<SkillDetail | null>(null);

  // 3D parallax tilt coordinates
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Container refs for wheel handling
  const sectionRef = useRef<HTMLElement>(null);
  const matrixContainerRef = useRef<HTMLDivElement>(null);
  const isTransitioningRef = useRef<boolean>(false);
  const isHoveringMatrixRef = useRef<boolean>(false);

  const baseSlide = RADIAL_SLIDES[activeSlideIndex] || RADIAL_SLIDES[0];
  const currentSlide = useMemo(() => {
    if (isBatman) {
      const batmanMap: Record<string, { accentColor: string; accentGlow: string; secondaryColor: string; gradient: string; themeBase: string }> = {
        tools: {
          accentColor: '#A51C2D',
          accentGlow: 'rgba(165, 28, 45, 0.45)',
          secondaryColor: '#6F101B',
          gradient: 'from-[#E8DCC8] via-[#C45A50] to-[#A51C2D]',
          themeBase: 'radial-gradient(circle at 50% 50%, rgba(165,28,45,0.12) 0%, rgba(11,11,15,0.98) 75%)'
        },
        programming: {
          accentColor: '#C45A50',
          accentGlow: 'rgba(196, 90, 80, 0.45)',
          secondaryColor: '#A51C2D',
          gradient: 'from-[#E8DCC8] via-[#C45A50] to-[#6F101B]',
          themeBase: 'radial-gradient(circle at 50% 50%, rgba(196,90,80,0.12) 0%, rgba(11,11,15,0.98) 75%)'
        },
        os: {
          accentColor: '#6F101B',
          accentGlow: 'rgba(111, 16, 27, 0.5)',
          secondaryColor: '#310D18',
          gradient: 'from-[#E8DCC8] via-[#A51C2D] to-[#310D18]',
          themeBase: 'radial-gradient(circle at 50% 50%, rgba(111,16,27,0.14) 0%, rgba(11,11,15,0.98) 75%)'
        },
        development: {
          accentColor: '#A51C2D',
          accentGlow: 'rgba(165, 28, 45, 0.45)',
          secondaryColor: '#C45A50',
          gradient: 'from-[#E8DCC8] via-[#C45A50] to-[#A51C2D]',
          themeBase: 'radial-gradient(circle at 50% 50%, rgba(165,28,45,0.12) 0%, rgba(11,11,15,0.98) 75%)'
        },
        database: {
          accentColor: '#C45A50',
          accentGlow: 'rgba(196, 90, 80, 0.45)',
          secondaryColor: '#54202B',
          gradient: 'from-[#E8DCC8] via-[#C45A50] to-[#54202B]',
          themeBase: 'radial-gradient(circle at 50% 50%, rgba(196,90,80,0.12) 0%, rgba(11,11,15,0.98) 75%)'
        }
      };
      if (batmanMap[baseSlide.id]) {
        return { ...baseSlide, ...batmanMap[baseSlide.id] };
      }
    }
    return baseSlide;
  }, [baseSlide, isBatman]);
  const totalSlides = RADIAL_SLIDES.length;

  // Slide navigation handlers
  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setActiveSlideIndex(index);
      setHoveredSkill(null);
    }
  }, [totalSlides]);

  const handleNextSlide = useCallback(() => {
    if (activeSlideIndex < totalSlides - 1) {
      goToSlide(activeSlideIndex + 1);
    }
  }, [activeSlideIndex, totalSlides, goToSlide]);

  const handlePrevSlide = useCallback(() => {
    if (activeSlideIndex > 0) {
      goToSlide(activeSlideIndex - 1);
    }
  }, [activeSlideIndex, goToSlide]);

  // Keyboard navigation when section is in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lockedSkill) {
        if (e.key === 'Escape') setLockedSkill(null);
        return;
      }

      // Check if skills section is currently in viewport
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3;
      if (!inView) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        if (activeSlideIndex < totalSlides - 1) {
          e.preventDefault();
          goToSlide(activeSlideIndex + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        if (activeSlideIndex > 0) {
          e.preventDefault();
          goToSlide(activeSlideIndex - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlideIndex, totalSlides, goToSlide, lockedSkill]);

  // Scroll wheel behavior:
  // When cursor is hovered over the radial matrix container, scrolling cycles through slides 1..5.
  // When at Slide 5 and scrolling down, it smoothly scrolls the page to Projects (#projects).
  // When at Slide 1 and scrolling up, it smoothly scrolls the page to Character Deck (#character-deck).
  useEffect(() => {
    const container = matrixContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // If modal is open, let user scroll the modal
      if (lockedSkill) return;

      // Only intercept if mouse is currently over the radial matrix area
      if (!isHoveringMatrixRef.current) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 35) return;

      // If scrolling DOWN
      if (delta > 0) {
        if (activeSlideIndex < totalSlides - 1) {
          e.preventDefault();
          if (isTransitioningRef.current) return;
          isTransitioningRef.current = true;
          goToSlide(activeSlideIndex + 1);
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 650);
        } else {
          // At Slide 5 (Database): let default scroll pass through to next section (Projects)
        }
      } 
      // If scrolling UP
      else if (delta < 0) {
        if (activeSlideIndex > 0) {
          e.preventDefault();
          if (isTransitioningRef.current) return;
          isTransitioningRef.current = true;
          goToSlide(activeSlideIndex - 1);
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 650);
        } else {
          // At Slide 1 (Programming): let default scroll pass through to previous section (Character Deck)
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [activeSlideIndex, totalSlides, goToSlide, lockedSkill]);

  // Mouse move tilt calculation for 3D perspective
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    isHoveringMatrixRef.current = false;
  };

  // Close modal on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLockedSkill(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const numSkills = currentSlide.skills.length;
  const isDenseCluster = numSkills > 6;
  // Radius percentage from center (41% for normal, 42.5% for dense clusters like 9 tools)
  const orbitalPercent = isDenseCluster ? 42.5 : 41;
  const svgRadius = 240 * (orbitalPercent / 50); // in 480x480 SVG coordinate space

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`relative w-full min-h-screen flex flex-col justify-between py-12 px-4 sm:px-8 lg:px-12 overflow-hidden border-t select-none transition-colors duration-500 ${
        isBatman 
          ? 'bg-[#0B0B0F] text-[#E8DCC8] border-[#54202B] film-grain' 
          : 'bg-[#030e16] text-slate-100 border-cyan-500/20'
      }`}
      style={{
        backgroundImage: currentSlide.themeBase,
        transition: 'background-image 0.8s ease-in-out'
      }}
    >
      {/* Dynamic Ambient Particle Canvas */}
      <AmbientCanvas accentColor={currentSlide.accentColor} />

      {/* Subtle cinematic scanline & grid texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      {/* Floating 3D Code/Tool Glyphs in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {currentSlide.floatingSnippets.map((snippet: string, idx: number) => {
          const positions = [
            { top: '15%', left: '8%', delay: 0 },
            { top: '22%', right: '10%', delay: 1.2 },
            { top: '48%', left: '5%', delay: 2.1 },
            { top: '70%', right: '7%', delay: 0.8 },
            { bottom: '14%', left: '12%', delay: 1.7 },
            { top: '82%', left: '42%', delay: 2.5 },
            { top: '35%', right: '4%', delay: 1.9 }
          ];
          const pos = positions[idx % positions.length];

          return (
            <motion.div
              key={`${currentSlide.id}-snippet-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ 
                opacity: [0.12, 0.28, 0.12], 
                y: [0, -12, 0] 
              }}
              transition={{ 
                duration: 6 + (idx % 3), 
                repeat: Infinity, 
                delay: pos.delay, 
                ease: 'easeInOut' 
              }}
              className={`absolute font-mono text-xs sm:text-sm tracking-wider px-3 py-1 rounded border backdrop-blur-[2px] hidden md:block ${
                isBatman ? 'border-[#54202B] bg-[#17171C]/70' : 'border-cyan-500/30 bg-[#041c2c]/70 text-cyan-200'
              }`}
              style={{
                color: currentSlide.accentColor,
                top: pos.top,
                bottom: pos.bottom,
                left: pos.left,
                right: pos.right
              }}
            >
              {snippet}
            </motion.div>
          );
        })}
      </div>

      {/* ===================================================================
          1. TOP EDITORIAL HEADER
          =================================================================== */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b ${
        isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
      }`}>
        <div>
          {/* Unboxed breadcrumb metadata with typographic separators */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2">
            <span style={{ color: currentSlide.accentColor }} className="font-semibold">
              TECHNICAL SKILLS
            </span>
            <span className={isBatman ? 'text-[#54202B]' : 'text-cyan-800'} aria-hidden="true">·</span>
            <span className={isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}>CYBERSECURITY & CS</span>
          </div>

          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest uppercase flex items-center gap-3 font-cinematic ${
            isBatman ? 'text-[#E8DCC8]' : 'text-white'
          }`}>
            <span>TECHNICAL SKILLS</span>
            <span 
              className={`text-xs px-2.5 py-1 rounded-sm font-cinematic uppercase tracking-widest border ${
                isBatman ? 'border-[#54202B] bg-[#310D18] text-[#E8DCC8]' : 'border-cyan-500/30 bg-[#042435] text-cyan-300'
              }`}
            >
              STAGE {currentSlide.slideNumber}
            </span>
          </h2>

          <p className={`mt-2 text-sm sm:text-base max-w-2xl font-light ${
            isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
          }`}>
            Hover over any circle to preview information, or click to lock and open the detailed technical window.
          </p>
        </div>

        {/* Category Slide Selector HUD Bar */}
        <div className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl backdrop-blur-md shadow-xl border ${
          isBatman ? 'bg-[#17171C]/95 border-[#54202B]' : 'bg-[#05141f]/95 border-cyan-500/30'
        }`}>
          {RADIAL_SLIDES.map((slide, idx) => {
            const isActive = idx === activeSlideIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className={`relative px-3 py-1.5 text-xs font-cinematic uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive 
                    ? (isBatman 
                        ? 'text-[#E8DCC8] font-bold shadow-sm bg-[#310D18] border border-[#A51C2D]' 
                        : 'text-cyan-200 font-bold shadow-sm bg-cyan-500/20 border border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]')
                    : (isBatman 
                        ? 'text-[#B9A1A0] hover:text-[#E8DCC8] hover:bg-[#310D18]/40 border border-transparent' 
                        : 'text-slate-400 hover:text-white hover:bg-cyan-950/40 border border-transparent')
                }`}
                style={{
                  boxShadow: isActive ? (isBatman ? '0 0 12px rgba(165,28,45,0.35)' : '0 0 12px rgba(6,182,212,0.35)') : undefined
                }}
              >
                <span 
                  className={`w-1.5 h-1.5 rounded-full ${isActive ? 'animate-pulse' : ''}`} 
                  style={{ backgroundColor: slide.accentColor }}
                />
                <span>{slide.mainTitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ===================================================================
          2. CENTRAL 3D SCENE: RADIAL MATRIX & CATEGORY SHOWCASE
          =================================================================== */}
      <div 
        ref={matrixContainerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => { isHoveringMatrixRef.current = true; }}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 w-full max-w-7xl mx-auto my-auto py-8 min-h-[520px] lg:min-h-[580px] flex flex-col lg:flex-row items-center justify-between gap-10"
        style={{ perspective: 1200 }}
      >
        
        {/* Left Side: Category Title & Editorial Description */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center text-left pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="space-y-4"
            >
              {/* Category indicator & Number */}
              <div className="flex items-center gap-3">
                <span 
                  className={`text-xs font-cinematic uppercase tracking-widest font-semibold px-2.5 py-1 rounded border ${
                    isBatman
                      ? 'bg-[#310D18] border-[#54202B] text-[#E8DCC8]'
                      : 'bg-[#042435] border-cyan-500/30 text-cyan-200'
                  }`}
                >
                  CATEGORY {currentSlide.slideNumber}
                </span>

                <span className={`text-xs font-mono uppercase tracking-wider ${
                  isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
                }`}>
                  5-STAGE SYSTEM
                </span>
              </div>

              {/* Huge Category Title */}
              <h3 
                className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-widest uppercase leading-none drop-shadow-[0_4px_25px_rgba(11,11,15,0.95)] font-cinematic ${
                  isBatman ? 'text-[#E8DCC8]' : 'text-white'
                }`}
              >
                {currentSlide.mainTitle}
              </h3>

              {/* Subtitle */}
              <h4 
                className={`text-sm sm:text-base font-cinematic uppercase tracking-wider font-semibold ${
                  isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
                }`}
              >
                {currentSlide.subtitle}
              </h4>

              {/* Editorial Description */}
              <p className={`text-sm sm:text-base leading-relaxed max-w-md font-light ${
                isBatman ? 'text-[#E8DCC8]/90' : 'text-slate-200'
              }`}>
                "{currentSlide.description}"
              </p>

              {/* Live Status Telemetry & Hover Hint */}
              <div className={`pt-4 border-t flex flex-col gap-2 font-mono text-xs ${
                isBatman ? 'border-[#54202B] text-[#B9A1A0]' : 'border-cyan-500/20 text-slate-400'
              }`}>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full animate-ping ${
                    isBatman ? 'bg-[#A51C2D]' : 'bg-cyan-400'
                  }`} />
                  <span>
                    ACTIVE CLUSTER: <span className={`font-semibold ${
                      isBatman ? 'text-[#E8DCC8]' : 'text-cyan-300'
                    }`}>{numSkills} {numSkills === 1 ? 'NODE' : 'NODES'} LINKED</span>
                  </span>
                </div>
                <div className={`text-[11px] ${
                  isBatman ? 'text-[#B9A1A0]/70' : 'text-slate-500'
                }`}>
                  * Use mouse wheel over the matrix to navigate slides, or click any node for deep dive.
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick Step Controls */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={handlePrevSlide}
              disabled={activeSlideIndex === 0}
              className={`p-2.5 rounded-lg border backdrop-blur-md transition-all flex items-center justify-center cursor-pointer ${
                activeSlideIndex === 0 
                  ? 'opacity-30 cursor-not-allowed text-slate-500' 
                  : isBatman
                  ? 'border-[#54202B] bg-[#17171C]/90 hover:border-[#A51C2D] text-[#E8DCC8] hover:text-white shadow-[0_0_10px_rgba(165,28,45,0.25)]'
                  : 'border-cyan-500/30 bg-[#051724]/90 hover:border-cyan-400 text-cyan-200 hover:text-white shadow-[0_0_10px_rgba(6,182,212,0.25)]'
              }`}
              title="Previous Category Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className={`font-mono text-xs tracking-widest ${
              isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
            }`}>
              {currentSlide.slideNumber}
            </span>

            <button
              onClick={handleNextSlide}
              disabled={activeSlideIndex === totalSlides - 1}
              className={`p-2.5 rounded-lg border backdrop-blur-md transition-all flex items-center justify-center cursor-pointer ${
                activeSlideIndex === totalSlides - 1 
                  ? 'opacity-30 cursor-not-allowed text-slate-500' 
                  : isBatman
                  ? 'border-[#54202B] bg-[#17171C]/90 hover:border-[#A51C2D] text-[#E8DCC8] hover:text-white shadow-[0_0_10px_rgba(165,28,45,0.25)]'
                  : 'border-cyan-500/30 bg-[#051724]/90 hover:border-cyan-400 text-cyan-200 hover:text-white shadow-[0_0_10px_rgba(6,182,212,0.25)]'
              }`}
              title="Next Category Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Right Side: 3D Radial Skill Matrix */}
        <div className="w-full lg:w-7/12 flex items-center justify-center relative min-h-[440px] sm:min-h-[500px]">
          <motion.div
            animate={{
              rotateX: tilt.y,
              rotateY: tilt.x,
              transition: { type: 'spring', stiffness: 200, damping: 25 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] flex items-center justify-center"
          >
            {/* SVG Orbital Rings & Pulse Beams */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0" 
              viewBox="0 0 480 480"
            >
              {/* Concentric rings */}
              <circle
                cx="240"
                cy="240"
                r="70"
                fill="none"
                stroke={currentSlide.accentColor}
                strokeWidth="1"
                strokeOpacity="0.25"
                strokeDasharray="4 4"
              />
              <circle
                cx="240"
                cy="240"
                r="140"
                fill="none"
                stroke={currentSlide.accentColor}
                strokeWidth="1.2"
                strokeOpacity="0.3"
                strokeDasharray="6 6"
              />
              <circle
                cx="240"
                cy="240"
                r={svgRadius}
                fill="none"
                stroke={currentSlide.accentColor}
                strokeWidth="1.5"
                strokeOpacity="0.4"
                strokeDasharray="8 8"
              />

              {/* Connecting circuit lines from center hub to each orbital skill node */}
              {currentSlide.skills.map((_: any, idx: number) => {
                const angle = (idx * (360 / numSkills) - 90) * (Math.PI / 180);
                const x2 = 240 + svgRadius * Math.cos(angle);
                const y2 = 240 + svgRadius * Math.sin(angle);

                return (
                  <g key={`beam-${currentSlide.id}-${idx}`}>
                    <line
                      x1="240"
                      y1="240"
                      x2={x2}
                      y2={y2}
                      stroke={currentSlide.accentColor}
                      strokeWidth="1.5"
                      strokeOpacity="0.45"
                      strokeDasharray="3 3"
                    />
                    {/* Animated pulse dot travelling along line */}
                    <circle
                      cx="240"
                      cy="240"
                      r="2.5"
                      fill={currentSlide.accentColor}
                    >
                      <animate
                        attributeName="cx"
                        from="240"
                        to={x2}
                        dur={`${2.2 + idx * 0.4}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="cy"
                        from="240"
                        to={y2}
                        dur={`${2.2 + idx * 0.4}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        dur={`${2.2 + idx * 0.4}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* Central Futuristic Hub Core */}
            <motion.div
              animate={{ 
                rotate: 360,
                transition: { duration: 60, repeat: Infinity, ease: 'linear' }
              }}
              className={`absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full backdrop-blur-xl flex flex-col items-center justify-center z-10 transition-all border ${
                isBatman 
                  ? 'border-[#A51C2D]/60 bg-[#17171C]/90 shadow-[0_0_35px_rgba(11,11,15,0.95)]' 
                  : 'border-cyan-400/60 bg-[#041c2c]/90 shadow-[0_0_35px_rgba(6,182,212,0.35)]'
              }`}
              style={{
                boxShadow: isBatman ? `0 0 40px rgba(165,28,45,0.4)` : `0 0 40px rgba(6,182,212,0.4)`
              }}
            >
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                  isBatman ? 'border-[#54202B]' : 'border-cyan-500/30'
                }`}
                style={{ backgroundColor: `${currentSlide.accentColor}22` }}
              >
                <currentSlide.icon 
                  className="w-6 h-6 animate-pulse" 
                  style={{ color: currentSlide.accentColor }} 
                />
              </div>

              <span className={`font-cinematic text-[10px] uppercase tracking-widest mt-1 font-bold ${
                isBatman ? 'text-[#E8DCC8]' : 'text-cyan-300'
              }`}>
                RADIAL HUB
              </span>
            </motion.div>

            {/* Orbiting Skill Circles */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`skills-layer-${currentSlide.id}`}
                initial={{ opacity: 0, scale: 0.85, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.15, rotate: 20 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                {currentSlide.skills.map((skill: any, idx: number) => {
                  const angle = (idx * (360 / numSkills) - 90) * (Math.PI / 180);
                  const posX = 50 + orbitalPercent * Math.cos(angle);
                  const posY = 50 + orbitalPercent * Math.sin(angle);

                  const isHovered = hoveredSkill?.name === skill.name;
                  const isLocked = lockedSkill?.name === skill.name;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: 0.1 + idx * 0.08, 
                        type: 'spring', 
                        stiffness: 260, 
                        damping: 20 
                      }}
                      style={{
                        position: 'absolute',
                        left: `${posX}%`,
                        top: `${posY}%`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: isHovered || isLocked ? 30 : 20
                      }}
                      className="group cursor-pointer select-none"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onClick={() => setLockedSkill(skill)}
                    >
                      {/* Interactive Radial Skill Circle */}
                      <motion.div
                        whileHover={{ scale: 1.15, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative ${
                          isDenseCluster 
                            ? 'w-14 h-14 sm:w-16 sm:h-16 p-1 sm:p-1.5' 
                            : 'w-16 h-16 sm:w-20 sm:h-20 p-2'
                        } rounded-full flex flex-col items-center justify-center transition-all duration-300 backdrop-blur-xl border ${
                          isHovered || isLocked
                            ? (isBatman 
                                ? 'border-[#A51C2D] bg-[#310D18] shadow-2xl' 
                                : 'border-cyan-400 bg-[#042435] shadow-[0_0_30px_rgba(6,182,212,0.7)]')
                            : (isBatman 
                                ? 'border-[#54202B] bg-[#17171C]/90 hover:border-[#A51C2D]/80' 
                                : 'border-cyan-500/30 bg-[#051724]/90 hover:border-cyan-400/80')
                        }`}
                        style={{
                          boxShadow: isHovered || isLocked
                            ? (isBatman ? `0 0 30px rgba(165,28,45,0.7), inset 0 0 15px rgba(165,28,45,0.5)` : `0 0 30px rgba(6,182,212,0.7), inset 0 0 15px rgba(6,182,212,0.4)`)
                            : (isBatman ? `0 0 15px rgba(165,28,45,0.2)` : `0 0 15px rgba(6,182,212,0.2)`)
                        }}
                      >
                        {/* Outer rotating pulse ring */}
                        <div 
                          className={`absolute inset-0 rounded-full border border-dashed animate-spin pointer-events-none ${
                            isBatman ? 'border-[#54202B]' : 'border-cyan-500/30'
                          }`} 
                          style={{ animationDuration: `${12 + idx * 4}s` }}
                        />

                        {/* Skill Emblem / Symbol */}
                        <div className={`font-mono ${isDenseCluster ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'} font-black tracking-tight flex items-center justify-center ${
                          isBatman ? 'text-[#E8DCC8]' : 'text-white'
                        }`}>
                          {skill.iconSymbol || skill.iconEmoji}
                        </div>

                        {/* Compact Label */}
                        <span 
                          className={`${
                            isDenseCluster ? 'text-[9px] sm:text-[10px] max-w-[56px] sm:max-w-[62px]' : 'text-[10px] sm:text-[11px] max-w-[68px]'
                          } font-cinematic uppercase tracking-wider font-bold truncate mt-0.5 text-center ${
                            isBatman ? 'text-[#E8DCC8]' : 'text-cyan-200'
                          }`}
                        >
                          {skill.name}
                        </span>

                        {/* Click indicator badge */}
                        <div 
                          className={`absolute -bottom-1 w-2.5 h-2.5 rounded-full border ${
                            isBatman ? 'border-[#0B0B0F]' : 'border-[#030e16]'
                          }`}
                          style={{ backgroundColor: currentSlide.accentColor }}
                        />
                      </motion.div>

                      {/* Hover Preview Tooltip Window */}
                      {isHovered && !lockedSkill && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5 }}
                          className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-56 sm:w-64 p-3 rounded-xl border shadow-2xl backdrop-blur-2xl z-40 pointer-events-none ${
                            isBatman 
                              ? 'bg-[#17171C]/95 border-[#54202B] text-[#E8DCC8]' 
                              : 'bg-[#051724]/98 border-cyan-500/30 text-slate-100'
                          }`}
                          style={{
                            boxShadow: isBatman 
                              ? `0 10px 30px rgba(11,11,15,0.9), 0 0 20px rgba(165,28,45,0.3)`
                              : `0 10px 30px rgba(3,14,22,0.9), 0 0 20px rgba(6,182,212,0.35)`
                          }}
                        >
                          <div className={`flex items-center justify-between gap-2 border-b pb-1.5 mb-1.5 ${
                            isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
                          }`}>
                            <span className={`font-bold text-xs sm:text-sm tracking-wide font-cinematic uppercase ${
                              isBatman ? 'text-[#E8DCC8]' : 'text-white'
                            }`}>
                              {skill.name}
                            </span>
                            <span 
                              className={`text-[9px] font-cinematic uppercase px-1.5 py-0.5 rounded border ${
                                isBatman 
                                  ? 'bg-[#310D18] border-[#54202B] text-[#E8DCC8]' 
                                  : 'bg-[#042435] border-cyan-500/30 text-cyan-200'
                              }`}
                            >
                              {skill.categoryTag}
                            </span>
                          </div>

                          <p className={`text-xs leading-relaxed ${
                            isBatman ? 'text-[#B9A1A0]' : 'text-slate-300'
                          }`}>
                            {skill.shortDescription}
                          </p>

                          <div className={`mt-2 pt-1.5 border-t flex items-center justify-between text-[10px] font-mono ${
                            isBatman ? 'border-[#54202B] text-[#B9A1A0]' : 'border-cyan-500/20 text-slate-400'
                          }`}>
                            <span>Click to lock view</span>
                            <span style={{ color: currentSlide.accentColor }}>[OPEN SPEC]</span>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

      </div>

      {/* ===================================================================
          3. BOTTOM HUD CONTROLS: PROGRESS SCRUBBER & DOCK
          =================================================================== */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
        isBatman ? 'border-[#54202B] text-[#B9A1A0]' : 'border-cyan-500/20 text-slate-400'
      }`}>
        {/* Left: Keyboard and scroll guidance */}
        <div className="flex items-center gap-3">
          <span className={`flex items-center gap-1.5 font-cinematic uppercase tracking-wider text-xs ${
            isBatman ? 'text-[#E8DCC8]' : 'text-white'
          }`}>
            <Radio className={`w-3.5 h-3.5 animate-pulse ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
            <span>5 INTERACTIVE CATEGORIES</span>
          </span>
          <span className={isBatman ? 'text-[#54202B] hidden sm:inline' : 'text-cyan-800 hidden sm:inline'} aria-hidden="true">·</span>
          <span className={`hidden sm:inline ${isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'}`}>
            Scroll over matrix or use arrows &larr; &rarr; to cycle slides
          </span>
        </div>

        {/* Center: Slide Progress Dots */}
        <div className="flex items-center gap-2">
          {RADIAL_SLIDES.map((slide, idx) => (
            <button
              key={`dot-${slide.id}`}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === activeSlideIndex 
                  ? 'w-8' 
                  : isBatman 
                  ? 'w-2 bg-[#17171C] border border-[#54202B] hover:bg-[#310D18]' 
                  : 'w-2 bg-[#051724] border border-cyan-500/30 hover:bg-[#0c314b]'
              }`}
              style={{
                backgroundColor: idx === activeSlideIndex ? slide.accentColor : undefined,
                boxShadow: idx === activeSlideIndex ? `0 0 10px ${slide.accentColor}` : undefined
              }}
              title={`Jump to ${slide.mainTitle}`}
            />
          ))}
        </div>

        {/* Right: Section Index */}
        <div className="flex items-center gap-2">
          <span>PORTFOLIO SECTION:</span>
          <span className={`font-bold font-cinematic uppercase tracking-wider ${
            isBatman ? 'text-[#E8DCC8]' : 'text-white'
          }`}>TECHNICAL SKILLS</span>
          <span className={`px-2 py-0.5 rounded font-mono border ${
            isBatman ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]' : 'bg-[#051724] border-cyan-500/30 text-cyan-300'
          }`}>
            {currentSlide.slideNumber}
          </span>
        </div>
      </div>

      {/* ===================================================================
          4. DETAILED GLASSMORPHISM MODAL WINDOW (CLICK-LOCKED)
          =================================================================== */}
      <AnimatePresence>
        {lockedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl">
            {/* Click backdrop to close */}
            <div 
              className="absolute inset-0 cursor-pointer"
              onClick={() => setLockedSkill(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl z-10 p-6 sm:p-8 backdrop-blur-2xl border ${
                isBatman 
                  ? 'bg-[#0B0B0F]/95 border-[#54202B] text-[#E8DCC8]' 
                  : 'bg-[#051724]/95 border-cyan-500/30 text-slate-100'
              }`}
              style={{
                boxShadow: `0 25px 60px rgba(11,11,15,0.95), 0 0 35px ${currentSlide.accentGlow}`
              }}
            >
              {/* Header: Skill Name, Tag & Close Button */}
              <div className={`flex items-start justify-between gap-4 pb-4 border-b ${
                isBatman ? 'border-[#54202B]' : 'border-cyan-500/20'
              }`}>
                <div className="flex items-center gap-3">
                  <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-lg border ${
                      isBatman ? 'border-[#54202B]' : 'border-cyan-500/30'
                    }`}
                    style={{
                      backgroundColor: `${currentSlide.accentColor}18`,
                      color: currentSlide.accentColor
                    }}
                  >
                    {lockedSkill.iconSymbol || lockedSkill.iconEmoji}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className={`text-2xl font-bold tracking-widest font-cinematic uppercase ${
                        isBatman ? 'text-[#E8DCC8]' : 'text-white'
                      }`}>
                        {lockedSkill.name}
                      </h4>
                      <span 
                        className="text-xs font-cinematic uppercase tracking-wider px-2 py-0.5 rounded border"
                        style={{
                          color: currentSlide.accentColor,
                          borderColor: `${currentSlide.accentColor}44`,
                          backgroundColor: `${currentSlide.accentColor}11`
                        }}
                      >
                        {lockedSkill.categoryTag}
                      </span>
                    </div>
                    <p className={`text-xs font-mono mt-0.5 ${
                      isBatman ? 'text-[#B9A1A0]' : 'text-slate-400'
                    }`}>
                      {currentSlide.mainTitle} // {currentSlide.slideNumber}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setLockedSkill(null)}
                  className={`p-2 rounded-lg transition-colors cursor-pointer border ${
                    isBatman
                      ? 'bg-[#17171C] border-[#54202B] text-[#B9A1A0] hover:text-[#E8DCC8] hover:bg-[#310D18]'
                      : 'bg-[#072435] border-cyan-500/30 text-slate-300 hover:text-white hover:bg-[#0c3a54]'
                  }`}
                  title="Close technical window (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Content */}
              <div className="mt-6 space-y-6 text-sm">
                
                {/* 1. Short Description / Overview */}
                <div>
                  <h5 className={`font-cinematic uppercase tracking-widest text-xs mb-1.5 flex items-center gap-2 ${
                    isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                  }`}>
                    <Info className="w-3.5 h-3.5" style={{ color: currentSlide.accentColor }} />
                    <span>How I Use It</span>
                  </h5>
                  <p className={`font-light leading-relaxed p-3.5 rounded-lg border text-sm ${
                    isBatman 
                      ? 'text-[#E8DCC8] bg-[#17171C]/90 border-[#54202B]' 
                      : 'text-slate-200 bg-[#072030]/90 border-cyan-500/20'
                  }`}>
                    {lockedSkill.shortDescription}
                  </p>
                  {lockedSkill.primaryPurpose && lockedSkill.primaryPurpose !== lockedSkill.shortDescription && (
                    <p className={`text-xs leading-relaxed mt-2 p-3 rounded-lg border ${
                      isBatman 
                        ? 'text-[#B9A1A0] bg-[#0B0B0F] border-[#54202B]' 
                        : 'text-slate-400 bg-[#030e16] border-cyan-500/20'
                    }`}>
                      <span className={`font-cinematic uppercase tracking-widest text-[10px] block mb-1 ${
                        isBatman ? 'text-[#C45A50]' : 'text-cyan-300'
                      }`}>Architectural Purpose & Scope:</span>
                      {lockedSkill.primaryPurpose}
                    </p>
                  )}
                </div>

                {/* 2. Key Capabilities */}
                <div>
                  <h5 className={`font-cinematic uppercase tracking-widest text-xs mb-2 flex items-center gap-2 ${
                    isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                  }`}>
                    <Zap className="w-3.5 h-3.5" style={{ color: currentSlide.accentColor }} />
                    <span>Key Capabilities & Architecture</span>
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {lockedSkill.keyCapabilities.map((cap, i) => (
                      <li 
                        key={i} 
                        className={`flex items-start gap-2 p-2.5 rounded-md border text-xs font-light ${
                          isBatman
                            ? 'bg-[#17171C]/80 border-[#54202B] text-[#E8DCC8]/90'
                            : 'bg-[#072030]/80 border-cyan-500/20 text-slate-200'
                        }`}
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isBatman ? 'text-[#A51C2D]' : 'text-emerald-400'
                        }`} />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Important Concepts */}
                <div>
                  <h5 className={`font-cinematic uppercase tracking-widest text-xs mb-2 flex items-center gap-2 ${
                    isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                  }`}>
                    <Compass className="w-3.5 h-3.5" style={{ color: currentSlide.accentColor }} />
                    <span>Relevant Concepts</span>
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {lockedSkill.concepts.map((concept, i) => (
                      <span 
                        key={i}
                        className={`text-xs px-2.5 py-1 rounded font-mono border ${
                          isBatman
                            ? 'bg-[#17171C] border-[#54202B] text-[#E8DCC8]'
                            : 'bg-[#072030] border-cyan-500/25 text-cyan-200'
                        }`}
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Authorized Security & Production Use Cases */}
                <div>
                  <h5 className={`font-cinematic uppercase tracking-widest text-xs mb-2 flex items-center gap-2 ${
                    isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                  }`}>
                    <Shield className="w-3.5 h-3.5" style={{ color: currentSlide.accentColor }} />
                    <span>Authorized Security & Engineering Applications</span>
                  </h5>
                  <div className="space-y-1.5">
                    {lockedSkill.securityUseCases.map((useCase, i) => (
                      <div 
                        key={i} 
                        className={`p-2.5 rounded-md border text-xs flex items-start gap-2.5 font-light ${
                          isBatman
                            ? 'bg-[#17171C]/80 border-[#54202B] text-[#E8DCC8]/90'
                            : 'bg-[#072030]/80 border-cyan-500/20 text-slate-200'
                        }`}
                      >
                        <span 
                          className="font-cinematic uppercase font-bold text-[10px] px-1.5 py-0.5 rounded shrink-0 mt-0.5"
                          style={{ 
                            color: currentSlide.accentColor,
                            backgroundColor: `${currentSlide.accentColor}18`
                          }}
                        >
                          CASE 0{i + 1}
                        </span>
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. Code Sample / CLI Syntax */}
                {lockedSkill.codeSnippet && (
                  <div>
                    <h5 className={`font-cinematic uppercase tracking-widest text-xs mb-1.5 flex items-center gap-2 ${
                      isBatman ? 'text-[#C45A50]' : 'text-cyan-400'
                    }`}>
                      <Terminal className="w-3.5 h-3.5" style={{ color: currentSlide.accentColor }} />
                      <span>Syntax & Command Blueprint</span>
                    </h5>
                    <pre className={`p-3.5 rounded-lg font-mono text-xs overflow-x-auto whitespace-pre leading-relaxed border ${
                      isBatman
                        ? 'bg-[#0B0B0F] border-[#54202B] text-[#E8DCC8]'
                        : 'bg-[#030e16] border-cyan-500/30 text-cyan-200'
                    }`}>
                      {lockedSkill.codeSnippet}
                    </pre>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-mono ${
                isBatman ? 'border-[#54202B] text-[#B9A1A0]' : 'border-cyan-500/20 text-slate-400'
              }`}>
                <span className="flex items-center gap-1.5">
                  <Lock className={`w-3.5 h-3.5 ${isBatman ? 'text-[#A51C2D]' : 'text-cyan-400'}`} />
                  <span className="font-cinematic uppercase tracking-wider text-xs">VERIFIED CYBERSECURITY SPEC</span>
                </span>

                <button
                  onClick={() => setLockedSkill(null)}
                  className={`px-4 py-2 rounded-lg font-cinematic uppercase tracking-wider text-xs transition-colors cursor-pointer border ${
                    isBatman
                      ? 'bg-[#310D18] hover:bg-[#A51C2D] text-[#E8DCC8] border-[#54202B]'
                      : 'bg-[#042435] hover:bg-cyan-600 text-cyan-200 border-cyan-500/30'
                  }`}
                >
                  Close Window
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
