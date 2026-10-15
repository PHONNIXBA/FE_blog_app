"use client";

import { CreateNewPostForm } from "./CreateNewPostForm";
import { PostList } from "./PostList";
import { usePosts } from "./PostState";

export function BlogFeed() {
    const {posts} = usePosts();
    return <PostList posts={posts} />
}