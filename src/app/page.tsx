/** @format */

import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { Nav } from "./_components/nav";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts;
  console.log(allPosts);
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <Nav />
        {/* <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        <MoreStories posts={heroPost} />
      </Container>
    </main>
  );
}
