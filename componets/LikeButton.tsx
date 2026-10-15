"use client";

import { usePosts } from "./PostState";

interface Props {
    postId: string,
    liked: boolean
}

export function LikeButton({postId, liked}: Props) {
    const {LikePost} = usePosts();
    return (
        <button onClick={() => LikePost(postId)} className="flex w-full items-center justify-center gap-2 rounded-lg py-2 font-semibold transition hover:bg-gray-100">
            <span className="text-xl">{liked ? "♡" : "👍"}</span>
            <span>{liked ? "Liked" : "Like"}</span>
        </button> 
    );
}