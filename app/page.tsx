import Link from "next/link";

export default function HomePage() {
  return (
    <main>
        <nav>
            <Link href="/blog">blog</Link>
            <Link href="/products">product</Link>
        </nav>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>
    </main>
  );
}