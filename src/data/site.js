export const siteData = {
  identity: {
    name: 'Muhammad Hassaan Javed',
    shortName: 'Hassaan',
    alias: 'Crusher',
    title: 'Cloud & DevOps Engineer',
    summary:
      'I build and scale cloud infrastructure, CI/CD pipelines, and AI-driven automation workflows. From early architecture to production rollout, I focus on systems that run quietly and reliably.',
    intro:
      'Over the last five years, I\'ve had the privilege of working with teams globally to ship production-grade environments across AWS, GCP, and Azure. Whether it\'s migrating workloads to Kubernetes, writing exact Terraform modules, or integrating LLMs into existing products — I bring a hands-on, engineering-first approach to complex problems.',
    location: 'Pakistan',
    email: 'muhammadhassaanjaved99@gmail.com',
    phone: '+92 302 7538580',
    website: 'https://muhammadhassaanjaved.com/',
  },
  links: {
    site: 'https://muhammadhassaanjaved.com/',
    portfolio: 'https://portfolio.muhammadhassaanjaved.com/',
    tools: 'https://tools.muhammadhassaanjaved.com/',
    uiKit: 'https://ui.muhammadhassaanjaved.com/',
    github: 'https://github.com/itxcrusher',
    linkedin: 'https://www.linkedin.com/in/itxcrusher',
    medium: 'https://medium.com/@itxcrusher',
    email: 'mailto:muhammadhassaanjaved99@gmail.com',
    phone: 'tel:+923027538580',
    maps: 'https://maps.app.goo.gl/sUELDzVFdkHNBYg2A',
    cv: '/cv.pdf',
  },
  heroTags: [
    'Cloud Infrastructure',
    'DevOps & CI/CD',
    'AI Engineering',
    'Kubernetes & Docker',
    'Terraform / IaC',
    'Automation',
  ],
  heroSignals: [
    {
      label: 'Experience',
      value: '5+ Years',
      meta: 'Partnering with teams across the US, Europe, and APAC to deliver reliable infrastructure.',
      tone: 'brand',
    },
    {
      label: 'Certifications',
      value: '4 Active',
      meta: 'Google ACE · Microsoft AI Engineer · GitHub Foundations · Cisco Cybersecurity.',
      tone: 'info',
    },
    {
      label: 'Availability',
      value: 'Open to Work',
      meta: 'Available for DevOps, cloud infrastructure, and AI engineering engagements.',
      tone: 'success',
    },
  ],
  capabilityGroups: [
    {
      title: 'Cloud & Infrastructure',
      tone: 'brand',
      summary:
        'Production-grade cloud environments on AWS, GCP, and Azure. I set up the foundations teams can actually build on — networking, IAM, compute, and storage done right the first time.',
      items: ['AWS', 'GCP', 'Azure', 'Linux', 'Networking', 'IAM & Security'],
    },
    {
      title: 'DevOps & Delivery',
      tone: 'info',
      summary:
        'CI/CD pipelines, container orchestration, and infrastructure as code that makes deployments boring in the best possible way. No more manual deploys or snowflake servers.',
      items: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions', 'Ansible'],
    },
    {
      title: 'AI & Automation',
      tone: 'warning',
      summary:
        'Practical AI workflows and automation tools that cut manual work and add real leverage. LLM integrations, prompt pipelines, data collection scripts, and agent tooling that ships.',
      items: ['LLM Workflows', 'Prompt Engineering', 'AI Agents', 'Python Automation', 'Data Pipelines', 'Applied AI'],
    },
    {
      title: 'Product & Engineering',
      tone: 'accent',
      summary:
        'Full-stack product work from API design to frontend delivery. I\'ve shipped payment flows, admin dashboards, and public-facing products without treating backend and frontend as separate universes.',
      items: ['JavaScript', 'React', 'Node.js', 'Python', 'REST APIs', 'Payment Systems'],
    },
  ],
  selectedProjects: [
    {
      title: 'Serverless 3-tier CRUD application on AWS',
      href: 'https://github.com/itxcrusher/StudentsData.git',
      image: '/images/portfolio/12.jpg',
      summary:
        'Fully serverless architecture using Lambda, DynamoDB, and API Gateway. Zero server management, automatic scaling, pay-per-request billing.',
      note: 'AWS · Serverless',
    },
    {
      title: 'AWS infrastructure automation with Terraform',
      href: 'https://github.com/itxcrusher/Terraform',
      image: '/images/portfolio/11.jpeg',
      summary:
        'Repeatable cloud environments provisioned from code. VPCs, EC2 clusters, RDS, and IAM roles — fully reproducible with a single command.',
      note: 'Terraform · IaC',
    },
    {
      title: 'CI/CD pipeline for GitHub application deployment',
      href: 'https://github.com/itxcrusher/Jenkins',
      image: '/images/portfolio/10.jpg',
      summary:
        'End-to-end delivery pipeline connecting source control to production. Jenkins, Docker, and automated testing — push to deploy in under five minutes.',
      note: 'Jenkins · Docker',
    },
    {
      title: 'Interactive portfolio — visual case studies',
      href: 'https://portfolio.muhammadhassaanjaved.com/',
      image: '/images/portfolio/9.jpeg',
      summary:
        'The dedicated portfolio surface for deeper case studies and visual work. Built on Crusher UI Kit — the personal design system I also publish as an npm package.',
      note: 'Portfolio · Design',
    },
  ],
  publications: [
    {
      title: 'Freysa AI: A comprehensive analysis',
      href: 'https://medium.com/@itxcrusher/freysa-ai-a-comprehensive-analysis-b48aebf750d1',
      image: '/images/publications/freysa.jpg',
      note: 'AI systems · Analysis',
      summary: 'A deep-dive into Freysa, the AI agent that crowdsourced attempts to break its constraints — and what it reveals about LLM safety.',
    },
    {
      title: 'How I automated YouTube channel data collection and saved hours of manual work',
      href: 'https://medium.com/@itxcrusher/how-i-automated-youtube-channel-data-collection-and-saved-hours-of-manual-work-d7a50047f0a7',
      image: '/images/publications/yt-metadata-automation.webp',
      note: 'Automation · Python',
      summary: 'A Python script that pulls channel metadata, video stats, and growth signals via the YouTube Data API — no manual spreadsheets needed.',
    },
    {
      title: 'Lip-reading AI: innovation or ethical dilemma?',
      href: 'https://medium.com/@itxcrusher/lip-reading-ai-innovation-or-ethical-dilemma-0024004de0da',
      image: '/images/publications/lip-reading-ai.webp',
      note: 'AI · Ethics',
      summary: 'Examining how lip-reading AI models work, the accessibility benefits they unlock, and the surveillance risks they introduce.',
    },
    {
      title: 'Building a DevOps pipeline in GCP',
      href: 'https://medium.com/@itxcrusher/building-a-devops-pipeline-in-gcp-46d9e36cc6b6',
      image: '/images/publications/2.jpeg',
      note: 'GCP · CI/CD',
      summary: 'Step-by-step walkthrough of a production-ready CI/CD pipeline on Google Cloud using Cloud Build, Artifact Registry, and Cloud Run.',
    },
  ],
  experience: [
    {
      range: 'Aug 2020 – Present',
      title: 'Senior DevOps & IaC Engineer',
      org: 'Upwork — Top-Rated Freelancer',
    },
    {
      range: 'Feb 2022 – Present',
      title: 'Infrastructure Engineer',
      org: 'Astutex · Kaizool · Insizon',
    },
    {
      range: 'Mar 2024 – Feb 2025',
      title: 'DevOps Engineer',
      org: 'Solutions Ally',
    },
  ],
  credentials: [
    {
      range: 'Jul 2024',
      title: 'Associate Cloud Engineer',
      org: 'Google',
    },
    {
      range: 'Jun 2024',
      title: 'AI Engineer Associate',
      org: 'Microsoft',
    },
    {
      range: 'May 2024',
      title: 'GitHub Foundations',
      org: 'GitHub',
    },
    {
      range: 'Apr 2024',
      title: 'Cloud Computing Foundations',
      org: 'Google',
    },
    {
      range: 'Jul 2023',
      title: 'Cybersecurity Essentials',
      org: 'Cisco',
    },
    {
      range: 'May 2023',
      title: 'Responsive Web Design',
      org: 'freeCodeCamp',
    },
  ],
  certificates: [
    { range: 'Feb 2024', title: 'Freelancing Training', org: 'Punjab IT Board' },
    { range: 'Nov 2023', title: 'Social Media Marketing', org: 'Punjab IT Board' },
    { range: 'Oct 2023', title: 'Freelancing', org: 'DigiSkills' },
    { range: 'Oct 2023', title: 'WordPress', org: 'DigiSkills' },
    { range: 'Sep 2023', title: 'UI/UX Design', org: 'Punjab IT Board' },
    { range: 'May 2023', title: 'Content Marketing and Advertising', org: 'Punjab IT Board' },
    { range: 'Feb 2022', title: 'Full Stack Designer and Developer', org: 'Skills Improvement Foundation' },
  ],
  workshops: [
    { range: 'Apr 2024', title: 'AI Skills Challenge', org: 'Microsoft Learning 365' },
    { range: 'Mar 2024', title: 'Azure Fundamentals Cloud Skill Challenge', org: 'Microsoft Learn Student Ambassadors' },
    { range: 'Jan 2024', title: 'Cloud Seekho S5', org: 'Google Developers Group' },
    { range: 'Aug 2023', title: 'Android Seekho S2', org: 'Google Developers Group' },
    { range: 'Jul 2022', title: 'Resume Website Building', org: 'Microsoft Learn Student Ambassadors' },
  ],
  courses: [
    { range: '2024', title: 'DevOps Engineering', org: 'ITM Training Program' },
    { range: '2024', title: 'Cloud Computing', org: 'ITM Training Program' },
    { range: '2023', title: '.Net', org: 'ITM Training Program' },
    { range: '2023', title: 'Data Structures', org: 'ITM Training Program' },
    { range: '2023', title: 'Database Management Systems', org: 'ITM Training Program' },
    { range: '2023', title: 'Design and Analysis of Algorithms', org: 'ITM Training Program' },
    { range: '2023', title: 'Introduction to Software Engineering', org: 'ITM Training Program' },
    { range: '2023', title: 'Object Oriented Programming', org: 'ITM Training Program' },
    { range: '2023', title: 'Programming Fundamentals', org: 'ITM Training Program' },
  ],
  education: [
    {
      range: 'Jul 2023 – Jan 2024',
      title: 'DevOps and Serverless Computing',
      org: 'ITM Program — Systems Limited',
    },
    {
      range: 'Sep 2019 – Sep 2023',
      title: 'Bachelor of Science (Computer Science)',
      org: 'GC University Faisalabad',
    },
    {
      range: 'Jul 2017 – Jul 2019',
      title: 'FSc Pre-Engineering',
      org: 'Punjab Group of Colleges',
    },
  ],
  ecosystem: [
    {
      title: 'Portfolio',
      href: 'https://portfolio.muhammadhassaanjaved.com/',
      summary: 'Curated case studies, visual work, and project deep dives.',
    },
    {
      title: 'Tools Hub',
      href: 'https://tools.muhammadhassaanjaved.com/',
      summary: 'Utilities, experiments, and SaaS products I\'ve built.',
    },
    {
      title: 'Crusher UI Kit',
      href: 'https://ui.muhammadhassaanjaved.com/',
      summary: 'My open-source design system — published on npm.',
    },
  ],
};
