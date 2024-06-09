import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "پست‌ها - پست چی",
  description: "PostChi Created by Next",
};

export default async function page() {
  const response = await fetch("https://fakestoreapi.com/products?limit=10");
  const data = await response.json();

  return (
    <main className="text-center p-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">همه‌ی پست‌ها</h1>
      <ul>
        {data.map((post: any) => (
          <li key={post.id} className="mb-5">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
