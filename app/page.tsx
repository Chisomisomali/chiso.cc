'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Navigation } from '@/components/navigation'
import {
  Network,
  Server,
  Radio,
  Cable,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  Target,
  Users,
  Lightbulb,
  Briefcase,
  Award,
  Cloud,
  Settings,
  Database,
  Monitor,
  Shield,
  MapPin as LocationPin,
} from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '' })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const highlights = [
    {
      icon: <Cable className="h-6 w-6" />,
      title: 'Fiber Optics Expert',
      description: 'Splicing, testing, and troubleshooting fiber networks with FTTx installations',
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Linux Administration',
      description: 'Debian systems, virtualization with Proxmox, and containerization expertise',
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: 'Network Engineering',
      description: 'Wireless networks, Ubiquiti systems, and comprehensive network design',
    },
    {
      icon: <Radio className="h-6 w-6" />,
      title: 'Radio Systems',
      description: 'Motorola radio management, code plugs, and repeater installations',
    },
  ]

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Precision',
      description: 'Every fiber splice, every network configuration, and every system setup is executed with meticulous attention to detail.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Collaboration',
      description: 'Strong teamwork and communication skills ensure seamless project execution and knowledge sharing.',
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Innovation',
      description: 'Passionate about emerging technologies and continuously learning new approaches to solve complex challenges.',
    },
  ]

  const skillCategories = [
    {
      icon: <Cable className="h-6 w-6" />,
      title: 'Fiber Optic Systems',
      color: 'bg-blue-500/10 text-blue-600',
      skills: ['Fiber optic splicing and termination', 'Testing and troubleshooting fiber links', 'FTTx installations', 'OTDR testing', 'Fiber network design', 'Fusion splicing', 'Connector installation'],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: 'Linux System Administration',
      color: 'bg-green-500/10 text-green-600',
      skills: ['Debian distributions', 'System configuration', 'Filesystem management', 'User management', 'Service configuration', 'Shell scripting', 'Security hardening'],
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: 'Virtualization & Cloud',
      color: 'bg-purple-500/10 text-purple-600',
      skills: ['Proxmox virtualization', 'VMware administration', 'Docker containerization', 'Cloud platforms', 'VM deployment', 'Backup & recovery'],
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: 'Network Engineering',
      color: 'bg-cyan-500/10 text-cyan-600',
      skills: ['Wireless networks', 'Network design', 'Router configuration', 'Switching', 'VPN setup', 'Firewall management', 'Network security'],
    },
    {
      icon: <Radio className="h-6 w-6" />,
      title: 'Radio Communications',
      color: 'bg-yellow-500/10 text-yellow-600',
      skills: ['Motorola systems', 'Code plug development', 'Repeater installation', 'Frequency coordination', 'Radio testing', 'System maintenance'],
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'IT Automation',
      color: 'bg-orange-500/10 text-orange-600',
      skills: ['Ansible automation', 'Configuration management', 'Infrastructure as Code', 'Deployment pipelines', 'Monitoring & alerting', 'Performance optimization'],
    },
  ]

  const achievements = [
    'Expert in fiber optic splicing and testing',
    'Proficient in Linux system administration',
    'Experienced with cloud platforms and automation',
    'Skilled in GIS applications and mapping systems',
    '15+ completed infrastructure projects',
    'Self-hosting and data center infrastructure expertise',
  ]

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: 'cjmisomali@gmail.com',
      description: 'Send me an email anytime',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: '+265 998335256',
      description: 'Available during business hours',
    },
    {
      icon: <LocationPin className="h-5 w-5" />,
      title: 'Location',
      value: 'Available for Remote & On-site',
      description: 'Flexible work arrangements',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-sm bg-white/20 dark:bg-white/5 rounded-3xl border border-white/30 dark:border-white/10 shadow-xl p-8 sm:p-12">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Chisomo Misomali</h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty">Expert in Fiber Optics, Networking & Linux Administration</p>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
                A motivated and versatile professional with a passion for emerging technologies, specializing in optical fiber systems, network infrastructure, and system administration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg backdrop-blur-sm">
                  <Link href="#skills">
                    View My Skills <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-white/20 dark:bg-white/5 backdrop-blur-sm border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/10">
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">{highlight.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 dark:bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-primary" /> Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>I am a motivated and versatile professional with extensive experience in optical fiber termination, network infrastructure, and Linux system administration.</p>
                <p>My expertise spans from fiber optic splicing and network design to system administration, cloud technologies, and emerging IT solutions.</p>
                <p>I'm passionate about solving complex technical challenges and staying at the forefront of technological innovation.</p>
              </CardContent>
            </Card>
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card key={index} className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-3">
                      <span className="text-primary">{value.icon}</span>
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-primary">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className={category.color}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 dark:bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Professional Achievements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10">
                <CardContent className="p-6 flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Latest Articles</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10 hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle>My Home Labbing Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">Evolution from Zima OS to 3TB TrueNAS with Proxmox for web servers</p>
                <Link href="/blog">
                  <Button variant="outline" size="sm" className="w-full">
                    Read Article
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10 hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle>Self-Hosting & Data Centre Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">Building professional-grade self-hosted infrastructure and data center setup</p>
                <Link href="/blog">
                  <Button variant="outline" size="sm" className="w-full">
                    Read Article
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Link href="/blog">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                View All Articles <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 dark:bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <Card key={index} className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="text-primary mt-1">{info.icon}</div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-lg text-primary font-mono">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div>
              <Card className="backdrop-blur-sm bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10">
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        Name
                      </Label>
                      <Input id="name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder="Your name" className="mt-1 bg-white/10 border-white/20" required />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="your@email.com" className="mt-1 bg-white/10 border-white/20" required />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground">
                        Phone
                      </Label>
                      <Input id="phone" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} placeholder="+1 (555) 000-0000" className="mt-1 bg-white/10 border-white/20" />
                    </div>
                    <div>
                      <Label htmlFor="inquiry" className="text-foreground">
                        Inquiry Type
                      </Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger className="mt-1 bg-white/10 border-white/20">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Message
                      </Label>
                      <Textarea id="message" value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} placeholder="Your message here..." className="mt-1 bg-white/10 border-white/20 min-h-32" required />
                    </div>
                    {isSubmitted ? (
                      <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-2 text-green-600">
                        <CheckCircle className="h-5 w-5" />
                        Message sent successfully!
                      </div>
                    ) : (
                      <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Geek Mode CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="backdrop-blur-sm bg-gradient-to-r from-purple-500/20 via-black/20 to-purple-500/20 dark:from-purple-900/30 dark:to-purple-900/30 border border-purple-500/30 dark:border-purple-400/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Want to explore in Geek Mode?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Experience an interactive terminal-based portfolio. Use Linux commands to explore my skills, projects, and achievements.</p>
              <Link href="/geek">
                <Button size="lg" className="font-mono bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                  $ Enter Geek Mode
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 px-4 sm:px-6 lg:px-8 py-12 bg-white/5">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Chisomo Misomali. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
