import { useState, useEffect, Suspense } from "react";
import {
  Image,
  Text,
  Grid,
  GridItem,
  Center,
  Card,
  CardHeader,
  Button,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Hide,
  Avatar,
  Spinner,
  StackDivider,
  Divider,
  Flex,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Livetime from "../Livetime/Livetime";
interface props {
  articles: Article;
}

export default function articles({ articles }: props) {
  const { query } = useRouter();

  const [data, setData] = useState<Article[] | []>([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const topnews = async () => {
      setLoading(true);
      const technews = await fetch(
        `https://newsapi.org/v2/everything?q=${query.author}&from=2022-12-30&to=2022-12-30&sortBy=popularity&apiKey=17be372ef3dc4cb4927e75543b3b2e98`
      );
      const myText = await technews.json();
      setData(myText.articles);
      setLoading(false);
    };
    topnews();
  }, []);

  const slicedata = data && data.slice(0, 9);

  return (
    <>
      <Center>
        <Grid
          w={["100%", "80%", "70%"]}
          templateColumns="repeat(4, 1fr)"
          height={"auto"}
          gap={4}
        >
          <GridItem colSpan={3}>
            <Card
              direction={{ base: "column" }}
              overflow="hidden"
              variant="outline"
            >
              <Center>
                <Image
                  w={["100%"]}
                  src={
                    String(query.urlToImage) ||
                    "https://www.istockphoto.com/photo/artificial-intelligence-and-the-development-of-organizations-with-quality-systems-gm1391367984-448006425"
                  }
                  alt="404 No Image Found"
                />
              </Center>

              <Stack>
                <CardBody>
                  <Center>
                    <Heading size="xl" fontFamily={"serif"}>
                      {query.title}
                    </Heading>
                  </Center>
                  <Center>
                    <Text as="b">
                      By: {query.author || "Anonymous"} | Source:
                      {query.author || "Anonymous"} | {query.publishedAt}
                    </Text>
                  </Center>
                  <Flex>
                    <Text py="2">{query.description}</Text>
                  </Flex>
                  <Flex>
                    <Text py="2">{query.content}</Text>
                  </Flex>
                  <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                    <Avatar
                      src={
                        "https://www.google.com/search?q=avatar+image&oq=avatar+image&aqs=chrome.0.69i59j69i57j69i59.2702j0j1&sourceid=chrome&ie=UTF-8#imgrc=5NKd-8aKf4bBJM"
                      }
                    />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                      <Text fontWeight={600}>{query.author}</Text>
                      <Text color={"gray.500"}>
                        {query.publishedAt?.slice(0, 10)} .{" "}
                        <Livetime time={String(query.publishedAt)} />
                      </Text>
                    </Stack>
                  </Stack>
                </CardBody>
                <Center>
                  <CardFooter>
                    <Link href={String(query.url)} target="_blank">
                      {" "}
                      <Button variant="solid" colorScheme="blue">
                        <Text mr="5px"> Original Articles</Text>
                        <ExternalLinkIcon fontSize={"sm"} />
                      </Button>
                    </Link>
                  </CardFooter>
                </Center>
              </Stack>
            </Card>
          </GridItem>

          <Hide below="md">
            <GridItem colSpan={1}>
              <Card>
                <CardHeader>
                  <Heading size="md">Related News</Heading>
                </CardHeader>

                <Center>{loading && <Spinner />}</Center>
                {slicedata &&
                  !loading &&
                  slicedata.map((post, index) => {
                    return (
                      <Link href={String(post.url)} target="_blank">
                        <CardBody>
                          <Stack divider={<StackDivider />} spacing="2">
                            <Box
                              borderBottom={"solid"}
                              _hover={{
                                borderBottom: "solid orange",
                                transform: "translateY(2px)",
                              }}
                            >
                              <Heading size="xs" textTransform="uppercase">
                                {post.title.slice(0, 60)}
                              </Heading>
                            </Box>
                          </Stack>
                        </CardBody>
                      </Link>
                    );
                  })}
              </Card>
            </GridItem>
          </Hide>
          <Divider />
        </Grid>
      </Center>
    </>
  );
}
