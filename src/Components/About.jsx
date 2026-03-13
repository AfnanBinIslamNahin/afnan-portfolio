// lucide-react লাইব্রেরি থেকে কিছু icon import করা হচ্ছে
import { Brain, Database, BarChart3, BrainCircuit } from "lucide-react";// About নামে একটি React Functional Component তৈরি করা হচ্ছে
const About = () => {

    // highlights নামে একটি array তৈরি করা হয়েছে
    // এখানে icon এবং label রাখা হয়েছে যা পরে UI তে card হিসেবে দেখানো হবে
 const highlights = [
  { icon: Brain, label: "AI Models" },
  { icon: Database, label: "Data Processing" },
  { icon: BarChart3, label: "Data Visualization" },
  { icon: BrainCircuit, label: "Deep Learning" },
];

    // JSX return করা হচ্ছে (React UI structure)
    return (
        // About section শুরু হচ্ছে, id="about" দেওয়া হয়েছে যাতে navbar থেকে scroll করা যায়
        <section id="about" className="py-24">

            {/* section-container class সাধারণত layout center করার জন্য ব্যবহার করা হয় */}
            <div className="section-container">

                {/* flex layout ব্যবহার করা হয়েছে
                   মোবাইলে column (flex-col)
                   বড় স্ক্রিনে row (lg:flex-row) */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                    {/* Left side - decorative code block */}
                    {/* flex-1 মানে available space ভাগ করবে */}
                    <div className="flex-1 w-full max-w-md">

                        {/* glass-card হলো custom style card
                           p-6 = padding
                           font-mono = monospace font
                           text-sm = small text */}
 <div className="glass-card p-6 md:p-7 font-mono text-sm border border-white/10 bg-[#06101f]/70 backdrop-blur-sm shadow-[0_0_40px_rgba(34,211,238,0.06)]">

  {/* VS Code window header */}
  <div className="flex items-center justify-between mb-4">
    
    {/* dots */}
    <div className="flex gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>

    {/* fake file name */}
    <span className="text-xs text-gray-400">about.ts</span>
  </div>

  {/* code block */}
  <div className="grid grid-cols-[40px_1fr] text-sm leading-7">

    {/* line numbers */}
    <div className="text-gray-500 text-right pr-2 select-none">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
      <p>10</p>
      <p>11</p>
      <p>12</p>
      <p>13</p>
      <p>14</p>
      <p>15</p>
    <p>16</p>
          <p>17</p>


    </div>

    {/* actual code */}
    <div>

      <p>
        <span className="text-purple-400">const</span>{" "}
        <span className="text-cyan-400">developer</span>{" "}
        <span className="text-white">=</span>{" "}
        <span className="text-white">{"{"}</span>
      </p>

      <p>
        &nbsp;<span className="text-sky-400">name</span>:{" "}
        <span className="text-emerald-400">"Afnan Bin Islam Nahin"</span>,
      </p>

      <p>
        &nbsp;<span className="text-sky-400">role</span>:{" "}
        <span className="text-emerald-400">"AI & Data Science Engineer"</span>,
      </p>

      <p>
        &nbsp;&nbsp;<span className="text-sky-400">passion</span>:{" "}
        <span className="text-emerald-400">"Building intelligent systems"</span>,
      </p>

      <p>
        &nbsp;&nbsp;<span className="text-sky-400">coffee</span>:{" "}
        <span className="text-orange-400">true</span>,
      </p>

      <p>&nbsp;</p>

      <p>
    <span className="text-sky-400">skills</span>: [
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"Python"</span>,
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"Machine Learning"</span>,
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"Deep Learning"</span>,
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"Data Science"</span>,
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"TensorFlow"</span>,
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"PyTorch"</span>
      </p>

      <p>
        &nbsp;&nbsp;],
      </p>

      <p>
        &nbsp;&nbsp;<span className="text-sky-400">available</span>:{" "}
        <span className="text-orange-400">true</span>
      </p>

      <p>
        <span className="text-white">{"}"}</span>;
        <span className="inline-block w-[5px] h-4.5 ml-1 bg-cyan-400 animate-pulse align-middle rounded-sm"></span>
      </p>

    </div>

  </div>
</div>
                    </div>

                    {/* Right side - About content */}
                    <div className="flex-1">

                        {/* Section label */}
                        <p className="text-primary font-mono text-sm mb-2">
                            About Me
                        </p>

                        {/* Main heading */}
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                            Building intelligent systems with{" "}

                            {/* gradient-text custom CSS class */}
                            <span className="gradient-text">
                               AI & Data Science
                            </span>
                        </h2>

                        {/* Description paragraphs */}
                      <div className="space-y-4 text-muted-foreground max-w-xl">
                            {/* paragraph 1 */}
                            <p>
                               I am an AI and Data Science enthusiast with a strong passion for building 
                               intelligent systems that solve real-world problems. My work focuses on 
                               machine learning, deep learning, and data-driven applications.
                            </p>

                            {/* paragraph 2 */}
                            <p>
                                Currently, I am pursuing my degree in Computer Science and Engineering and 
                                actively working on projects related to artificial intelligence, data 
                                analysis, and predictive modeling.
                            </p>

                            {/* paragraph 3 */}
                            <p>
                              I enjoy exploring new technologies, experimenting with machine learning 
                            models, and transforming data into meaningful insights that can create 
                            impactful solutions.
                            </p>

                        </div>

                       {/* Highlight cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-4 text-center min-h-[120px] flex flex-col justify-center hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)] transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <span className="text-sm font-medium leading-6">
                    {item.label}
                                    </span>

                                </div>
            
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

// এই component অন্য ফাইলে import করার জন্য export করা হচ্ছে
export default About;