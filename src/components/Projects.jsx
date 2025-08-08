const projects = [
    {
        title: "Sistema de Tracking",
        description: "Aplicación para rastrear vehículos en tiempo real con MapLibre y OpenStreetMap.",
        link: "https://tracking-frontend-eight.vercel.app/"
    },
    {
        title: "Catálogo de productos",
        description: "Página tipo Mercado Libre sin compras, con React y Node.js.",
        link: "https://tracking-frontend-eight.vercel.app/"
    }
];

export default function Projects() {
    return (
        <section id="projects" class="py-20">
            <h3 class="text-3xl font-bold text-center mb-12">Mis Proyectos</h3>
            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                {projects.map((project, index) => (
                    <div key={index} class="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
                        <h4 class="text-xl font-semibold mb-2">{project.title}</h4>
                        <p class="text-gray-700 mb-4">{project.description}</p>
                        <a href={project.link} class="text-cyan-500 hover:underline">Ver más</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
