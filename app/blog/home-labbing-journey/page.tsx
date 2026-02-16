'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft } from 'lucide-react'

export default function HomeLabbingBlogPost() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center mb-8 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-primary/20 text-primary border-primary/30">Home Lab</Badge>
              <span className="text-sm text-muted-foreground">8 min read</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              My Home Labbing Journey: From Zima OS to TrueNAS & Proxmox
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              A year and two months of evolution in home infrastructure, from simple file hosting to a sophisticated setup.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-b border-white/20 py-4">
              <span>January 2025</span>
              <span>•</span>
              <span>Chisomo Misomali</span>
            </div>
          </header>

          {/* Featured Image */}
          <img
            src="/modern-data-center-with-server-racks-and-fiber-opt.png"
            alt="Modern data center with server racks"
            className="w-full h-96 object-cover rounded-2xl mb-12 shadow-lg"
          />

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Beginning: Simple File Hosting</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                When I started my home labbing journey just over a year ago, my setup was humble. I began with Zima OS, a lightweight, 
                efficient operating system perfect for beginners dipping their toes into NAS and file hosting. What started as a simple 
                way to host files locally evolved into something much more ambitious.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                The appeal was clear: having a centralized location to store files, backups, and personal data without relying solely on 
                cloud providers. It taught me the fundamentals of storage management, networking, and system administration. Every challenge 
                I faced became a learning opportunity.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Evolution: Embracing TrueNAS</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                As my needs grew and my understanding deepened, I realized I needed a more robust solution. Enter TrueNAS—a powerful, 
                enterprise-grade storage operating system built on FreeBSD and ZFS. The transition marked a significant turning point in my 
                home lab journey.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                With 3TB of storage now at my disposal, I could consolidate all my data, implement proper RAID configurations, and take 
                advantage of advanced features like snapshots and replication. TrueNAS provided the reliability and performance I needed, 
                while still remaining accessible for a home user.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                The beauty of TrueNAS lies in its flexibility. I could manage shares, users, and permissions through an intuitive web 
                interface, while also having the power of the command line when needed. It became the backbone of my home infrastructure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Next Level: Proxmox Virtualization</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                But storage alone wasn't enough. I wanted the ability to run multiple services, experiment with different operating systems, 
                and maintain isolation between applications. That's when I discovered Proxmox Virtual Environment—a powerful open-source 
                hypervisor.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Proxmox allowed me to virtualize my infrastructure, running multiple web servers, development environments, and services 
                on dedicated VMs. This meant I could test configurations without affecting production, scale up services easily, and 
                maintain better security through isolation.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                The combination of TrueNAS storage with Proxmox virtualization created a powerful, flexible, and scalable home lab 
                environment. I could now run web servers, containerized applications with Docker, and experimental setups simultaneously.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Key Lessons Learned</h2>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-4">
                  <span className="text-primary font-bold min-w-fit">1.</span>
                  <span className="text-muted-foreground text-lg leading-relaxed">
                    <strong>Start Simple, Scale Gradually:</strong> Beginning with Zima OS taught me fundamentals before diving into more 
                    complex systems like TrueNAS and Proxmox.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold min-w-fit">2.</span>
                  <span className="text-muted-foreground text-lg leading-relaxed">
                    <strong>Open Source is Powerful:</strong> Both TrueNAS and Proxmox are open-source, providing flexibility, community 
                    support, and continuous improvement without licensing costs.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold min-w-fit">3.</span>
                  <span className="text-muted-foreground text-lg leading-relaxed">
                    <strong>Documentation is Gold:</strong> Their communities have excellent documentation, which accelerated my learning 
                    and problem-solving abilities.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold min-w-fit">4.</span>
                  <span className="text-muted-foreground text-lg leading-relaxed">
                    <strong>Resilience Through Redundancy:</strong> Understanding RAID, snapshots, and backups became crucial as my data 
                    grew in importance.
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Looking Forward</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                This journey is far from over. I'm continually exploring new technologies, optimizing my infrastructure, and tackling 
                new challenges. The knowledge I've gained extends beyond just hardware and software—it encompasses networking, system 
                administration, troubleshooting, and the problem-solving mindset that's invaluable in IT.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                For anyone considering starting their own home lab: don't be intimidated. Start small, be curious, and don't fear failure. 
                Each mistake is a lesson, and each success builds your confidence and expertise. The home lab is not just about the infrastructure—
                it's about the journey of learning and growth.
              </p>
            </section>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <Link href="/blog">
              <Button variant="outline" className="border-white/30 hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
