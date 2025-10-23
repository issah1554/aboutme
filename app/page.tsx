export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 space-y-6">
      <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">Tailwind is working!</h1>
        <p className="mt-4 text-lg">If you see this styled, Tailwind is active.</p>
      </div>

      <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
        Click Me
      </button>

      <input
        type="text"
        placeholder="Type here..."
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="grid grid-cols-3 gap-4 w-full max-w-md">
        <div className="bg-red-500 text-white p-4 rounded">1</div>
        <div className="bg-yellow-500 text-white p-4 rounded">2</div>
        <div className="bg-purple-500 text-white p-4 rounded">3</div>
      </div>
    </div>
  );
}
