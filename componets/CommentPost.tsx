import type { Comment } from "@/data/posts";

interface Props {
    comment: Comment[]
}

export function CommentPost({comment}: Props) {
    return (
        <div className="mt-4 space-y-3">
            {comment.map((cmt, index) => (
                <div key={index} className="rounded-lg bg-gray-100 p-3">
                    <p className="font-semibold">{cmt.author}</p>
                    <p>{cmt.content}</p>
                </div>
            ))}
        </div>
    )
}