export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300">Inicio</a>
          <a href="#" className="hover:text-gray-300">Usuarios</a>
          <a href="#" className="hover:text-gray-300">Productos</a>
        </div>
      </nav>
    );
  }
  