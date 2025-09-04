"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      Swal.fire({
        icon: "info",
        title: "Anda sudah login",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      router.replace("/undangan");
    }
  }, [router]);

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
        // Simpan token saja
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        Swal.fire({
          icon: "success",
          title: "Login berhasil!",
          text: "Selamat datang kembali",
          confirmButtonColor: "#3b82f6",
        }).then(() => {
          Swal.fire({
            title: "Mohon tunggu...",
            text: "Mengalihkan ke halaman undangan",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading(),
          });

          setTimeout(() => {
            router.replace("/undangan");
            Swal.close();
          }, 1500);
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login gagal",
          text: data.message || "Email atau password salah.",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Tidak bisa terhubung ke server.",
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Background Trees */}
      <div className="absolute inset-0">
        <div
          className="absolute -top-16 -left-60 w-[400px] h-[450px] opacity-1 bg-no-repeat bg-cover z-20"
          style={{ backgroundImage: "url(/asset-image/tree-3.webp)" }}
        />
        <div
          className="absolute -top-16 -right-64 w-[500px] h-[450px] opacity-1 bg-no-repeat bg-cover z-10"
          style={{ backgroundImage: "url(/asset-image/tree-2.webp)" }}
        />
        <div
          className="absolute -bottom-10 -left-60 w-[500px] h-[400px] bg-no-repeat bg-cover z-10"
          style={{ backgroundImage: "url(/asset-image/tree-1.webp)" }}
        />
        <div
          className="absolute -bottom-12 -right-40 w-96 h-96 opacity-1 bg-no-repeat bg-cover z-20"
          style={{ backgroundImage: "url(/asset-image/tree-3.webp)" }}
        />

        <div
          className="absolute top-4 right-48 w-24 h-24 pointer-events-none z-30 animate-float-x"
          style={{
            backgroundImage: "url(/asset-image/bird.webp)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="relative z-30 flex items-center justify-center min-h-screen p-6">
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-2">Login</h2>
          <p className="text-center text-gray-600 mb-6 text-sm">
            Yuk masuk dan lanjutkan perjalanan undanganmu 💌
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              suppressHydrationWarning
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              suppressHydrationWarning
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              suppressHydrationWarning
              type="submit"
              className="w-full bg-blue-300 text-white py-2 rounded-lg hover:bg-blue-400 transition"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600">
              Belum punya akun?{" "}
              <Link href="/register" className="text-blue-300 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
