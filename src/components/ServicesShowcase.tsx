import React, { useState, useEffect, useRef } from 'react';
import { Cloud, Brain, ShieldCheck, RefreshCw, Server, Database, Zap, Globe, Cpu, Cable, Wifi, Radio } from 'lucide-react';

const ServicesShowcase = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [wireProgress, setWireProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const sectionRef = useRef(null);

  // Wire animation
  useEffect(() => {
    const animateWires = () => {
      setWireProgress(prev => (prev >= 100 ? 0 : prev + 0.3));
      animationRef.current = requestAnimationFrame(animateWires);
    };

    animationRef.current = requestAnimationFrame(animateWires);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Canvas drawing for flowing cables only
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawFlowingCables = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;
      const progress = wireProgress / 100;

      // Draw multiple flowing cables
      for (let i = 0; i < 8; i++) {
        const yOffset = (canvas.height / 9) * (i + 2);
        const amplitude = 25;
        const frequency = 0.015;
        const speed = 0.3;
        const hue = 190 + (i * 5);

        // Main cable - thicker, more visible
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.4 + i * 0.05})`;

        for (let x = 0; x <= canvas.width; x += 3) {
          const y = yOffset + Math.sin((x * frequency) + (time * speed) + (i * 0.5)) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Cable glow effect
        ctx.beginPath();
        ctx.lineWidth = 8;
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 + i * 0.03})`;

        for (let x = 0; x <= canvas.width; x += 3) {
          const y = yOffset + Math.sin((x * frequency) + (time * speed) + (i * 0.5)) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Moving pulse along the cable
        const pulsePosition = (progress * canvas.width * 1.5) + (i * 80);
        const pulseX = pulsePosition % (canvas.width + 400) - 200;
        const pulseY = yOffset + Math.sin((pulseX * frequency) + (time * speed) + (i * 0.5)) * amplitude;

        // Pulse glow
        const gradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 25);
        gradient.addColorStop(0, `rgba(6, 182, 212, 0.9)`);
        gradient.addColorStop(0.4, `rgba(6, 182, 212, 0.3)`);
        gradient.addColorStop(0.8, `rgba(6, 182, 212, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(pulseX, pulseY, 25, 0, Math.PI * 2);
        ctx.fill();

        // Pulse core
        ctx.beginPath();
        ctx.fillStyle = '#06b6d4';
        ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Additional flowing cables in opposite direction
      for (let i = 0; i < 6; i++) {
        const yOffset = (canvas.height / 7) * (i + 1.5);
        const amplitude = 20;
        const frequency = 0.018;
        const speed = -0.25; // Reverse direction
        const hue = 260 + (i * 8);

        // Secondary cables in purple/blue
        ctx.beginPath();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 + i * 0.04})`;

        for (let x = canvas.width; x >= 0; x -= 3) {
          const y = yOffset + Math.sin((x * frequency) + (time * speed) + (i * 0.7)) * amplitude;
          if (x === canvas.width) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Cable glow
        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.08 + i * 0.02})`;

        for (let x = canvas.width; x >= 0; x -= 3) {
          const y = yOffset + Math.sin((x * frequency) + (time * speed) + (i * 0.7)) * amplitude;
          if (x === canvas.width) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Moving pulse
        const pulsePosition = (progress * canvas.width * 1.2) + (i * 120);
        const pulseX = canvas.width - (pulsePosition % (canvas.width + 400) - 200);
        const pulseY = yOffset + Math.sin((pulseX * frequency) + (time * speed) + (i * 0.7)) * amplitude;

        const gradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 25);
        gradient.addColorStop(0, `rgba(139, 92, 246, 0.8)`);
        gradient.addColorStop(0.4, `rgba(139, 92, 246, 0.3)`);
        gradient.addColorStop(0.8, `rgba(139, 92, 246, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(pulseX, pulseY, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = '#8b5cf6';
        ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Thick data stream cables
      for (let i = 0; i < 4; i++) {
        const yOffset = (canvas.height / 5) * (i + 1);
        const amplitude = 30;
        const frequency = 0.012;
        const speed = 0.4 + (i * 0.05);

        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = `rgba(16, 185, 129, ${0.25 + i * 0.05})`;

        for (let x = 0; x <= canvas.width; x += 4) {
          const y = yOffset + Math.sin((x * frequency) + (time * speed) + (i * 0.3)) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Thick glow
        ctx.beginPath();
        ctx.lineWidth = 12;
        ctx.strokeStyle = `rgba(16, 185, 129, ${0.06 + i * 0.02})`;

        for (let x = 0; x <= canvas.width; x += 4) {
          const y = yOffset + Math.sin((x * frequency) + (time * speed) + (i * 0.3)) * amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Bright pulse
        const pulsePosition = (progress * canvas.width * 2) + (i * 150);
        const pulseX = pulsePosition % (canvas.width + 500) - 250;
        const pulseY = yOffset + Math.sin((pulseX * frequency) + (time * speed) + (i * 0.3)) * amplitude;

        const gradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 35);
        gradient.addColorStop(0, `rgba(16, 185, 129, 0.9)`);
        gradient.addColorStop(0.4, `rgba(16, 185, 129, 0.4)`);
        gradient.addColorStop(0.8, `rgba(16, 185, 129, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(pulseX, pulseY, 35, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = '#10b981';
        ctx.arc(pulseX, pulseY, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animationLoop = () => {
      drawFlowingCables();
      animationRef.current = requestAnimationFrame(animationLoop);
    };

    animationRef.current = requestAnimationFrame(animationLoop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [wireProgress]);

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

  const services = [
    {
      id: 1,
      icon: <Cloud className="w-8 h-8" />,
      title: "Enterprise Cloud Migration",
      description: "Seamless transition to cloud-native architectures with zero business disruption",
      features: [
        "AWS/Azure/GCP Migration Strategy",
        "Legacy System Modernization",
        "Containerization & Orchestration",
        "Cloud Security & Compliance"
      ],
      metrics: "99.9% Success Rate",
      color: "#06b6d4",
      gradient: "from-cyan-500 to-blue-500",
      clients: 250,
      duration: "8-12 Weeks",
      stat1: { value: "500+", label: "Migrations" },
      stat2: { value: "99.9%", label: "Uptime" }
    },
    {
      id: 2,
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning Solutions",
      description: "Custom AI models that drive business intelligence and operational automation",
      features: [
        "Predictive Analytics & Forecasting",
        "Natural Language Processing",
        "Computer Vision Systems",
        "Recommendation Engines"
      ],
      metrics: "45% Efficiency Gain",
      color: "#8b5cf6",
      gradient: "from-purple-500 to-pink-500",
      clients: 180,
      duration: "12-16 Weeks",
      stat1: { value: "180+", label: "AI Models" },
      stat2: { value: "45%", label: "Efficiency" }
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Cybersecurity & Compliance",
      description: "End-to-end security solutions for regulated industries and enterprises",
      features: [
        "SOC 2 Type II Compliance",
        "GDPR/CCPA Implementation",
        "Threat Detection & Response",
        "Security Audits & Pen Testing"
      ],
      metrics: "Zero Breaches",
      color: "#10b981",
      gradient: "from-emerald-500 to-teal-500",
      clients: 320,
      duration: "6-10 Weeks",
      stat1: { value: "320+", label: "Secured" },
      stat2: { value: "100%", label: "Compliant" }
    },
    {
      id: 4,
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Complete business process re-engineering with modern technology stacks",
      features: [
        "Process Automation & Optimization",
        "Workflow Digitalization",
        "Digital Product Strategy",
        "Change Management"
      ],
      metrics: "200+ Completed",
      color: "#f59e0b",
      gradient: "from-orange-500 to-red-500",
      clients: 420,
      duration: "16-24 Weeks",
      stat1: { value: "420+", label: "Projects" },
      stat2: { value: "3x", label: "ROI" }
    },
    {
      id: 5,
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure Modernization",
      description: "Scalable, resilient infrastructure for mission-critical applications",
      features: [
        "Microservices Architecture",
        "DevOps & CI/CD Pipeline",
        "Load Balancing & Scaling",
        "Disaster Recovery"
      ],
      metrics: "99.99% Uptime",
      color: "#6366f1",
      gradient: "from-indigo-500 to-blue-500",
      clients: 190,
      duration: "10-14 Weeks",
      stat1: { value: "99.99%", label: "Uptime" },
      stat2: { value: "190+", label: "Systems" }
    },
    {
      id: 6,
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering & Analytics",
      description: "Data pipelines and analytics platforms for actionable insights",
      features: [
        "Real-time Data Processing",
        "Data Lake & Warehouse Design",
        "Business Intelligence Dashboards",
        "Data Governance & Quality"
      ],
      metrics: "70% Faster Insights",
      color: "#14b8a6",
      gradient: "from-teal-500 to-cyan-500",
      clients: 230,
      duration: "8-12 Weeks",
      stat1: { value: "10TB+", label: "Daily Data" },
      stat2: { value: "70%", label: "Faster" }
    }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen py-24 overflow-hidden bg-black">
      {/* Pure Flowing Cable Background Canvas - No Dots */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-25"
      />

      {/* Clean wireframe grid - subtle, no dots */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[6rem_6rem]" />
      </div>

      {/* Top edge glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Bottom edge glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div
            className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ENTERPRISE SOLUTIONS
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
            <span className="text-white">Solutions That </span>
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Scale With You
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
            Comprehensive technology solutions designed for enterprise growth, security, and digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + index * 0.1}s`
              }}
              onMouseEnter={() => setHoveredCard(index as any)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveService(index)}
            >
              {/* Clean cable connection - no dots */}
              {activeService === index && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-1 h-6 bg-linear-to-b from-cyan-500 to-transparent" />
                </div>
              )}

              <div
                className={`relative p-6 rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden ${activeService === index
                  ? 'bg-linear-to-r from-white/10 to-white/5 border-2 border-cyan-500/30 shadow-2xl'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/20'
                  } backdrop-blur-xl`}
                style={{
                  transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: activeService === index ? `0 20px 60px ${service.color}40, inset 0 0 30px ${service.color}10` : 'none'
                }}
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with flowing line */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="p-4 rounded-2xl w-fit transition-all duration-500"
                      style={{
                        background: activeService === index
                          ? `linear-gradient(135deg, ${service.color}, ${service.color}dd)`
                          : 'rgba(255, 255, 255, 0.05)',
                        transform: hoveredCard === index ? 'rotate(-5deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                        boxShadow: activeService === index ? `0 10px 30px ${service.color}40` : 'none'
                      }}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <div className="h-px w-full bg-linear-to-r from-cyan-500/30 to-transparent mb-2" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <span className={activeService === index ? 'text-gray-300' : 'text-gray-500'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-cyan-500/20">
                    <div>
                      <div
                        className="text-base font-bold mb-1"
                        style={{
                          color: service.color,
                          textShadow: activeService === index ? `0 0 20px ${service.color}80` : 'none'
                        }}
                      >
                        {service.metrics}
                      </div>
                      <div className="text-xs text-gray-500">Verified Results</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-white">{service.clients}+</div>
                      <div className="text-xs text-gray-500">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Service Detail Panel */}
        <div
          className="max-w-7xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
          }}
        >
          <div className="relative p-4 rounded-3xl bg-linear-to-r from-white/5 to-white/0 border border-cyan-500/20 backdrop-blur-xl overflow-hidden">
            {/* Clean flowing line overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,100 Q200,50 400,100 T800,100"
                  stroke="url(#flowGradient)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M0,200 Q300,150 600,200 T900,200"
                  stroke="url(#flowGradient)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <div className="flex items-start gap-6 mb-8">
                  <div
                    className="p-5 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${services[activeService].color}, ${services[activeService].color}dd)`,
                      boxShadow: `0 20px 60px ${services[activeService].color}40`
                    }}
                  >
                    {services[activeService].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight">
                      {services[activeService].title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-gray-300 backdrop-blur-sm">
                        {services[activeService].duration}
                      </div>
                      <div className="text-xs text-gray-400">
                        {services[activeService].clients}+ Successful Projects
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-md text-gray-300 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div
                      className="text-xl font-black mb-2"
                      style={{ color: services[activeService].color }}
                    >
                      {services[activeService].stat1.value}
                    </div>
                    <div className="text-xs text-gray-400">{services[activeService].stat1.label}</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div
                      className="text-xl font-black mb-2"
                      style={{ color: services[activeService].color }}
                    >
                      {services[activeService].stat2.value}
                    </div>
                    <div className="text-xs text-gray-400">{services[activeService].stat2.label}</div>
                  </div>
                </div>

                <button
                  className="group relative px-8 py-4 rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${services[activeService].color}, ${services[activeService].color}dd)`,
                    boxShadow: `0 10px 40px ${services[activeService].color}40`
                  }}
                >
                  <span className="relative z-10 flex items-center gap-3 text-xs">
                    Schedule Consultation
                    <Globe className="w-5 h-5" />
                  </span>
                  <div
                    className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  />
                </button>
              </div>

              {/* Right Column - Clean Network Visualization */}
              <div className="relative">
                <div className="relative h-96 rounded-3xl overflow-hidden bg-linear-to-r from-white/5 to-transparent border border-cyan-500/20 backdrop-blur-sm">
                  {/* Data flow visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div
                        className="w-32 h-32 rounded-full flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${services[activeService].color}20, ${services[activeService].color}05)`,
                          border: `2px solid ${services[activeService].color}30`
                        }}
                      >
                        <div
                          className="w-20 h-20 rounded-full flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${services[activeService].color}, ${services[activeService].color}dd)`,
                            boxShadow: `0 0 60px ${services[activeService].color}60`,
                            animation: 'pulse 3s ease-in-out infinite'
                          }}
                        >
                          {services[activeService].icon}
                        </div>
                      </div>

                      {/* Flowing lines - no dots */}
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
                        const rad = (angle * Math.PI) / 180;
                        const radius = 140;
                        const x = Math.cos(rad) * radius;
                        const y = Math.sin(rad) * radius;

                        return (
                          <div
                            key={idx}
                            className="absolute top-1/2 left-1/2"
                            style={{
                              transform: `translate(${x}px, ${y}px)`
                            }}
                          >
                            {/* Clean connection line */}
                            <div
                              className="absolute w-24 h-px bg-linear-to-r from-cyan-500 to-transparent"
                              style={{
                                transform: `rotate(${rad}rad) translateX(-24px)`,
                                animation: `flowLine 2s ease-in-out infinite ${idx * 0.1}s`
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Flow stats */}
                <div className="absolute -bottom-6 mb-4 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                  <div className="px-4 py-2 rounded-2xl bg-black/80 border border-cyan-500/20 backdrop-blur-xl">
                    <div className="flex items-center justify-around">
                      <div className="text-center">
                        <div className="text-lg font-black text-white mb-1">99.9%</div>
                        <div className="text-xs text-cyan-400">Uptime</div>
                      </div>
                      <div className="h-8 w-px bg-cyan-500/20" />
                      <div className="text-center">
                        <div className="text-lg font-black text-white mb-1">
                          {services[activeService].duration}
                        </div>
                        <div className="text-xs text-cyan-400">Deployment</div>
                      </div>
                      <div className="h-8 w-px bg-cyan-500/20" />
                      <div className="text-center">
                        <div className="text-lg font-black text-white mb-1">24/7</div>
                        <div className="text-xs text-cyan-400">Support</div>
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
        @keyframes flowLine {
          0%, 100% { opacity: 0.2; width: 24px; }
          50% { opacity: 0.8; width: 32px; }
        }
      `}</style>
    </section>
  );
};

export default ServicesShowcase;