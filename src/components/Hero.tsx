// components/Hero.jsx
"use client"

import { useState, useEffect, useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion'
import { wrap } from '@motionone/utils'
import { ArrowRight, Sparkles, Shield, Globe, Zap, Cpu, Building2, Users, BarChart3, Cloud, Code, Database } from 'lucide-react'



interface ParallaxTextProps {
    children: React.ReactNode;
    baseVelocity?: number;
}


const ParallaxText = ({ children, baseVelocity = 100 }: any) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax overflow-hidden whitespace-nowrap">
            <motion.div className="scroller flex whitespace-nowrap" style={{ x }}>
                <span className="block mx-8 font-plaster">{children}</span>
                <span className="block mx-8 font-plaster">{children}</span>
                <span className="block mx-8 font-plaster">{children}</span>
                <span className="block mx-8 font-plaster">{children}</span>
            </motion.div>
        </div>
    );
};

// Typewriter Component
const Typewriter = ({ texts, speed = 50, delay = 1500 }: { texts: string[], speed?: number, delay?: number }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length
      const fullText = texts[i]

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      )

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), delay)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setCurrentIndex(0)
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, loopNum, currentIndex, speed, delay, texts])

  return (
    <span className="inline-block min-h-[1.2em]">
      {currentText}
      <span className="ml-0.5 animate-pulse">|</span>
    </span>
  )
}

// Lynexa Services Data
const lynexaServices = [
  { icon: <Cpu />, title: 'MVP Development', tagline: 'Transform ideas into market-ready products in 8-16 weeks' },
  { icon: <Zap />, title: 'AI Integration', tagline: 'Leverage cutting-edge AI for competitive advantage' },
  { icon: <Shield />, title: 'Enterprise Solutions', tagline: 'Scalable, secure systems for growing businesses' },
  { icon: <Cloud />, title: 'Cloud Architecture', tagline: 'Modern cloud infrastructure and DevOps automation' },
  { icon: <Database />, title: 'Data Analytics', tagline: 'Real-time business intelligence and insights' },
  { icon: <Code />, title: 'Digital Transformation', tagline: 'Modernize legacy systems with future-proof technology' },
  { icon: <Users />, title: 'Team Augmentation', tagline: 'Scale your team with expert developers and designers' },
  { icon: <Building2 />, title: 'FinTech Solutions', tagline: 'Specialized financial technology development' },
  { icon: <BarChart3 />, title: 'Business Intelligence', tagline: 'Data-driven decision making tools' },
]

const Hero = () => {


  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-r from-gray-900 via-black to-gray-950 border-b-none">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Colorful gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-br from-teal-400/10 via-cyan-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-linear-to-tr from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl" />

        {/* Clearly visible grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
        linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px),
        linear-gradient(0deg, rgba(255,255,255,0.08) 1px, transparent 1px)
      `,
            backgroundSize: '50px 50px',
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
          }}
        />

        {/* Edge glow effects */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-teal-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-24 md:pt-32">
        <div className="">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#76ebda]/30 bg-[#76ebda]/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#76ebda]" />
              <span className="text-sm font-medium text-[#76ebda]">Innovation Meets Execution</span>
            </div>

            <h1 className="xs:text-2xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Lynexa</span>{' '}
              <span className="text-white"> Innovations</span>{' '}
              <br />
              <span className=" bg-clip-text text-[#76ebda]">
                <Typewriter
                  texts={['Empowering Businesses', 'Driving Innovation', 'Building Futures', 'Transforming Industries']}
                  speed={80}
                  delay={2000}
                />
              </span>
            </h1>

            <p className="text-md md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              End-to-end technology development services for businesses seeking to innovate, scale,
              and transform their digital capabilities across multiple industries.
            </p>

            {/* Industries Infinite Slider */}
            {/* <div className="mb-16 w-full overflow-hidden">
              <div className="py-6 bg-linear-to-r from-gray-900/80 to-black/80 backdrop-blur-lg border border-gray-800/30 rounded-2xl overflow-hidden">
                <ParallaxText baseVelocity={-3}>Innovating Your Business Future</ParallaxText>
                <ParallaxText baseVelocity={3}>Solutions That Drive Success</ParallaxText>

              </div>
              <Footer title="Scroll velocity" />
            </div> */}
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {lynexaServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 hover:border-[#76ebda]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-linear-to-br from-[#76ebda]/20 to-transparent border border-[#76ebda]/20">
                    <div className="text-[#76ebda]">{service.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.tagline}</p>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#76ebda] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Business Models Infinite Slider */}
          {/* <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible <span className="text-[#76ebda]">Business Models</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Choose from our five distinct engagement models tailored to your innovation journey
              </p>
            </motion.div>

            <div className="py-6 bg-linear-to-r from-gray-900/80 to-black/80 backdrop-blur-lg border border-gray-800/30 rounded-2xl overflow-hidden">
              <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
              <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
            </div>
          </div> */}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="group relative px-10 py-4 bg-linear-to-r from-[#76ebda] to-cyan-500 rounded-full font-semibold text-lg text-gray-900 hover:shadow-2xl hover:shadow-[#76ebda]/40 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-[#76ebda] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 border border-[#76ebda]/30 rounded-full"
                />
              </button>

              <button className="px-10 py-4 rounded-full font-semibold text-lg border-2 border-gray-700 text-gray-300 hover:border-[#76ebda]/50 hover:text-white transition-all duration-300">
                Explore Our Models
              </button>
            </div>


          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500 mb-2">SCROLL TO EXPLORE</span>
          <div className="w-6 h-10 border-2 border-gray-800 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-linear-to-b from-[#76ebda] to-transparent rounded-full"
            />
          </div>
        </div>
      </motion.div>
      <div className="mb-16 w-full overflow-hidden">
        <div className="py-6 bg-linear-to-r from-gray-900/80 to-black/80 backdrop-blur-lg border border-gray-800/30 rounded-2xl overflow-hidden">
          <ParallaxText baseVelocity={-3}>Innovating Your Business Future</ParallaxText>
          <ParallaxText baseVelocity={3}>Solutions That Drive Success</ParallaxText>

        </div>
        {/* <MovingSlider /> */}
      </div>
    </section>
  )
}

export default Hero