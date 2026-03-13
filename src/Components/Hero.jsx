// Import profile image from assets folder
import profilePhoto from "../assets/profile-photo.jpg";

// Import icons from lucide-react library
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

// Hero component (homepage first section)
const Hero = () => {
    return (
          
        // Main hero section container (full screen height)
        <section   id="hero"
 className="min-h-screen flex items-center justify-center relative overflow-hidden">

            {/* Background gradient overlay */}
            <div
                className="absolute inset-0 opacity-50"   // cover whole section with 50% opacity
                style={{ background: 'var(--gradient-hero)' }} // custom gradient background
            />

            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 opacity-5"> {/* very light grid pattern */}
                <div
                    className="h-full w-full"
                    style={{
                        // creating grid lines using CSS gradient
                        backgroundImage:
                            'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
                        backgroundSize: '60px 60px' // grid spacing
                    }}
                />
            </div>



            {/* Main content container */}
            <div className="section-container relative z-10 py-20">
                {/* Flex layout for text + image */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">

                        {/* Intro text */}
                        <p className="text-primary font-mono text-sm mb-4 animate-fade-up opacity-0 stagger-1">
                            Hi, my name is
                        </p>

                        {/* Main Name Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up opacity-0 stagger-2">
                            Afnan Bin Islam Nahin
                        </h1>

                        {/* Job Title */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6 animate-fade-up opacity-0 stagger-3">
                            AI &{" "}
                            <span className="gradient-text">Machine Learning Engineer</span> {/* Gradient colored text */}
                        </h2>

                        {/* Short description about you */}
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up opacity-0 stagger-4">
                            Passionate about artificial intelligence, machine learning, and data science, with a focus on building practical solutions that create real impact.
                        </p>

                        {/* Call To Action Buttons */}
                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0"
                            style={{ animationDelay: '0.5s' }} // animation delay
                        >

                            {/* View Projects button */}
                            <a
                                href="#projects" // scroll to projects section
                                className="px-8 py-3 rounded-lg font-medium transition-all duration-300 glow-effect"
                                style={{ background: 'var(--gradient-primary)' }} // gradient background
                            >
                                <span className="text-primary-foreground">View My Work</span>
                            </a>

                            {/* Contact button */}
                            <a
                                href="#contact" // scroll to contact section
                                className="px-8 py-3 rounded-lg font-medium border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
                            >
                                Get In Touch
                            </a>

                            {/* View CV button (Google Drive link) */}
                            <a
                                href="https://drive.google.com/file/d/1XsZ_3CqHCH4PRc6YZnbjSBaJmJ9CaBEE/view"
                                target="_blank" // open in new tab
                                rel="noopener noreferrer" // security for external link
                                className="px-8 py-3 rounded-lg font-medium border border-primary text-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
                            >
                                View CV
                            </a>
                        </div>

                        {/* Social Media Links */}
                        <div
                            className="flex gap-4 justify-center lg:justify-start mt-8 animate-fade-up opacity-0"
                            style={{ animationDelay: '0.6s' }}
                        >

                            {/* GitHub icon link */}
                            <a
                                href="https://github.com/AfnanBinIslamNahin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <Github size={20} />
                            </a>

                            {/* LinkedIn icon link */}
                            <a
                                href="https://www.linkedin.com/in/afnan-islam01/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                            >
                                <Linkedin size={20} />
                            </a>

                            {/* Email icon link */}
                            <a
                                href="mailto:afnan.islam.bd@gmail.com"
                                className="social-icon"
                            >
                                <Mail size={20} />
                            </a>

                        </div>
                    </div>

                    {/* Profile Image Section */}
                    <div
                        className="flex-shrink-0 animate-fade-up opacity-0"
                        style={{ animationDelay: '0.3s' }}
                    >
                        <div className="relative profile-glow-wrapper">


  <div
    className="absolute inset-0 rounded-full blur-3xl opacity-40 profile-glow-bg"
    style={{ background: 'var(--gradient-primary)' }}
  />
  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/30 profile-ring">
    <img
      src={profilePhoto}
      alt="Afnan Bin Islam Nahin"
      className="w-full h-full object-cover"
    />
  </div>
</div>
                    </div>

                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

                    {/* Clicking arrow scrolls to About section */}
                    <a
                        href="#about"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowDown size={24} />
                    </a>

                </div>

            </div>

        </section>
    );
};

// Export component so it can be used in App.jsx
export default Hero;