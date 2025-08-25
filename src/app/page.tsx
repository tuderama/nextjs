import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome home</h1>
      <Link href="/about">About</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </div>
  );
}
