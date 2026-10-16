import { PostCard } from "./PostCard";
import type { Post } from "@/data/posts";

interface Props {
  posts: Post[];
}

export function PostList({ posts }: Props) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          author={post.author}
          title={post.title}
          description={post.description}
          like={post.like}
          liked={post.liked}
          comment={post.comment.length}
        />
      ))}
    </div>
  );
}