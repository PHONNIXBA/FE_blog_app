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
        const post = posts.find(post => post.id === postId);
        if (!post) {
            return;
        }

        if (post.liked) {
            post.like -= 1;
        } else {
            post.like += 1;
        }

        post.liked = !post.liked;
        setPosts([...posts]);
    }

    function AddComment(postId: string, content: string) {
        const post = posts.find(post => post.id === postId);
        if (!post) {
            return;
        }
        
        const newComment = {
            author: "You",
            content: content
        }
        
        post.comment.push(newComment);
        setPosts([...posts]);
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