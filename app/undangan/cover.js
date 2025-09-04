"use client";

export default function CoverPage({ onOpen }) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-rose-50">
      {/* Background Trees */}
      <div className="absolute inset-0">
        <div
          className="absolute -top-16 -left-48 w-[400px] h-[450px] opacity-1 bg-no-repeat bg-cover z-20"
          style={{ backgroundImage: "url(/asset-image/tree-3.webp)" }}
        />
        <div
          className="absolute -top-16 -right-60 w-[500px] h-[450px] opacity-1 bg-no-repeat bg-cover z-10"
          style={{ backgroundImage: "url(/asset-image/tree-2.webp)" }}
        />
        <div
          className="absolute -bottom-6 -left-60 w-[500px] h-[400px] bg-no-repeat bg-cover z-10"
          style={{ backgroundImage: "url(/asset-image/tree-1.webp)" }}
        />
        <div
          className="absolute -bottom-6 -right-40 w-96 h-96 opacity-1 bg-no-repeat bg-cover z-20"
          style={{ backgroundImage: "url(/asset-image/tree-3.webp)" }}
        />
      </div>

      {/* Card Sampul */}
      <div className="relative z-30 flex items-center justify-center min-h-screen p-6">
        <div className="bg-[#e8edf1]/90 p-6 md:p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <p className="font-serif text-gray-700 mb-2">Happy Wedding</p>
          <h1 className="font-serif text-3xl md:text-4xl mb-4">Justin & Sisca</h1>
          <p className="text-xs md:text-base mb-4">
            Tanpa Mengurangi Rasa Hormat, Kami Mengundang Bapak/Ibu/Saudara/i
            Untuk Hadir Di Acara Kami.
          </p>
          <p className="text-gray-600">Kepada :</p>
          <p className="font-semibold text-lg mb-6">Bapak Budi</p>
          <button
            onClick={onOpen}
            className="bg-[#5c4033] text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto hover:bg-[#4b3328] transition"
          >
            <span>📩</span> Buka Sampul
          </button>
        </div>
      </div>
    </div>
  );
}
