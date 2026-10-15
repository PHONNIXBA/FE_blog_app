"use client";

import { CommentForm } from "./CommentForm";
import { CommentPost } from "./CommentPost";
import { LikeButton } from "./LikeButton";
import { usePosts } from "./PostState";

interface Props {
    postId: string
}

export function PostDetail({postId}: Props) {
    const {posts} = usePosts();
    const post = posts.find((post) => post.id === postId);
    if (!post) {
        return <p>Post not found</p>;
    }
    return (
        <article className="w-full rounded-xl border bg-white p-4 shadow-sm">
            <h2 className="font-semibold">{post.author}</h2>
            <h3 className="mt-2 text-lg font-bold">{post.title}</h3>
            <p className="mt-2">{post.description}</p>
            <div className="mt-4 flex justify-between text-sm text-gray-600">
                <span>{post.like} Likes</span>
                <span>{post.comment.length} Comments</span>
            </div>
            <div className="mt-2 border-t pt-2">
                <LikeButton
                    postId={post.id}
                    liked={post.liked}
                />
                <CommentForm postId={post.id} />
                <CommentPost comment={post.comment} />
            </div>
        </article>
    )
}