import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

// This is a server component, so if we console, it consoles there in the backend.
// so it renders in the backend and the html is send to the client.
export default function Home() {
  return (
    <main>
      <h1>Hii</h1>
      <p>
        <Link href="/awesome">Move to awesome</Link>
      </p>
      <p>
        <Link href="/blog">Move to Blogs</Link>
      </p>
      {/* // note this wont re-render the stuffs. */}
    </main>
  );
}
