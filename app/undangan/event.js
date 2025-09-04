"use client"

import { motion } from "framer-motion"

export default function EventPage() {
    const handleMapClickResepsi = () => {
        window.open("https://maps.app.goo.gl/9iy4nimquCinLwHa6", "_blank")
    }

    const handleMapClickAkad = () => {
        window.open("https://maps.app.goo.gl/koZPhra7hH8Y2MS26", "_blank")
    }
    const handleMapClickMakan = () => {
        window.open("https://maps.app.goo.gl/WSm6JrqdNUqnjLuS8", "_blank")
    }

    const fadeSlideUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    const floatAnimation = {
        animate: { y: [0, -10, 0], transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } }
    }

    return (
        <div className="relative z-[9999] bg-[#e6f0fa] min-h-screen">
            {/* Background decorative elements */}
            <div className="absolute -left-16 w-80 h-80 opacity-1">
                <img
                    src="/asset-image/branch.webp"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="absolute -top-8 -right-32 w-72 h-72 opacity-90 animate-float-right">
                <img
                    src="/asset-image/leaf.webp"
                    alt=""
                    className="w-full h-full object-contain -rotate-12"
                />
            </div>

            <div className="relative z-10 px-4 py-6 sm:px-6 sm:py-8">
                <motion.div className="text-center mt-20 mb-8" initial="hidden" animate="visible" variants={fadeSlideUp}>
                    <h1 className="text-4xl sm:text-3xl md:text-4xl font-comic text-gray-800 mb-2 text-left">
                        Save The Date <br /> Acara
                    </h1>
                </motion.div>

                <div className="max-w-sm mx-auto mb-6 space-y-4 sm:max-w-md sm:space-y-6">
                    <div className="bg-white rounded-2xl px-4 pt-2 sm:p-6 md:p-8 shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 opacity-1">
                            <img src="/asset-image/bg-1.webp" alt="Card background" className="w-full h-full object-cover" />
                        </div>

                        <div className="relative z-10 pt-4">
                            <h3 className="text-3xl sm:text-xl md:text-2xl font-comic text-gray-800 mb-3 sm:mb-4 text-balance">
                                Resepsi Pernikahan
                            </h3>

                            <div className="mb-4 sm:mb-6">
                                <p className="text-base sm:text-base font-comic text-gray-600 mb-2">Anggara</p>
                                <p className="text-2xl sm:text-2xl md:text-3xl font-comic text-gray-800 mb-3 sm:mb-4 text-balance">
                                    4-5 MARET 2025
                                </p>
                                <p className="text-sm sm:text-base text-gray-600">Jam Bebas</p>
                            </div>

                            <div className="relative flex justify-end mb-6">

                                {/* Pohon kiri */}
                                <div className="absolute left-10 top-0 w-40 h-40 -translate-x-1/2 z-0 animate-float-left">
                                    <img src="/asset-image/tree-3.webp" alt="" className="w-full h-full object-contain" />
                                </div>

                                <div className="absolute left-20 top-4 w-28 h-28 -translate-x-1/2 z-0 animate-float-left">
                                    <img src="/asset-image/orchied.webp" alt="" className="w-full h-full object-contain transform -scale-x-100" />
                                </div>

                                {/* Pohon kanan */}
                                <div className="absolute -right-16 top-0 w-40 h-40 translate-x-1/2 z-0 animate-float-right">
                                    <img src="/asset-image/tree-1.webp" alt="" className="w-full h-full object-contain" />
                                </div>

                                {/* Card lokasi */}
                                <div className="relative z-10 bg-[#e6f0fa] rounded-xl shadow-md p-4 sm:p-6 max-w-xs w-auto text-left">
                                    <div className="mb-4">
                                        <div className="w-8 h-8 mb-3 flex items-center justify-start">
                                            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-700 text-left">Rumah Justin di Jakarta</p>
                                    </div>

                                    <div>
                                        <button
                                            onClick={handleMapClickResepsi}
                                            className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 rounded-full text-xs font-medium transition-colors duration-200 inline-flex items-center gap-2 ml-auto"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Map Lokasi Acara
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm mx-auto mb-6 space-y-4 sm:max-w-md sm:space-y-6">
                    <div className="bg-white rounded-2xl px-4 pt-2 sm:p-6 md:p-8 shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 opacity-1">
                            <img src="/asset-image/bg-1.webp" alt="Card background" className="w-full h-full object-cover" />
                        </div>

                        <div className="relative z-10 pt-4">
                            <h3 className="text-3xl sm:text-xl md:text-2xl font-comic text-gray-800 mb-3 sm:mb-4 text-balance">
                                Akad Pernikahan
                            </h3>

                            <div className="mb-4 sm:mb-6">
                                <p className="text-base sm:text-base font-comic text-gray-600 mb-2">Rabu</p>
                                <p className="text-2xl sm:text-2xl md:text-3xl font-comic text-gray-800 mb-3 sm:mb-4 text-balance">
                                    18 Februari 2006
                                </p>
                                <p className="text-sm sm:text-base text-gray-600">02:39 WIB - 08:00 WIB</p>
                            </div>

                            <div className="relative flex justify-end mb-6">

                                {/* Pohon kiri */}
                                <div className="absolute left-10 top-0 w-40 h-40 -translate-x-1/2 z-0 animate-float-left">
                                    <img src="/asset-image/tree-3.webp" alt="" className="w-full h-full object-contain" />
                                </div>

                                <div className="absolute left-20 top-4 w-28 h-28 -translate-x-1/2 z-0 animate-float-left">
                                    <img src="/asset-image/orchied.webp" alt="" className="w-full h-full object-contain transform -scale-x-100" />
                                </div>

                                {/* Pohon kanan */}
                                <div className="absolute -right-16 top-0 w-40 h-40 translate-x-1/2 z-0 animate-float-right">
                                    <img src="/asset-image/tree-1.webp" alt="" className="w-full h-full object-contain" />
                                </div>

                                {/* Card lokasi */}
                                <div className="relative z-10 bg-[#e6f0fa] rounded-xl shadow-md p-4 sm:p-6 max-w-xs w-auto text-left">
                                    <div className="mb-4">
                                        <div className="w-8 h-8 mb-3 flex items-center justify-start">
                                            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-700 text-left">Jalan gunung batur, no 78,<br /> Denpasar, Bali</p>
                                    </div>

                                    <div>
                                        <button
                                            onClick={handleMapClickAkad}
                                            className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 rounded-full text-xs font-medium transition-colors duration-200 inline-flex items-center gap-2 ml-auto"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Map Lokasi Acara
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm mx-auto space-y-4 sm:max-w-md sm:space-y-6">
                    <div className="bg-white rounded-2xl px-4 pt-2 sm:p-6 md:p-8 shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 opacity-1">
                            <img src="/asset-image/bg-1.webp" alt="Card background" className="w-full h-full object-cover" />
                        </div>

                        <div className="relative z-10 pt-4">
                            <h3 className="text-3xl sm:text-xl md:text-2xl font-comic text-gray-800 mb-3 sm:mb-4 text-balance">
                                Makan Malam
                            </h3>

                            <div className="mb-4 sm:mb-6">
                                <p className="text-base sm:text-base font-comic text-gray-600 mb-2">Kamis</p>
                                <p className="text-2xl sm:text-2xl md:text-3xl font-comic text-gray-800 mb-3 sm:mb-4 text-balance">
                                    15 Mei 2025
                                </p>
                                <p className="text-sm sm:text-base text-gray-600">Jam Bebas</p>
                            </div>

                            <div className="relative flex justify-end mb-6">

                                {/* Pohon kiri */}
                                <div className="absolute left-10 top-0 w-40 h-40 -translate-x-1/2 z-0 animate-float-left">
                                    <img src="/asset-image/tree-3.webp" alt="" className="w-full h-full object-contain" />
                                </div>

                                <div className="absolute left-20 top-4 w-28 h-28 -translate-x-1/2 z-0 animate-float-left">
                                    <img src="/asset-image/orchied.webp" alt="" className="w-full h-full object-contain transform -scale-x-100" />
                                </div>

                                {/* Pohon kanan */}
                                <div className="absolute -right-16 top-0 w-40 h-40 translate-x-1/2 z-0 animate-float-right">
                                    <img src="/asset-image/tree-1.webp" alt="" className="w-full h-full object-contain" />
                                </div>

                                {/* Card lokasi */}
                                <div className="relative z-10 bg-[#e6f0fa] rounded-xl shadow-md p-4 sm:p-6 max-w-xs w-auto text-left">
                                    <div className="mb-4">
                                        <div className="w-8 h-8 mb-3 flex items-center justify-start">
                                            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-700 text-left">Restoran Makan Padang</p>
                                    </div>

                                    <div>
                                        <button
                                            onClick={handleMapClickMakan}
                                            className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 rounded-full text-xs font-medium transition-colors duration-200 inline-flex items-center gap-2 ml-auto"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Map Lokasi Acara
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
