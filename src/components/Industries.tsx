import React, { useState, useEffect, useRef } from 'react';
import {
  Banknote,
  Heart,
  Factory,
  ShoppingCart,
  GraduationCap,
  Plane,
  Shield,
  TrendingUp,
  Target,
  Globe,
  Cpu,
  Brain,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      id: 1,
      name: "Financial Services",
      icon: <Banknote className="w-6 h-6" />,
      description: "Secure, compliant technology solutions for banking, insurance, and fintech companies worldwide",
      solutions: [
        { name: "RegTech Compliance", icon: <Shield className="w-4 h-4" /> },
        { name: "Fraud Detection AI", icon: <Brain className="w-4 h-4" /> },
        { name: "Digital Banking Platforms", icon: <Smartphone className="w-4 h-4" /> },
        { name: "Blockchain Integration", icon: <Cpu className="w-4 h-4" /> }
      ],
      metrics: [
        { value: "99.99%", label: "Transaction Accuracy" },
        { value: "60%", label: "Cost Reduction" },
        { value: "3x", label: "Processing Speed" }
      ],
      color: "#06b6d4",
      gradient: "from-cyan-500 to-blue-500",
      caseStudy: {
        client: "Global Investment Bank",
        result: "Reduced compliance costs by 60% while improving transaction speed by 3x",
        metrics: "$15M Annual Savings"
      }
    },
    {
      id: 2,
      name: "Healthcare",
      icon: <Heart className="w-6 h-6" />,
      description: "HIPAA-compliant systems and AI-powered healthcare solutions for better patient outcomes",
      solutions: [
        { name: "Telemedicine Platforms", icon: <Smartphone className="w-4 h-4" /> },
        { name: "Patient Data Analytics", icon: <Brain className="w-4 h-4" /> },
        { name: "IoT Medical Devices", icon: <Cpu className="w-4 h-4" /> },
        { name: "Clinical Trial Management", icon: <Shield className="w-4 h-4" /> }
      ],
      metrics: [
        { value: "40%", label: "Faster Diagnoses" },
        { value: "95%", label: "Patient Satisfaction" },
        { value: "25%", label: "Cost Reduction" }
      ],
      color: "#ec4899",
      gradient: "from-pink-500 to-purple-500",
      caseStudy: {
        client: "National Healthcare Network",
        result: "Improved patient outcomes by 40% with AI-powered diagnostics",
        metrics: "500K+ Patients Served"
      }
    },
    {
      id: 3,
      name: "Manufacturing",
      icon: <Factory className="w-6 h-6" />,
      description: "Industrial IoT and predictive maintenance for smart factories and Industry 4.0",
      solutions: [
        { name: "Industrial IoT Systems", icon: <Cpu className="w-4 h-4" /> },
        { name: "Predictive Maintenance", icon: <Brain className="w-4 h-4" /> },
        { name: "Supply Chain Optimization", icon: <Globe className="w-4 h-4" /> },
        { name: "Quality Control AI", icon: <Shield className="w-4 h-4" /> }
      ],
      metrics: [
        { value: "70%", label: "Downtime Reduction" },
        { value: "35%", label: "Efficiency Gain" },
        { value: "50%", label: "Quality Improvement" }
      ],
      color: "#10b981",
      gradient: "from-emerald-500 to-teal-500",
      caseStudy: {
        client: "Automotive Manufacturer",
        result: "Reduced production downtime by 70% with predictive maintenance",
        metrics: "$8M Annual Savings"
      }
    },
    {
      id: 4,
      name: "Retail & E-commerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Omnichannel platforms and personalized shopping experiences that drive conversions",
      solutions: [
        { name: "Personalization Engines", icon: <Brain className="w-4 h-4" /> },
        { name: "Inventory Optimization", icon: <TrendingUp className="w-4 h-4" /> },
        { name: "AR Shopping Experiences", icon: <Smartphone className="w-4 h-4" /> },
        { name: "Fraud Prevention", icon: <Shield className="w-4 h-4" /> }
      ],
      metrics: [
        { value: "35%", label: "Conversion Increase" },
        { value: "50%", label: "Customer Retention" },
        { value: "45%", label: "Cart Recovery" }
      ],
      color: "#f59e0b",
      gradient: "from-orange-500 to-red-500",
      caseStudy: {
        client: "Global Retail Chain",
        result: "Increased online conversion rates by 35% with AI personalization",
        metrics: "$25M Revenue Growth"
      }
    },
    {
      id: 5,
      name: "Education & EdTech",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Scalable learning platforms and adaptive education technology for modern learners",
      solutions: [
        { name: "Learning Management Systems", icon: <Cpu className="w-4 h-4" /> },
        { name: "Adaptive Learning AI", icon: <Brain className="w-4 h-4" /> },
        { name: "Virtual Classrooms", icon: <Smartphone className="w-4 h-4" /> },
        { name: "Student Analytics", icon: <TrendingUp className="w-4 h-4" /> }
      ],
      metrics: [
        { value: "60%", label: "Engagement Increase" },
        { value: "30%", label: "Learning Efficiency" },
        { value: "85%", label: "Student Satisfaction" }
      ],
      color: "#6366f1",
      gradient: "from-indigo-500 to-blue-500",
      caseStudy: {
        client: "University Consortium",
        result: "Improved student engagement by 60% with adaptive learning platforms",
        metrics: "1M+ Active Learners"
      }
    },
    {
      id: 6,
      name: "Travel & Hospitality",
      icon: <Plane className="w-6 h-6" />,
      description: "Digital transformation for airlines, hotels, and travel services globally",
      solutions: [
        { name: "Booking & Reservation Systems", icon: <Smartphone className="w-4 h-4" /> },
        { name: "Revenue Management AI", icon: <Brain className="w-4 h-4" /> },
        { name: "Customer Experience Platforms", icon: <Globe className="w-4 h-4" /> },
        { name: "Operational Efficiency", icon: <TrendingUp className="w-4 h-4" /> }
      ],
      metrics: [
        { value: "40%", label: "Booking Increase" },
        { value: "55%", label: "Customer Satisfaction" },
        { value: "30%", label: "Cost Reduction" }
      ],
      color: "#14b8a6",
      gradient: "from-teal-500 to-cyan-500",
      caseStudy: {
        client: "International Airline",
        result: "Increased online bookings by 40% with AI-powered recommendations",
        metrics: "$50M Revenue Growth"
      }
    }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen py-24 overflow-hidden bg-black">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-150 h-150 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-150 h-150 bg-linear-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[4rem_4rem]" />

        {/* Top glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-linear-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <Target className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              INDUSTRY EXPERTISE
            </span>
          </div>

          <h2
            className="text-4xl md:text-7xl font-black mb-6 leading-tight"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
            }}
          >
            <span className="text-white">Trusted By </span>
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>

          <p
            className="text-md md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            Deep domain expertise across major industries, delivering tailored solutions that address unique business challenges.
          </p>
        </div>

        {/* Industry Tabs */}
        <div
          className="mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
          }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index: number) => (
              // console.log("Rendering industry tab:", industry.name, "Active:", activeIndustry === index, "Hovered:", hoveredTab === index, index),
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(index)}
                onMouseEnter={() => setHoveredTab(index as any)}
                onMouseLeave={() => setHoveredTab(null)}
                className="relative px-6 py-3.5 rounded-2xl flex items-center gap-3 transition-all duration-500 overflow-hidden group"
                style={{
                  background: activeIndustry === index
                    ? `linear-gradient(135deg, ${industry.color}, ${industry.color}dd)`
                    : 'rgba(255, 255, 255, 0.05)',
                  border: activeIndustry === index
                    ? '2px solid rgba(255, 255, 255, 0.2)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  transform: hoveredTab === index ? 'translateY(-4px) scale(1.05)' : 'translateY(0) scale(1)',
                  boxShadow: activeIndustry === index ? `0 10px 40px ${industry.color}40` : 'none'
                }}
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${industry.color}20, ${industry.color}10)`
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                  <div className={activeIndustry === index ? 'text-white' : 'text-gray-400 group-hover:text-white transition-colors'}>
                    {industry.icon}
                  </div>
                  <span className={`font-semibold ${activeIndustry === index ? 'text-white' : 'text-gray-300 group-hover:text-white'} transition-colors`}>
                    {industry.name}
                  </span>
                  {activeIndustry === index && (
                    <div
                      className="w-2 h-2 rounded-full bg-white"
                      style={{
                        animation: 'pulse 2s ease-in-out infinite'
                      }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Industry Detail */}
        <div className="max-w-7xl mx-auto">
          <div
            className="relative md:p-6 xs:p-2 rounded-3xl bg-linear-to-r from-white/5 to-white/0 border border-white/10 backdrop-blur-xl overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
            }}
          >
            {/* Background gradient */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                background: `radial-gradient(circle at 30% 50%, ${industries[activeIndustry].color}40, transparent 70%)`
              }}
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                {/* Industry Header */}
                <div className="flex items-start gap-3 mb-8">
                  <div
                    className="p-5 rounded-2xl shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${industries[activeIndustry].color}, ${industries[activeIndustry].color}dd)`,
                      boxShadow: `0 20px 60px ${industries[activeIndustry].color}40`
                    }}
                  >
                    {industries[activeIndustry].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-white mb-3 leading-tight">
                      {industries[activeIndustry].name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-xs">
                      {industries[activeIndustry].description}
                    </p>
                  </div>
                </div>

                {/* Solutions Grid */}
                <div className="mb-8">
                  <h4 className="text-md font-bold text-white mb-5 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" style={{ color: industries[activeIndustry].color }} />
                    Key Solutions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industries[activeIndustry].solutions.map((solution, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                        style={{
                          animation: `slideInLeft 0.6s ease-out ${idx * 0.1}s backwards`
                        }}
                      >
                        <div
                          className="p-2 rounded-lg group-hover:scale-110 transition-transform duration-300"
                          style={{
                            backgroundColor: `${industries[activeIndustry].color}20`,
                            color: industries[activeIndustry].color
                          }}
                        >
                          {solution.icon}
                        </div>
                        <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                          {solution.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-8">
                  {industries[activeIndustry].metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="text-center p-2 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s backwards`
                      }}
                    >
                      <div
                        className="text-md font-black mb-2"
                        style={{
                          color: industries[activeIndustry].color,
                          textShadow: `0 0 30px ${industries[activeIndustry].color}60`
                        }}
                      >
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-400 font-medium">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Case Study */}
                <div
                  className="p-2 rounded-2xl border overflow-hidden relative"
                  style={{
                    background: `linear-gradient(135deg, ${industries[activeIndustry].color}15, ${industries[activeIndustry].color}05)`,
                    borderColor: `${industries[activeIndustry].color}30`
                  }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ backgroundColor: industries[activeIndustry].color }} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5" style={{ color: industries[activeIndustry].color }} />
                      <h4 className="text-md font-bold text-white">Success Story</h4>
                    </div>
                    <p className="text-gray-300 text-xs mb-4 leading-relaxed">
                      <span className="font-bold" style={{ color: industries[activeIndustry].color }}>
                        {industries[activeIndustry].caseStudy.client}:
                      </span>{" "}
                      {industries[activeIndustry].caseStudy.result}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="text-sm text-gray-400">
                        Verified Results • Enterprise Client
                      </div>
                      <div
                        className="px-2 py-1 rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: `${industries[activeIndustry].color}20`,
                          color: industries[activeIndustry].color,
                          border: `1px solid ${industries[activeIndustry].color}40`
                        }}
                      >
                        {industries[activeIndustry].caseStudy.metrics}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Visualization */}
              <div className="relative">
                <div className="relative h-full min-h-125 rounded-3xl overflow-hidden bg-linear-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
                  {/* Center visualization */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="relative w-72 h-72"
                      style={{
                        animation: 'spin 30s linear infinite'
                      }}
                    >
                      {/* Outer rings */}
                      <div className="absolute inset-0 border-2 border-white/10 rounded-full" />
                      <div className="absolute inset-8 border-2 border-white/5 rounded-full" />
                      <div className="absolute inset-16 border border-white/5 rounded-full" />

                      {/* Center icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-24 h-24 rounded-full flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${industries[activeIndustry].color}, ${industries[activeIndustry].color}dd)`,
                            boxShadow: `0 0 80px ${industries[activeIndustry].color}60`,
                            animation: 'pulse 3s ease-in-out infinite'
                          }}
                        >
                          {industries[activeIndustry].icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Orbiting solution nodes */}
                  {industries[activeIndustry].solutions.map((solution, idx) => {
                    const angle = (idx / industries[activeIndustry].solutions.length) * Math.PI * 2;
                    const radius = 130;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                      <div
                        key={idx}
                        className="absolute w-12 h-12 rounded-full bg-black/80 border-2 flex items-center justify-center backdrop-blur-sm"
                        style={{
                          left: `calc(50% + ${x}px - 24px)`,
                          top: `calc(50% + ${y}px - 24px)`,
                          borderColor: industries[activeIndustry].color,
                          boxShadow: `0 0 20px ${industries[activeIndustry].color}40`,
                          animation: `fadeIn 0.8s ease-out ${idx * 0.2}s backwards`
                        }}
                      >
                        <div style={{ color: industries[activeIndustry].color }}>
                          {solution.icon}
                        </div>
                      </div>
                    );
                  })}

                  {/* Floating particles */}
                  {[...Array(12)].map((_, idx) => (
                    <div
                      key={idx}
                      className="absolute w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: industries[activeIndustry].color,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
                        animationDelay: `${idx * 0.3}s`,
                        opacity: 0.4
                      }}
                    />
                  ))}

                  {/* Bottom indicator */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-3 gap-4">
                      {["Security", "Scalability", "ROI"].map((item, idx) => (
                        <div key={idx} className="text-center">
                          <div
                            className="w-2 h-2 rounded-full mx-auto mb-2"
                            style={{
                              backgroundColor: industries[activeIndustry].color,
                              animation: 'pulse 2s ease-in-out infinite',
                              animationDelay: `${idx * 0.3}s`
                            }}
                          />
                          <div className="text-xs text-gray-400 font-medium">{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats overlay */}
                <div className="absolute mb-5 -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                  <div className="px-4 py-2 rounded-2xl bg-black/90 border border-white/20 backdrop-blur-xl">
                    <div className="flex items-center justify-around">
                      <div className="text-center">
                        <div className="text-md font-black text-white mb-1">100+</div>
                        <div className="text-xs text-gray-400">Projects</div>
                      </div>
                      <div className="h-8 w-px bg-white/20" />
                      <div className="text-center">
                        <div className="text-md font-black text-white mb-1">95%</div>
                        <div className="text-xs text-gray-400">Retention</div>
                      </div>
                      <div className="h-8 w-px bg-white/20" />
                      <div className="text-center">
                        <div className="text-md font-black text-white mb-1">24/7</div>
                        <div className="text-xs text-gray-400">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-15px) translateX(10px); }
          50% { transform: translateY(-8px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(5px); }
        }
      `}</style>
    </section>
  );
};

export default Industries;