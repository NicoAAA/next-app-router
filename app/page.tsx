import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Bienvenido</h1>
      <p>Elige un tema para explorar:</p>
      <div className="flex flex-col gap-2">
        <Link href="/nextjs" className="btn">¿Qué es Next.js?</Link>
        <Link href="/tailwind" className="btn">¿Qué es Tailwind CSS?</Link>
        <Link href="/tema" className="btn">Tema Libre</Link>
      </div>
    </div>
  );
}