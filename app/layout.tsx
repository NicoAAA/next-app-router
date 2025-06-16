import './globals.css';
import Link from 'next/link';

export const metadata = { title: 'App Router Demo' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <nav className="p-4 bg-red-400 shadow-md flex space-x-4">
          <Link href="/" className="font-bold">Home</Link>
          <Link href="/nextjs">Next.js</Link>
          <Link href="/tailwind">Tailwind CSS</Link>
          <Link href="/tema">Tema Libre</Link>
        </nav>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
