import Image from "next/image";

export default function MainPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Background dekorasi */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[url('/asset-image/flower-blue.png')] bg-contain bg-no-repeat opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-[url('/asset-image/leaves-blue.png')] bg-contain bg-no-repeat opacity-20 pointer-events-none" />

      {/* Logo */}
      <Image
        src="/indoinvite.png"
        alt="Indoinvite Logo"
        width={80}
        height={80}
        className="mb-4 animate-fadeIn"
      />

      {/* Judul */}
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-blue-400 mb-4 text-center animate-fadeIn">
        Selamat Datang di Indoinvite
      </h1>
      <p className="text-gray-600 text-center mb-8 max-w-sm animate-fadeIn delay-150">
        Buat undangan digitalmu dengan mudah dan elegan 💌
      </p>

      {/* Tombol */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-xs md:max-w-none justify-center animate-fadeIn delay-300">
        <a
          href="/login"
          className="px-6 py-3 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500 transition transform hover:scale-105 text-center"
        >
          Login
        </a>
        <a
          href="/register"
          className="px-6 py-3 bg-white border border-blue-100 text-blue-500 rounded-lg shadow hover:bg-blue-50 transition transform hover:scale-105 text-center"
        >
          Register
        </a>
      </div>
    </main>
  );
}
