export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">
        Selamat Datang di Indoinvite
      </h1>
      <div className="flex gap-4">
        <a
          href="/login"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
        >
          Login
        </a>
        <a
          href="/register"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300"
        >
          Register
        </a>
      </div>
    </main>
  );
}
