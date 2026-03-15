export interface CommandOutput {
  command: string;
  output: string;
  type: 'success' | 'error' | 'info';
}

export const portfolioData = {
  profile: {
    name: 'Chisomo Misomali',
    role: 'IT Professional',
    email: 'cjmisomali@gmail.com',
    phone: '+265 998335256',
    location: 'Lilongwe, Malawi',
    bio: 'Expert in fiber optics, Linux administration, IoT, electronics, networking, and telecommunications systems.',
  },
  skills: {
    'Fiber Optic Systems': ['Fiber optic splicing and termination', 'Testing and troubleshooting fiber links', 'FTTx installations', 'OTDR testing', 'Fiber network design', 'Fusion splicing', 'Connector installation'],
    'Linux System Administration': ['Debian distributions', 'System configuration', 'Filesystem management', 'User management', 'Service configuration', 'Shell scripting', 'Security hardening'],
    'Virtualization & Cloud': ['Proxmox virtualization', 'VMware administration', 'Docker containerization', 'Cloud platforms', 'VM deployment', 'Backup & recovery'],
    'Network Engineering': ['Wireless networks', 'Network design', 'Router configuration', 'Switching', 'VPN setup', 'Firewall management', 'Network security'],
    'Radio Communications': ['Motorola systems', 'Code plug development', 'Repeater installation', 'Frequency coordination', 'Radio testing', 'System maintenance'],
    'IT Automation': ['Ansible automation', 'Configuration management', 'Infrastructure as Code', 'Deployment pipelines', 'Monitoring & alerting', 'Performance optimization'],
  },
  expertise: [
    'Fiber Optic Cable Installation & Splicing',
    'Network Infrastructure Design',
    'Linux System Administration',
    'Virtualization & Cloud Technologies',
    'IoT & Electronics Integration',
    'Telecommunications Systems',
    'Data Center Infrastructure',
    'Network Security',
    'Automation & Scripting',
    'Troubleshooting & Support',
  ],
  achievements: [
    'Expert in fiber optic splicing and testing',
    'Proficient in Linux system administration',
    'Experienced with cloud platforms and automation',
    'Skilled in GIS applications and mapping systems',
    '15+ completed infrastructure projects',
    'Self-hosting and data center infrastructure expertise',
  ],
  experience: [
    {
      title: 'Fiber Optics Specialist',
      company: 'TeleCom Solutions',
      period: '2019 - Present',
      location: 'Lilongwe',
      description: [
        'Designed and installed FTTx infrastructure serving 5,000+ households',
        'Managed network upgrades across 12 district locations',
        'Reduced downtime by 40% through predictive monitoring',
      ],
    },
  ],
  projects: [
    'Home Labbing Evolution: From Zima OS to 3TB TrueNAS with Proxmox',
    'Self-Hosting & Data Centre Infrastructure Setup',
    'Cloud Champion Birthday Initiative',
    '15+ Completed Infrastructure Projects',
    'Fiber Optics Network Installations',
    'Enterprise Network Design & Implementation',
  ],
  values: [
    { name: 'Precision', desc: 'Every fiber splice, configuration, and setup executed with meticulous attention to detail' },
    { name: 'Collaboration', desc: 'Strong teamwork and communication skills for seamless project execution' },
    { name: 'Innovation', desc: 'Passionate about emerging technologies and continuous learning' },
  ],
};

