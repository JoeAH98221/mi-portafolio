export default function Navbar() {
    return (
        <nav class="mx-6 my-4 flex justify-between items-center">
            <h1 class="text-2xl font-bold">Mi Portafolio</h1>
            <ul class="flex gap-6 text-2xl">
                <li><a href="#projects" class="nav-item">Proyectos</a></li>
                <li><a href="#about" class="nav-item">Sobre mí</a></li>
                <li><a href="#contact" class="nav-item">Contacto</a></li>
            </ul>
        </nav>
    );
}
