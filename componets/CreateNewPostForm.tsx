"use client";

import React, { useState } from "react";
import { usePosts } from "./PostState";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";

export function CreateNewPostForm() {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {createNewPost} = usePosts();
    const router = useRouter();
    function Submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!author.trim() || !title.trim() || !description.trim()) {
            return;
        }
        createNewPost(author.trim(), title.trim(), description.trim());
        router.push("/");
    }
    return (
        <form onSubmit={Submit} className="mb-6 rouned-xl bg-white p-4 shadow-sm">
            <h2 className="mb-4 text-lg font-bold">Create New Post</h2>
            <input 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                className="mb-3 w-full rounded-lg border p-3"
            />
            <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="mb-3 w-full rounded-lg border p-3"
            />
            <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="mb-3 w-full rounded-lg border p-3"
            />
            <button type="submit" className="w-full rounded-lg border py-2 font-semibold hover:bg-gray-100">
                Post
            </button>
        </form>
    );
}
