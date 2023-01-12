import React from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
type props = {
  post: Article;
  category: string;
};

export default function ReadMore({ post, category }: props) {
  const router = useRouter();
  console.log(post);
  const handleClick = () => {
    console.log(post);
    const query = Object.entries(post)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/articles/articles/:category?${query}`;
    router.push(url);
  };
  return (
    <>
      <Button onClick={handleClick}>Read More</Button>
    </>
  );
}



