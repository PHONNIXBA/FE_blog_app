import Link from "next/link"
import { Description } from "./Description"
import { LikeButton } from "./LikeButton"

interface Props {
    id: string,
    author: string,
    title: string,
    description: string,
    like: number,
    liked: boolean,
    comment: number
}

export function PostCard({
    id,
    author,
    title,
    description,
    like,
    liked,
    comment
}: Props) {
    return (
        <article className="w-full rounded-xl border bg-white p-4 shadow-sm">
            <Link href={`/posts/${id}`}>
                <h2 className="font-semibold">{author}</h2>
                <h3 className="mt-2 text-lg font-bold">{title}</h3>
            </Link>
            <Description description={description} />
            <div className="mt-4 flex gap-4 text-sm">
                <span>{like} Likes</span>
                <span>{comment} Comments</span>
            </div>
            <div className="mt-2 border-t pt-2">
                <LikeButton 
                    postId={id}
                    liked={liked}
                />
            </div>
        </article>
    )
}