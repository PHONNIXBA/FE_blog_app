import { PostDetail } from "@/componets/PostDetail";

export default async function PostDetailPage({params}: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6">
      <PostDetail postId={id} />
    </div>
  );
}