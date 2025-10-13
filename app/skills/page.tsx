import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Cable, Server, Network, Radio, MapPin, Shield, Cloud, Settings, Database, Monitor } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chisomo Misomali - Skills",
  description:
    "Comprehensive overview of Chisomo Misomali's technical skills in fiber optics, networking, Linux administration, and more.",
}

export default function SkillsPage() {
  const skillCategories = [
    {
      icon: <Cable className="h-6 w-6" />,
      title: "Fiber Optic Systems",
      color: "bg-blue-500/10 text-blue-600",
      skills: [
        "Fiber optic splicing and termination",
        "Testing and troubleshooting fiber links",
        "FTTx installations with FATs and splitters",
        "Underground and aerial cable installation",
        "Fiber network design and planning",
        "OTDR testing and analysis",
        "Fusion splicing techniques",
        "Fiber optic connector installation",
      ],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Linux System Administration",
      color: "bg-green-500/10 text-green-600",
      skills: [
        "Debian-based Linux distributions",
        "System configuration and maintenance",
        "Filesystem management and optimization",
        "User and permission management",
        "Service configuration and monitoring",
        "Shell scripting and automation",
        "Package management (APT)",
        "System security hardening",
      ],
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Virtualization & Cloud",
      color: "bg-purple-500/10 text-purple-600",
      skills: [
        "Proxmox virtualization platform",
        "VMware vSphere administration",
        "Container orchestration",
        "Docker containerization",
        "Cloud platform management",
        "Virtual machine deployment",
        "Resource allocation and monitoring",
        "Backup and disaster recovery",
      ],
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "IT Automation",
      color: "bg-orange-500/10 text-orange-600",
      skills: [
        "Ansible automation and orchestration",
        "Configuration management",
        "Infrastructure as Code (IaC)",
        "Automated deployment pipelines",
        "System monitoring and alerting",
        "Log management and analysis",
        "Performance optimization",
        "Maintenance scheduling",
      ],
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Network Engineering",
      color: "bg-cyan-500/10 text-cyan-600",
      skills: [
        "Wireless network design and implementation",
        "Ubiquiti equipment configuration",
        "Network topology planning",
        "VLAN configuration and management",
        "Routing and switching protocols",
        "Network security implementation",
        "Bandwidth management and QoS",
        "Network troubleshooting and optimization",
      ],
    },
    {
      icon: <Radio className="h-6 w-6" />,
      title: "Radio Communication Systems",
      color: "bg-red-500/10 text-red-600",
      skills: [
        "Motorola radio system management",
        "Code plug development and programming",
        "Radio and repeater installation",
        "Frequency coordination and planning",
        "Antenna system design and installation",
        "RF propagation analysis",
        "Digital and analog radio systems",
        "Emergency communication protocols",
      ],
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "GIS & Mapping Systems",
      color: "bg-emerald-500/10 text-emerald-600",
      skills: [
        "ArcMap GIS software proficiency",
        "Avenza mapping applications",
        "Google Earth data analysis",
        "Earth Ranger system administration",
        "GPS coordinate systems",
        "Spatial data management",
        "Map creation and visualization",
        "Geographic data analysis",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Project Management & Safety",
      color: "bg-amber-500/10 text-amber-600",
      skills: [
        "Project documentation and reporting",
        "Safety protocol implementation",
        "Resource mobilization and coordination",
        "Fault location and diagnosis",
        "Work completion documentation",
        "Quality assurance procedures",
        "Team coordination and leadership",
        "Client communication and reporting",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Technical Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive technical competencies spanning fiber optics, networking, system administration, and
              emerging technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>{category.icon}</div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <section className="mt-16">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Monitor className="h-5 w-5 text-primary" />
                      Technical Proficiencies
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Advanced troubleshooting and problem-solving</li>
                      <li>• Cross-platform system integration</li>
                      <li>• Performance optimization and monitoring</li>
                      <li>• Documentation and knowledge transfer</li>
                      <li>• Vendor relationship management</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Database className="h-5 w-5 text-primary" />
                      Continuous Learning
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Staying current with emerging technologies</li>
                      <li>• Industry certification maintenance</li>
                      <li>• Best practices research and implementation</li>
                      <li>• Professional development and training</li>
                      <li>• Technology trend analysis and adoption</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
