import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ChevronRight, Calendar, Target, Cpu, Wrench, Rocket, Download, ArrowRight, Sparkles } from 'lucide-react';

const Methodology = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);
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

    useEffect(() => {
        setProgress(0);
        const timer = setTimeout(() => setProgress(100), 100);
        return () => clearTimeout(timer);
    }, [activeStep]);

    const methodology = [
        {
            step: 1,
            title: "Discovery & Assessment",
            description: "Comprehensive analysis of your current infrastructure, business goals, and technical requirements to establish a solid foundation.",
            duration: "2-3 Weeks",
            deliverables: [
                "Technical Audit Report",
                "ROI Analysis & Projections",
                "Strategic Roadmap",
                "Risk Assessment Matrix"
            ],
            icon: <Target className="w-6 h-6" />,
            color: "#06b6d4",
            gradient: "from-cyan-500 to-blue-500",
            tasks: ["Requirements Gathering", "System Analysis", "Stakeholder Interviews"]
        },
        {
            step: 2,
            title: "Architecture Design",
            description: "Enterprise-grade architecture design following industry best practices, compliance standards, and scalability requirements.",
            duration: "3-4 Weeks",
            deliverables: [
                "System Architecture Blueprint",
                "Security Implementation Plan",
                "Technology Stack Selection",
                "Development Timeline"
            ],
            icon: <Cpu className="w-6 h-6" />,
            color: "#8b5cf6",
            gradient: "from-purple-500 to-pink-500",
            tasks: ["Architecture Planning", "Technology Selection", "Security Design"]
        },
        {
            step: 3,
            title: "Agile Development",
            description: "Iterative development with continuous integration, automated testing, and regular client collaboration for optimal results.",
            duration: "8-16 Weeks",
            deliverables: [
                "Weekly Progress Demos",
                "Quality Assurance Reports",
                "Performance Metrics Dashboard",
                "Technical Documentation"
            ],
            icon: <Wrench className="w-6 h-6" />,
            color: "#10b981",
            gradient: "from-emerald-500 to-teal-500",
            tasks: ["Sprint Planning", "Development", "Testing & QA"]
        },
        {
            step: 4,
            title: "Deployment & Support",
            description: "Seamless deployment with zero-downtime strategies, comprehensive monitoring, ongoing support, and continuous optimization.",
            duration: "Ongoing",
            deliverables: [
                "Production Deployment",
                "Team Training & Handoff",
                "24/7 Support SLA",
                "Performance Optimization"
            ],
            icon: <Rocket className="w-6 h-6" />,
            color: "#f59e0b",
            gradient: "from-orange-500 to-red-500",
            tasks: ["Deployment", "Monitoring", "Support & Maintenance"]
        }
    ];

    return (
        <section ref={sectionRef} className="relative min-h-screen py-24 overflow-hidden bg-black">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-150 h-150 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-150 h-150 bg-linear-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-size-[4rem_4rem]" />

                {/* Top glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <div
                            className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-linear-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 border border-blue-500/20 backdrop-blur-xl"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-semibold bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                PROVEN METHODOLOGY
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
                            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                                Enterprise-Grade
                            </span>
                            <br />
                            <span className="text-white">Development Process</span>
                        </h2>

                        <p
                            className="text-md md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                            }}
                        >
                            Our structured approach ensures predictable outcomes, transparent communication, and successful project delivery.
                        </p>
                    </div>

                    {/* Step Navigation */}
                    <div
                        className="flex flex-wrap justify-center gap-4 mb-16"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                        }}
                    >
                        {methodology.map((step, index) => (
                            <button
                                key={step.step}
                                onClick={() => setActiveStep(index)}
                                className="group relative px-6 py-4 rounded-2xl transition-all duration-500 overflow-hidden"
                                style={{
                                    background: activeStep === index
                                        ? `linear-gradient(135deg, ${step.color}, ${step.color}dd)`
                                        : 'rgba(255, 255, 255, 0.05)',
                                    border: activeStep === index
                                        ? '2px solid rgba(255, 255, 255, 0.2)'
                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                    transform: activeStep === index ? 'translateY(-4px) scale(1.05)' : 'translateY(0) scale(1)',
                                    boxShadow: activeStep === index ? `0 10px 40px ${step.color}40` : 'none'
                                }}
                            >
                                {/* Hover gradient */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`
                                    }}
                                />

                                <div className="relative z-10 flex items-center gap-4">
                                    <div
                                        className="p-2.5 rounded-xl transition-all duration-300"
                                        style={{
                                            background: activeStep === index ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'
                                        }}
                                    >
                                        {step.icon}
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs text-gray-400 mb-1"
                                            style={{
                                                color: activeStep === index ? '#ffffff' : 'rgba(255, 255, 255, 0.1)'
                                            }}
                                        >STEP {step.step}</div>
                                        <div className="font-bold text-white">{step.title}</div>
                                    </div>
                                    {activeStep === index && (
                                        <div
                                            className="w-2 h-2 rounded-full bg-white ml-2"
                                            style={{
                                                animation: 'pulse 2s ease-in-out infinite'
                                            }}
                                        />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column - Details */}
                        <div>
                            <div
                                className="relative p-8 md:p-10 rounded-3xl bg-linear-to-r from-white/5 to-white/0 border border-white/10 backdrop-blur-xl overflow-hidden"
                                style={{
                                    animation: `fadeIn 0.8s ease-out`
                                }}
                            >
                                {/* Background gradient */}
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        background: `radial-gradient(circle at 30% 50%, ${methodology[activeStep].color}40, transparent 70%)`
                                    }}
                                />

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="p-4 rounded-2xl"
                                                style={{
                                                    background: `linear-gradient(135deg, ${methodology[activeStep].color}, ${methodology[activeStep].color}dd)`,
                                                    boxShadow: `0 20px 60px ${methodology[activeStep].color}40`
                                                }}
                                            >
                                                {methodology[activeStep].icon}
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-400 mb-1">STEP {methodology[activeStep].step}</div>
                                                <h3 className="text-2xl md:text-3xl font-black text-white">
                                                    {methodology[activeStep].title}
                                                </h3>
                                            </div>
                                        </div>
                                        <div
                                            className="text-7xl font-black opacity-10"
                                            style={{ color: methodology[activeStep].color }}
                                        >
                                            {methodology[activeStep].step}
                                        </div>
                                    </div>

                                    {/* Duration */}
                                    <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-xl bg-white/5 border border-white/10 w-fit">
                                        <Calendar className="w-4 h-4" style={{ color: methodology[activeStep].color }} />
                                        <span className="text-sm font-medium text-gray-300">{methodology[activeStep].duration}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                        {methodology[activeStep].description}
                                    </p>

                                    {/* Tasks */}
                                    <div className="mb-8">
                                        <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                                            <div className="w-1 h-4 rounded-full" style={{ backgroundColor: methodology[activeStep].color }} />
                                            Key Tasks
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {methodology[activeStep].tasks.map((task, idx) => (
                                                <div
                                                    key={idx}
                                                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300"
                                                    style={{
                                                        animation: `slideInLeft 0.4s ease-out ${idx * 0.1}s backwards`
                                                    }}
                                                >
                                                    {task}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Deliverables */}
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4" style={{ color: methodology[activeStep].color }} />
                                            Key Deliverables
                                        </h4>
                                        <div className="space-y-3">
                                            {methodology[activeStep].deliverables.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                                                    style={{
                                                        animation: `slideInLeft 0.5s ease-out ${idx * 0.1}s backwards`
                                                    }}
                                                >
                                                    <div
                                                        className="w-2 h-2 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                                                        style={{ backgroundColor: methodology[activeStep].color }}
                                                    />
                                                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mt-8">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm text-gray-400">Step Progress</span>
                                            <span className="text-sm font-bold" style={{ color: methodology[activeStep].color }}>
                                                {progress}%
                                            </span>
                                        </div>
                                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-1000 ease-out"
                                                style={{
                                                    width: `${progress}%`,
                                                    background: `linear-gradient(90deg, ${methodology[activeStep].color}, ${methodology[activeStep].color}dd)`
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Timeline */}
                        <div className="relative">
                            <div className="sticky top-24">
                                <div className="relative p-8 rounded-3xl bg-linear-to-r from-white/5 to-white/0 border border-white/10 backdrop-blur-xl">
                                    {/* Timeline Line */}
                                    {/* <div 
                    className="absolute left-12 top-8 bottom-8 w-1 rounded-full"
                    style={{
                      background: 'linear-gradient(180deg, #06b6d4, #8b5cf6, #10b981, #f59e0b)'
                    }}
                  /> */}

                                    {/* Timeline Points */}
                                    <div className="space-y-8">
                                        {methodology.map((step, index) => (
                                            <div
                                                key={step.step}
                                                className="relative"
                                                style={{
                                                    opacity: index <= activeStep ? 1 : 0.4,
                                                    transition: 'opacity 0.5s ease-out'
                                                }}
                                            >
                                                <div className="flex items-start gap-6">
                                                    {/* Circle */}
                                                    <div
                                                        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shrink-0 border-4 transition-all duration-500"
                                                        style={{
                                                            borderColor: index === activeStep
                                                                ? 'white'
                                                                : index < activeStep
                                                                    ? step.color
                                                                    : 'rgba(255, 255, 255, 0.1)',
                                                            background: index === activeStep
                                                                ? `linear-gradient(135deg, ${step.color}, ${step.color}dd)`
                                                                : index < activeStep
                                                                    ? `${step.color}30`
                                                                    : 'rgba(255, 255, 255, 0.05)',
                                                            boxShadow: index === activeStep ? `0 0 30px ${step.color}60` : 'none',
                                                            transform: index === activeStep ? 'scale(1.1)' : 'scale(1)'
                                                        }}
                                                    >
                                                        {index < activeStep ? (
                                                            <CheckCircle className="w-6 h-6 text-white" />
                                                        ) : (
                                                            <div className="text-white">{step.icon}</div>
                                                        )}
                                                    </div>

                                                    {/* Content */}
                                                    <div className="flex-1 pt-2">
                                                        <div className="flex items-start justify-between mb-2">
                                                            <h4 className="text-lg font-bold text-white">{step.title}</h4>
                                                            <span
                                                                className="text-xs px-3 py-1 rounded-full border whitespace-nowrap"
                                                                style={{
                                                                    borderColor: `${step.color}40`,
                                                                    backgroundColor: `${step.color}10`,
                                                                    color: step.color
                                                                }}
                                                            >
                                                                {step.duration}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-gray-400 leading-relaxed">
                                                            {step.description}
                                                        </p>

                                                        {/* Active indicator */}
                                                        {index === activeStep && (
                                                            <div className="mt-3 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                                                <div
                                                                    className="h-full rounded-full"
                                                                    style={{
                                                                        width: `${progress}%`,
                                                                        background: `linear-gradient(90deg, ${step.color}, ${step.color}dd)`,
                                                                        transition: 'width 1s ease-out'
                                                                    }}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    {/* <button
                                        className="w-full mt-8 px-6 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group"
                                        style={{
                                            background: `linear-gradient(135deg, ${methodology[activeStep].color}, ${methodology[activeStep].color}dd)`,
                                            boxShadow: `0 10px 40px ${methodology[activeStep].color}40`
                                        }}
                                    >
                                        <Download className="w-5 h-5" />
                                        <span>Download Methodology PDF</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
        </section>
    );
};

export default Methodology;