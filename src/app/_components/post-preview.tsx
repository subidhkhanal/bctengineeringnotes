/** @format */
"use client";

import Link from "next/link";
import {
  Heading,
  useColorModeValue,
  VStack,
  Center,
  Wrap,
  Text,
} from "@chakra-ui/react";
import CircleIcon from "../../../public/assets/icons/CircleIcon";

type Props = {
  title: string;
  coverImage: string;
  slug: string;
  difficultyLevel: string;
  readTime: string;
};

export function PostPreview({
  title,
  coverImage,
  slug,
  difficultyLevel,
  readTime,
}: Props) {
  const shadow = useColorModeValue(
    "lg",
    "rgba(149, 157, 165, 0.2) 0px 8px 24px"
  );
  return (
    // @ts-ignore
    <VStack
      className="rounded-t-xl pb-5 cursor-pointer"
      shadow={shadow}
      h={"max-content"}
      transition="all .25s ease"
      _hover={{ transform: "scale(1.05)", color: "brand.50" }}
    >
      {/* Cover image */}
      <Link href={`/posts/${slug}`} passHref tabIndex={-1}>
        <img
          className="object-cover	mx-auto rounded-t-md h-[170.88px] w-full"
          src={coverImage}
          alt="testing"
        />
      </Link>

      {/* Title */}

      <Center>
        <Link href={`/posts/${slug}`} passHref tabIndex={-1}>
          <Heading
            size={"md"}
            alignSelf={"flex-start"}
            tabIndex={0}
            _hover={{ color: "brand.50" }}
          >
            {title}
          </Heading>
        </Link>
      </Center>
      <Wrap textTransform={"uppercase"} color={"brand.100"} fontWeight={"bold"}>
        <Center>
          <CircleIcon boxSize={"2"} />
        </Center>
        <Text fontSize="xs" textTransform={"uppercase"}>
          {difficultyLevel}
        </Text>
        <Center>
          <CircleIcon boxSize={"2"} />
        </Center>

        {/* Read time */}
        <Text fontSize="xs" textTransform={"uppercase"}>
          {readTime}
        </Text>
      </Wrap>
    </VStack>
  );
}
