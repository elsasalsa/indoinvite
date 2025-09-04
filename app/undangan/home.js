"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import StoryPage from "./story"
import EventPage from "./event"

export default function HomePage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const fadeUpSlow = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Target date: September 10, 2025
  const targetDate = new Date("2025-09-10T00:00:00").getTime()

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const handleSaveToCalendar = () => {
    const eventTitle = encodeURIComponent("Justin & Sisca Wedding")
    const eventDate = "20250910T000000Z"
    const eventEndDate = "20250910T235959Z"
    const eventDetails = encodeURIComponent("Wedding celebration of Justin & Sisca")

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${eventDate}/${eventEndDate}&details=${eventDetails}`

    window.open(googleCalendarUrl, "_blank")
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#e6f0fa]">
      <section className="min-h-screen flex items-center justify-center relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/asset-image/bg-1.webp')",
            backgroundSize: "contain",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Top left tree decoration */}
        <div className="absolute -top-5 -left-16 w-64 h-64 opacity-80">
          <img
            src="/asset-image/branch.webp"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Top right tree decoration (mirrored) */}
        <div className="absolute -top-5 -right-16 w-64 h-64 opacity-80">
          <img
            src="/asset-image/branch.webp"
            alt=""
            className="w-full h-full object-contain transform -scale-x-100"
          />
        </div>

        {/* Top left tree decoration */}
        <div className="absolute -top-20 -left-40 w-72 h-72 opacity-1 animate-float-left">
          <img
            src="/asset-image/tree-3.webp"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Top right tree decoration */}
        <div className="absolute -top-20 -right-40 w-72 h-72 opacity-1 animate-float-right">
          <img
            src="/asset-image/tree-2.webp"
            alt=""
            className="w-full h-full object-contain transform -scale-x-100"
          />
        </div>

        {/* Top left tree decoration */}
        <div className="absolute top-32 -left-48 w-80 h-80 opacity-1 animate-float-left">
          <img
            src="/asset-image/tree-1.webp"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Top right tree decoration */}
        <div className="absolute top-32 -right-48 w-80 h-80 opacity-1 animate-float-right">
          <img
            src="/asset-image/tree-3.webp"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom left tree decoration */}
        <div className="absolute bottom-0 -left-32 w-64 h-72 opacity-1">
          <img src="/asset-image/tree-3.webp"
            alt=""
            className="w-full h-full object-contain" />
        </div>

        {/* Bottom right tree decoration */}
        <div className="absolute bottom-0 -right-32 w-64 h-72 opacity-1">
          <img src="/asset-image/tree-3.webp"
            alt=""
            className="w-full h-full object-contain" />
        </div>

        <div className="absolute bottom-12 -left-32 w-52 h-52 opacity-1 animate-float-left">
          <img src="/asset-image/orchied.webp"
            alt=""
            className="w-full h-full object-contain" />
        </div>

        <div className="absolute bottom-12 -right-32 w-52 h-52 opacity-1 animate-float-right">
          <img src="/asset-image/orchied.webp"
            alt=""
            className="w-full h-full object-contain transform -scale-x-100" />
        </div>


        {/* Bottom center flower decoration */}
        <div className="absolute -bottom-12 left-20 w-40 h-40 opacity-1 animate-float-left">
          <img src="/asset-image/tulip.webp"
            alt=""
            className="w-full h-full object-contain" />
        </div>

        {/* Bottom center flower decoration */}
        <div className="absolute -bottom-16 right-20 w-40 h-40 opacity-1 animate-float-right">
          <img src="/asset-image/tulip.webp"
            alt=""
            className="w-full h-full object-contain transform -scale-x-100" />
        </div>

        {/* Bottom center flower decoration */}
        <div className="absolute -bottom-16 right-12 w-40 h-40 opacity-1 animate-float-left">
          <img src="/asset-image/tulip.webp"
            alt=""
            className="w-full h-full object-contain" />
        </div>

        {/* Bottom left leaf */}
        <div className="absolute -bottom-16 -left-12 w-52 h-52 opacity-1 animate-float-right">
          <img src="/asset-image/leaf.webp"
            alt=""
            className="w-full h-full object-contain" />
        </div>

        {/* Bottom right leaf */}
        <div className="absolute -bottom-16 -right-12 w-52 h-52 opacity-1 animate-float-right">
          <img src="/asset-image/leaf.webp"
            alt=""
            className="w-full h-full object-contain transform -scale-x-100" />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
          <div className="space-y-8">
            {/* Happy Wedding text */}
            <div className="space-y-2">
              <p className="text-gray-700 text-base font-comic tracking-[0.2em] ">Happy Wedding</p>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-comic text-gray-800 leading-tight">Justin & Sisca</h1>
            </div>

            <div className="flex flex-col items-center">
              <svg
                className="w-8 h-8 text-gray-700 -mb-2 animate-shine"
                style={{ animationDelay: "0s" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
              <svg
                className="w-8 h-8 text-gray-700 -mb-2 animate-shine"
                style={{ animationDelay: "0.3s" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
              <svg
                className="w-8 h-8 text-gray-700 animate-shine"
                style={{ animationDelay: "0.6s" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </div>

          </div>
        </div>
      </section>

      <motion.section
        className="min-h-screen flex flex-col py-10 px-4 bg-[#e6f0fa] relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUpSlow}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Couple Image */}
        <div className="relative w-full h-[calc(90vh-5rem)] md:h-[480px] rounded-3xl overflow-hidden">
          <Image
            src="/couple-image/sampul_19521743163532.webp"
            alt="Justin & Sisca"
            fill
            className="object-cover"
            priority
          />

          {/* Gradient biru bawah */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#e6f0fa] via-[#e6f0fa]/70 to-transparent"></div>

          {/* Countdown Overlay */}
          <div className="absolute inset-x-0 bottom-20 flex justify-center">
            <div className="grid grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-2xl font-comic text-gray-900">{timeLeft.days}</p>
                <p className="text-xs font-comic text-gray-700">DAYS</p>
              </div>
              <div>
                <p className="text-2xl font-comic text-gray-900">{timeLeft.hours}</p>
                <p className="text-xs font-comic text-gray-700">HOURS</p>
              </div>
              <div>
                <p className="text-2xl font-comic text-gray-900">{timeLeft.minutes}</p>
                <p className="text-xs font-comic text-gray-700">MINUTES</p>
              </div>
              <div>
                <p className="text-2xl font-comic text-gray-900">{timeLeft.seconds}</p>
                <p className="text-xs font-comic text-gray-700">SECONDS</p>
              </div>
            </div>
          </div>

          {/* Button Overlay */}
          <div className="absolute inset-x-0 bottom-6 flex justify-center">
            <button
              onClick={handleSaveToCalendar}
              className="bg-amber-800 hover:bg-amber-900 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Save To Calendar
            </button>
          </div>
        </div>
      </motion.section>

      {/* Top decorations */}
      <motion.section
        className="flex flex-col py-10 px-6 bg-[#e6f0fa] relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute -top-24 -left-28 w-80 h-80 opacity-80">
          <img
            src="/asset-image/branch.webp"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute -top-40 -right-32 w-72 h-72 opacity-90 animate-float-right">
          <img
            src="/asset-image/leaf.webp"
            alt=""
            className="w-full h-full object-contain -rotate-12"
          />
        </div>
        <div className="absolute -bottom-16 -left-48 w-80 h-80 opacity-80">
          <img
            src="/asset-image/tree-3.webp"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text section */}
        <div className="relative z-10 text-left space-y-4">
          <p className="text-3xl font-semibold text-gray-900">
            ᬒᬁᬲ᭄ᬯᬲ᭄ᬢ᭄ᬬᬲ᭄ᬢᬸ
          </p>
          <p className="text-gray-800 leading-relaxed text-base md:text-lg">
            Atas Rahmat Tuhan Yang Maha Esa, kami bermaksud mengundang Anda di acara Kami.
            Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga, apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu pada
          </p>
        </div>

        {/* Couple Image */}
        <div className="relative mt-8 w-full flex justify-end">
          <div className="w-full max-w-[300px] h-[350px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/couple-image/1679297306foto_pria.jpeg"
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Groom Section */}
      <motion.section
        className="min-h-screen flex flex-col py-10 px-4 bg-[#e6f0fa] relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute -top-24 -left-28 w-48 h-48 opacity-90 animate-float-left">
          <img
            src="/asset-image/orchied.webp"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute -bottom-16 -right-32 w-64 h-64 opacity-90">
          <img
            src="/asset-image/tree-3.webp"
            alt=""
            className="w-full h-full object-contain transform -scale-x-100"
          />
        </div>

        {/* Content */}
        <div className="-top-6 relative z-10 text-left">
          <div className="text-gray-800">
            <a
              href="https://instagram.com/jessnolimit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5c4636] text-white text-sm font-medium shadow-md mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.25 1.75a.75.75 0 0 1 .743.648l.007.102v1.5a.75.75 0 0 1-1.493.102l-.007-.102v-1.5a.75.75 0 0 1 .75-.75ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
              @Jessnolimit
            </a>

            <p className="font-comic text-2xl">Tobias Justin</p>
            <p className="text-sm md:text-lg mb-1">Putra dari Pasangan</p>
            <p className="text-sm md:text-lg mb-1">Ayah Justin &</p>
            <p className="text-sm md:text-lg mb-1">Ibu Justin</p>
            <p className="text-sm md:text-lg">Beralamat di Jakarta</p>

            <p className="font-comic text-3xl text-center">&</p>

            <div className="relative mt-8 w-full flex justify-start">
              <div className="w-full max-w-[320px] h-[360px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/couple-image/1679297306foto_wanita.jpeg"
                  alt="Couple"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col py-10 px-4 bg-[#e6f0fa] relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute -top-24 -right-28 w-48 h-48 opacity-90 animate-float-right">
          <img
            src="/asset-image/orchied.webp"
            alt=""
            className="w-full h-full object-contain transform -scale-x-100"
          />
        </div>
        <div className="-top-6 relative z-10 text-right">
          <div className="text-gray-800">
            <a
              href="https://instagram.com/Siscachol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5c4636] text-white text-sm font-medium shadow-md mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.25 1.75a.75.75 0 0 1 .743.648l.007.102v1.5a.75.75 0 0 1-1.493.102l-.007-.102v-1.5a.75.75 0 0 1 .75-.75ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
              @SiscaChol
            </a>

            <p className="font-comic text-2xl">Sisca Cohl</p>
            <p className="text-sm md:text-lg mb-1">Putri dari Pasangan</p>
            <p className="text-sm md:text-lg mb-1">Ayah Sisca &</p>
            <p className="text-sm md:text-lg mb-1">Ibu Sisca</p>
            <p className="text-sm md:text-lg">Beralamat di Jakarta</p>

            {/* Ayat Quran */}
            <div className="mt-12 text-center max-w-md mx-auto">
              <p className="font-arabic text-xs leading-relaxed mb-3">
                وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
                لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ
                اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
              </p>

              <p className="text-xs md:text-base text-gray-700 leading-relaxed">
                Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
                pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa
                tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih
                sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
                tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
              </p>

              <p className="text-xs md:text-base mt-6 text-gray-900 font-medium">
                – Ar-Rum · Ayat 21 –
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <StoryPage />
      <EventPage />

    </div>
  )
}
