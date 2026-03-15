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
    location: 'Malawi',
    bio: 'Expert in fiber optics, Linux administration, IoT, electronics, networking, and telecommunications systems.',
  },
  skills: {
    networking: ['Fiber Optics', 'Network Design', 'Routing & Switching', 'Firewalls', 'VPN Configuration'],
    linux: ['Debian Systems', 'System Administration', 'Shell Scripting', 'Service Management', 'Security'],
    infrastructure: ['Proxmox Virtualization', 'TrueNAS Storage', 'Data Center Management', 'Server Management', 'Cloud Platforms'],
    iot: ['Electronics', 'Embedded Systems', 'Sensor Networks', 'Arduino', 'Raspberry Pi'],
    tools: ['GIS Applications', 'Ubiquiti Networks', 'Motorola Radio Systems', 'Ansible', 'Docker'],
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
  projects: [
    'Home Labbing Evolution: From Zima OS to 3TB TrueNAS with Proxmox',
    'Self-Hosting & Data Centre Infrastructure Setup',
    'Cloud Champion Birthday Initiative',
    '15+ Completed Infrastructure Projects',
    'Fiber Optics Network Installations',
    'Enterprise Network Design & Implementation',
  ],
  achievements: [
    'Transitioned infrastructure from Zima OS to professional TrueNAS solution',
    'Deployed Proxmox virtualization for web server hosting',
    'Established 3TB enterprise-grade storage infrastructure',
    'Designed and implemented multiple fiber optic networks',
    'Specialized expertise in telecommunications systems',
    'Published comprehensive self-hosting guides',
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
          .map(([category, items]) => `${category.toUpperCase()}:\n  ${items.join('\n  ')}`)
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
      if (args.includes('about')) {
        return {
          command: input,
          output: `${portfolioData.profile.name}\n${portfolioData.profile.bio}\n\nEmail: ${portfolioData.profile.email}\nPhone: ${portfolioData.profile.phone}\nLocation: ${portfolioData.profile.location}`,
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
      if (!args) {
        return {
          command: input,
          output: 'portfolio/\n  about/\n  skills/\n  projects/\n  achievements/\n  contact/',
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
          output: `${portfolioData.profile.name} - ${portfolioData.profile.role}\n\n${portfolioData.profile.bio}`,
          type: 'success',
        };
      }
      if (args === 'contact') {
        return {
          command: input,
          output: `📧 Email: ${portfolioData.profile.email}\n📱 Phone: ${portfolioData.profile.phone}\n📍 Location: ${portfolioData.profile.location}`,
          type: 'success',
        };
      }
      if (args === 'skills') {
        const skillsOutput = Object.entries(portfolioData.skills)
          .map(([category, items]) => `${category.toUpperCase()}:\n  ${items.join(', ')}`)
          .join('\n\n');
        return {
          command: input,
          output: skillsOutput,
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
        output: `Available commands:\n\n  whoami              - Display profile information\n  cat skills.txt      - Show all skills by category\n  cat expertise.txt   - Show core expertise areas\n  cat about           - Display about me information\n  ls                  - List portfolio directories\n  ls projects         - List projects\n  ls achievements     - List professional achievements\n  cd about            - Navigate to about section\n  cd contact          - Navigate to contact information\n  cd skills           - Navigate to skills section\n  help                - Show this help message\n  clear               - Clear terminal output\n  exit                - Exit geek mode`,
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
