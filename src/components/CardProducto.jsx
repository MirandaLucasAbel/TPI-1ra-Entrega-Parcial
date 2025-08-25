export default function CardProducto({ titulo, precio }) {
    return (
      <div className="bg-blue-100 shadow-md rounded-2xl p-4 m-2 w-64">
        <h2 className="text-lg font-bold">{titulo}</h2>
        <p className="text-gray-700">Precio: ${precio}</p>
      </div>
    );
  }
  