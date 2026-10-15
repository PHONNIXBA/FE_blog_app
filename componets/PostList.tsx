import { PostCard } from "./PostCard";
import type { Comment } from "@/data/posts";

type Post = {
  id: string;
  author: string;
  title: string;
  description: string;
  like: number;
  liked: boolean;
  comment: Comment[]
};

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