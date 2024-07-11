import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <h1>Nested Routes</h1>
      <h1>Main Blog Page</h1>
      <Link href="/blog/post-1">Post 1</Link>
      <Link href="/blog/post-2">Post 2</Link>
    </>
  );
}
