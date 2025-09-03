"use client"

export default function Invitation({ userName }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Selamat datang di Dashboard 🎉
        </h1>
        <p className="text-lg text-gray-600">
          Halo, {userName || "Tamu Undangan"} 👋
        </p>
      </div>
    </div>
  )
}
