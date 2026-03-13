// Import icons from lucide-react library
// ExternalLink = live project icon
// Github = github repository icon
// Folder = project folder icon
import { ExternalLink, Github, Folder } from "lucide-react";

// Projects component (Portfolio projects section)
const Projects = () => {

    // Array of project objects
    // প্রতিটি object একটি project represent করে
    const projects = [

        {
            // Project title
            title: "EventSphere",

            // Short description about the project
            description: "A web-based event management system designed to manage and organize events efficiently. The system allows users to create, manage, and track events, providing a structured way to handle event data and user interactions.",

            // Technologies used in this project
            tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript","MVC"],

            // GitHub repository link
            github: "https://github.com/AfnanBinIslamNahin/Event-Management-System",

            // Live project link (currently commented out)
            // live: " https://event-sphere.netlify.app/"
        },

        {
            // AI project title
            title: "Early Warning System for Global Food Price Surges",

            // Project explanation
            description: "An AI-based early warning system that predicts global food price surges using multi-source data and ensemble machine learning techniques. The project integrates multiple datasets to forecast food price instability and support early policy decision-making.",

            // Technologies / libraries used
            tech: ["Python", "Ensemble Learning", "Data Analysis","LSTM", "Pandas", "Scikit-learn","numpy"],

            // GitHub link
            github: "https://github.com/AfnanBinIslamNahin/Early-warning-system-for-global-food-price-surges-using-multi-source-ensemble-learning"
        },

        {
            // AI forecasting project title
            title: "Hybrid LSTM-XGBoost PM2.5 Forecasting",

            // Description about model and purpose
            description: "An AI-driven air quality forecasting project that predicts PM2.5 concentrations 1–6 hours ahead using a residual hybrid framework. The model combines XGBoost for nonlinear feature learning and LSTM for temporal residual correction, supporting short-term pollution monitoring and environmental decision-making in Dhaka.",

            // Technologies used
            tech: ["Python", "XGBoost", "LSTM", "Pandas" , "Scikit-learn","numpy"],

            // GitHub repository link
            github: "https://github.com/AfnanBinIslamNahin/Hybrid-LSTM-XGBoost-Framework-for-Short-Term-PM2.5-"
        }
    ];

    return (

        // Main projects section
        // id="projects" ব্যবহার করা হয়েছে যাতে navbar থেকে scroll করে এখানে আসা যায়
        <section id="projects" className="py-24">

            <div className="section-container">

                {/* Section Title */}
                <div className="text-center mb-16">

                    {/* Small subtitle */}
                    <p className="text-primary font-mono text-sm mb-2">
                        What I've Built
                    </p>

                    {/* Main heading */}
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>

                </div>

                {/* Grid layout for project cards */}
                {/* Mobile = 1 column
                    Tablet = 2 columns
                    Desktop = 3 columns */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Loop through projects array */}
                    {/* Each project will generate a project card */}
                    {projects.map((project, index) => (

                        // Project card container
                        <article key={index} className="project-card group">

                            {/* Top part of card (icon + links) */}
                            <div className="flex items-center justify-between mb-6">

                                {/* Folder icon */}
                                <Folder className="w-10 h-10 text-primary" />

                                {/* GitHub + Live project links */}
                                <div className="flex gap-3">

                                    {/* GitHub repository link */}
                                    <a
                                        href={project.github}
                                        target="_blank" // open in new tab
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        aria-label="View GitHub repository"
                                    >
                                        <Github size={20} />
                                    </a>

                                    {/* Live project link */}
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        aria-label="View live project"
                                    >
                                        <ExternalLink size={20} />
                                    </a>

                                </div>
                            </div>

                            {/* Project Title */}
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            {/* Project Description */}
                            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Technologies used */}
                            <div className="flex flex-wrap gap-2 mt-auto">

                                {/* Loop through tech array */}
                                {project.tech.map((tech, techIndex) => (

                                    <span
                                        key={techIndex}
                                        className="text-xs font-mono text-muted-foreground"
                                    >

                                        {/* Tech name */}
                                        {tech}

                                        {/* Add dot separator except last item */}
                                        {techIndex < project.tech.length - 1 && (
                                            <span className="ml-2 text-border">•</span>
                                        )}

                                    </span>

                                ))}
                            </div>

                        </article>
                    ))}
                </div>

                {/* View more GitHub projects button */}
                <div className="text-center mt-12">

                    <a
                        href="https://github.com/AfnanBinIslamNahin?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    >

                        View More on GitHub

                        {/* External link icon */}
                        <ExternalLink size={16} />

                    </a>

                </div>

            </div>

        </section>
    );
};

// Export component so it can be used in other files
export default Projects;