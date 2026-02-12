// components/TechnologyStack.tsx
"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
    Cloud, Code, Database, Server, Cpu,
    Shield, GitBranch, Layers, Zap, Cpu as CpuIcon
} from 'lucide-react'

const TechnologyStack = () => {
    const [activeCategory, setActiveCategory] = useState('cloud')

    const technologies = {
        cloud: {
            icon: <Cloud className="w-6 h-6" />,
            title: "Cloud Platforms",
            items: [
                { name: "Amazon Web Services", level: 95, color: "from-orange-500 to-yellow-500" },
                { name: "Microsoft Azure", level: 90, color: "from-blue-500 to-cyan-500" },
                { name: "Google Cloud Platform", level: 85, color: "from-green-500 to-emerald-500" },
                { name: "Oracle Cloud", level: 80, color: "from-red-500 to-pink-500" },
                { name: "IBM Cloud", level: 75, color: "from-purple-500 to-indigo-500" }
            ]
        },
        frontend: {
            icon: <Code className="w-6 h-6" />,
            title: "Frontend Technologies",
            items: [
                { name: "React.js", level: 98, color: "from-cyan-500 to-blue-500" },
                { name: "Next.js", level: 95, color: "from-gray-800 to-gray-900" },
                { name: "TypeScript", level: 92, color: "from-blue-600 to-blue-700" },
                { name: "Vue.js", level: 85, color: "from-green-500 to-emerald-500" },
                { name: "Angular", level: 80, color: "from-red-500 to-pink-500" }
            ]
        },
        backend: {
            icon: <Server className="w-6 h-6" />,
            title: "Backend Technologies",
            items: [
                { name: "Node.js", level: 95, color: "from-green-600 to-emerald-500" },
                { name: "Python", level: 90, color: "from-blue-500 to-cyan-500" },
                { name: "Java", level: 88, color: "from-red-500 to-orange-500" },
                { name: "Go", level: 85, color: "from-cyan-500 to-teal-500" },
                { name: ".NET", level: 82, color: "from-purple-600 to-purple-700" }
            ]
        },
        databases: {
            icon: <Database className="w-6 h-6" />,
            title: "Databases",
            items: [
                { name: "PostgreSQL", level: 95, color: "from-blue-500 to-indigo-500" },
                { name: "MongoDB", level: 90, color: "from-green-500 to-emerald-500" },
                { name: "Redis", level: 88, color: "from-red-500 to-orange-500" },
                { name: "Cassandra", level: 85, color: "from-blue-600 to-blue-700" },
                { name: "Elasticsearch", level: 82, color: "from-purple-500 to-pink-500" }
            ]
        },
        devops: {
            icon: <GitBranch className="w-6 h-6" />,
            title: "DevOps & Infrastructure",
            items: [
                { name: "Docker", level: 96, color: "from-blue-500 to-cyan-500" },
                { name: "Kubernetes", level: 94, color: "from-blue-600 to-indigo-600" },
                { name: "Terraform", level: 90, color: "from-purple-500 to-pink-500" },
                { name: "Jenkins", level: 85, color: "from-red-500 to-orange-500" },
                { name: "GitLab CI/CD", level: 88, color: "from-orange-500 to-red-500" }
            ]
        },
        ai_ml: {
            icon: <CpuIcon className="w-6 h-6" />,
            title: "AI & Machine Learning",
            items: [
                { name: "TensorFlow", level: 92, color: "from-orange-500 to-red-500" },
                { name: "PyTorch", level: 90, color: "from-red-500 to-pink-500" },
                { name: "OpenAI API", level: 88, color: "from-green-500 to-emerald-500" },
                { name: "Hugging Face", level: 85, color: "from-yellow-500 to-orange-500" },
                { name: "Scikit-learn", level: 82, color: "from-orange-500 to-yellow-500" }
            ]
        }
    }

    const categories = Object.entries(technologies).map(([key, value]) => ({
        key,
        ...value
    }))

    const activeTech = technologies[activeCategory as keyof typeof technologies]

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950" />
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-linear-to-r from-blue-500/20 to-cyan-500/20 blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-linear-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
            </div>

            <div className="relative container mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-linear-to-r from-purple-900/30 to-pink-900/30 border border-purple-800/30"
                        >
                            <Cpu className="w-4 h-4" />
                            <span className="text-sm font-medium text-purple-300">TECHNOLOGY EXCELLENCE</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            Enterprise-Grade Technology Stack
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl text-slate-300 max-w-3xl mx-auto"
                        >
                            We leverage cutting-edge technologies to build scalable, secure, and high-performance enterprise solutions.
                        </motion.p>
                    </div>

                    {/* Category Navigation */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category, index) => (
                            <motion.button
                                key={category.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setActiveCategory(category.key)}
                                className={`px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${activeCategory === category.key
                                        ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/30'
                                        : 'bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-slate-600'
                                    }`}
                            >
                                <span className="p-2 rounded-lg bg-slate-800/50">
                                    {category.icon}
                                </span>
                                <span className="font-medium">{category.title}</span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Technology Stack Visualization */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column - Stack Details */}
                        <div>
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-linear-to-br from-slate-900/50 to-slate-950/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm mb-8"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-4 rounded-xl bg-linear-to-r from-purple-600 to-pink-600">
                                        {activeTech.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">{activeTech.title}</h3>
                                        <p className="text-slate-400 mt-2">Our expertise level across technologies</p>
                                    </div>
                                </div>

                                {/* Technology Bars */}
                                <div className="space-y-6">
                                    {activeTech.items.map((tech, idx) => (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="space-y-3"
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-300 font-medium">{tech.name}</span>
                                                <span className="text-slate-400 text-sm">{tech.level}%</span>
                                            </div>
                                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${tech.level}%` }}
                                                    transition={{ duration: 1, delay: idx * 0.1 + 0.3 }}
                                                    className={`h-full rounded-full bg-linear-to-r ${tech.color}`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Certifications */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { name: "AWS Partner", color: "from-orange-500 to-yellow-500" },
                                    { name: "Azure Expert", color: "from-blue-500 to-cyan-500" },
                                    { name: "Google Cloud", color: "from-green-500 to-emerald-500" },
                                    { name: "Security Certified", color: "from-red-500 to-pink-500" }
                                ].map((cert, idx) => (
                                    <motion.div
                                        key={cert.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="p-4 rounded-xl bg-linear-to-r from-slate-900/50 to-slate-950/50 border border-slate-800"
                                    >
                                        <div className={`w-3 h-3 rounded-full bg-linear-to-r ${cert.color} mb-3`} />
                                        <span className="text-sm text-slate-300">{cert.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Technology Visualization */}
                        <div className="relative">
                            <div className="sticky top-24">
                                {/* Animated Tech Grid */}
                                <div className="relative w-full aspect-square">
                                    {categories.map((category, idx) => (
                                        <motion.div
                                            key={category.key}
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{
                                                scale: activeCategory === category.key ? 1 : 0.6,
                                                rotate: activeCategory === category.key ? 0 : -180,
                                                opacity: activeCategory === category.key ? 1 : 0.3
                                            }}
                                            className={`absolute inset-0 rounded-2xl border-2 ${activeCategory === category.key
                                                    ? 'border-purple-500/50 bg-linear-to-r from-purple-900/20 to-pink-900/20'
                                                    : 'border-slate-800 bg-slate-900/30'
                                                } backdrop-blur-sm`}
                                            style={{
                                                transform: `rotate(${idx * 15}deg)`,
                                                zIndex: activeCategory === category.key ? 10 : 1
                                            }}
                                        >
                                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                                <div className="text-center">
                                                    <div className="inline-flex p-4 rounded-xl bg-slate-800/50 mb-4">
                                                        {category.icon}
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-white mb-2">{category.title}</h4>
                                                    <p className="text-sm text-slate-400">
                                                        {technologies[category.key as keyof typeof technologies].items.length} Technologies
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}

                                    {/* Center Circle */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="w-32 h-32 rounded-full border-2 border-slate-800 flex items-center justify-center"
                                        >
                                            <div className="w-24 h-24 rounded-full bg-linear-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                                                <Zap className="w-8 h-8 text-white" />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 mt-8">
                                    {[
                                        { value: "50+", label: "Technologies" },
                                        { value: "15+", label: "Years Experience" },
                                        { value: "500+", label: "Projects" }
                                    ].map((stat, idx) => (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="p-4 rounded-xl bg-linear-to-r from-slate-900/50 to-slate-950/50 border border-slate-800 text-center"
                                        >
                                            <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnologyStack