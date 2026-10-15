import { BlogFeed } from "@/componets/BlogFeed";
import Link from "next/link";


export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <div className="mb-6">
        <Link href="/create" className="block w-full rounded-xl border bg-white p-4 text-center font-semibold shadow-sm hover:bg-gray-100">
          Create New Post
        </Link>
      </div>
      <BlogFeed/>
    </div>
  )
}