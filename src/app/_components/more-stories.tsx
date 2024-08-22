/** @format */
"use client";

import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { SimpleGrid } from "@chakra-ui/react";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={5}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            slug={post.slug}
            difficultyLevel={post.difficultyLevel}
            readTime={post.readTime}
          />
        ))}
      </SimpleGrid>
    </section>
  );
}
