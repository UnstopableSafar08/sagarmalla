export const personalInfo = {
  name: 'Sagar Malla',
  title: 'DevOps Engineer',
  location: 'Mahalaxmi-02, Lalitpur, 44705',
  email: 'sagarmalla08@gmail.com',
  officialemail: 'contact@sagarmalla.info.np',
  bio: `DevOps Engineer focused on building reliable, scalable infrastructure and automating everything in between. DevOps Engineer with 4+ years of experience designing, implementing, and maintaining scalable infrastructure solutions. Specializing in CI/CD pipeline optimization, containerization, and cloud-native architectures.

Skilled in managing high-availability systems, implementing automation frameworks, and integrating observability tools. Committed to reducing operational overhead through intelligent automation and infrastructure as code.

Currently working as a DevOps engineer at eSewa Ltd., Nepal's leading digital payment platform, supporting 10M+ users with reliable, secure infrastructure.`,
  socialLinks: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sagarmalla08/', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/UnstopableSafar08', icon: 'github' },
    { name: 'Website', url: 'https://sagarmalla.info.np', icon: 'globe' },
  ],
};

export const skills = [
  {
    category: 'Container Orchestration',
    items: ['Docker', 'Kubernetes', 'K3s', 'Docker Swarm'],
    description: 'Container management & orchestration for microservices',
  },
  {
    category: 'CI/CD & DevOps',
    items: ['Jenkins', 'GitHub Actions', 'ArgoCD'],
    description: 'Automated pipelines & continuous delivery workflows',
  },
  {
    category: 'Infrastructure as Code',
    items: ['Terraform', 'Ansible', 'Helm', 'CloudFormation'],
    description: 'IaC for reproducible & version-controlled infrastructure',
  },
  {
    category: 'Monitoring & Observability',
    items: ['Prometheus', 'Grafana', 'ELK Stack', 'Zabbix'],
    description: 'System visibility & proactive incident management',
  },
  {
    category: 'Cloud Platforms',
    items: ['AWS', 'GCP'],
    description: 'Multi-cloud architecture & cost optimization',
  },
  {
    category: 'Virtualization',
    items: ['VMware ESXi', 'XCP-ng', 'Hyper-V', 'Proxmox'],
    description: 'Enterprise virtualization & resource management',
  },
  {
    category: 'Operating Systems',
    items: ['Linux (RHEL, OracleLinux, Ubuntu, CentOS)', 'Windows Server', 'FreeBSD'],
    description: 'System administration & server management',
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MSSQL', 'Redis'],
    description: 'Database administration & performance tuning',
  },
  {
    category: 'Networking',
    items: ['Firewalls (Fortinet)', 'VPN', 'DNS', 'Load Balancers'],
    description: 'Network security & traffic management',
  },
  {
    category: 'Programming',
    items: ['Python', 'Bash/Shell', 'JavaScript'],
    description: 'Automation scripts & tooling development',
  },
  {
    category: 'Message Queue',
    items: ['Apache Kafka', 'EMQX'],
    description: 'Event streaming & IoT messaging',
  },
  {
    category: 'Security',
    items: ['SSL/TLS', 'WAF', 'DDoS Protection', 'IAM', 'HashiCorp Vault'],
    description: 'Infrastructure security & access management',
  },
];

export const experience = [
  {
    company: 'eSewa Ltd.',
    role: 'DevOps Engineer',
    period: 'July 2023 - Present',
    description: [
      'Designed and implemented end-to-end CI/CD pipelines using Jenkins and ArgoCD, reducing deployment time by 70% and enabling multiple daily releases.',
      'Orchestrated containerized microservice deployments on Kubernetes, managing clusters serving 10M+ users with 99.99% uptime.',
      'Built custom Helm charts and Terraform modules for repeatable infrastructure deployment across multi-cloud environments.',
      'Implemented comprehensive monitoring and alerting with Prometheus and Grafana, reducing mean time to detection by 60%.',
      'Established security baseline using WAF, DDoS protection, and automated vulnerability scanning in CI/CD pipelines.',
      'Reduced cloud costs by 30% through right-sizing, reserved instances, and automated scaling policies.',
    ],
  },
  {
    company: 'Braindigit IT Solution Pvt. Ltd.',
    role: 'System and Network Administrator',
    period: 'Jan 2022 - Present',
    description: [
      'Architected and maintained enterprise network infrastructure supporting 500+ concurrent users with 99.9% uptime.',
      'Deployed and managed VMware ESXi and XCP-ng hypervisors for mission-critical client workloads.',
      'Implemented automated backup solutions using NAS (Synology) with 3-2-1 backup strategy and tested recovery procedures.',
      'Configured and managed Fortinet firewalls with advanced threat protection, IDS/IPS, and VPN tunnels.',
      'Automated server provisioning and configuration management using Ansible, reducing setup time by 80%.',
      'Managed Windows AD, DNS, DHCP, file servers, and print services for enterprise clients.',
    ],
  },
];

