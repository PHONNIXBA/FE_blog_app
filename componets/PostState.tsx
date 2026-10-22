"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";

import type { ReactNode } from "react";
import type { Post } from "@/data/posts";

type PostContextType = {
    posts: Post[]
    LikePost: (postId: string) => Promise<void>;
    AddComment: (postId: string, content: string) => Promise<void>;
    createNewPost: (
        author: string,
        title: string,
        description: string
    ) => Promise<void>;
}

const PostsContext = createContext<PostContextType | undefined>(undefined);

export function PostState({children}: {children: ReactNode}) {
    const [posts, setPosts] = useState<Post[]>([]);

    async function getPosts() {
        const respone = await fetch("http://localhost:3001/post");
        const data = await respone.json();
        console.log("Received posts: ", data);
        setPosts(data);
    }

    useEffect(() => {
        getPosts();
    }, []);

    async function LikePost(postId: string) {
        const response = await fetch(`http://localhost:3001/post/${postId}/like`,
            { method: "PUT" }
        );
        if (!response.ok) {
            alert("Failed to like post");
            return;
        }

        const updatePost: Post = await response.json();
        setPosts(currentPost => 
            currentPost.map((post) => {
                if (post.id === postId) {
                    return updatePost;
                }
                return post;
            })
        );
    }

    async function AddComment(postId: string, content: string) {
        const response = await fetch(`http://localhost:3001/post/${postId}/comment`,
            { 
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    author: "You",
                    content: content
                })
            }
        );

        if (!response.ok) {
            alert("Failed to comment post");
        }

        await getPosts();
    }

    async function createNewPost(
        author: string,
        title: string,
        description: string
    ) {
        const response = await fetch("http://localhost:3001/post", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                author: author,
                title: title,
                description: description
            })
        });

        if (!response.ok) {
            throw new Error("Failed to create post");
        }

        const newPost: Post = await response.json();
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