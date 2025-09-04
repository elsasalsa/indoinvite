"use client"
import { motion } from "framer-motion"

export default function StoryPage() {
    const galleryItem = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }
    return (
        <div>
            <div className="min-h-screen bg-[#e6f0fa] px-2 relative">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="relative z-20 bg-white p-6 rounded-xl shadow-lg space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-comic text-gray-800 mb-2">Our Story</h1>
                            <p className="text-base text-gray-600 font-light">
                                Momen Indah Kita Berdua
                            </p>
                        </div>

                        {/* Pertemuan */}
                        <motion.div
                            className="flex gap-4 mb-8"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="w-1/2 flex flex-col text-right">
                                <h3 className="text-[14px] sm:text-lg md:text-xl font-serif text-gray-800 mb-2">
                                    Pertemuan Di Kereta Api
                                </h3>
                                <p className="text-[10px] sm:text-sm md:text-base text-gray-600 leading-relaxed">
                                    Pertemuan tak terduga di sebuah kereta api membawa Aria dan Ryan
                                    dalam sebuah cerita cinta perjalanan yang tak terlupakan. Aria
                                    adalah seorang gadis yang bekerja sebagai penulis buku anak-anak,
                                    sedangkan Ryan adalah seorang pengusaha muda yang sedang dalam
                                    perjalanan bisnis ke kota lain.
                                </p>
                            </div>

                            <div className="w-1/2">
                                <img
                                    src="/couple-image/1677249937.jpeg"
                                    alt="Pertemuan di kereta api"
                                    className="w-full h-full object-cover rounded-lg shadow-md"
                                />
                            </div>
                        </motion.div>

                        {/* Pelaminan */}
                        <motion.div
                            className="flex gap-4 mb-8"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="w-1/2">
                                <img
                                    src="/couple-image/1677249222.jpeg"
                                    alt="Lanjut ke Pelaminan"
                                    className="w-full h-full object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="w-1/2 flex flex-col justify-center">
                                <h3 className="text-[14px] sm:text-xs md:text-xl font-serif text-gray-800 mb-2">
                                    Lanjut ke Pelaminan
                                </h3>
                                <p className="text-[10px] sm:text-sm md:text-base text-gray-600 leading-relaxed">
                                    05 Januari 2024 <br />
                                    Setelah itu, Ryan dan Aria terus berhubungan dan
                                    memulai sebuah hubungan yang manis. Mereka mengunjungi tempat-tempat
                                    yang indah dan menikmati setiap momen bersama. Perjalanan pertemuan di
                                    kereta api telah membawa mereka pada sebuah cerita cinta perjalanan
                                    yang tak terlupakan.
                                </p>
                            </div>
                        </motion.div>

                        {/* Video */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="text-2xl font-serif text-gray-800 mb-4 text-center">
                                Our Gallery
                            </h2>
                            <div className="relative w-full aspect-video bg-black overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/7ztcdznpX9w"
                                    title="You Marry Me?"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="space-y-2 mt-4">
                                <motion.div
                                    className="flex gap-2"
                                    variants={galleryItem}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.3 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="w-2/4">
                                        <img
                                            src="/couple-image/1679297398.jpeg"
                                            alt="Foto kecil"
                                            className="w-full h-40 object-cover shadow-md"
                                        />
                                    </div>
                                    <div className="w-3/4">
                                        <img
                                            src="/couple-image/1677249222.jpeg"
                                            alt="Foto besar"
                                            className="w-full h-40 object-cover shadow-md"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex gap-2"
                                    variants={galleryItem}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    <div className="w-2/4">
                                        <img
                                            src="/couple-image/1679297384.jpeg"
                                            alt="Foto kecil"
                                            className="w-full h-40 object-cover shadow-md"
                                        />
                                    </div>
                                    <div className="w-3/4">
                                        <img
                                            src="/couple-image/1677249222.jpeg"
                                            alt="Foto besar"
                                            className="w-full h-40 object-cover shadow-md"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex gap-2"
                                    variants={galleryItem}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="w-3/4">
                                        <img
                                            src="/couple-image/1677249937.jpeg"
                                            alt="Foto besar"
                                            className="w-full h-40 object-cover shadow-md"
                                        />
                                    </div>
                                    <div className="w-2/4">
                                        <img
                                            src="/couple-image/1679297391.jpeg"
                                            alt="Foto kecil"
                                            className="w-full h-40 object-cover shadow-md"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* Gambar bawah card */}
            <motion.div
                className="-mt-24 relative z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <img
                    src="/couple-image/1679297398.jpeg"
                    alt="Foto kecil"
                    className="w-full h-96 object-cover shadow-md rounded-lg"
                />
            </motion.div>
        </div>
    )
}
