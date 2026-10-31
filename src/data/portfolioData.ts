import { Project, SkillCategory, TrainingExperience, Certification } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Ellumalla Sonu',
  firstName: 'Sonu',
  role: 'Cybersecurity Master\'s Student | Aspiring Cybersecurity Analyst',
  tagline: 'Passionate Cybersecurity professional pursuing a Master\'s in Cybersecurity at Curtin University Dubai with a background in Computer Science and Engineering.',
  bio: `I am a passionate Cybersecurity professional currently pursuing a Master's in Cybersecurity at Curtin University Dubai, with a background in Computer Science and Engineering. My objective is to apply my technical knowledge, programming skills, and hands-on cybersecurity experience to identify vulnerabilities, analyse security threats, and help protect digital systems. I am continuously developing my skills in ethical hacking, network security, threat detection, and security operations while exploring innovative technologies. I aim to contribute to real-world security challenges and grow as a cybersecurity professional.`,
  email: 'Sonuellumalla6@gmail.com',
  phone: '+91 9491633808',
  location: 'Andhra Pradesh, India / Dubai, UAE',
  github: 'https://github.com/ram361677',
  linkedin: 'https://www.linkedin.com/in/sonu-ellumalla-96868b292/',
  dob: '2005-06-11',
  nationality: 'Indian',
  resumePdfPath: '/assets/aistudio/NEW_RESUME_SONU_ELLUMALLA_0d249748.pdf',
  education: [
    {
      degree: 'Master of Cybersecurity',
      institution: 'Curtin University Dubai',
      period: '09/2026 – Pursuing',
      location: 'Academic City, Dubai',
      description: 'Advanced postgraduate coursework in security architectures, incident response, digital forensics, enterprise cloud resilience, and threat intelligence.'
    },
    {
      degree: 'Bachelor\'s in Computer Science and Engineering',
      institution: 'Aditya Institute of Technology and Management, Tekkali',
      period: '08/2022 – 04/2026',
      location: 'Srikakulam, India',
      description: 'B.Tech in CSE with CGPA 7.47. Comprehensive coursework in computer networks, operating systems, data structures, algorithms, information security, and software engineering.'
    },
    {
      degree: 'High School Education (Intermediate MPC)',
      institution: 'VDA Junior College',
      period: '06/2020 – 04/2022',
      location: 'Visakhapatnam, India',
      description: 'Senior secondary education in Mathematics, Physics, and Chemistry (68%). Strong foundation in quantitative problem solving and algorithmic reasoning.'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Sri Chaitanya School',
      period: '06/2019 – 04/2020 (Completed 2020)',
      location: 'Palasa, Andhra Pradesh, India',
      description: 'Secondary School Certificate (SSC) completed under the Andhra Pradesh State Board with 92% score. Strong foundational science and mathematics education.'
    }
  ],
  languages: ['English (Professional)', 'Telugu (Native)', 'Hindi (Fluent)']
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Cybersecurity & Defense',
    category: 'CYBERSECURITY',
    description: 'Core defense mechanisms, penetration testing methodologies, vulnerability assessments, and SOC workflows.',
    skills: [
      { name: 'Ethical Hacking', level: 'Proficient', description: 'Reconnaissance, vulnerability scanning, exploitation methodologies, and security posture remediation.' },
      { name: 'Zero Trust Architecture', level: 'Proficient', description: 'Zscaler Zero Trust cloud security principles, perimeter-less access control, and least privilege verification.' },
      { name: 'Vulnerability Assessment', level: 'Proficient', description: 'Systematic audit of security weaknesses, CVE evaluation, and defensive risk scoring.' },
      { name: 'Network Security', level: 'Proficient', description: 'Packet inspection, firewall policies, IDS/IPS concepts, and TCP/IP protocol analysis.' },
      { name: 'Security Monitoring & SOC', level: 'Proficient', description: 'Log aggregation, threat hunting, alert triage, and incident lifecycle management in SIEM.' },
      { name: 'Threat Identification', level: 'Proficient', description: 'Identifying adversary Tactics, Techniques, and Procedures (TTPs) using MITRE ATT&CK.' }
    ]
  },
  {
    title: 'Security & Forensics Tools',
    category: 'TOOLS',
    description: 'Industry-standard penetration testing, reconnaissance, network scanning, and SIEM toolsets.',
    skills: [
      { name: 'N-map', level: 'Advanced', description: 'Host discovery, port enumeration, OS fingerprinting, and NSE security scripts.' },
      { name: 'Splunk', level: 'Proficient', description: 'SIEM search processing language (SPL), log correlation, dashboard creation, and alert triggers.' },
      { name: 'Censys & Spiderfoot', level: 'Proficient', description: 'OSINT reconnaissance, internet-wide attack surface mapping, and asset discovery.' },
      { name: 'Maltego & The Harvester', level: 'Proficient', description: 'Relationship link analysis, public metadata harvesting, and domain intelligence.' },
      { name: 'Angry IP Scanner', level: 'Proficient', description: 'Fast IP address and port scanning, network host availability probing, and subnet analysis.' },
      { name: 'Netdiscover & Telnet', level: 'Proficient', description: 'Active/passive ARP reconnaissance, broadcast subnet scanning, and remote daemon probing.' },
      { name: 'Wireshark', level: 'Advanced', description: 'Deep network packet dissection, protocol filtering, and anomalous payload discovery.' },
      { name: 'Nessus & OpenVAS', level: 'Proficient', description: 'Automated infrastructure vulnerability assessments and credentialed scan reporting.' }
    ]
  },
  {
    title: 'Operating Systems',
    category: 'TOOLS',
    description: 'Security and development platforms utilized for testing, auditing, and systems analysis.',
    skills: [
      { name: 'Kali Linux', level: 'Advanced', description: 'Primary penetration testing distro, command-line tooling, and security auditing tools.' },
      { name: 'Parrot OS', level: 'Proficient', description: 'Security-oriented Linux distribution for digital forensics, reverse engineering, and privacy.' },
      { name: 'Windows', level: 'Advanced', description: 'Windows security internals, event log analysis, PowerShell scripting, and registry auditing.' }
    ]
  },
  {
    title: 'Programming & Scripting',
    category: 'PROGRAMMING',
    description: 'Core programming languages for security automation, data processing, and application engineering.',
    skills: [
      { name: 'Python', level: 'Advanced', description: 'Automation scripting, socket programming, log parsers, Pandas analytics, and security tools.' },
      { name: 'C', level: 'Proficient', description: 'Low-level memory architecture, buffer management, pointer arithmetic, and exploit fundamentals.' },
      { name: 'Java', level: 'Proficient', description: 'Object-oriented programming, data structures, network sockets, and application logic.' },
      { name: 'C++', level: 'Proficient', description: 'Systems programming, memory safety concepts, and algorithmic efficiency.' }
    ]
  },
  {
    title: 'Development, MERN & AI',
    category: 'WEB',
    description: 'Full-stack application engineering, cloud database management, and machine learning pipelines.',
    skills: [
      { name: 'MERN Stack', level: 'Proficient', description: 'Full-stack development with MongoDB, Express, React, and Node.js for modern web applications.' },
      { name: 'MongoDB & MySQL', level: 'Proficient', description: 'Document and relational databases, secure schema design, indexing, and SQL injection prevention.' },
      { name: 'Pandas & Data Analysis', level: 'Proficient', description: 'Data wrangling, log processing, anomaly analysis, and numerical feature engineering.' },
      { name: 'Artificial Intelligence & ML', level: 'Proficient', description: 'Supervised/unsupervised models, computer vision for plant disease detection, and security heuristics.' },
      { name: 'HTML5, CSS & JavaScript', level: 'Proficient', description: 'Responsive web interfaces, DOM security boundaries, async APIs, and client-side validation.' }
    ]
  }
];

export const TRAINING_EXPERIENCES: TrainingExperience[] = [
  {
    role: 'Zero Trust Cloud Security Virtual Intern',
    organization: 'Zscaler',
    duration: '3 Months Virtual',
    period: '07/2024 – 09/2024',
    iconEmoji: '☁️',
    description: 'Virtual internship focusing on modern Zero Trust architecture, secure internet access (ZIA), and private access (ZPA) to protect enterprise cloud environments from advanced threats.',
    detailedOverview: 'Deep dive into cloud security paradigms, understanding how legacy perimeter networks are replaced by context-aware, least-privilege Zero Trust exchanges between users and applications across multi-cloud ecosystems.',
    learningAreas: [
      {
        title: 'Zero Trust Exchange Principles',
        description: 'Studied perimeter-less network security where no user or asset is inherently trusted, enforcing continuous verification.'
      },
      {
        title: 'Secure Internet Access (ZIA)',
        description: 'Learned cloud-delivered security services including secure web gateways (SWG), cloud sandbox, and URL filtering.'
      },
      {
        title: 'Secure Private Access (ZPA)',
        description: 'Explored software-defined perimeters that grant direct access to internal apps without exposing the corporate network.'
      },
      {
        title: 'Cloud Threat Defense',
        description: 'Analyzed modern cloud vector attacks, SSL/TLS inspection, data loss prevention (DLP), and micro-segmentation.'
      }
    ],
    toolsDetailed: [
      { name: 'Zscaler Zero Trust Architecture', purpose: 'Cloud-native cybersecurity architecture and secure application access' },
      { name: 'Zero Trust Policy Engine', purpose: 'User, device, and posture verification rules for least-privilege enforcement' },
      { name: 'SSL/TLS Inspection', purpose: 'Decryption and inspection of encrypted payloads to prevent hidden cloud threats' }
    ],
    toolsUsed: ['Zscaler Zero Trust', 'Cloud Security', 'ZIA & ZPA', 'Least Privilege', 'Policy Enforcement'],
    whatExperienceGaveMe: 'A strong contemporary foundation in enterprise cloud security, moving beyond legacy firewalls to scalable Zero Trust principles used by Fortune 500 enterprises.',
    coreTakeaway: 'Never trust, always verify: cloud security relies on continuous identity authentication, policy enforcement, and application-level isolation.',
    keyResponsibilities: [
      'Studied Zero Trust Architecture (ZTA) and how cloud proxy engines replace traditional VPN perimeters.',
      'Configured and simulated policy rules for Secure Internet Access (ZIA) and Private Access (ZPA).',
      'Evaluated threat vectors targeting cloud-hosted workloads and remote workforce connections.',
      'Synthesized best practices for implementing least-privilege user access and sensitive data protection.'
    ],
    badge: 'Zero Trust Cloud Security'
  },
  {
    role: 'AI-ML Virtual Intern',
    organization: 'AWS Academy',
    duration: '3 Months Virtual',
    period: '01/2024 – 03/2024',
    iconEmoji: '🤖',
    description: 'Comprehensive AWS Academy internship exploring machine learning pipelines, cloud AI infrastructure, computer vision, and predictive analytics on the AWS ecosystem.',
    detailedOverview: 'Hands-on exploration of machine learning lifecycle from data ingestion, exploratory analysis with Pandas, model training, and model deployment on cloud infrastructure.',
    learningAreas: [
      {
        title: 'Machine Learning Pipelines',
        description: 'Gained practical insight into dataset preprocessing, feature engineering, train/validation splitting, and evaluation metrics.'
      },
      {
        title: 'Computer Vision & Classification',
        description: 'Explored neural network architectures for visual recognition, convolutional feature extractors, and image classification.'
      },
      {
        title: 'Cloud AI Services',
        description: 'Studied managed machine learning services, cloud inference endpoints, and automated model monitoring.'
      },
      {
        title: 'AI in Cyber Defense',
        description: 'Connected machine learning algorithms with cybersecurity use cases such as anomaly detection and pattern matching.'
      }
    ],
    toolsDetailed: [
      { name: 'AWS AI & ML Foundations', purpose: 'Cloud machine learning architectures, pipeline orchestration, and model hosting' },
      { name: 'Python & Pandas', purpose: 'Data wrangling, matrix manipulation, and feature vector transformation' },
      { name: 'Neural Network Frameworks', purpose: 'Classification models and computer vision pipelines' }
    ],
    toolsUsed: ['AWS Academy', 'Machine Learning', 'Python', 'Pandas', 'Computer Vision', 'Deep Learning'],
    whatExperienceGaveMe: 'The technical capability to build, train, and integrate machine learning models into practical software, which powered both AgriAI 2.0 and the AI Healthcare Report Analyzer.',
    coreTakeaway: 'Applied machine learning bridges intelligent algorithmic models with scalable cloud systems to automate complex real-world classification challenges.',
    keyResponsibilities: [
      'Completed foundational and advanced modules in AWS Machine Learning pipelines.',
      'Preprocessed complex datasets using Python and Pandas for supervised and unsupervised training.',
      'Studied classification architectures applicable to computer vision and security anomaly detection.',
      'Evaluated model accuracy, precision, recall, and F1-score across iterative training benchmarks.'
    ],
    badge: 'AWS Academy AI-ML'
  },
  {
    role: 'Ethical Hacking Intern',
    organization: 'HIPLA / Rinex',
    duration: '2 Months Intensive',
    period: '11/2023 – 12/2023',
    iconEmoji: '🔐',
    description: 'Intensive ethical hacking and security testing internship focused on vulnerability assessment, penetration testing methodologies, and defensive remediation in controlled labs.',
    detailedOverview: 'Practical exposure to end-to-end security testing phases: passive and active reconnaissance, port and service enumeration, vulnerability auditing, credential testing, and defensive hardening.',
    learningAreas: [
      {
        title: 'Network Reconnaissance & OSINT',
        description: 'Practiced footprinting targets using Nmap, Censys, SpiderFoot, and Maltego to discover live hosts and open attack surfaces.'
      },
      {
        title: 'Vulnerability Scanning & Auditing',
        description: 'Operated Nessus and OpenVAS to identify outdated daemons, unpatched vulnerabilities, and misconfigurations.'
      },
      {
        title: 'Traffic & Packet Inspection',
        description: 'Analyzed TCP/UDP packet streams using Wireshark to inspect unencrypted protocols and trace anomalous packets.'
      },
      {
        title: 'SIEM Log Monitoring',
        description: 'Configured Splunk dashboards to aggregate system telemetry, detect brute-force attempts, and alert on suspicious activity.'
      }
    ],
    toolsDetailed: [
      { name: 'Nmap & Netdiscover', purpose: 'Network discovery, ARP scanning, and service identification' },
      { name: 'Wireshark', purpose: 'Network traffic dissection and protocol payload analysis' },
      { name: 'Splunk SIEM', purpose: 'Security event correlation, dashboard visualization, and alert triggers' },
      { name: 'Nessus & OpenVAS', purpose: 'Automated vulnerability scanning and CVE reporting' },
      { name: 'Kali Linux', purpose: 'Dedicated penetration testing environment and defensive tooling' }
    ],
    toolsUsed: ['Nmap', 'Wireshark', 'Splunk', 'Nessus', 'OpenVAS', 'Kali Linux', 'Spiderfoot', 'Maltego'],
    whatExperienceGaveMe: 'A rigorous hands-on security mindset that understands how adversaries look for weaknesses, enabling more effective defensive countermeasures.',
    coreTakeaway: 'Proactive vulnerability identification and continuous traffic monitoring are essential to mitigate breaches before attackers gain internal foothold.',
    keyResponsibilities: [
      'Collected actionable network intelligence and identified active services through reconnaissance.',
      'Examined network traffic patterns and packet captures using Wireshark.',
      'Conducted vulnerability assessments and vulnerability audits using Nessus and OpenVAS.',
      'Explored ethical hacking methodologies and potential attack surfaces in lab environments.',
      'Monitored security event logs and system telemetry with Splunk SIEM.'
    ],
    badge: 'Ethical Hacking & Audit'
  },
  {
    role: 'Cybersecurity Virtual Intern',
    organization: 'AICTE × Palo Alto Networks',
    duration: '3 Months Virtual',
    period: '09/2023 – 11/2023',
    iconEmoji: '🛡️',
    description: 'Enterprise cybersecurity internship covering foundational security architecture, next-generation firewall (NGFW) paradigms, cloud security, and threat prevention strategies.',
    detailedOverview: 'Comprehensive training exploring cybersecurity from an enterprise perspective, understanding how global organizations protect their digital infrastructure against sophisticated multi-stage cyber attacks.',
    learningAreas: [
      {
        title: 'Enterprise Cyber Defense',
        description: 'Studied how multi-layered defense-in-depth frameworks safeguard corporate endpoints, networks, and cloud datacenters.'
      },
      {
        title: 'Next-Gen Firewall Architecture',
        description: 'Learned App-ID, User-ID, and Content-ID concepts to control traffic based on applications and users rather than just ports.'
      },
      {
        title: 'Threat Prevention & Sandboxing',
        description: 'Explored automated malware analysis, signature distribution, and proactive prevention of unknown threats.'
      },
      {
        title: 'Defensive Reasoning',
        description: 'Approached IT environments with a defensive mindset—anticipating failure points and enforcing preventative security controls.'
      }
    ],
    toolsDetailed: [
      { name: 'Palo Alto Networks Academy', purpose: 'Enterprise cyber defense architecture & foundational training' },
      { name: 'Next-Gen Perimeter Protocols', purpose: 'Application-level inspection, traffic filtering, and user authentication' },
      { name: 'Threat Prevention Framework', purpose: 'Malware mitigation, URL classification, and zero-trust perimeter control' }
    ],
    toolsUsed: ['Palo Alto Networks', 'Next-Gen Firewalls', 'Threat Prevention', 'Network Defense', 'Security Controls'],
    whatExperienceGaveMe: 'A structured understanding of enterprise-scale defense systems, security policies, and industry standards used to mitigate modern cyber warfare.',
    coreTakeaway: 'Effective cyber defense requires unified visibility across applications, users, and content, combined with automated threat prevention.',
    keyResponsibilities: [
      'Gained comprehensive grounding in organizational digital asset protection.',
      'Analyzed threat landscapes and attack vectors targeting corporate networks.',
      'Evaluated network security controls and defensive filtering mechanisms.',
      'Developed proactive defensive security mindset and mitigation reasoning.'
    ],
    badge: 'AICTE & Palo Alto Networks'
  },
  {
    role: 'Python Programming Intern',
    organization: 'CodSoft (MSME)',
    duration: '1 Month Remote',
    period: '07/2023 – 07/2023',
    iconEmoji: '🐍',
    description: 'Hands-on programming internship focused on core Python, object-oriented design, algorithmic problem solving, and script automation.',
    detailedOverview: 'Applied Python programming constructs to build real-world software modules, data handlers, and clean algorithmic scripts, establishing the coding foundation vital for cybersecurity automation.',
    learningAreas: [
      {
        title: 'Python Scripting & Logic',
        description: 'Developed clean, modular Python applications with strict error handling, input validation, and data structures.'
      },
      {
        title: 'Algorithmic Problem Solving',
        description: 'Decomposed complex computational problems into optimized procedural and object-oriented components.'
      },
      {
        title: 'Security Scripting Applicability',
        description: 'Applied Python toward network utilities, automated string parsers, and file analysis tools.'
      }
    ],
    toolsDetailed: [
      { name: 'Python 3', purpose: 'Core language for scripting, automation, data structures, and utilities' },
      { name: 'Modular Architecture', purpose: 'Clean coding standards, function decomposition, and exception handling' },
      { name: 'Security Scripting Foundation', purpose: 'Automation logic directly applicable to cybersecurity workflows' }
    ],
    toolsUsed: ['Python 3', 'Data Structures', 'Automation Scripts', 'Algorithmic Logic'],
    whatExperienceGaveMe: 'Strong software engineering discipline that enables rapid development of automated cybersecurity utilities, entropy calculators, and forensic parsers.',
    coreTakeaway: 'Proficient scripting skills turn manual security tasks into automated, repeatable, and scalable defense workflows.',
    keyResponsibilities: [
      'Developed structured Python scripts and practical programming tasks.',
      'Applied modular logic and decomposed complex problems into manageable functions.',
      'Implemented clean coding habits, input validation, and algorithmic problem-solving.',
      'Cultivated programmatic mindset foundational for cybersecurity scripting.'
    ],
    badge: 'Python Programming'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Ethical Hacking',
    issuer: 'Hacking School',
    year: '2026',
    status: 'Completed',
    iconEmoji: '🔐',
    description: 'Comprehensive professional training in ethical hacking methodologies, offensive tactics, vulnerability discovery, and system penetration testing.',
    detailedOverview: 'Equipped with in-depth knowledge of reconnaissance, scanning networks, vulnerability discovery, web exploitation basics, and defensive counter-strategies to safeguard critical IT infrastructure.',
    whatItSupports: [
      'Ethical hacking methodologies',
      'Penetration testing fundamentals',
      'Vulnerability scanning & auditing',
      'System hardening & defensive recommendations',
      'Practical cybersecurity lab testing'
    ]
  },
  {
    id: 'cert-2',
    title: 'Junior Cybersecurity Analyst Career Path',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    status: 'Completed',
    iconEmoji: '🛡️',
    description: 'Comprehensive industry career path credential covering cybersecurity operations, threat analysis, network monitoring, and security analyst defense protocols.',
    detailedOverview: 'Prepares junior analysts for Security Operations Center (SOC) environments: network packet monitoring, firewall rule evaluation, endpoint security, attack surface reduction, and incident investigation.',
    whatItSupports: [
      'Cybersecurity analyst workflows',
      'SOC operations & incident monitoring',
      'Network defense & packet inspection',
      'Threat awareness & attack vectors',
      'Cisco security fundamentals'
    ]
  },
  {
    id: 'cert-3',
    title: 'FullStack Development with MERN',
    issuer: 'MongoDB',
    year: '2025',
    status: 'Completed',
    iconEmoji: '🌐',
    description: 'Certified development course covering full-stack web applications using MongoDB, Express.js, React, and Node.js with secure database architecture.',
    detailedOverview: 'Validates proficiency in designing document schemas in MongoDB, developing RESTful APIs, securing client-server communications against injection vulnerabilities, and building responsive React user interfaces.',
    whatItSupports: [
      'MERN stack application architecture',
      'MongoDB database modeling & aggregation',
      'REST API design & validation',
      'Web application security & sanitation',
      'Modern React component engineering'
    ]
  },
  {
    id: 'cert-4',
    title: 'Introduction to Machine Learning',
    issuer: 'NPTEL Online Certification',
    year: '2025',
    status: 'Completed',
    iconEmoji: '🤖',
    description: 'Rigorous national certification covering foundational machine learning algorithms, statistical pattern recognition, and supervised/unsupervised modeling.',
    detailedOverview: 'Provides deep mathematical and algorithmic grounding in machine learning: regression, classification, decision trees, support vector machines, clustering, and neural networks, directly fueling AI security research and computer vision.',
    whatItSupports: [
      'Machine learning mathematical fundamentals',
      'Supervised & unsupervised algorithms',
      'Data-driven pattern recognition',
      'Computer vision & feature extraction',
      'AI-based security classification'
    ]
  },
  {
    id: 'cert-5',
    title: 'Ethical Hacking Workshop',
    issuer: 'IIT Kharagpur',
    year: '2024',
    status: 'Completed',
    iconEmoji: '🕵️',
    description: 'Specialized cybersecurity workshop delivered through prestigious IIT Kharagpur, exploring real-world attack vectors and hands-on defense tactics.',
    detailedOverview: 'Gained practical exposure to network security vulnerabilities, wireless security, web application flaws, and industry-standard security testing tools from leading academic and industry researchers.',
    whatItSupports: [
      'Ethical hacking industry practices',
      'Cybersecurity awareness & hands-on labs',
      'Network defense concepts',
      'IIT Kharagpur technical training'
    ]
  },
  {
    id: 'cert-6',
    title: 'Python Essentials 2',
    issuer: 'Cisco Networking Academy (OpenEDG Python Institute)',
    year: '2023',
    status: 'Completed',
    iconEmoji: '🐍',
    description: 'Advanced Python credential covering object-oriented programming, modules, packages, string/list processing, and exception handling.',
    detailedOverview: 'Certified through OpenEDG and Cisco, demonstrating intermediate-to-advanced proficiency in Python: classes, inheritance, encapsulation, file I/O operations, generator expressions, and modular program design.',
    whatItSupports: [
      'Advanced Python programming',
      'Object-Oriented Programming (OOP)',
      'Exception handling & file operations',
      'Automation & security scripting',
      'Cisco & OpenEDG certification'
    ]
  },
  {
    id: 'cert-7',
    title: 'Programming in C',
    issuer: 'Datapro',
    year: '2022',
    status: 'Completed',
    iconEmoji: '💻',
    description: 'Foundational certification in procedural programming, memory structures, pointer manipulation, and algorithmic constructs in C.',
    detailedOverview: 'Established low-level understanding of memory allocation, buffer management, pointer arithmetic, and procedural efficiency—vital for understanding memory corruption exploits and system security.',
    whatItSupports: [
      'Low-level memory architecture',
      'Procedural programming in C',
      'Pointer manipulation & data structures',
      'Foundational algorithmic logic'
    ]
  },
  {
    id: 'cert-8',
    title: 'MS Office',
    issuer: 'Datapro',
    year: '2022',
    status: 'Completed',
    iconEmoji: '🖥️',
    description: 'Certification in Microsoft Office suite for enterprise documentation, structured data spreadsheets, and executive presentations.',
    detailedOverview: 'Covers professional productivity tools including advanced Excel data tables, Word technical documentation, and PowerPoint briefings necessary for enterprise reporting and cybersecurity audits.',
    whatItSupports: [
      'Enterprise documentation',
      'Data spreadsheets & tables',
      'Executive presentations',
      'Professional computer productivity'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    number: '01',
    title: 'AgriAI 2.0',
    subtitle: 'Computer Vision for Real-Time Plant Disease Detection & Crop Management',
    description: 'An AI-powered agricultural health platform using deep learning computer vision to analyze crop photos and instantly detect plant diseases to assist farmers.',
    detailedOverview: 'Engineered a real-time computer vision system that classifies foliar pathogens from field photographs. The system integrates deep convolutional neural networks with disease taxonomy datasets, delivering immediate pathogen identification, severity scoring, and actionable organic/chemical remediation recommendations.',
    technologies: ['Python', 'Computer Vision', 'Deep Learning / CNN', 'OpenCV', 'Pandas', 'JavaScript', 'Tailwind CSS'],
    keyFeatures: [
      'Instant pathogen classification from real-time field camera and photo uploads',
      'Early detection algorithms preventing widespread harvest destruction',
      'Actionable organic and chemical intervention suggestions with dosage guidelines',
      'Offline-capable crop health diagnostic matrix for remote rural deployments'
    ],
    type: 'ai',
    githubUrl: 'https://github.com/ram361677/agriai-crop-disease-detection',
    demoType: 'plant'
  },
  {
    id: 'project-2',
    number: '02',
    title: 'Book a Doctor Using MERN',
    subtitle: 'Full-Stack Patient-Doctor Appointment Management with MongoDB',
    description: 'A full-stack medical appointment scheduling platform built with MongoDB, Express.js, React, and Node.js featuring secure authentication and role-based doctor booking.',
    detailedOverview: 'Developed a robust MERN stack application allowing patients to search certified healthcare specialists, check live clinic availability, and book appointments securely. The architecture enforces parameterized NoSQL queries, input sanitization to prevent injection vulnerabilities, and role-based access control (RBAC) across patient and doctor portals.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MERN Stack', 'RESTful API', 'JWT Authentication', 'Tailwind CSS'],
    keyFeatures: [
      'Full-stack MERN architecture with scalable MongoDB document models',
      'Real-time doctor appointment booking with dynamic slot reservation',
      'Secure authentication with encrypted credentials and session management',
      'Sanitized input pipelines mitigating NoSQL injection and XSS risks'
    ],
    type: 'fullstack',
    githubUrl: 'https://github.com/ram361677/book-a-doctor-mern',
    demoType: 'doctor'
  },
  {
    id: 'project-3',
    number: '03',
    title: 'AI Healthcare Report Analyzer',
    subtitle: 'Clinical Document Intelligence & Health Metric Interpreter',
    description: 'An AI-assisted platform that analyzes uploaded medical reports, interprets complex clinical indices, and explains diagnostic findings in simple language.',
    detailedOverview: 'Developed an intelligent health document parser that analyzes laboratory test reports, extracts critical biomarkers (hemoglobin, glucose, cholesterol, leukocyte counts), compares them against clinical reference ranges, and generates patient-friendly risk summaries while prioritizing patient data privacy.',
    technologies: ['Machine Learning', 'Healthcare NLP', 'Document OCR', 'Data Privacy', 'Python', 'React', 'Tailwind CSS'],
    keyFeatures: [
      'Automated extraction of vital lab biomarkers and clinical indices from lab sheets',
      'Translates complex medical jargon into clear patient-friendly summaries',
      'Highlights key abnormal reference intervals with cautionary alerts',
      'Strict client-side privacy architecture ensuring sensitive health data security'
    ],
    type: 'ai',
    githubUrl: 'https://github.com/ram361677/ai-healthcare-report-analyzer',
    demoType: 'medical'
  },
  {
    id: 'project-4',
    number: '04',
    title: 'AI Password Analyzer',
    subtitle: 'Cryptographic Entropy & AI Security Advisory Tool',
    description: 'An AI-assisted password analysis tool that evaluates cryptographic entropy, checks vulnerability patterns, and provides actionable hardening recommendations.',
    detailedOverview: 'Engineered an intelligent password auditing platform that evaluates mathematical Shannon entropy, detects common dictionary substitutions, checks breach frequency indicators, and provides actionable, plain-English hardening recommendations to prevent credential stuffing and brute-force attacks.',
    technologies: ['Python', 'Entropy Algorithms', 'AI Heuristics', 'JavaScript', 'Tailwind CSS'],
    keyFeatures: [
      'Real-time Shannon entropy calculation (bits of randomness)',
      'Brute-force crack time estimations against modern GPU clusters',
      'Common dictionary & leetspeak pattern detection',
      'Interactive AI advisory tips for creating resilient passphrases'
    ],
    type: 'security',
    githubUrl: 'https://github.com/ram361677/ai-password-analyzer',
    demoType: 'password'
  },
  {
    id: 'project-5',
    number: '05',
    title: 'AI Intrusion Detection System',
    subtitle: 'Network Threat Classification & Anomaly Sentinel',
    description: 'A cybersecurity project designed to identify suspicious network activity such as brute-force attacks, port scanning, and DDoS-related patterns.',
    detailedOverview: 'Built an intrusion detection pipeline that monitors network traffic patterns to classify anomalous flows in real-time. By analyzing flow duration, packet arrival intervals, and TCP flag anomalies (such as SYN flood surges or stealth FIN/NULL scans), it alerts SOC analysts to high-risk threats before perimeter breach.',
    technologies: ['Python', 'Scapy / Packet Inspection', 'Machine Learning', 'Network Sockets', 'Splunk Integration'],
    keyFeatures: [
      'Live anomaly detection against multi-vector intrusion signatures',
      'Brute-force attack classification on SSH and HTTP authentication ports',
      'Port scan signature identification (SYN, Xmas, and Null scans)',
      'DDoS volume surge detection with packet rate metrics'
    ],
    type: 'security',
    githubUrl: 'https://github.com/ram361677/ai-intrusion-detection-system',
    demoType: 'ids'
  }
];
