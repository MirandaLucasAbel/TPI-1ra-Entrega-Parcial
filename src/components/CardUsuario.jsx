export default function CardUsuario({ nombre, edad }) {
    return (
      <div className="bg-white shadow-md rounded-2xl p-4 m-2 w-64">
        <h2 className="text-lg font-bold">{nombre}</h2>
        <p className="text-gray-600">Edad: {edad}</p>
      </div>
    );
  }
  