import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ecommerce fullstack",
    description: "My version of a fullstack Ecommerce website",
    image: "/projects/picture1.png",
    tags: ["NextJS", "TailwindCSS", "Stripe"],
    demoUrl: "https://ecommerce-fullstack-algm.vercel.app/",
    githubURl: "https://github.com/rmandici/ecommerce-fullstack",
  },
  {
    id: 2,
    title: "SaaS Landing Page",
    description: "Empower your business with AI",
    image: "/projects/picture2.png",
    tags: ["React", "TailwindCSS", "TypeScript"],
    demoUrl: "https://ai-saas-react-tailwind.vercel.app/",
    githubURl: "https://github.com/rmandici/AI-SaaS-React-tailwind",
  },
  {
    id: 3,
    title: "UMstudio",
    description: "The 1 page website for UMstudio",
    image: "/projects/picture3.png",
    tags: ["React", "TailwindCSS", "TypeScript"],
    demoUrl: "https://www.umstudio.ro/",
    githubURl: "https://github.com/rmandici/urbanist_project",
  },
  {
    id: 4,
    title: "CDprospect",
    description: "The reinterpretation of cdprospect.fr",
    image: "/projects/picture4.png",
    tags: ["React", "TailwindCSS", "TypeScript"],
    demoUrl: "https://cdprospect.vercel.app/",
    githubURl: "https://github.com/rmandici/cdprospect",
  },
  {
    id: 5,
    title: "Proimages",
    description: "Conversion from wordpress to custom react",
    image: "/projects/picture5.png",
    tags: ["React", "TailwindCSS", "TypeScript", "FramerMotion", "Supabase"],
    demoUrl: "https://proimages.vercel.app/",
    githubURl: "https://github.com/rmandici/proimages",
  },
  {
    id: 6,
    title: "Souperior",
    description: "A website for a restaurant",
    image: "/projects/picture6.png",
    tags: ["NextJS", "TailwindCSS", "TypeScript"],
    demoUrl: "https://souperior.vercel.app/",
    githubURl: "https://github.com/rmandici/souperior",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Feateured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-forground mb-12 max-w-2xl mx-auto">
          Here’s a selection of my recent work — projects where I combined clean
          design with solid functionality to solve real problems and deliver
          smooth user experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-forground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubURl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto"
            target="_blank"
            href="https://github.com/rmandici"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
