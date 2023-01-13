import React from "react";
import { BounceLoader } from "react-spinners";
import axios from "axios";
import {
  Flex,
  Heading,
  Grid,
  Center,
  UnorderedList,
  Box,
  Stack,
  Input,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ItemPage from "../../../services/ItemPage";
("use Client");
const DetailsIndex = React.lazy(() => import("../../../services/DetailsIndex"));

function Tech() {
  const [input, setInput] = useState<string>("");
  const [technews, setTechnews] = useState<Article[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(15);
  const [headervalue, setHeadervalue] = useState<string>(" ");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const techdata = async () => {
      const technews = await axios(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7cabf82fa3334cc299f863360873805b"
      );

      setTechnews(technews.data.articles);
      setLoading(false);
    };
    techdata();
  }, []);

  const handlesearch = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);
    const searchdata = async () => {
      const technews = await axios(
        `https://newsapi.org/v2/everything?q=${input}&from=2022-12-30&to=2022-12-30&sortBy=popularity&apiKey=17be372ef3dc4cb4927e75543b3b2e98`
      );
      setTechnews(technews.data.articles);
      setHeadervalue(String(input));
      setLoading(false);
    };
    searchdata();
    setInput(" ");
  };
  const lastPostIndex: number = Number(currentPage) * Number(postPerPage);
  const firstPostIndex: number = lastPostIndex - Number(postPerPage);
  const currentPost = technews && technews.slice(firstPostIndex, lastPostIndex);

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setLoading(true);
      const searchdata = async () => {
        const technews = await axios(
          `https://newsapi.org/v2/everything?q=${input}&from=2022-12-30&to=2022-12-30&sortBy=popularity&apiKey=17be372ef3dc4cb4927e75543b3b2e98`
        );
        setTechnews(technews.data.articles);
        setHeadervalue(String(input));
        setLoading(false);
      };
      searchdata();
      setInput(" ");
    }
  };
  return (
    <>
      <Center>
        <Flex
          justifyContent="space-between"
          width={["100%", "80%", "70%"]}
          margin="0 auto"
          padding="15px"
          fontSize="20px"
        >
          <UnorderedList>
            <Heading fontWeight="medium" fontFamily="monospace">
              {headervalue === " "
                ? "Tech News"
                : "Searched for:" + headervalue}
            </Heading>
          </UnorderedList>
          <Flex>
            <Stack spacing={4} w={["5rem", "15rem", "20rem"]}>
              <Input
                type="text"
                value={String(input)}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                onKeyPress={(e) => handleEnterKey(e)}
                variant="flushed"
                placeholder="Search KeyWords......"
              />
            </Stack>
            <Button
              disabled={!input}
              type="submit"
              onClick={(e) => {
                handlesearch(e);
              }}
              variant="ghost"
            >
              Search
            </Button>
          </Flex>
        </Flex>
      </Center>
      <Center>
        {" "}
        {
          <BounceLoader
            loading={loading}
            color={"rgb(94, 100, 114)"}
            cssOverride={{ margin: 150 }}
          />
        }
      </Center>
      <Center>
        <Grid
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          width={["100%", "80%", "70%"]}
          margin="0 auto"
        >
          {currentPost &&
            !loading &&
            currentPost.map((post, index) => {
              return (
                <DetailsIndex
                  key={index}
                  title={post.title}
                  description={post.description}
                  urlToImage={post.urlToImage}
                  publish={post.publishedAt}
                  url={post.url}
                  author={post.author || "Anonymous"}
                  content={String(post.content)}
                  post={post}
                  category={"techcrunch"}
                />
              );
            })}
        </Grid>
      </Center>

      <ItemPage
        totalPosts={technews && technews.length}
        perpage={Number(postPerPage)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default Tech;
