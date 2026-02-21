// app/page.tsx
"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import {
    ArrowRight,
    Zap,
    Globe,
    Shield,
    Workflow,
    ChevronRight,
    Play,
    Github,
    Twitter
} from 'lucide-react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero text reveal
            gsap.from('.hero-title span', {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.2
            })

            gsap.from('.hero-subtitle', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.6,
                ease: 'power2.out'
            })

            gsap.from('.hero-cta', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: 0.8,
                ease: 'power2.out'
            })

            // Scroll reveals
            gsap.utils.toArray<HTMLElement>('.scroll-reveal').forEach((element) => {
                gsap.from(element, {
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                })
            })

            // Feature cards stagger
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: '.features-grid',
                    start: 'top 80%',
                },
                y: 60,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out'
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-black font-bold text-lg">▲</span>
                        </div>
                        <span className="font-semibold text-lg tracking-tight">Lynexa</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
                        <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                        <Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link>
                        <Link href="#enterprise" className="hover:text-white transition-colors">Enterprise</Link>
                        <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden sm:block text-sm text-zinc-400 hover:text-white transition-colors">
                            Log In
                        </Link>
                        <Link
                            href="/register"
                            className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),transparent)]" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="hero-title overflow-hidden mb-6">
                        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
                            <span className="inline-block">Develop.</span>
                            <span className="inline-block">Preview.</span>
                            <span className="inline-block bg-linear-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                                Ship.
                            </span>
                        </h1>
                    </div>

                    <p className="hero-subtitle text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Lynexa is the platform for frontend developers. Build, deploy, and scale your AI-powered ecommerce
                        applications with zero configuration.
                    </p>

                    <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-200 transition-all flex items-center gap-2">
                            Start Building Free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Play className="w-4 h-4 fill-white" />
                            </div>
                            <span className="font-medium">Watch Demo</span>
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
                        {[
                            { value: "99.99%", label: "Uptime SLA" },
                            { value: "150+", label: "Edge Locations" },
                            { value: "10M+", label: "Developers" },
                            { value: "Zero", label: "Config Deploys" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-zinc-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-24 px-6 bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <div className="scroll-reveal text-center mb-16">
                        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
                            The complete platform <br className="hidden sm:block" />
                            <span className="text-zinc-500">for building AI commerce</span>
                        </h2>
                    </div>

                    <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Zap className="w-6 h-6 text-yellow-500" />,
                                title: "Instant Deployments",
                                description: "Push to Git and your site is live. Automatic CI/CD with zero configuration required.",
                                gradient: "from-yellow-500/20 to-orange-500/20"
                            },
                            {
                                icon: <Globe className="w-6 h-6 text-blue-500" />,
                                title: "Global Edge Network",
                                description: "Your content served from 150+ locations worldwide. Sub-100ms latency everywhere.",
                                gradient: "from-blue-500/20 to-cyan-500/20"
                            },
                            {
                                icon: <Shield className="w-6 h-6 text-green-500" />,
                                title: "Enterprise Security",
                                description: "Built-in DDoS protection, SSL, and compliance. Vercel Firewall included.",
                                gradient: "from-green-500/20 to-emerald-500/20"
                            },
                            {
                                icon: <Workflow className="w-6 h-6 text-purple-500" />,
                                title: "AI Orchestration",
                                description: "Built-in support for OpenAI, Anthropic, and custom models. Stream responses in real-time.",
                                gradient: "from-purple-500/20 to-pink-500/20"
                            },
                            {
                                icon: <div className="w-6 h-6 rounded bg-linear-to-r from-blue-600 to-cyan-400" />,
                                title: "Next.js 15 Ready",
                                description: "Optimized for the latest Next.js with Partial Prerendering and Server Components.",
                                gradient: "from-indigo-500/20 to-purple-500/20"
                            },
                            {
                                icon: <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">v0</div>,
                                title: "v0 Integration",
                                description: "Generate UI components from prompts. Copy-paste ready Tailwind and React code.",
                                gradient: "from-zinc-500/20 to-white/20"
                            }
                        ].map((feature, i) => (
                            <div
                                key={i}
                                className="feature-card group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900"
                            >
                                <div className={`absolute inset-0 bg-linear-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Code Preview Section */}
            <section className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="scroll-reveal">
                            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
                                Deploy at the speed of <span className="text-blue-500">thought</span>
                            </h2>
                            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                                Connect your Git repository and deploy in seconds. Every push gets a unique URL.
                                Preview changes, share with your team, and ship to production with confidence.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Automatic preview deployments for every branch",
                                    "Instant rollback to any previous version",
                                    "Real-time collaboration with comments on previews",
                                    "Analytics and performance insights built-in"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-300">
                                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="scroll-reveal relative">
                            <div className="absolute -inset-4 bg-linear-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />
                            <div className="relative bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-zinc-900/50">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                    <div className="ml-4 text-xs text-zinc-500 font-mono">terminal</div>
                                </div>
                                <div className="p-6 font-mono text-sm">
                                    <div className="text-zinc-500">$ git push origin main</div>
                                    <div className="mt-2 text-green-400">✓ Build completed in 12s</div>
                                    <div className="text-blue-400">➜ Deploying to production...</div>
                                    <div className="mt-2 text-white">
                                        <span className="text-purple-400">✓</span> Production: <span className="underline decoration-zinc-600">https://lynexa.ai</span>
                                    </div>
                                    <div className="mt-4 text-zinc-500 border-t border-white/5 pt-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-green-400">●</span> Live in 13 regions
                                        </div>
                                        <div className="mt-1 text-xs text-zinc-600">
                                            Edge: iad1, sfo1, gru1, lhr1, fra1, hkg1, sin1, syd1...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enterprise CTA */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center scroll-reveal">
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
                        Scale without limits
                    </h2>
                    <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
                        From your first user to your billionth. Lynexa Enterprise provides the security,
                        compliance, and support your team needs.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-zinc-200 transition-colors">
                            Contact Sales
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 hover:border-white/40 transition-colors flex items-center justify-center gap-2">
                            View Documentation <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-8 opacity-50 grayscale">
                        {['Adobe', 'Uber', 'Netflix', 'Airbnb', 'GitHub'].map((company) => (
                            <span key={company} className="text-xl font-bold text-zinc-500">{company}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-12 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li><Link href="#" className="hover:text-white">Features</Link></li>
                                <li><Link href="#" className="hover:text-white">Enterprise</Link></li>
                                <li><Link href="#" className="hover:text-white">Pricing</Link></li>
                                <li><Link href="#" className="hover:text-white">Changelog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Solutions</h4>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li><Link href="#" className="hover:text-white">AI Commerce</Link></li>
                                <li><Link href="#" className="hover:text-white">Marketplaces</Link></li>
                                <li><Link href="#" className="hover:text-white">SaaS</Link></li>
                                <li><Link href="#" className="hover:text-white">Startups</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li><Link href="#" className="hover:text-white">Documentation</Link></li>
                                <li><Link href="#" className="hover:text-white">API Reference</Link></li>
                                <li><Link href="#" className="hover:text-white">Guides</Link></li>
                                <li><Link href="#" className="hover:text-white">Support</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li><Link href="#" className="hover:text-white">About</Link></li>
                                <li><Link href="#" className="hover:text-white">Blog</Link></li>
                                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                                <li><Link href="#" className="hover:text-white">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                <span className="text-black font-bold text-xs">▲</span>
                            </div>
                            <span className="font-semibold">© 2024 Lynexa Innovations</span>
                        </div>

                        <div className="flex items-center gap-6">
                            <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}