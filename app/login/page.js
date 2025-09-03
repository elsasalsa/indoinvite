"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        if (data.user?.name) {
          localStorage.setItem("userName", data.user.name);
        }
        Swal.fire({
          icon: "success",
          title: "Login berhasil!",
          text: "Selamat datang kembali",
          confirmButtonColor: "#ec4899",
        }).then(() => {
          Swal.fire({
            title: "Mohon tunggu...",
            text: "Mengalihkan ke halaman undangan",
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            },
          });

          setTimeout(() => {
            router.push("/undangan");
            Swal.close();
          }, 1500);
        });
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Login gagal",
          text: data.message || "Email atau password salah.",
        });
      }
    } catch (err) {
      console.error("Login error:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Tidak bisa terhubung ke server.",
      });
    }
  };

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

      {/* Card Login */}
      <div className="relative z-30 flex items-center justify-center min-h-screen p-6">
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
          <p className="text-center text-gray-600 mb-6 text-sm">
            {/* Selamat datang kembali di <span className="font-semibold text-pink-500">Indoinvite!</span>
            <br /> */}
            Yuk masuk dan lanjutkan perjalanan undanganmu 💌
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              suppressHydrationWarning
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              suppressHydrationWarning
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              suppressHydrationWarning
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600">
              Belum punya akun?{" "}
              <Link href="/register" className="text-pink-500 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
