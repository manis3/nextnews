import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  Center,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Heading,
  UnorderedList,
  IconButton,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { Show, Hide } from "@chakra-ui/react";
import { useRouter } from "next/router";
const Links = [
  {
    name: "TopNews",
    path: "/",
  },
  {
    name: "Entertainment",
    path: "/News/Entertainment/Entertainment",
  },
  {
    name: "Sports",
    path: "/News/Sports/Sports",
  },
  {
    name: "Business",
    path: "/News/Business/Business",
  },
  {
    name: "Tech",
    path: "/News/Tech/Tech",
  },
  {
    name: "Science",
    path: "/News/Science/Science",
  },
  {
    name: "Health",
    path: "/News/Health/Health",
  },
];

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link href={path}>{children}</Link>
  </Box>
);

export default function Navbar() {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Grid w="auto" pt={"20px"}>
      <Box>
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
          <Flex h={20} alignItems={"center"} justifyContent={"space-evenly"}>
            <Box w="50px">
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
            </Box>
            <Box textAlign={"center"} w="auto" flex={0.2} fontFamily="cursive">
              <HStack spacing={8} alignItems={"center"}>
                <Center>
                  <Link href="/News/TopNews/TopNews">
                    <Box>
                      The <Heading as="u">TODAYS</Heading> News
                    </Box>
                  </Link>
                </Center>
              </HStack>
            </Box>

            <Box w="1px">
              <Flex>
                <Button
                  backgroundColor={isDark ? "#292b34" : "white"}
                  width="auto"
                  minWidth="100px"
                  mr={4}
                  cursor="pointer"
                  onClick={() => {
                    signIn();
                  }}
                >
                  Sign In
                </Button>
                <Hide below="md">
                  <IconButton
                    icon={isDark ? <FaSun /> : <FaMoon />}
                    isRound
                    onClick={toggleColorMode}
                    aria-label={""}
                  ></IconButton>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={"full"}
                      variant={"link"}
                      cursor={"pointer"}
                    >
                      <Avatar
                        size={"sm"}
                        src={
                          "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        }
                      />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Link 1</MenuItem>
                      <MenuItem>Link 2</MenuItem>
                      <MenuDivider />
                      <MenuItem>Link 3</MenuItem>
                    </MenuList>
                  </Menu>
                </Hide>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Grid>
          <Hide below="md">
            <Center>
              <Box w={["70%"]} mt="50px">
                <Box borderBottom={"2px inset"}>
                  <UnorderedList
                    listStyleType="none"
                    display="flex"
                    mb={"50px"}
                    fontWeight="md"
                  >
                    <ListItem
                      _hover={{
                        borderBottom: "solid orange",
                        bg: "cream.600",
                      }}
                    >
                      <Link href="/News/TopNews/TopNews">TopNews</Link>
                    </ListItem>
                    <Spacer margin="1px" />
                    <ListItem
                      _hover={{
                        borderBottom: "solid orange",
                        bg: "cream.600",
                      }}
                    >
                      <Link href="/News/Entertainment/Entertainment">
                        {" "}
                        Entertainment{" "}
                      </Link>
                    </ListItem>
                    <Spacer margin="1px" />
                    <ListItem
                      _hover={{
                        borderBottom: "solid orange",
                        bg: "cream.600",
                      }}
                    >
                      <Link href="/News/Sports/Sports"> Sports </Link>
                    </ListItem>
                    <Spacer margin="1px" />
                    <ListItem
                      _hover={{
                        borderBottom: "solid orange",
                        bg: "cream.600",
                      }}
                    >
                      <Link href={"/News/Business/Business"}> Business</Link>
                    </ListItem>
                    <Spacer margin="1px" />
                    <ListItem
                      _hover={{
                        borderBottom: "solid orange",
                        bg: "cream.600",
                      }}
                    >
                      <Link href={"/News/Tech/Tech"}>Tech</Link>
                    </ListItem>
                    <Spacer margin="1px" />
                    <ListItem
                      _hover={{
                        borderBottom: "solid orange",
                        bg: "cream.600",
                      }}
                    >
                      <Link href={"/News/Science/Science"}> Science</Link>
                    </ListItem>
                    <Spacer margin="1px" />
                    <ListItem
                      _hover={{
                        borderBottom: "solid orange",

                        bg: "cream.600",
                      }}
                    >
                      <Link href="/News/Health/Health"> Health</Link>
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Center>
          </Hide>
        </Grid>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Box w="1px">
              <Flex>
                <IconButton
                  icon={isDark ? <FaSun /> : <FaMoon />}
                  // isRound
                  onClick={toggleColorMode}
                  aria-label={""}
                ></IconButton>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                  >
                    <Avatar
                      size={"sm"}
                      src={
                        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      }
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Link 1</MenuItem>
                    <MenuItem>Link 2</MenuItem>
                    <MenuDivider />
                    <MenuItem>Link 3</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Box>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Grid>
  );
}