export function processCommand(input: string): CommandOutput {
  const trimmed = input.trim().toLowerCase();
  const parts = trimmed.split(' ');
  const command = parts[0];
  const args = parts.slice(1).join(' ');

  switch (command) {
    case 'whoami':
      return {
        command: input,
        output: `${portfolioData.profile.name}\n(${portfolioData.profile.role})`,
        type: 'success',
      };

    case 'cat':
      if (args.includes('skills')) {
        const skillsOutput = Object.entries(portfolioData.skills)
          .map(([category, items]) => `${category}:\n  ${items.join('\n  ')}`)
          .join('\n\n');
        return {
          command: input,
          output: skillsOutput,
          type: 'success',
        };
      }
      if (args.includes('expertise')) {
        const expertiseOutput = portfolioData.expertise.map((e, i) => `${i + 1}. ${e}`).join('\n');
        return {
          command: input,
          output: expertiseOutput,
          type: 'success',
        };
      }
      if (args.includes('achievements')) {
        const achievementsOutput = portfolioData.achievements.map((a, i) => `${i + 1}. ${a}`).join('\n');
        return {
          command: input,
          output: achievementsOutput,
          type: 'success',
        };
      }
      if (args.includes('experience') || args.includes('jobs')) {
        const expOutput = portfolioData.experience
          .map((exp) => `${exp.title} @ ${exp.company}\n${exp.period} | ${exp.location}\n${exp.description.map((d) => `  • ${d}`).join('\n')}`)
          .join('\n\n');
        return {
          command: input,
          output: expOutput,
          type: 'success',
        };
      }
      if (args.includes('values')) {
        const valuesOutput = portfolioData.values.map((v) => `${v.name}:\n  ${v.desc}`).join('\n\n');
        return {
          command: input,
          output: valuesOutput,
          type: 'success',
        };
      }
      if (args.includes('about')) {
        return {
          command: input,
          output: `${portfolioData.profile.name}\n${portfolioData.profile.role}\n\n${portfolioData.profile.bio}\n\nEmail: ${portfolioData.profile.email}\nPhone: ${portfolioData.profile.phone}\nLocation: ${portfolioData.profile.location}`,
          type: 'success',
        };
      }
      return {
        command: input,
        output: `cat: ${args}: No such file or directory`,
        type: 'error',
      };

    case 'ls':
      if (args.includes('projects')) {
        const projectsOutput = portfolioData.projects.map((p, i) => `  ${i + 1}. ${p}`).join('\n');
        return {
          command: input,
          output: `Projects:\n${projectsOutput}`,
          type: 'success',
        };
      }
      if (args.includes('achievements')) {
        const achievementsOutput = portfolioData.achievements.map((a, i) => `  ${i + 1}. ${a}`).join('\n');
        return {
          command: input,
          output: `Professional Achievements:\n${achievementsOutput}`,
          type: 'success',
        };
      }
      if (args.includes('experience') || args.includes('jobs')) {
        const expOutput = portfolioData.experience.map((exp, i) => `  ${i + 1}. ${exp.title} @ ${exp.company}`).join('\n');
        return {
          command: input,
          output: `Experience:\n${expOutput}`,
          type: 'success',
        };
      }
      if (!args) {
        return {
          command: input,
          output: 'portfolio/\n  about/\n  skills/\n  projects/\n  achievements/\n  experience/\n  values/\n  contact/',
          type: 'success',
        };
      }
      return {
        command: input,
        output: `ls: cannot access '${args}': No such file or directory`,
        type: 'error',
      };

    case 'cd':
      if (args === 'about') {
        return {
          command: input,
          output: `${portfolioData.profile.name} - ${portfolioData.profile.role}\n\n${portfolioData.profile.bio}\n\nLocation: ${portfolioData.profile.location}`,
          type: 'success',
        };
      }
      if (args === 'contact') {
        const contactOutput = `Email: ${portfolioData.profile.email}\nPhone: ${portfolioData.profile.phone}\nLocation: ${portfolioData.profile.location}`;
        return {
          command: input,
          output: contactOutput,
          type: 'success',
        };
      }
      if (args === 'skills') {
        const skillsOutput = Object.entries(portfolioData.skills)
          .map(([category, items]) => `${category}:\n  ${items.join('\n  ')}`)
          .join('\n\n');
        return {
          command: input,
          output: skillsOutput,
          type: 'success',
        };
      }
      if (args === 'expertise') {
        const expertiseOutput = portfolioData.expertise.map((e, i) => `${i + 1}. ${e}`).join('\n');
        return {
          command: input,
          output: expertiseOutput,
          type: 'success',
        };
      }
      if (args === 'projects') {
        const projectsOutput = portfolioData.projects.map((p, i) => `${i + 1}. ${p}`).join('\n');
        return {
          command: input,
          output: projectsOutput,
          type: 'success',
        };
      }
      if (args === 'achievements') {
        const achievementsOutput = portfolioData.achievements.map((a, i) => `${i + 1}. ${a}`).join('\n');
        return {
          command: input,
          output: achievementsOutput,
          type: 'success',
        };
      }
      if (args === 'experience') {
        const expOutput = portfolioData.experience
          .map((exp) => `${exp.title} @ ${exp.company}\n${exp.period} | ${exp.location}\n${exp.description.map((d) => `  • ${d}`).join('\n')}`)
          .join('\n\n');
        return {
          command: input,
          output: expOutput,
          type: 'success',
        };
      }
      if (args === 'values') {
        const valuesOutput = portfolioData.values.map((v, i) => `${i + 1}. ${v.name}: ${v.desc}`).join('\n');
        return {
          command: input,
          output: valuesOutput,
          type: 'success',
        };
      }
      return {
        command: input,
        output: `cd: ${args}: No such directory`,
        type: 'error',
      };

    case 'help':
      return {
        command: input,
        output: `Available commands:\n\n  whoami                    - Display profile information\n  cat skills.txt            - Show all skills by category\n  cat expertise.txt         - Show core expertise areas\n  cat achievements.txt      - Show professional achievements\n  cat experience.json       - Show work experience\n  cat values.txt            - Show personal values\n  cat about                 - Display about me information\n  ls                        - List portfolio directories\n  ls projects               - List projects\n  ls achievements           - List professional achievements\n  ls experience             - List work experience\n  cd about                  - Navigate to about section\n  cd contact                - Navigate to contact information\n  cd skills                 - Navigate to skills section\n  cd expertise              - Navigate to expertise section\n  cd projects               - Navigate to projects section\n  cd achievements           - Navigate to achievements section\n  cd experience             - Navigate to experience section\n  cd values                 - Navigate to values section\n  help                      - Show this help message\n  clear                     - Clear terminal output\n  exit                      - Exit geek mode and return home`,
        type: 'info',
      };

    case 'clear':
      return {
        command: input,
        output: '',
        type: 'info',
      };

    case 'exit':
      return {
        command: input,
        output: 'Exiting geek mode...',
        type: 'info',
      };

    default:
      return {
        command: input,
        output: `command not found: ${command}. Type 'help' for available commands.`,
        type: 'error',
      };
  }
}
