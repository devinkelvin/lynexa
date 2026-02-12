// components/EnterpriseCTA.tsx
"use client"

import React, { useState, useEffect, useRef } from 'react';
import {
    MessageSquare, Calendar, Download, CheckCircle,
    Shield, Zap, Globe, Users, ArrowRight, Mail, Phone, Send, Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion'

const EnterpriseCTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        companySize: '',
        interest: '',
        message: ''
    });
    const [isVisible, setIsVisible] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
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

    const handleSubmit = async () => {
        if (!formData.name || !formData.company || !formData.email || !formData.companySize || !formData.interest) {
            alert('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Form submitted:', formData);
        alert('Thank you! We will contact you within 24 hours.');
        setIsSubmitting(false);
        setFormData({
            name: '',
            company: '',
            email: '',
            companySize: '',
            interest: '',
            message: ''
        });
    };

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const benefits = [
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Enterprise Security",
          description: "SOC 2 Type II certified with end-to-end encryption",
          color: "#06b6d4"
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Rapid Deployment",
          description: "MVP launch in 8-12 weeks with agile methodology",
          color: "#8b5cf6"
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Global Support",
          description: "24/7/365 support across all major time zones",
          color: "#10b981"
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Dedicated Team",
          description: "Senior architects and engineers assigned to you",
          color: "#f59e0b"
        }
      ];
  
    return (
        <section ref={sectionRef} className="relative min-h-screen py-24 overflow-hidden bg-black">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/3 w-200 h-200 bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/3 w-200 h-200 bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-size-[4rem_4rem]" />

                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 4}s`
                        }}
                    />
                ))}

                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-br from-transparent via-blue-500/50 to-transparent" />
            </div>

            {/* Animated Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.3, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            delay: Math.random() * 2,
                            repeat: Infinity
                        }}
                        className="absolute w-px h-20 bg-linear-to-b from-blue-500/30 to-transparent"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            <div className="relative container mx-auto px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-linear-to-br from-blue-900/30 to-cyan-900/30 border border-blue-800/30"
                        >
                            <MessageSquare className="w-4 h-4" />
                            <span className="text-sm font-medium text-blue-300">START YOUR JOURNEY</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-bold text-white mb-6"
                        >
                            Transform Your Enterprise Today
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-md md:text-lg text-slate-300 max-w-3xl mx-auto"
                        >
                            Schedule a consultation with our enterprise architects and discover how we can drive your digital transformation.
                        </motion.p>

                    </div>

                    <div className="grid lg:grid-cols-5 gap-12">
                                {/* Left Column - Form (3/5) */}
                                <div 
                                  className="lg:col-span-3"
                                  style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
                                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                                  }}
                                >
                                  <div className="relative p-8 md:p-10 rounded-3xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl overflow-hidden">
                                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 opacity-50" />
                    
                                    <div className="relative z-10">
                                      <div className="flex items-center gap-4 mb-8">
                                        <div className="p-4 rounded-2xl bg-linear-to-br from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/50">
                                          <Calendar className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                          <h3 className="text-2xl font-black text-white mb-1">Schedule Consultation</h3>
                                          <p className="text-gray-400">Free 30-minute discovery call with our architects</p>
                                        </div>
                                      </div>
                    
                                      <div className="space-y-6">
                                        {/* Name & Company */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                          <div>
                                            <label className="block text-sm font-bold text-white mb-2">
                                              Full Name *
                                            </label>
                                            <input
                                              type="text"
                                              name="name"
                                              value={formData.name}
                                              onChange={handleChange}
                                              onFocus={() => setFocusedField('name')}
                                              onBlur={() => setFocusedField(null)}
                                              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300"
                                              placeholder="John Smith"
                                              style={{
                                                boxShadow: focusedField === 'name' ? '0 0 30px rgba(59, 130, 246, 0.3)' : 'none'
                                              }}
                                            />
                                          </div>
                                          <div>
                                            <label className="block text-sm font-bold text-white mb-2">
                                              Company *
                                            </label>
                                            <input
                                              type="text"
                                              name="company"
                                              value={formData.company}
                                              onChange={handleChange}
                                              onFocus={() => setFocusedField('company')}
                                              onBlur={() => setFocusedField(null)}
                                              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300"
                                              placeholder="Enterprise Corp"
                                              style={{
                                                boxShadow: focusedField === 'company' ? '0 0 30px rgba(59, 130, 246, 0.3)' : 'none'
                                              }}
                                            />
                                          </div>
                                        </div>
                    
                                        {/* Email */}
                                        <div>
                                          <label className="block text-sm font-bold text-white mb-2">
                                            Work Email *
                                          </label>
                                          <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300"
                                            placeholder="john@enterprise.com"
                                            style={{
                                              boxShadow: focusedField === 'email' ? '0 0 30px rgba(59, 130, 246, 0.3)' : 'none'
                                            }}
                                          />
                                        </div>
                    
                                        {/* Company Size & Interest */}
                                        <div className="grid md:grid-cols-2 gap-6">
                                          <div>
                                            <label className="block text-sm font-bold text-white mb-2">
                                              Company Size *
                                            </label>
                                            <select
                                              name="companySize"
                                              value={formData.companySize}
                                              onChange={handleChange}
                                              onFocus={() => setFocusedField('companySize')}
                                              onBlur={() => setFocusedField(null)}
                                              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 cursor-pointer"
                                              style={{
                                                boxShadow: focusedField === 'companySize' ? '0 0 30px rgba(59, 130, 246, 0.3)' : 'none'
                                              }}
                                            >
                                              <option value="" className="bg-gray-900">Select size</option>
                                              <option value="1-50" className="bg-gray-900">1-50 employees</option>
                                              <option value="51-200" className="bg-gray-900">51-200 employees</option>
                                              <option value="201-1000" className="bg-gray-900">201-1,000 employees</option>
                                              <option value="1000+" className="bg-gray-900">1,000+ employees</option>
                                            </select>
                                          </div>
                                          <div>
                                            <label className="block text-sm font-bold text-white mb-2">
                                              Primary Interest *
                                            </label>
                                            <select
                                              name="interest"
                                              value={formData.interest}
                                              onChange={handleChange}
                                              onFocus={() => setFocusedField('interest')}
                                              onBlur={() => setFocusedField(null)}
                                              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 cursor-pointer"
                                              style={{
                                                boxShadow: focusedField === 'interest' ? '0 0 30px rgba(59, 130, 246, 0.3)' : 'none'
                                              }}
                                            >
                                              <option value="" className="bg-gray-900">Select interest</option>
                                              <option value="cloud-migration" className="bg-gray-900">Cloud Migration</option>
                                              <option value="ai-ml" className="bg-gray-900">AI & Machine Learning</option>
                                              <option value="cybersecurity" className="bg-gray-900">Cybersecurity</option>
                                              <option value="digital-transformation" className="bg-gray-900">Digital Transformation</option>
                                              <option value="custom-development" className="bg-gray-900">Custom Development</option>
                                            </select>
                                          </div>
                                        </div>
                    
                                        {/* Message */}
                                        <div>
                                          <label className="block text-sm font-bold text-white mb-2">
                                            Project Details
                                          </label>
                                          <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            rows={4}
                                            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 resize-none"
                                            placeholder="Tell us about your project requirements, challenges, and goals..."
                                            style={{
                                              boxShadow: focusedField === 'message' ? '0 0 30px rgba(59, 130, 246, 0.3)' : 'none'
                                            }}
                                          />
                                        </div>
                    
                                        {/* Submit Button */}
                                        <button
                                          onClick={handleSubmit}
                                          disabled={isSubmitting}
                                          className="w-full py-4 px-8 bg-linear-to-br from-blue-600 to-cyan-600 rounded-2xl font-bold text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
                                        >
                                          {isSubmitting ? (
                                            <>
                                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                              <span>Scheduling...</span>
                                            </>
                                          ) : (
                                            <>
                                              <Send className="w-5 h-5" />
                                              <span>Schedule Free Consultation</span>
                                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                          )}
                                        </button>
                    
                                        <p className="text-center text-sm text-gray-500">
                                          By submitting, you agree to our{' '}
                                          <span className="text-blue-400 hover:text-blue-300 underline cursor-pointer">Privacy Policy</span>.
                                          We'll contact you within 24 hours.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                    
                                {/* Right Column - Benefits & Resources (2/5) */}
                                <div 
                                  className="lg:col-span-2 space-y-6"
                                  style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
                                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
                                  }}
                                >
                                  {/* Benefits */}
                                  <div>
                                    <h3 className="text-xl font-black text-white mb-6">Why Choose Lynexa</h3>
                                    <div className="space-y-4">
                                      {benefits.map((benefit, idx) => (
                                        <div
                                          key={idx}
                                          className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                                          style={{
                                            animation: `slideInRight 0.6s ease-out ${idx * 0.1}s backwards`
                                          }}
                                        >
                                          <div className="flex items-start gap-4">
                                            <div 
                                              className="p-3 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300"
                                              style={{
                                                backgroundColor: `${benefit.color}20`,
                                                color: benefit.color
                                              }}
                                            >
                                              {benefit.icon}
                                            </div>
                                            <div>
                                              <h4 className="text-base font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-linear-to-br group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                                                {benefit.title}
                                              </h4>
                                              <p className="text-sm text-gray-400 leading-relaxed">
                                                {benefit.description}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                    
                                  {/* Download Section */}
                                  <div className="p-6 rounded-2xl border overflow-hidden relative" style={{
                                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))',
                                    borderColor: 'rgba(6, 182, 212, 0.3)'
                                  }}>
                                    <div className="relative z-10">
                                      <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 rounded-xl bg-linear-to-br from-blue-600 to-cyan-600">
                                          <Download className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                          <h3 className="text-lg font-black text-white">Enterprise Deck</h3>
                                          <p className="text-sm text-gray-400">Complete capabilities overview</p>
                                        </div>
                                      </div>
                                      
                                      <ul className="space-y-2 mb-6">
                                        {[
                                          "Service offerings & pricing",
                                          "Case studies & ROI metrics",
                                          "Technology stack details",
                                          "Security & compliance",
                                          "Implementation methodology"
                                        ].map((item, idx) => (
                                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                                            <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                    
                                      <button className="w-full py-3 px-4 border-2 border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-blue-500 transition-all duration-300 flex items-center justify-center gap-2 group">
                                        <Download className="w-4 h-4 group-hover:animate-bounce" />
                                        <span>Download PDF (2.4 MB)</span>
                                      </button>
                                    </div>
                                  </div>
                    
                                  {/* Contact Info */}
                                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h4 className="text-lg font-black text-white mb-4">Need Immediate Help?</h4>
                                    <div className="space-y-3">
                                      <button onClick={() => window.location.href = 'mailto:enterprise@lynexa.com'} className="w-full flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                                        <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                                          <Mail className="w-4 h-4 text-blue-400" />
                                        </div>
                                        <span className="text-sm">enterprise@lynexa.com</span>
                                      </button>
                                      <button onClick={() => window.location.href = 'tel:+15551234567'} className="w-full flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                                        <div className="p-2 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500/30 transition-colors">
                                          <Phone className="w-4 h-4 text-emerald-400" />
                                        </div>
                                        <span className="text-sm">+1 (555) 123-4567</span>
                                      </button>
                                      <div className="flex items-center gap-3 text-gray-300">
                                        <div className="p-2 rounded-lg bg-purple-500/20">
                                          <MessageSquare className="w-4 h-4 text-purple-400" />
                                        </div>
                                        <span className="text-sm">24/7 Live Chat Available</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                </div>
            </div>
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(3px); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
        </section>
    )
}

export default EnterpriseCTA