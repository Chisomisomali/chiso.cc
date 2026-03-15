'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black pt-24 px-4 sm:px-6 lg:px-8 font-mono text-sm">
        <div className="max-w-5xl mx-auto space-y-8 pb-16">
          
          {/* Hero Terminal Block */}
          <div className="backdrop-blur-md bg-black/70 border border-purple-500/30 rounded-xl p-6 sm:p-8 shadow-2xl">
            <div className="text-green-400 space-y-4">
              <div>
                <span className="text-purple-400">chisomo@malawi</span>
                <span className="text-white">:~$</span>
                <span className="text-white ml-2">whoami</span>
              </div>
              <div className="text-green-300 ml-4">Chisomo Misomali - IT Professional</div>
              <div className="text-gray-400">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
              <div className="text-green-300 space-y-2">
                <p>Fiber Optics Specialist | Network Engineer | Linux Administrator</p>
                <p>Expertise in telecommunications infrastructure, data center operations, and cloud technologies</p>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="backdrop-blur-md bg-black/70 border border-purple-500/30 rounded-xl p-6 sm:p-8 shadow-2xl">
            <div className="text-green-400 space-y-3">
              <div>
                <span className="text-purple-400">chisomo@malawi</span>
                <span className="text-white">:~$</span>
                <span className="text-white ml-2">cat about.txt</span>
              </div>
              <div className="text-gray-400">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
              <div className="text-green-300 space-y-2">
                <p>Proven experience architecting scalable platforms serving</p>
                <p>national institutions, financial partners, and environmental</p>
                <p>programs across Malawi.</p>
                <p className="pt-2">With over 6 years in IT infrastructure, I specialize in fiber optic installations,</p>
                <p>network design, and Linux system administration. Currently exploring advanced</p>
                <p>data center infrastructure and self-hosting solutions.</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="backdrop-blur-md bg-black/70 border border-purple-500/30 rounded-xl p-6 sm:p-8 shadow-2xl">
            <div className="text-green-400 space-y-3">
              <div>
                <span className="text-purple-400">chisomo@malawi</span>
                <span className="text-white">:~$</span>
                <span className="text-white ml-2">cat skills.txt</span>
              </div>
              <div className="text-gray-400">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
              <div className="text-green-300 space-y-2">
                <p className="text-orange-400 font-bold">Core Expertise:</p>
                <p className="ml-4">Fiber Optics Installation & Splicing | Network Engineering</p>
                <p className="ml-4">Linux System Administration | Telecommunications Systems</p>
                <p className="ml-4">Data Center Infrastructure | IoT Platforms & Electronics</p>
                
                <p className="text-orange-400 font-bold pt-3">Technical Skills:</p>
                <p className="ml-4">Proxmox Virtualization | Network Monitoring (SNMP, Netflow)</p>
                <p className="ml-4">Debian/RHEL Systems | Ubiquiti Networks | Motorola Radio Systems</p>
                <p className="ml-4">GIS Applications (QGIS) | Cloud Platforms | Containerization</p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="backdrop-blur-md bg-black/70 border border-purple-500/30 rounded-xl p-6 sm:p-8 shadow-2xl">
            <div className="text-green-400 space-y-3">
              <div>
                <span className="text-purple-400">chisomo@malawi</span>
                <span className="text-white">:~$</span>
                <span className="text-white ml-2">cat experience.json | jq '.[0]'</span>
              </div>
              <div className="text-gray-400">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
              <div className="text-green-300 space-y-2">
                <p className="text-orange-400 font-bold">Fiber Optics Specialist @ TeleCom Solutions</p>
                <p className="text-gray-400">2019 - Present | Lilongwe</p>
                <p className="ml-4">Designed and installed FTTx infrastructure serving 5,000+ households</p>
                <p className="ml-4">Managed network upgrades across 12 district locations</p>
                <p className="ml-4">Reduced downtime by 40% through predictive monitoring</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="backdrop-blur-md bg-black/70 border border-purple-500/30 rounded-xl p-6 sm:p-8 shadow-2xl">
            <div className="text-green-400 space-y-3">
              <div>
                <span className="text-purple-400">chisomo@malawi</span>
                <span className="text-white">:~$</span>
                <span className="text-white ml-2">cat .env | grep CONTACT</span>
              </div>
              <div className="text-gray-400">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
              <div className="text-green-300 space-y-2">
                <p><span className="text-orange-400">EMAIL</span><span className="text-white">=</span><span className="text-cyan-400">cjmisomali@gmail.com</span></p>
                <p><span className="text-orange-400">PHONE</span><span className="text-white">=</span><span className="text-cyan-400">+265 998335256</span></p>
                <p><span className="text-orange-400">LOCATION</span><span className="text-white">=</span><span className="text-cyan-400">Lilongwe, Malawi</span></p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="backdrop-blur-md bg-gradient-to-r from-purple-600/20 to-green-600/20 border border-purple-500/50 rounded-xl p-6 sm:p-8 text-center">
            <p className="text-green-400 mb-4">Ready to explore my portfolio interactively?</p>
            <Link href="/geek">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Enter Geek Mode Terminal</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
