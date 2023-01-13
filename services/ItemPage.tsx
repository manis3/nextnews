import React from "react";
import { Button, Box, Center } from "@chakra-ui/react";
interface props {
  totalPosts: number;
  perpage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const ItemPage = ({
  totalPosts,
  perpage,
  setCurrentPage,
  currentPage,
}: props) => {
  let pages = [];
  // console.log("perpage", perpage);
  for (let i = 1; i <= Math.ceil(totalPosts / perpage); i++) {
    pages.push(i);
  }
  return (
    <Center mt={"10px"}>
      <Box>
        {pages.map((page, index) => {
          return (
            <Button
              key={index}
              m="5px"
              onClick={() => {
                setCurrentPage(Number(page));
              }}
            >
              {page}
            </Button>
          );
        })}
      </Box>
    </Center>
  );
};
export default ItemPage;
