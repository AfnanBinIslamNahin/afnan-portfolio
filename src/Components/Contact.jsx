// ResearchGate icon component import (custom SVG icon যা তুমি আলাদা file এ বানিয়েছো)
import ResearchGate from "../Components/ResearchGate";

// lucide-react library থেকে বিভিন্ন social icon import করা হয়েছে
import { Github, Linkedin, Mail, Facebook, MapPin, Send ,Instagram } from "lucide-react";


// Contact component (React Functional Component)
const Contact = () => {

    // socialLinks array: এখানে সব social media link এবং icon রাখা হয়েছে
    // পরে map() ব্যবহার করে automatically render করা হবে
    const socialLinks = [
        { icon: Github, href: "https://github.com/AfnanBinIslamNahin", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/afnan-islam01/", label: "LinkedIn" },
        { icon: Facebook, href: "https://www.facebook.com/afnan.nahin.5", label: "Facebook" },
        { icon: Mail, href: "mailto:afnan.islam.bd@gmail.com", label: "Email" },
        { icon: Instagram, href: "https://www.instagram.com/__afnan1___/", label: "Instagram" },
        { icon: ResearchGate, href: "https://www.researchgate.net/profile/Afnan-Nahin", label: "ResearchGate" },
    ];

    return (

        // Footer section শুরু (contact section)
        <footer id="contact" className="py-24 bg-secondary/20">

            {/* Main container (layout center করার জন্য custom class) */}
            <div className="section-container">

                {/* Contact section title */}
                <div className="text-center max-w-2xl mx-auto mb-12">

                    {/* ছোট subtitle */}
                    <p className="text-primary font-mono text-sm mb-2">
                        Get In Touch
                    </p>

                    {/* Main heading */}
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Let's Work <span className="gradient-text">Together</span>
                    </h2>

                    {/* Description text */}
                    <p className="text-muted-foreground">
                        I'm currently open to new opportunities and interesting projects.
                        Whether you have a question or just want to say hi, my inbox is always open!
                    </p>

                </div>


                {/* Contact CTA (Call To Action) */}
                <div className="flex flex-col items-center gap-8 mb-16">

                    {/* Email button (click করলে email client open হবে) */}
                    <a
                        href="mailto:22-49350-3@student.aiub.edu"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all duration-300 glow-effect group"
                        style={{ background: 'var(--gradient-primary)' }}
                    >

                        {/* Button text */}
                        <span className="text-primary-foreground">
                            Say Hello
                        </span>

                        {/* Send icon (hover করলে একটু move করবে) */}
                        <Send
                            size={18}
                            className="text-primary-foreground group-hover:translate-x-1 transition-transform"
                        />

                    </a>


                    {/* Location / availability section */}
                    <div className="flex items-center gap-2 text-muted-foreground">

                        {/* location icon */}
                        <MapPin size={16} className="text-primary" />

                        {/* location text */}
                        <span>
                            Based in Bangladesh • Open to remote opportunities
                        </span>

                    </div>

                </div>


                {/* Social Media Links Section */}
                <div className="flex justify-center gap-4 mb-12">

                    {/* socialLinks array loop করে প্রতিটি social icon render করা হচ্ছে */}
                    {socialLinks.map((social, index) => (

                        <a
                            key={index} // React এর জন্য unique key
                            href={social.href} // link URL
                            target="_blank" // নতুন tab এ open হবে
                            rel="noopener noreferrer" // security best practice
                            className="social-icon" // CSS styling class
                            aria-label={social.label} // accessibility label
                        >

                            {/* icon dynamically render হচ্ছে */}
                            <social.icon size={20} />

                        </a>

                    ))}

                </div>


                {/* Footer bottom section */}
                <div className="border-t border-border pt-8">

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">

                        {/* copyright text */}
                        <p>
                            © 2026 Afnan Bin Islam Nahin. All rights reserved.
                        </p>

                        {/* technology used text */}
                        <p className="font-mono text-xs">
                            Built with <span className="text-primary">♥</span> using React & Tailwind
                        </p>

                    </div>

                </div>

            </div>

        </footer>
    );
};

// component export করা হয়েছে যাতে অন্য file এ ব্যবহার করা যায়
export default Contact;