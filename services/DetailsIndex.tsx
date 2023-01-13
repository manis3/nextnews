import React from "react";
import {
  Card,
  Image,
  Heading,
  Stack,
  Box,
  useColorModeValue,
  Text,
  GridItem,
  Avatar,
  Center,
} from "@chakra-ui/react";

import ReadMore from "./ReadMore";

import Livetime from "./Livetime/Livetime";
interface props {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
  publish: string;
  author: string;
  content: String;
  post: Article;
  category: string;
}

const DetailsIndex: React.FC<props> = ({
  title,

  urlToImage,
  publish,
  author,
  content,
  post,
  category,
}) => {
  return (
    <>
      <GridItem>
        <Card
          bg={"none"}
          justifyContent={{ sm: "center" }}
          border="none"
          maxW="md"
          height={"30em"}
          m="1px"
          p={6}
          justify={"space-between"}
          _hover={{
            transform: "translateY(2px)",
            bg: "rgb(94, 100, 114)",
            transition: "0.3s linear",
          }}
        >
          <Center>
            <Box
              maxW={"445px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Box bg={"gray.100"} mt={-6} mx={-6} pos={"relative"}>
                <Image
                  src={urlToImage}
                  w="100%"
                  h="10rem"
                  alt="404 Image not Found"
                />
              </Box>
              <Stack>
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"xl"}
                  fontFamily={"body"}
                >
                  {String(title.slice(0, 47))}
                </Heading>
                <Text color={"gray.500"}>
                  {String(content.slice(0, 50) + "...")}
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Avatar
                  src={
                    "https://www.google.com/search?q=avatar+image&oq=avatar&aqs=chrome.0.69i59j69i57j69i59.1586j0j1&sourceid=chrome&ie=UTF-8#imgrc=3ieVDLEJVcWu5M"
                  }
                />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>{author}</Text>
                  <Text color={"gray.500"}>
                    {/* {publish} */}
                    {String(publish?.slice(0, 10))} .{" "}
                    <Livetime time={publish} />
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Center>

          <ReadMore post={post} category={category} />
        </Card>
      </GridItem>
    </>
  );
};
export default DetailsIndex;
