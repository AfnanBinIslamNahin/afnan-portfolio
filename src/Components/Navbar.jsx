import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo_2.png";
const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { label: "About", href: "#about" },
        { label: "Education", href: "#education" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];
const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
             const sections = ["about","education", "skills", "projects", "contact"];

        sections.forEach((section) => {
            const element = document.getElementById(section);

            if (element) {
                const rect = element.getBoundingClientRect();

                if (rect.top <= 150 && rect.bottom >= 150) {
                    setActiveSection(section);
                }
            }
        });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
                : "bg-transparent"
                }`}
        >
            <div className="section-container">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                   <a href="#hero" className="flex items-center gap-2">
    <img 
        src={logo} 
        alt="Logo" 
        className="w-30 h-30 object-contain"
    />
</a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
className={`text-sm font-medium transition-colors ${
activeSection === item.href.replace("#","")
? "text-primary"
: "text-muted-foreground hover:text-primary"
}`}                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                className="px-4 py-2 rounded-lg text-sm font-medium border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
                            >
                                Hire Me
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border/50">
                        <ul className="space-y-4">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="#contact"
                                    className="inline-block px-4 py-2 rounded-lg text-sm font-medium border border-primary text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Hire Me
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;