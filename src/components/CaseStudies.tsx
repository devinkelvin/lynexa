import React, { useState, useEffect, useRef } from 'react';
import {
    Building2, TrendingUp, Clock, Users,
    ChevronLeft, ChevronRight, Play, ExternalLink,
    CheckCircle, Award, Target, Zap, Quote
} from 'lucide-react';

const CaseStudies = () => {
    const [activeCase, setActiveCase] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredResult, setHoveredResult] = useState(null);
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

    const caseStudies = [
        {
            id: 1,
            client: "Global Investment Bank",
            industry: "Finance & Banking",
            challenge: "Legacy trading systems causing 4+ hours of daily downtime and compliance risks with SEC regulations.",
            solution: "Modernized entire trading platform to microservices architecture with AI-powered risk assessment algorithms and real-time monitoring.",
            results: [
                { metric: "99.99%", label: "System Uptime", change: "+15%", icon: <Zap className="w-5 h-5" /> },
                { metric: "3x", label: "Transaction Speed", change: "+200%", icon: <TrendingUp className="w-5 h-5" /> },
                { metric: "$15M", label: "Annual Savings", change: "+40%", icon: <Award className="w-5 h-5" /> },
                { metric: "0", label: "Compliance Issues", change: "-100%", icon: <CheckCircle className="w-5 h-5" /> }
            ],
            duration: "6 Months",
            teamSize: "12 Engineers",
            technologies: ["AWS", "Kubernetes", "React", "Python", "TensorFlow"],
            testimonial: "Their solution transformed our trading operations. We've seen zero downtime since deployment and our compliance costs dropped by 60%.",
            testimonialAuthor: "Michael Chen",
            testimonialRole: "CTO, Global Investment Bank",
            color: "#06b6d4",
            gradient: "from-cyan-500 to-blue-500"
        },
        {
            id: 2,
            client: "Healthcare Network",
            industry: "Healthcare",
            challenge: "Patient data silos across 15 hospitals affecting care coordination and increasing diagnostic time by up to 8 hours.",
            solution: "Unified healthcare platform with predictive analytics, real-time patient monitoring, and AI-powered diagnostic assistance.",
            results: [
                { metric: "40%", label: "Faster Diagnoses", change: "+40%", icon: <Zap className="w-5 h-5" /> },
                { metric: "25%", label: "Cost Reduction", change: "-25%", icon: <Award className="w-5 h-5" /> },
                { metric: "95%", label: "Patient Satisfaction", change: "+20%", icon: <CheckCircle className="w-5 h-5" /> },
                { metric: "60%", label: "Staff Efficiency", change: "+60%", icon: <TrendingUp className="w-5 h-5" /> }
            ],
            duration: "8 Months",
            teamSize: "8 Engineers",
            technologies: ["Azure", "Node.js", "React Native", "PostgreSQL", "ML Models"],
            testimonial: "The platform has revolutionized patient care across our network. Critical diagnoses now happen in minutes, not hours, saving lives every day.",
            testimonialAuthor: "Dr. Sarah Johnson",
            testimonialRole: "Chief Medical Officer, Healthcare Network",
            color: "#ec4899",
            gradient: "from-pink-500 to-purple-500"
        },
        {
            id: 3,
            client: "Manufacturing Conglomerate",
            industry: "Industrial Manufacturing",
            challenge: "Inefficient supply chain causing 30% material waste, delayed deliveries, and $12M in annual losses from unexpected downtime.",
            solution: "IoT-enabled supply chain optimization with predictive maintenance, real-time tracking, and automated quality control systems.",
            results: [
                { metric: "70%", label: "Reduced Downtime", change: "+70%", icon: <Zap className="w-5 h-5" /> },
                { metric: "45%", label: "Less Material Waste", change: "-45%", icon: <Target className="w-5 h-5" /> },
                { metric: "50%", label: "On-Time Delivery", change: "+50%", icon: <TrendingUp className="w-5 h-5" /> },
                { metric: "$8M", label: "Annual Savings", change: "+35%", icon: <Award className="w-5 h-5" /> }
            ],
            duration: "5 Months",
            teamSize: "6 Engineers",
            technologies: ["AWS IoT", "Python", "React", "MongoDB", "ML Algorithms"],
            testimonial: "The predictive maintenance system alone saved us millions in unexpected downtime costs. Our supply chain is now the most efficient in the industry.",
            testimonialAuthor: "Robert Kim",
            testimonialRole: "Operations Director, Manufacturing Conglomerate",
            color: "#10b981",
            gradient: "from-emerald-500 to-teal-500"
        }
    ];

    const currentCase = caseStudies[activeCase];

    const handlePrevious = () => {
        setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };

    const handleNext = () => {
        setActiveCase((prev) => (prev + 1) % caseStudies.length);
    };

    return (
        <section ref={sectionRef} className="relative min-h-screen py-24 overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-150 h-150 bg-linear-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-150 h-150 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-size-[4rem_4rem]" />

                {/* Top glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div
                            className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-linear-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/20 backdrop-blur-xl"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <Award className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm font-semibold bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                PROVEN RESULTS
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
                            <span className="text-white">Enterprise Success </span>
                            <span className="bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Stories
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
                            Real-world transformations delivering measurable business impact for global enterprises.
                        </p>
                    </div>

                    {/* Industry Navigation */}
                    <div
                        className="flex flex-wrap justify-center gap-3 mb-16"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                        }}
                    >
                        {caseStudies.map((study, index) => (
                            <button
                                key={study.id}
                                onClick={() => setActiveCase(index)}
                                className="relative px-6 py-3.5 rounded-2xl flex items-center gap-3 transition-all duration-500 overflow-hidden group"
                                style={{
                                    background: activeCase === index
                                        ? `linear-gradient(135deg, ${study.color}, ${study.color}dd)`
                                        : 'rgba(255, 255, 255, 0.05)',
                                    border: activeCase === index
                                        ? '2px solid rgba(255, 255, 255, 0.2)'
                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                    transform: activeCase === index ? 'scale(1.05)' : 'scale(1)',
                                    boxShadow: activeCase === index ? `0 20px 60px ${study.color}40` : 'none'
                                }}
                            >
                                <Building2 className={`w-5 h-5 ${activeCase === index ? 'text-white' : 'text-gray-400'}`} />
                                <span className={`font-semibold ${activeCase === index ? 'text-white' : 'text-gray-300'}`}>
                                    {study.industry}
                                </span>
                                {activeCase === index && (
                                    <div
                                        className="w-2 h-2 rounded-full bg-white"
                                        style={{ animation: 'pulse 2s ease-in-out infinite' }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                        {/* Left Column - Details */}
                        <div
                            key={`details-${activeCase}`}
                            className="relative"
                            style={{
                                animation: 'fadeIn 0.6s ease-out'
                            }}
                        >
                            <div className="relative p-8 md:p-10 rounded-3xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl overflow-hidden">
                                {/* Background gradient */}
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        background: `radial-gradient(circle at 30% 50%, ${currentCase.color}40, transparent 70%)`
                                    }}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="flex items-center gap-4 flex-1">
                                            <div
                                                className="p-4 rounded-2xl shrink-0"
                                                style={{
                                                    background: `linear-gradient(135deg, ${currentCase.color}, ${currentCase.color}dd)`,
                                                    boxShadow: `0 20px 60px ${currentCase.color}40`
                                                }}
                                            >
                                                <Building2 className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                                                    {currentCase.client}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-3">
                                                    <span
                                                        className="px-3 py-1 rounded-full text-sm font-semibold"
                                                        style={{
                                                            backgroundColor: `${currentCase.color}20`,
                                                            color: currentCase.color,
                                                            border: `1px solid ${currentCase.color}40`
                                                        }}
                                                    >
                                                        {currentCase.industry}
                                                    </span>
                                                    <div className="flex items-center gap-2 text-gray-400">
                                                        <Clock className="w-4 h-4" />
                                                        <span className="text-sm">{currentCase.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-gray-400">
                                                        <Users className="w-4 h-4" />
                                                        <span className="text-sm">{currentCase.teamSize}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Challenge */}
                                    <div className="mb-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-2 h-2 rounded-full bg-red-500" />
                                            <h4 className="text-lg font-bold text-white">The Challenge</h4>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed pl-4 border-l-2 border-red-500/30">
                                            {currentCase.challenge}
                                        </p>
                                    </div>

                                    {/* Solution */}
                                    <div className="mb-8">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            <h4 className="text-lg font-bold text-white">Our Solution</h4>
                                        </div>
                                        <p className="text-gray-300 leading-relaxed pl-4 border-l-2 border-emerald-500/30">
                                            {currentCase.solution}
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    <div className="pt-6 border-t border-white/10">
                                        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                            <Zap className="w-5 h-5" style={{ color: currentCase.color }} />
                                            Technologies Used
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {currentCase.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                                    style={{
                                                        animation: `slideInLeft 0.5s ease-out ${idx * 0.1}s backwards`
                                                    }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Results */}
                        <div
                            key={`results-${activeCase}`}
                            style={{
                                animation: 'fadeIn 0.6s ease-out 0.2s backwards'
                            }}
                        >
                            {/* Results Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {currentCase.results.map((result, idx: number) => (
                                    <div
                                        key={idx}
                                        className="relative p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl overflow-hidden group hover:border-white/20 transition-all duration-300"
                                        onMouseEnter={() => setHoveredResult(idx as any)}
                                        onMouseLeave={() => setHoveredResult(null)}
                                        style={{
                                            animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s backwards`,
                                            transform: hoveredResult === idx ? 'translateY(-4px)' : 'translateY(0)'
                                        }}
                                    >
                                        {/* Background glow */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background: `radial-gradient(circle at center, ${currentCase.color}15, transparent 70%)`
                                            }}
                                        />

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between mb-3">
                                                <div
                                                    className="p-2 rounded-lg"
                                                    style={{
                                                        backgroundColor: `${currentCase.color}20`,
                                                        color: currentCase.color
                                                    }}
                                                >
                                                    {result.icon}
                                                </div>
                                                <span
                                                    className="px-2.5 py-1 rounded-full text-xs font-bold"
                                                    style={{
                                                        backgroundColor: `${currentCase.color}20`,
                                                        color: currentCase.color,
                                                        border: `1px solid ${currentCase.color}40`
                                                    }}
                                                >
                                                    {result.change}
                                                </span>
                                            </div>

                                            <div
                                                className="text-xl md:text-2xl font-black mb-2"
                                                style={{
                                                    color: currentCase.color,
                                                    textShadow: `0 0 30px ${currentCase.color}60`
                                                }}
                                            >
                                                {result.metric}
                                            </div>

                                            <div className="text-sm text-gray-400 font-medium mb-3">
                                                {result.label}
                                            </div>

                                            {/* Progress bar */}
                                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full transition-all duration-1000"
                                                    style={{
                                                        background: `linear-gradient(90deg, ${currentCase.color}, ${currentCase.color}dd)`,
                                                        width: hoveredResult === idx ? '100%' : '70%'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Testimonial */}
                            <div
                                className="relative p-8 rounded-3xl border overflow-hidden"
                                style={{
                                    background: `linear-gradient(135deg, ${currentCase.color}15, ${currentCase.color}05)`,
                                    borderColor: `${currentCase.color}30`
                                }}
                            >
                                {/* Quote icon */}
                                <div
                                    className="absolute top-6 right-6 opacity-10"
                                    style={{ color: currentCase.color }}
                                >
                                    <Quote className="w-20 h-20" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div
                                            className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                                            style={{
                                                background: `linear-gradient(135deg, ${currentCase.color}, ${currentCase.color}dd)`,
                                                boxShadow: `0 10px 30px ${currentCase.color}40`
                                            }}
                                        >
                                            <span className="text-white font-bold text-xl">
                                                {currentCase.testimonialAuthor.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white">
                                                {currentCase.testimonialAuthor}
                                            </h4>
                                            <p className="text-sm text-gray-400">
                                                {currentCase.testimonialRole}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed italic">
                                        "{currentCase.testimonial}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center gap-6 mb-12">
                        <button
                            onClick={handlePrevious}
                            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        </button>

                        <div className="flex items-center gap-3">
                            {caseStudies.map((study, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveCase(idx)}
                                    className="transition-all duration-300"
                                    style={{
                                        width: idx === activeCase ? '32px' : '8px',
                                        height: '8px',
                                        borderRadius: '9999px',
                                        background: idx === activeCase
                                            ? `linear-gradient(90deg, ${study.color}, ${study.color}dd)`
                                            : 'rgba(255, 255, 255, 0.2)'
                                    }}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                        </button>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <button
                            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                                boxShadow: '0 10px 40px #06b6d440'
                            }}
                        >
                            <Play className="w-5 h-5" />
                            <span>View All Case Studies</span>
                            <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>
        </section>
    );
};

export default CaseStudies;