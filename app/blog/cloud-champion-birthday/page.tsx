'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft } from 'lucide-react'

export default function CloudChampionBirthdayPost() {
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
              <Badge className="bg-primary/20 text-primary border-primary/30">Personal</Badge>
              <span className="text-sm text-muted-foreground">5 min read</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Cloud Champion Birthday: Celebrating the Journey to the Cloud
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              This year's birthday theme celebrates becoming a Cloud Champion. A reflection on growth, achievements, and the music that 
              accompanies this milestone.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-b border-white/20 py-4">
              <span>Birthday Reflection 2025</span>
              <span>•</span>
              <span>Chisomo Misomali</span>
            </div>
          </header>

          {/* Featured Image */}
          <img
            src="/telecommunications-tower-with-antennas-and-radio-e.png"
            alt="Telecommunications tower"
            className="w-full h-96 object-cover rounded-2xl mb-12 shadow-lg"
          />

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Cloud Champion: A Theme for Growth</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                This year, I chose a powerful theme for my birthday: Cloud Champion. It's not just a playful title—it represents a 
                journey of transformation, technical mastery, and the pursuit of excellence in cloud infrastructure and distributed systems.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Being a Cloud Champion means embracing the power of cloud computing, understanding its complexities, and leveraging it 
                to build robust, scalable solutions. It's about moving beyond on-premises limitations and thinking globally about how 
                technology can solve problems and create value.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">The Journey to Cloud Mastery</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                My path to cloud expertise hasn't been straightforward. It started with basic networking knowledge, evolved through 
                Linux system administration, and expanded into virtualization with Proxmox. Each step built upon the last, creating a 
                foundation for understanding cloud architecture.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                The cloud isn't magic—it's still computers, networking, and storage, just distributed and managed at scale. Understanding 
                this fundamental truth helped me grasp concepts like infrastructure as code, containerization, orchestration, and 
                microservices. These aren't just buzzwords; they're tools that empower us to build better systems.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">A Soundtrack for the Journey</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Every journey needs a soundtrack, and this year's theme is accompanied by a song that resonates deeply: <strong>"Broken Love" 
                by Niwel</strong>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                "Broken Love" isn't just a beautiful piece of music—it's a reflection on complexity, emotion, and resilience. Much like 
                the journey of becoming a Cloud Champion, it speaks to overcoming challenges, learning from setbacks, and finding strength 
                in vulnerability. There's beauty in brokenness, and power in rebuilding.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Niwel's artistry captures something profound about the human experience. In the context of technology and growth, the song 
                reminds us that failures are not endpoints but part of the journey. Every failed deployment, every system that goes down, 
                and every bug fixed is a step forward in becoming a true Cloud Champion.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">What Does It Mean to Be a Cloud Champion?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                To me, being a Cloud Champion encompasses several things:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-4">
                  <span className="text-primary font-bold min-w-fit">✓</span>
                  <span className="text-muted-foreground text-lg leading-relaxed">
                    <strong>Technical Excellence:</strong> Mastery of cloud platforms, architectural patterns, and best practices.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold min-w-fit">✓</span>
                  <span className="text-muted-foreground text-lg leading-relaxed">
                    <strong>Continuous Learning:</strong> The cloud landscape changes rapidly; staying current is essential.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold min-w-fit">✓</span>
                  <span className="text-muted-foreground text-lg leading-relaxed">
                    <strong>Problem-Solving Mindset:</strong> Using cloud tools and services to solve real-world challenges.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold min-w-fit">✓</span>
                  <span className="text-muted-foreground text-lg leading-relaxed">
                    <strong>Community Spirit:</strong> Sharing knowledge and helping others grow in their cloud journey.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold min-w-fit">✓</span>
                  <span className="text-muted-foreground text-lg leading-relaxed">
                    <strong>Resilience:</strong> Learning from failures and building systems that can withstand challenges.
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Celebration and Reflection</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                This birthday marks more than just another year. It's a celebration of how far I've come, the knowledge I've accumulated, 
                and the experiences that have shaped my journey in technology. From humble beginnings in a small home lab to aspirations 
                of cloud mastery, each step has been meaningful.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                With "Broken Love" playing in the background, I'm reminded that perfection isn't the goal—growth is. Every challenge, every 
                setback, and every success contributes to the champion I'm becoming. The cloud is vast, complex, and full of possibilities, 
                and I'm honored to be on this journey.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Here's to being a Cloud Champion—not because I have all the answers, but because I'm committed to asking better questions and 
                building better systems. Happy birthday to me, and here's to the next chapter of this incredible journey!
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
