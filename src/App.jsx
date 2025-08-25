import Layout from "./components/Layout";
import CardUsuario from "./components/CardUsuario";
import CardProducto from "./components/CardProducto";

function App() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">tp1</h1>

      <div className="flex flex-wrap gap-4">
        <CardUsuario nombre="Juan Pérez" edad={30} />
        <CardUsuario nombre="María López" edad={25} />
      </div>

      <div className="flex flex-wrap gap-4 mt-6">
        <CardProducto titulo="Notebook" precio={1200} />
        <CardProducto titulo="Auriculares" precio={200} />
      </div>
    </Layout>
  );
}

export default App;
