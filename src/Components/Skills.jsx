// SKILL_CATEGORIES = এখানে সব skill category এবং তাদের skills store করা হয়েছে
// এই data ব্যবহার করে UI automatically generate হবে

const SKILL_CATEGORIES = [
  {
    // Category title (Programming Languages section)
    title: "Programming Languages",

    // এই category এর ভিতরের skills
    skills: [
      { name: "Python", icon: "python", url: "https://www.python.org/" }, // Python language
      { name: "JavaScript", icon: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }, // JavaScript
      { name: "C++", icon: "cpp", url: "https://isocpp.org/" }, // C++ programming
      { name: "Java", icon: "java", url: "https://www.java.com/" }, // Java
      { name: "C#", icon: "cs", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" }, // C#
      { name: "R", icon: "r", url: "https://www.r-project.org/" }, // R language (data science)
      { name: "HTML", icon: "html", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" }, // HTML
      { name: "CSS", icon: "css", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" }, // CSS
      { name: "C", icon: "c", url: "https://en.wikipedia.org/wiki/C_(programming_language)" }, // C language
      { name: "PHP", icon: "php", url: "https://www.php.net/" }, // PHP language
    ],
  },

  {
    // AI / Machine Learning related tools and libraries
    title: "AI / Machine Learning",

    skills: [
      { name: "TensorFlow", icon: "tensorflow", url: "https://www.tensorflow.org/" }, // Deep learning framework
      { name: "PyTorch", icon: "pytorch", url: "https://pytorch.org/" }, // Deep learning framework
      { name: "Scikit-learn", icon: "scikitlearn", url: "https://scikit-learn.org/" }, // Machine learning library
      { name: "Pandas", icon: "pandas", url: "https://pandas.pydata.org/" }, // Data analysis library
      { name: "NumPy", icon: "numpy", url: "https://numpy.org/" }, // Numerical computing
      { name: "Jupyter", icon: "jupyter", url: "https://jupyter.org/" }, // Notebook environment
      { name: "Matplotlib", icon: "matplotlib", url: "https://matplotlib.org/" }, // Data visualization
      { name: "Seaborn", icon: "python", url: "https://seaborn.pydata.org/" }, // Visualization library

      // Direct SVG icon used instead of API icon
      {
        name: "Keras",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
        url: "https://keras.io/"
      }
    ],
  },

  {
    // Development tools and platforms
    title: "Tools & Platforms",

    skills: [
      { name: "Anaconda", icon: "anaconda", url: "https://www.anaconda.com/" }, // Python environment manager
      { name: "VS Code", icon: "vscode", url: "https://code.visualstudio.com/" }, // Code editor
      { name: "Visual Studio", icon: "visualstudio", url: "https://visualstudio.microsoft.com/" }, // Microsoft IDE
      { name: "Google Colab", icon: "googlecolab", url: "https://colab.research.google.com/" }, // Cloud notebook
      { name: "Kaggle", icon: "kaggle", url: "https://www.kaggle.com/" }, // Data science platform
      { name: "Notepad++", icon: "notepadpp", url: "https://notepad-plus-plus.org/" }, // Text editor

      { name: "Git", icon: "git", url: "https://git-scm.com/" }, // Version control
      { name: "GitHub", icon: "github", url: "https://github.com/" }, // Code hosting platform
      { name: "Git Bash", icon: "git", url: "https://git-scm.com/" }, // Git terminal

      { name: "Figma", icon: "figma", url: "https://www.figma.com/" }, // UI/UX design tool

      { name: "LaTeX", icon: "latex", url: "https://www.latex-project.org/" }, // Scientific writing
      { name: "Overleaf", icon: "overleaf", url: "https://www.overleaf.com/" } // Online LaTeX editor
    ]
  },

  {
    // Web frameworks and libraries
    title: "Frameworks & Libraries",

    skills: [
      { name: "React", icon: "react", url: "https://react.dev/" }, // Frontend framework
      { name: "ASP.NET Core", icon: "dotnet", url: "https://dotnet.microsoft.com/" }, // Backend framework
      { name: "Express", icon: "expressjs", url: "https://expressjs.com/" }, // Node.js backend framework
      { name: "Bootstrap", icon: "bootstrap", url: "https://getbootstrap.com/" }, // CSS framework
    ],
  },

  {
    // Databases and system tools
    title: "Databases & Tools",

    skills: [
      { name: "MySQL", icon: "mysql", url: "https://www.mysql.com/" }, // SQL database
      { name: "Microsoft SQL Server", icon: "sqlserver", url: "https://www.microsoft.com/en-us/sql-server" }, // Microsoft database
      { name: "MongoDB", icon: "mongodb", url: "https://www.mongodb.com/" }, // NoSQL database
      { name: "Oracle", icon: "oracle", url: "https://www.oracle.com/" }, // Oracle database
      { name: "Linux", icon: "linux", url: "https://www.linux.org/" }, // Linux OS
    ],
  },
];


// Skills Component (React Component)
// এই component UI তে skills section render করবে

const Skills = () => {
  return (
    // Skills section wrapper
    <section id="skills" className="py-24 bg-secondary/20">

      {/* Container for page width */}
      <div className="section-container">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">
            Skills & Technologies
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="gradient-text"> Technical Expertise</span>
          </h2>
        </div>

        {/* Grid layout for categories */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Loop through each skill category */}
          {SKILL_CATEGORIES.map((category) => (

            // Skill category card
            <div
              key={category.title}
              className="glass-card rounded-3xl p-8 border border-white/10 hover:border-primary/20 transition-all duration-300"
            >

              {/* Category title */}
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {category.title}
              </h3>

              {/* Divider line */}
              <div className="h-px w-full bg-border/70 mb-8" />

              {/* Skills icon grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-6 gap-y-8">

                {/* Loop through skills */}
                {category.skills.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center group"
                    title={skill.name}
                  >

                    {/* Skill icon container */}
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.10)]">

                      {/* Skill icon image */}
                      <img
                        src={
                          skill.icon.startsWith("http")
                            ? skill.icon
                            : `https://go-skill-icons.vercel.app/api/icons?i=${skill.icon}`
                        }
                        alt={skill.name}
                        loading="lazy"
                        className="w-9 h-9 object-contain"
                      />
                    </div>

                    {/* Skill name */}
                    <span className="mt-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>

                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export component so it can be used in App.jsx
export default Skills;