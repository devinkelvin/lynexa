import React, { useState, useEffect, useRef } from 'react';
import {
    ChevronLeft, ChevronRight, Star, Quote,
    Building, Award, TrendingUp, Users, Play, Pause,
    CheckCircle, Sparkles
} from 'lucide-react';

const Testimonials = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [direction, setDirection] = useState('next');
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

    const testimonials = [
        {
            id: 1,
            quote: "Their AI implementation transformed our supply chain operations. We achieved a 45% reduction in operational costs while improving delivery times by 60%. The team's expertise in machine learning and their ability to understand our complex logistics challenges was exceptional.",
            author: "Sarah Chen",
            position: "Chief Technology Officer",
            company: "Global Logistics Corp",
            industry: "Logistics & Supply Chain",
            rating: 5,
            results: [
                { metric: "45%", label: "Cost Reduction" },
                { metric: "60%", label: "Delivery Speed" },
                { metric: "99.9%", label: "System Uptime" }
            ],
            color: "#06b6d4",
            gradient: "from-cyan-500 to-blue-500",
            initials: "SC"
        },
        {
            id: 2,
            quote: "The cybersecurity framework they implemented helped us achieve SOC 2 Type II compliance in record time. Their proactive approach to security, attention to detail, and comprehensive documentation was exactly what we needed for our FinTech platform. Outstanding work.",
            author: "James Rodriguez",
            position: "Chief Information Security Officer",
            company: "FinTech Solutions Inc.",
            industry: "Financial Technology",
            rating: 5,
            results: [
                { metric: "SOC 2", label: "Compliance" },
                { metric: "0", label: "Security Breaches" },
                { metric: "40%", label: "Faster Audits" }
            ],
            color: "#8b5cf6",
            gradient: "from-purple-500 to-pink-500",
            initials: "JR"
        },
        {
            id: 3,
            quote: "Working with their team on our digital transformation was a game-changer. They modernized our legacy systems, improved our operational efficiency by 50%, and delivered everything ahead of schedule. The results exceeded our expectations. Truly outstanding partnership.",
            author: "Michael Tanaka",
            position: "Digital Transformation Director",
            company: "Manufacturing Conglomerate",
            industry: "Industrial Manufacturing",
            rating: 5,
            results: [
                { metric: "50%", label: "Efficiency Gain" },
                { metric: "30%", label: "Cost Savings" },
                { metric: "2x", label: "Faster Deploy" }
            ],
            color: "#10b981",
            gradient: "from-emerald-500 to-teal-500",
            initials: "MT"
        },
        {
            id: 4,
            quote: "Their healthcare platform unified our patient data across 15 hospitals. Critical diagnoses now happen in minutes instead of hours, and we've seen a 40% improvement in patient outcomes. The impact on patient care has been truly remarkable and life-changing.",
            author: "Dr. Lisa Wang",
            position: "Chief Medical Officer",
            company: "National Healthcare Network",
            industry: "Healthcare",
            rating: 5,
            results: [
                { metric: "40%", label: "Better Outcomes" },
                { metric: "70%", label: "Faster Diagnosis" },
                { metric: "95%", label: "Satisfaction" }
            ],
            color: "#f59e0b",
            gradient: "from-orange-500 to-red-500",
            initials: "LW"
        }
    ];

    useEffect(() => {
        let interval: any;

        if (autoPlay) {
            interval = setInterval(() => {
                handleNext();
            }, 6000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [autoPlay, activeTestimonial]);

    const handleNext = () => {
        setDirection('next');
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrevious = () => {
        setDirection('prev');
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[activeTestimonial];

    return (
        <section ref={sectionRef} className="relative min-h-screen py-24 overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-150 h-150 bg-linear-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-150 h-150 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-size-[4rem_4rem]" />

                {/* Top glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div
                            className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-linear-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-xl"
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className="text-sm font-semibold bg-linear-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                                CLIENT TESTIMONIALS
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
                            <span className="text-white">Trusted by </span>
                            <span className="bg-linear-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                Enterprise Leaders
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
                            Hear from executives who have transformed their businesses with our enterprise solutions.
                        </p>
                    </div>

                    
                    <div
                        className="mb-16"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                        }}
                    >
                        <div className="relative">
                            {/* Carousel Container */}
                            <div className="overflow-hidden rounded-3xl">
                                <div
                                    key={activeTestimonial}
                                    className="relative"
                                    style={{
                                        animation: direction === 'next' ? 'slideInRight 0.6s ease-out' : 'slideInLeft 0.6s ease-out'
                                    }}
                                >
                                    <div className="grid lg:grid-cols-5 gap-8 p-8 md:p-12 bg-linear-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl rounded-3xl">
                                        {/* Left Column - Client Info (2 cols) */}
                                        <div className="lg:col-span-2 space-y-6">
                                            {/* Avatar & Basic Info */}
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black text-white shrink-0"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${currentTestimonial.color}, ${currentTestimonial.color}dd)`,
                                                        boxShadow: `0 20px 60px ${currentTestimonial.color}40`
                                                    }}
                                                >
                                                    {currentTestimonial.initials}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-black text-white mb-1">
                                                        {currentTestimonial.author}
                                                    </h3>
                                                    <p className="text-gray-400 text-sm mb-2">
                                                        {currentTestimonial.position}
                                                    </p>
                                                    <div className="flex items-center gap-2">
                                                        <Building className="w-4 h-4 text-gray-500" />
                                                        <span className="text-gray-400 text-sm">
                                                            {currentTestimonial.company}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Industry Badge */}
                                            <div
                                                className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                                                style={{
                                                    backgroundColor: `${currentTestimonial.color}20`,
                                                    color: currentTestimonial.color,
                                                    border: `1px solid ${currentTestimonial.color}40`
                                                }}
                                            >
                                                {currentTestimonial.industry}
                                            </div>

                                            {/* Rating */}
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center gap-1">
                                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className="w-5 h-5 fill-amber-400 text-amber-400"
                                                            style={{
                                                                animation: `starPop 0.5s ease-out ${i * 0.1}s backwards`
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-gray-400 font-semibold">5.0</span>
                                            </div>

                                            {/* Results */}
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4" style={{ color: currentTestimonial.color }} />
                                                    Measurable Results
                                                </h4>
                                                <div className="space-y-3">
                                                    {currentTestimonial.results.map((result, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                                            style={{
                                                                animation: `slideInLeft 0.5s ease-out ${idx * 0.1}s backwards`
                                                            }}
                                                        >
                                                            <span className="text-gray-300 text-sm font-medium">
                                                                {result.label}
                                                            </span>
                                                            <span
                                                                className="text-2xl font-black"
                                                                style={{
                                                                    color: currentTestimonial.color,
                                                                    textShadow: `0 0 20px ${currentTestimonial.color}60`
                                                                }}
                                                            >
                                                                {result.metric}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column - Quote (3 cols) */}
                                        <div className="lg:col-span-3 flex flex-col justify-center">
                                            {/* Quote Icon */}
                                            <div className="mb-6">
                                                <Quote
                                                    className="w-16 h-16 opacity-20"
                                                    style={{ color: currentTestimonial.color }}
                                                />
                                            </div>

                                            {/* Quote Text */}
                                            <blockquote className="mb-8">
                                                <p className="text-2xl text-white font-medium leading-relaxed">
                                                    "{currentTestimonial.quote}"
                                                </p>
                                            </blockquote>

                                            {/* Trust Indicators */}
                                            <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-4 pt-8 border-t border-white/10">
                                                {[
                                                    { icon: <Building className="w-5 h-5" />, label: "Enterprise Client" },
                                                    { icon: <Award className="w-5 h-5" />, label: "Industry Leader" },
                                                    { icon: <TrendingUp className="w-5 h-5" />, label: "Proven Results" }
                                                ].map((stat, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-3"
                                                        style={{
                                                            animation: `fadeIn 0.6s ease-out ${idx * 0.15}s backwards`
                                                        }}
                                                    >
                                                        <div
                                                            className="p-2 rounded-lg"
                                                            style={{
                                                                backgroundColor: `${currentTestimonial.color}20`,
                                                                color: currentTestimonial.color
                                                            }}
                                                        >
                                                            {stat.icon}
                                                        </div>
                                                        <span className="text-sm text-gray-400 font-medium">
                                                            {stat.label}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Controls */}
                            <div className="flex items-center justify-between mt-8">
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={handlePrevious}
                                        className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                    </button>

                                    <button
                                        onClick={() => setAutoPlay(!autoPlay)}
                                        className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                                    >
                                        {autoPlay ? (
                                            <Pause className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                        ) : (
                                            <Play className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                        )}
                                    </button>

                                    <button
                                        onClick={handleNext}
                                        className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                                    >
                                        <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                    </button>
                                </div>

                                {/* Dot Indicators */}
                                <div className="flex items-center gap-3">
                                    {testimonials.map((testimonial, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => {
                                                setDirection(idx > activeTestimonial ? 'next' : 'prev');
                                                setActiveTestimonial(idx);
                                            }}
                                            className="transition-all duration-300"
                                            style={{
                                                width: idx === activeTestimonial ? '40px' : '8px',
                                                height: '8px',
                                                borderRadius: '9999px',
                                                background: idx === activeTestimonial
                                                    ? `linear-gradient(90deg, ${testimonial.color}, ${testimonial.color}dd)`
                                                    : 'rgba(255, 255, 255, 0.2)'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
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
                            <Users className="w-5 h-5" />
                            <span>Join Our Enterprise Clients</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes starPop {
          0% { opacity: 0; transform: scale(0) rotate(-180deg); }
          50% { transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
      `}</style>
        </section>
    );
};

export default Testimonials;