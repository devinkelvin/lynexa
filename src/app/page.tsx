"use client"


import Head from 'next/head'
import { Suspense, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import dynamic from 'next/dynamic'

import Navbar from '@/components/Navbar'
// import Hero from '@/components/Hero'

// import ServicesShowcase from '@/components/ServicesShowcase'
// import Industries from '@/components/Industries'
// import Methodology from '@/components/Methodology'
// import CaseStudies from '@/components/CaseStudies'
// import TechnologyStack from '@/components/TechnologyStack'
// import Testimonials from '@/components/Testimonials'
// import EnterpriseCTA from '@/components/EnterpriseCTA'
// import Footer from '@/components/Footer'
const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: false, // Disable server-side rendering for this component if necessary
});
const ServicesShowcase = dynamic(() => import('@/components/ServicesShowcase'), {
  ssr: false,
});
const Industries = dynamic(() => import('@/components/Industries'), {
  ssr: false,
});
const Methodology = dynamic(() => import('@/components/Methodology'), {
  ssr: false,
});
const CaseStudies = dynamic(() => import('@/components/CaseStudies'), {
  ssr: false,
});
const TechnologyStack = dynamic(() => import('@/components/TechnologyStack'), {
  ssr: false,
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: false,
});
const EnterpriseCTA = dynamic(() => import('@/components/EnterpriseCTA'), {
  ssr: false,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger)



const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="relative">
      <div className="w-20 h-20 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin animate-reverse" />
      </div>
    </div>
  </div>
)

const Home = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Initialize GSAP animations
        const ctx = gsap.context(() => {
            // Parallax effect for floating elements
            gsap.to('.floating-element', {
                y: 30,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
                stagger: 0.2
            })

            // Scroll-triggered animations
            gsap.utils.toArray<HTMLElement>('.scroll-reveal').forEach((element) => {
                gsap.from(element, {
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                })
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <>
            {/* <Head>
                <title>Lynexa Innovations | Technology Innovation Partner</title>
                <meta name="description" content="Transforming visionary ideas into tangible technological solutions. Premier technology innovation partner specializing in MVPs, scalable applications, and enterprise-grade systems." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}

            <div ref={containerRef} className="relative bg-gray-900 text-white overflow-hidden">

                <div className="relative z-10">
                    <Navbar />
                    <Suspense fallback={<LoadingScreen />}>
                        <Hero />
                        <ServicesShowcase />
                        <Industries />
                        <Methodology />
                        <CaseStudies />
                        <TechnologyStack />
                        <Testimonials />
                        <EnterpriseCTA />
                        <Footer />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default Home