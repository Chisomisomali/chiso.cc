import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { GraduationCap, Briefcase, Award, Target, Users, Lightbulb } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chisomo Misomali - About",
  description:
    "Learn about Chisomo Misomali's professional background, values, and technical expertise in telecommunications and IT infrastructure.",
}

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision",
      description:
        "Every fiber splice, every network configuration, and every system setup is executed with meticulous attention to detail.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Strong teamwork and communication skills ensure seamless project execution and knowledge sharing.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description:
        "Passionate about emerging technologies and continuously learning new approaches to solve complex challenges.",
    },
  ]

  const experience = [
    {
      title: "Fiber Optic Technician",
      description:
        "Specialized in splicing, testing, and troubleshooting fiber optic networks. Extensive experience with FTTx installations, FATs, and splitters.",
    },
    {
      title: "Network Infrastructure",
      description:
        "Designed and installed new networks, including underground cable installation and pole-mounted accessories.",
    },
    {
      title: "System Administration",
      description:
        "Linux system administration with focus on Debian distributions, virtualization, and containerization technologies.",
    },
    {
      title: "Radio Communications",
      description: "Motorola radio system management, including code plug development and repeater installations.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">About Chisomo Misomali</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A dedicated technical professional with a passion for connecting the digital world through reliable
              network infrastructure and innovative solutions.
            </p>
          </div>

          {/* Professional Summary */}
          <section className="mb-16">
            <Card className="p-8">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Professional Summary
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    I am a motivated and versatile professional with extensive experience in optical fiber termination,
                    repair, IoT systems, electronics, and Linux administration. My technical expertise spans from
                    physical network infrastructure to advanced system management, making me a valuable asset to any
                    technical team.
                  </p>
                  <p className="mb-4">
                    With a strong foundation in telecommunications and networking, I specialize in designing,
                    installing, and maintaining critical infrastructure that keeps organizations connected. My
                    experience includes everything from underground cable installations to complex virtualization
                    environments.
                  </p>
                  <p>
                    I am passionate about emerging technologies and continuously seek opportunities to expand my
                    knowledge and skills. Whether it's implementing new automation solutions or troubleshooting complex
                    network issues, I approach every challenge with dedication and precision.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Experience Areas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Experience Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experience.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-primary">
                      <Award className="h-5 w-5" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education & Certifications */}
          <section>
            <Card className="p-8 bg-muted/30">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education & Training
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Technical Training & Certifications</h3>
                    <p className="text-muted-foreground">
                      Comprehensive training in optical fiber termination and repair, networking technologies, and Linux
                      system administration. Continuous professional development in emerging technologies and industry
                      best practices.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Specialized Skills Development</h3>
                    <p className="text-muted-foreground">
                      Advanced training in virtualization technologies (Proxmox, VMware), containerization, IT
                      automation with Ansible, and cloud platform management. Specialized knowledge in GIS applications
                      and radio communication systems.
                    </p>
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
