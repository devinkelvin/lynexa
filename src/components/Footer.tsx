// components/Footer.tsx
"use client"

import { motion } from 'framer-motion'
import {
  Globe, Mail, Phone, MapPin,
  Linkedin, Twitter, Github, Youtube,
  ArrowUpRight, Heart, Award, Shield,
  Briefcase, BookOpen, Users, FileText, Cloud, CheckCircle,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: {
      icon: <Briefcase className="w-4 h-4" />,
      links: [
        { label: "Cloud Migration", href: "#", description: "Scalable cloud infrastructure" },
        { label: "AI & Machine Learning", href: "#", description: "Intelligent automation" },
        { label: "Cybersecurity", href: "#", description: "Lynexa-grade protection" },
        { label: "Digital Transformation", href: "#", description: "End-to-end modernization" },
        { label: "Lynexa Applications", href: "#", description: "Custom solutions" },
        { label: "DevOps & Infrastructure", href: "#", description: "Continuous delivery" }
      ]
    },
    industries: {
      icon: <Globe className="w-4 h-4" />,
      links: [
        { label: "Financial Services", href: "#", description: "Banking & FinTech" },
        { label: "Healthcare", href: "#", description: "HIPAA compliant solutions" },
        { label: "Manufacturing", href: "#", description: "Industry 4.0" },
        { label: "Retail & E-commerce", href: "#", description: "Omnichannel platforms" },
        { label: "Technology", href: "#", description: "SaaS & software" },
        { label: "Government", href: "#", description: "Public sector" }
      ]
    },
    resources: {
      icon: <BookOpen className="w-4 h-4" />,
      links: [
        { label: "Case Studies", href: "#", description: "Success stories" },
        { label: "Whitepapers", href: "#", description: "Industry insights" },
        { label: "Blog", href: "#", description: "Latest updates" },
        { label: "Documentation", href: "#", description: "Technical guides" },
        { label: "API Reference", href: "#", description: "Developer resources" },
        { label: "Support Center", href: "#", description: "24/7 assistance" }
      ]
    },
    company: {
      icon: <Users className="w-4 h-4" />,
      links: [
        { label: "About Us", href: "#", description: "Our story" },
        { label: "Careers", href: "#", description: "Join our team" },
        { label: "Press", href: "#", description: "News & media" },
        { label: "Partners", href: "#", description: "Ecosystem" },
        { label: "Contact", href: "#", description: "Get in touch" },
        { label: "Legal", href: "#", description: "Policies & compliance" }
      ]
    }
  }

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#", followers: "50K+" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#", followers: "35K+" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "#", followers: "28K+" },
    { icon: <Youtube className="w-5 h-5" />, label: "YouTube", href: "#", followers: "42K+" }
  ]

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Lynexa Clients" },
    { value: "99.9%", label: "Client Retention" },
    { value: "24/7", label: "Global Support" }
  ]

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-200 h-200 bg-linear-to-br from-blue-600/5 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-200 h-200 bg-linear-to-tl from-purple-600/5 via-pink-500/5 to-transparent rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[60px_60px]" />
        </div>

        {/* Accent Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div className="relative mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section - Brand Overview */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
            {/* Brand Column - 5 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-9 h-9 bg-linear-to-br from-[#76ebda] via-[#5ac9c9] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-1 border border-[#76ebda]/40 rounded-xl"
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold tracking-tight bg-linear-to-br from-[#76ebda] to-[#3b82f6] bg-clip-text text-transparent">
                    Lynexa
                  </span>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-medium text-emerald-400/90 uppercase tracking-wider">Trusted Partner</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                Transforming global Lynexas with cutting-edge technology solutions.
                Trusted by Fortune 500 companies to drive innovation and sustainable growth.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-linear-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/50">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Contact Information - Redesigned */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-linear-to-br from-slate-800/20 to-slate-900/20 border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300 group">
                  <div className="p-2.5 rounded-lg bg-linear-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">Email</div>
                    <span className="text-slate-200 font-medium">lynexa@company.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-linear-to-br from-slate-800/20 to-slate-900/20 border border-slate-700/30 hover:border-emerald-500/30 transition-all duration-300 group">
                  <div className="p-2.5 rounded-lg bg-linear-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">Phone</div>
                    <span className="text-slate-200 font-medium">+1 (555) 123-4567</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-linear-to-br from-slate-800/20 to-slate-900/20 border border-slate-700/30 hover:border-purple-500/30 transition-all duration-300 group">
                  <div className="p-2.5 rounded-lg bg-linear-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">Global HQ</div>
                    <span className="text-slate-200 font-medium">123 Tech Ave, San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Links Grid - 7 columns */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                {Object.entries(footerLinks).map(([category, { icon, links }], idx) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 + idx * 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-5">
                      <div className="p-1.5 rounded-md bg-linear-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                        {icon}
                      </div>
                      <h3 className="text-md font-semibold text-white capitalize tracking-wide">
                        {category}
                      </h3>
                    </div>

                    <ul className="space-y-4">
                      {links.map((link, linkIdx) => (
                        <motion.li
                          key={linkIdx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 + linkIdx * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            className="group block p-2 -ml-2 rounded-lg hover:bg-slate-800/30 transition-all duration-300"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="text-slate-300 group-hover:text-white transition-colors text-sm font-medium">
                                  {link.label}
                                </span>
                                <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors mt-0.5">
                                  {link.description}
                                </p>
                              </div>
                              <ArrowUpRight className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                            </div>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>



          {/* Certifications & Social - Two Column Layout */}
          <div className="grid md:grid-cols-1 gap-8 mb-12">


            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col items-end"
            >
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                Connect With Us
              </h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-cyan-600 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity" />
                    <div className="relative p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500/50 transition-all duration-300">
                      {social.icon}
                    </div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.followers}
                    </span>
                  </motion.a>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-8">
                Join our community of 150K+ technology professionals
              </p>
            </motion.div>
          </div>

          {/* Divider - Decorative */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-6 py-2 bg-slate-900/80 rounded-full border border-slate-700 backdrop-blur-sm">
                <span className="text-xs text-slate-400">Lynexa Excellence Since 2025</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Spacious */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-slate-400 text-sm order-2 lg:order-1"
            >
              © {currentYear} Lynexa Solutions. All rights reserved.
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap justify-center items-center gap-8 text-sm order-1 lg:order-2"
            >
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Security
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Compliance
              </Link>
            </motion.div>


          </div>

          {/* Back to Top Button - Enhanced */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 p-4 rounded-2xl bg-[#76ebda] text-black shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 border border-white/20 backdrop-blur-sm group"
          >
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            <span className="absolute -top-10 right-0 px-3 py-2 bg-slate-800 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Back to Top
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer