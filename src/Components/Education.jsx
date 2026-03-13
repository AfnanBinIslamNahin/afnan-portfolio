// Education section এর জন্য institute logo import করা হচ্ছে
import aiubLogo from "../assets/aiub.png";       // AIUB logo
import collegeLogo from "../assets/college.jpg"; // College logo
import schoolLogo from "../assets/school.png";   // School logo

// lucide-react থেকে GraduationCap icon import করা হয়েছে (timeline dot icon হিসেবে ব্যবহার হবে)
import { GraduationCap } from "lucide-react";


// Education data array
// এখানে প্রতিটি education information object আকারে রাখা হয়েছে
const EDUCATION = [
  {
    year: "2022 – Ongoing", // education period
    degree: "Bachelor of Science in Computer Science & Engineering", // degree title
    institute: "American International University–Bangladesh (AIUB)", // institute name
    logo: aiubLogo, // institute logo
    color: "bg-cyan-500", // timeline dot color (Tailwind class)
  },
  {
    year: "Completed in 2021",
    degree: "Higher Secondary Certificate",
    institute: "Govt. Syed Hatem Ali College, Barishal",
    logo: collegeLogo,
    color: "bg-emerald-500",
  },
  {
    year: "Completed in 2019",
    degree: "Secondary School Certificate",
    institute: "Barishal Govt. Model School & College",
    logo: schoolLogo,
    color: "bg-amber-500",
  },
];


// Education React Component
const Education = () => {
  return (

    // পুরো education section
    <section id="education" className="py-24 bg-secondary/20">

      <div className="section-container">

        {/* Section Header */}
        {/* Section title area */}
        <div className="text-center mb-16">

          {/* small subtitle */}
          <p className="text-primary font-mono text-sm mb-2">
            Academic Journey
          </p>

          {/* main title */}
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="gradient-text">Education</span>
          </h2>

        </div>


        {/* Timeline Container */}
        {/* education timeline এর মূল container */}
        <div className="relative max-w-5xl mx-auto">


          {/* Center vertical timeline line */}
          {/* timeline এর মাঝখানে যে vertical line থাকে */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-border/60 -translate-x-1/2 hidden md:block"></div>


          {/* Education cards container */}
          <div className="space-y-10">

            {/* EDUCATION array loop করা হচ্ছে */}
            {EDUCATION.map((edu, index) => (

              // Timeline card container
              <div
                key={index}

                // index অনুযায়ী card left অথবা right side এ যাবে
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >

                {/* Timeline dot (icon) */}
                {/* মাঝখানের circle icon */}
                <div
                  className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-10 w-14 h-14 rounded-full items-center justify-center text-white shadow-lg ${edu.color}`}
                >
                  {/* Graduation cap icon */}
                  <GraduationCap size={22} />
                </div>


                {/* Education Card */}
                {/* card design */}
                <div className="w-full md:w-[46%] glass-card rounded-3xl border border-white/10 p-6 md:p-8 hover:border-primary/30 transition-all duration-300">

                  {/* card content layout */}
                  <div className="flex items-center justify-between gap-6">


                    {/* Left text content */}
                    <div className="flex-1">

                      {/* education year */}
                      <p className="text-sm font-mono tracking-wide text-primary mb-3 uppercase">
                        {edu.year}
                      </p>

                      {/* degree title */}
                      <h3 className="text-2xl font-bold mb-3 leading-snug">
                        {edu.degree}
                      </h3>

                      {/* institute name */}
                      <p className="text-muted-foreground text-lg">
                        {edu.institute}
                      </p>

                    </div>


                    {/* Right side institute logo */}
                    <div className="shrink-0 w-20 h-20 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center p-2">

                      {/* institute logo image */}
                      <img
                        src={edu.logo} // logo source
                        alt={edu.institute} // image alt text
                        className="w-full h-full object-contain"
                      />

                    </div>


                  </div>
                </div>

              </div>

            ))}
          </div>

        </div>

      </div>
    </section>
  );
};


// Component export করা হচ্ছে যাতে অন্য file এ ব্যবহার করা যায়
export default Education;