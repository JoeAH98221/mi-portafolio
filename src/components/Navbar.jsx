export default function Navbar() {
    return (
        <nav class="text-white mx-6 my-4 flex justify-between items-center">
            <h1 class="text-2xl font-bold">Mi Portafolio</h1>
            <ul class="flex gap-6">
                <li><a href="#projects" class="hover:text-cyan-400">Proyectos</a></li>
                <li><a href="#about" class="hover:text-cyan-400">Sobre mí</a></li>
                <li><a href="#contact" class="hover:text-cyan-400">Contacto</a></li>
            </ul>
        </nav>
    );
}
