import { useState, useEffect } from "react"
import { Menu, X, Leaf } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Lock scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isMenuOpen])

    // Sticky header shadow on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Why Terra", href: "#features" },
        { name: "Impact", href: "#impact" },
        { name: "For Events", href: "#use-cases" },
    ]

    return (
        <nav
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled || isMenuOpen
                    ? "bg-brand-beige/80 backdrop-blur-md border-b border-brand-earth/10"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <Leaf className="h-6 w-6 text-brand-teal transition-transform group-hover:rotate-12" />
                        <span className="font-montserrat text-2xl font-bold tracking-tight text-brand-earth">
                            TERRA
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-brand-earth/80 hover:text-brand-teal transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button className="bg-brand-teal text-white hover:bg-brand-teal/90">
                            Join Waitlist
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-brand-earth"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full h-[calc(100vh-5rem)] bg-brand-beige flex flex-col items-center justify-center gap-8 p-8 animate-in fade-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-montserrat font-medium text-brand-earth"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        size="lg"
                        className="w-full mt-4 bg-brand-teal text-white"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Join Waitlist
                    </Button>
                </div>
            )}
        </nav>
    )
}