export const education = [
  {
    institution: 'College Of Information Technology and Engineering, KTM',
    degree: 'Bachelor of Information Technology (BIT)',
    period: 'August 2016 - Jan 2020',
    grade: 'GPA: 3.7',
    university: 'Purabanchal University',
  },
  {
    institution: 'Pentagon Int\'l College, KTM',
    degree: 'Plus Two (HSEB) - Computer Science',
    period: 'April 2014 - August 2016',
    grade: '',
    university: '',
  },
];

export const certifications = [
  {
    title: 'AWS Solution Architect Associate',
    issuer: 'Broadway Infosys Pvt. Ltd.',
    image: '/certifications/AWS_SAA.jpg',
  },
  {
    title: 'Data Science and Machine Learning with Python',
    issuer: 'Deerwalk',
    image: '/certifications/dwit-dataScience.png',
  },
  {
    title: 'Cisco Certified Network Associate (CCNA-V3)',
    issuer: 'NIT',
    image: '/certifications/CCNA.jpg',
  },
  {
    title: 'DevSecOps Training Certificate',
    issuer: 'eSewa Ltd.',
    image: '/certifications/devSecOps-training.png',
  },
  {
    title: 'WAF Training Certificate',
    issuer: 'eSewa Ltd.',
    image: '/certifications/WAF-training.png',
  },
];

export const appreciations = [
  {
    title: 'Employee of the Month',
    issuer: 'Token of Appreciation',
    description: '4th Time Recipient',
    icon: '🏆',
  },
];

export const projects = [
  {
    title: 'Portfolio Site',
    description: 'A personal portfolio showcasing DevOps journey, side projects, and technical writing — built to stand out from typical developer portfolios.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com/UnstopableSafar08/portfolio',
    demo: 'https://sagarmalla.info.np',
  },
  {
    title: "Sagar's Blogs",
    description: 'Tech blog where I share practical DevOps insights, system administration tips, and lessons learned from real-world infrastructure challenges.',
    tech: ['Next.js', 'MDX', 'Tailwind CSS'],
    link: '#',
    demo: 'https://blogs.sagarmalla.info.np',
  },
  {
    title: 'SSL Tools',
    description: 'SSL certificate monitoring tool that tracks expiration dates and sends alerts — built after missing a certificate renewal deadline at work.',
    tech: ['React', 'Node.js', 'API'],
    link: '#',
    demo: 'https://ssl.sagarmalla.info.np',
  },
  {
    title: 'Secure Hash and Password Generator.',
    description: 'Quick hash generator for MD5, SHA-1, SHA-256 — because googling for a hash tool every time gets annoying.',
    tech: ['React', 'Web Crypto API'],
    link: '#',
    demo: 'https://hash.sagarmalla.info.np',
  },
  {
    title: 'Diff Checker',
    description: 'Side-by-side diff viewer for code, JSON, and text files — handy for spotting differences without opening VS Code.',
    tech: ['React', 'Diff Algorithm'],
    link: '#',
    demo: 'https://diff.sagarmalla.info.np',
  },
  {
    title: 'Resume Builder',
    description: 'Interactive resume builder with clean templates and PDF export — because spending hours formatting a resume is not a good use of time.',
    tech: ['React', 'Tailwind CSS', 'PDF Generation'],
    link: '#',
    demo: 'https://resume-builder.sagarmalla.info.np',
  },
  {
    title: 'Notes Maker',
    description: 'Real-time collaborative notes app with markdown support — useful for team documentation and knowledge sharing.',
    tech: ['React', 'WebSocket', 'SQLite'],
    link: '#',
    demo: 'https://notes.sagarmalla.info.np',
  },
  {
    title: 'Todo Checklist',
    description: 'Simple and clean todo checklist app for daily task management — built to stay organized and get things done.',
    tech: ['React', 'Tailwind CSS'],
    link: '#',
    demo: 'https://todo.sagarmalla.info.np',
  },
];

export const interests = [
  'DevOps and Automation',
  'Blogging at BIT Papers & IT Sansar',
  'Robotics, Electronics, and Computer Hardware',
  'Graphics Designing (Adobe Illustrator)',
  'Travelling, Hiking, and Photography',
];
