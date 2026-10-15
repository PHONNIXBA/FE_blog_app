"use client";

import {
    createContext,
    useContext,
    useState
} from "react";

import type { ReactNode } from "react";
import type { Post } from "@/data/posts";
import { posts as initialPosts } from "@/data/posts";

type PostContextType = {
    posts: Post[]
    LikePost: (postId: string) => void;
    AddComment: (postId: string, content: string) => void;
    createNewPost: (
        author: string,
        title: string,
        description: string
    ) => void;
}

const PostsContext = createContext<PostContextType | undefined>(undefined);

export function PostState({children}: {children: ReactNode}) {
    const [posts, setPosts] = useState<Post[]>(initialPosts);
    function LikePost(postId: string) {
        setPosts((posts) => 
            posts.map((post) => 
                post.id === postId ? {
                    ...post,
                    like: post.liked ? post.like - 1 : post.like + 1,
                    liked: !post.liked,
                }: post
            )
        );
    }
    function AddComment(postId: string, content: string) {
        const newComment = {
            author: "You",
            content: content
        }
        setPosts((posts) => 
            posts.map((post) => 
                post.id === postId ? {
                    ...post,
                    comment: [
                        ...post.comment,
                        newComment
                    ]
                }: post
            )
        )
    }
    function createNewPost(
        author: string,
        title: string,
        description: string
    ) {
        const newPost: Post = {
            id: crypto.randomUUID(),
            author,
            title,
            description,
            like: 0,
            liked: false,
            comment: []
        }
        setPosts((posts) => [newPost, ...posts]);
    }
    return (
        <PostsContext.Provider
            value={{
                posts,
                LikePost,
                AddComment,
                createNewPost
            }}
        >
            {children}
        </PostsContext.Provider>
    )
}

export function usePosts() {
    const context = useContext(PostsContext);
    if (!context) {
        throw new Error("usePosts must be used insinde PostState");
    }
    return context;
}