import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Network, Server, Radio, Cable, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Chisomo Misomali - Home",
  description: "Professional portfolio of Chisomo Misomali - Expert in Fiber Optics, Networking & Linux Administration",
  icons: {
        icon: 'favicon.ico', // Path to your icon in the public directory
        apple: '/apple-icon.png', // Path to your Apple touch icon
      },
    };
}

export default function HomePage() {
  const highlights = [
    {
      icon: <Cable className="h-6 w-6" />,
      title: "Fiber Optics Expert",
      description: "Splicing, testing, and troubleshooting fiber networks with FTTx installations",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Linux Administration",
      description: "Debian systems, virtualization with Proxmox, and containerization expertise",
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Network Engineering",
      description: "Wireless networks, Ubiquiti systems, and comprehensive network design",
    },
    {
      icon: <Radio className="h-6 w-6" />,
      title: "Radio Systems",
      description: "Motorola radio management, code plugs, and repeater installations",
    },
  ]

  const achievements = [
    "Expert in fiber optic splicing and testing",
    "Proficient in Linux system administration",
    "Experienced with cloud platforms and automation",
    "Skilled in GIS applications and mapping systems",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-sm bg-white/20 dark:bg-white/5 rounded-3xl border border-white/30 dark:border-white/10 shadow-xl p-8 sm:p-12">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Chisomo Misomali
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty">
                Expert in Fiber Optics, Networking & Linux Administration
              </p>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
                A motivated and versatile professional with a passion for emerging technologies, specializing in optical
                fiber systems, network infrastructure, and system administration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg backdrop-blur-sm"
                >
                  <Link href="/skills">
                    View My Skills <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-white/20 dark:bg-white/5 backdrop-blur-sm border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/10"
                >
                  <Link href="/contact">Get In Touch </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-white/10 dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-sm bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10">
              <img
                src="/modern-data-center-with-server-racks-and-fiber-opt.png"
                alt="Data center with server infrastructure"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-end">
                <div className="backdrop-blur-xl bg-white/30 dark:bg-slate-900/30 border-t border-white/40 dark:border-white/20 w-full shadow-lg">
                  <p className="text-foreground font-semibold p-4 drop-shadow-lg">Data Center Infrastructure</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-sm bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10">
              <img
                src="/fiber-optic-cables-and-splicing-equipment-with-blu.png"
                alt="Fiber optic cables and splicing equipment"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-end">
                <div className="backdrop-blur-xl bg-white/30 dark:bg-slate-900/30 border-t border-white/40 dark:border-white/20 w-full shadow-lg">
                  <p className="text-foreground font-semibold p-4 drop-shadow-lg">Fiber Optic Systems</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-sm bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10">
              <img
                src="/telecommunications-tower-with-antennas-and-radio-e.png"
                alt="Telecommunications tower with radio equipment"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-end">
                <div className="backdrop-blur-xl bg-white/30 dark:bg-slate-900/30 border-t border-white/40 dark:border-white/20 w-full shadow-lg">
                  <p className="text-foreground font-semibold p-4 drop-shadow-lg">Radio & Tower Systems</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-300 backdrop-blur-sm bg-white/20 dark:bg-white/5 border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/10 rounded-2xl"
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-sm text-primary rounded-xl mb-4 border border-white/20 dark:border-white/10">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="backdrop-blur-sm bg-white/20 dark:bg-white/5 rounded-3xl border border-white/30 dark:border-white/10 shadow-xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional Achievements</h2>
              <p className="text-muted-foreground mb-8 text-pretty">
                With extensive experience in telecommunications and IT infrastructure, I bring a comprehensive skill set
                that spans from physical network installation to advanced system administration.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 backdrop-blur-md bg-gradient-to-br from-white/30 to-white/10 dark:from-white/10 dark:to-white/5 border-white/40 dark:border-white/20 shadow-2xl rounded-3xl">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="backdrop-blur-sm bg-white/20 dark:bg-white/10 rounded-2xl p-4 border border-white/30 dark:border-white/20">
                      <div className="text-2xl font-bold text-primary mb-1">5+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="backdrop-blur-sm bg-white/20 dark:bg-white/10 rounded-2xl p-4 border border-white/30 dark:border-white/20">
                      <div className="text-2xl font-bold text-primary mb-1">15+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                    <div className="backdrop-blur-sm bg-white/20 dark:bg-white/10 rounded-2xl p-4 border border-white/30 dark:border-white/20">
                      <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                      <div className="text-sm text-muted-foreground">System Reliability</div>
                    </div>
                    <div className="backdrop-blur-sm bg-white/20 dark:bg-white/10 rounded-2xl p-4 border border-white/30 dark:border-white/20">
                      <div className="text-2xl font-bold text-primary mb-1">99%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/20 dark:bg-white/5 rounded-3xl border border-white/30 dark:border-white/10 shadow-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Work Together?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Let's discuss how my technical expertise can help solve your networking and infrastructure challenges.
            </p>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-xl backdrop-blur-sm"
            >
              <Link href="/contact">
                Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
