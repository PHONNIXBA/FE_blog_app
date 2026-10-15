"use client"

import { useState } from "react"
import { usePosts } from "./PostState";

interface Props {
    postId: string
}

export function CommentForm({postId}: Props) {
    const [content, setContent] = useState("");
    const {AddComment} = usePosts();
    function Submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!content.trim()) {
            return;
        }
        AddComment(postId, content);
        setContent("");
    }
    return (
        <form onSubmit={Submit} className="mt-4 flex-gap-2">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your comment"
                className="flex-1 rounded-lg border p-3"
            />
            <button type="submit" className="rounded-lg border px-4 font-semibold">Comment</button>
        </form>
    )
}