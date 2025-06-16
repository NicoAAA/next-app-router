export default function TailwindPage() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4">¿Qué es Tailwind CSS?</h2>
      <p>
        Tailwind CSS es un framework utilitario para diseñar rápidamente con clases
        en lugar de definir estilos personalizados.
      </p>
      <div className="mt-6 space-y-4">
        {/* Componente 1: Card */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">Card Component</h3>
          <p>Contenido de ejemplo dentro de una tarjeta.</p>
        </div>

        {/* Componente 2: Button */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Botón primario
        </button>

        {/* Componente 3: Alert */}
        <div className="border-l-4 border-yellow-400 bg-yellow-50 p-3">
          <p className="text-yellow-800">Este es un mensaje de alerta.</p>
        </div>
      </div>
    </>
  );
}
