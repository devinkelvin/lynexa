"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown, FiSearch, FiExternalLink } from 'react-icons/fi'
import {
    Cpu,
    Zap,
    Shield,
    Building2,
    Globe,
    Users,
    BarChart3,
    Cloud,
    Code,
    Server,
    Database,
    Lock,
    Sparkles,
    FileText,
    Video
} from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        {
            label: 'Products',
            type: 'dropdown' as const,
            items: [
                { icon: <Cpu className="w-4 h-4" />, label: 'Enterprise AI', description: 'Scalable AI solutions for business' },
                { icon: <Shield className="w-4 h-4" />, label: 'Security Suite', description: 'Advanced threat protection' },
                { icon: <Cloud className="w-4 h-4" />, label: 'Cloud Platform', description: 'Global cloud infrastructure' },
                { icon: <Database className="w-4 h-4" />, label: 'Data Analytics', description: 'Real-time business insights' },
            ]
        },
        {
            label: 'Solutions',
            type: 'dropdown' as const,
            items: [
                { icon: <Building2 className="w-4 h-4" />, label: 'Enterprise', description: 'For large organizations' },
                { icon: <Users className="w-4 h-4" />, label: 'Startups', description: 'Rapid scaling solutions' },
                { icon: <Globe className="w-4 h-4" />, label: 'Global Teams', description: 'Remote collaboration tools' },
                { icon: <BarChart3 className="w-4 h-4" />, label: 'Finance', description: 'Fintech innovations' },
            ]
        },
        {
            label: 'Resources',
            type: 'dropdown' as const,
            items: [
                { label: 'Documentation', icon: <Code className="w-4 h-4" />, description: '' },
                { label: 'Blog', icon: <FiExternalLink className="w-4 h-4" />, description: '' },
                { label: 'Case Studies', icon: <FileText className="w-4 h-4" />, description: '' },
                { label: 'Tutorials', icon: <Video className="w-4 h-4" />, description: '' },
            ]
        },
        { label: 'Pricing', type: 'link' as const, href: '#pricing' },
        { label: 'Enterprise', type: 'link' as const, href: '#enterprise' },
    ]

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
            }
        },
        exit: {
            opacity: 0,
            y: -10,
            scale: 0.95,
            transition: {
                duration: 0.2
            }
        }
    }

    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.4,
                ease: "easeInOut",
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    }

    const mobileDropdownVariants = {
        hidden: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        visible: {
            height: "auto",
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    }

    const handleMobileDropdownToggle = (label: string) => {
        if (openMobileDropdown === label) {
            setOpenMobileDropdown(null)
        } else {
            setOpenMobileDropdown(label)
        }
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled 
                    ? 'bg-gray-900/90 backdrop-blur-xl border-b border-gray-800/30 shadow-xl' // Blurrier when scrolled
                    : 'bg-gray-900/30 backdrop-blur-md' // Less blur when at top
                }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <div className="relative">
                                <div className="w-9 h-9 bg-linear-to-br from-[#76ebda] via-[#5ac9c9] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-1 border border-[#76ebda]/40 rounded-xl"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tight bg-linear-to-br from-[#76ebda] to-[#3b82f6] bg-clip-text text-transparent">
                                Lynexa
                            </span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => setHoveredItem(item.label)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-1 px-5 py-2.5 text-gray-300 hover:text-white transition-colors font-medium text-sm tracking-wide relative"
                                    >
                                        {item.label}
                                        {item.type === 'dropdown' && (
                                            <motion.div
                                                animate={{ rotate: hoveredItem === item.label ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <FiChevronDown className="w-3.5 h-3.5 ml-1" />
                                            </motion.div>
                                        )}
                                    </motion.button>

                                    {/* Hover indicator */}
                                    {hoveredItem === item.label && (
                                        <motion.div
                                            layoutId="hover-indicator"
                                            className="absolute bottom-0 left-4 right-4 h-0.5 bg-linear-to-br from-[#76ebda] to-[#3b82f6] rounded-full"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    )}

                                    {/* Dropdown */}
                                    {item.type === 'dropdown' && hoveredItem === item.label && (
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            // variants={dropdownVariants}
                                            className="absolute top-full left-0 mt-1 w-72 rounded-xl bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl shadow-black/50 overflow-hidden"
                                            style={{ zIndex: 1000 }}
                                        >
                                            <div className="p-2">
                                                {item.items.map((subItem, idx) => (
                                                    <motion.a
                                                        key={idx}
                                                        href="#"
                                                        variants={{
                                                            hidden: { opacity: 0, x: -10 },
                                                            visible: {
                                                                opacity: 1,
                                                                x: 0,
                                                                transition: { delay: idx * 0.05 }
                                                            }
                                                        }}
                                                        whileHover={{ x: 5, backgroundColor: 'rgba(118, 235, 218, 0.1)' }}
                                                        className="flex items-start gap-3 p-3 rounded-lg transition-all duration-200 group"
                                                    >
                                                        <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-linear-to-br from-[#76ebda]/20 to-[#3b82f6]/20 transition-colors">
                                                            {subItem.icon}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-sm font-medium text-white group-hover:text-[#76ebda] transition-colors">
                                                                    {subItem.label}
                                                                </span>
                                                                <FiExternalLink className="w-3 h-3 text-gray-500 group-hover:text-[#76ebda] transition-colors opacity-0 group-hover:opacity-100" />
                                                            </div>
                                                            {subItem.description && (
                                                                <p className="text-xs text-gray-400 mt-1 group-hover:text-gray-300">
                                                                    {subItem.description}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right side buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            {/* <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-4 py-2.5 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/30"
                            >
                                <FiSearch className="w-4 h-4" />
                                <span className="text-sm font-medium">Search</span>
                            </motion.button> */}

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative overflow-hidden cursor-pointer px-6 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 group bg-[#76ebda] hover:bg-white"
                            >
                                <span className="relative z-10 text-gray-900 group-hover:text-gray-900">Get Started</span>
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '100%' }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 bg-linear-to-br from-transparent via-white/20 to-transparent"
                                />
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            whileTap={{ scale: 0.95 }}
                            className="lg:hidden p-2.5 rounded-lg hover:bg-gray-800/50 transition-colors relative z-50"
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                    >
                                        <FiX className="w-6 h-6 text-white" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                    >
                                        <FiMenu className="w-6 h-6 text-white" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            // variants={mobileMenuVariants}
                            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 shadow-2xl"
                            style={{ zIndex: 40 }}
                        >
                            <div className="px-6 py-4 space-y-1">
                                {navItems.map((item, idx) => (
                                    <motion.div
                                        key={item.label}
                                        variants={itemVariants}
                                        transition={{ delay: idx * 0.05 }}
                                        className="border-b border-gray-800/30 last:border-b-0"
                                    >
                                        {item.type === 'dropdown' ? (
                                            <div className="py-3">
                                                <button
                                                    onClick={() => handleMobileDropdownToggle(item.label)}
                                                    className="flex items-center justify-between w-full text-gray-300 hover:text-white font-medium py-2"
                                                >
                                                    <span>{item.label}</span>
                                                    <motion.div
                                                        animate={{ rotate: openMobileDropdown === item.label ? 180 : 0 }}
                                                    >
                                                        <FiChevronDown className="w-4 h-4" />
                                                    </motion.div>
                                                </button>

                                                <AnimatePresence>
                                                    {openMobileDropdown === item.label && (
                                                        <motion.div
                                                            initial="hidden"
                                                            animate="visible"
                                                            exit="hidden"
                                                            // variants={mobileDropdownVariants}
                                                            className="mt-2 ml-4 space-y-2 overflow-hidden"
                                                        >
                                                            {item.items.map((subItem, subIdx) => (
                                                                <a
                                                                    key={subIdx}
                                                                    href="#"
                                                                    className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-gray-800/50 text-gray-400 hover:text-white transition-colors group"
                                                                >
                                                                    <div className="p-1.5 rounded-lg bg-gray-800/50 group-hover:bg-[#76ebda]/20 transition-colors">
                                                                        {subItem.icon}
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <span className="text-sm font-medium group-hover:text-[#76ebda]">
                                                                            {subItem.label}
                                                                        </span>
                                                                        {subItem.description && (
                                                                            <p className="text-xs text-gray-500 mt-1">
                                                                                {subItem.description}
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <a
                                                href={item.href}
                                                className="block py-3 text-gray-300 font-medium transition-colors hover:pl-2 hover:text-[#76ebda]"
                                            >
                                                {item.label}
                                            </a>
                                        )}
                                    </motion.div>
                                ))}

                                <motion.div
                                    variants={itemVariants}
                                    transition={{ delay: 0.4 }}
                                    className="pt-4 space-y-3"
                                >
                                    {/* <button className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 text-white font-medium transition-colors">
                                        <FiSearch className="w-4 h-4" />
                                        <span>Search</span>
                                    </button> */}
                                    <button className="w-full py-3 bg-[#76ebda] hover:bg-white text-gray-900 rounded-lg font-medium hover:shadow-lg hover:shadow-[#76ebda]/30 transition-all duration-300">
                                        Get Started 
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Background blur when mobile menu is open */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm lg:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar