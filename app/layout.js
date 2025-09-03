import "./globals.css";

export const metadata = {
  title: "Undangan Acara The Wedding of Justins & Sisca",
  description: "Indoinvite",
  icons: {
    icon: "/indoinvite.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
