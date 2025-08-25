import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar arriba */}
      <Navbar />

      {/* Contenido centrado */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        {children}
      </main>
    </div>
  );
}
