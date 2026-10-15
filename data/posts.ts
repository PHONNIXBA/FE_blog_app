export type Post = {
  id: string;
  author: string;
  title: string;
  description: string;
  like: number;
  liked: boolean;
  comment: Comment[];
};

export type Comment = {
  author: string,
  content: string
}

export const posts: Post[] = [
  {
    id: "1",
    author: "Ken",
    title: "Learning Next.js",
    description:
      "Today I am building my social Blog App with Next.js. I am learning how routing, reusable components, client components, server components, state, and user interactions work together.",
    like: 10,
    liked: false,

    comment: [
      {
        author: "Louise",
        content: "Nice post!",
      },
      {

        author: "Alex",
        content: "Keep learning Next.js.",
      },
    ],
  },

  {
    id: "2",
    author: "Louise",
    title: "Frontend Architecture",
    description:
      "I am learning how components and routes work together.",
    like: 6,
    liked: false,
    comment: [],
  },
];