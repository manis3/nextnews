import React, { useState, useRef, FormEventHandler } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Box,
  WrapItem,
  VStack,
  Button,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import emailjs from "@emailjs/browser";
const Contactform = () => {
  const [formStatus, setFormStatus] = useState("Send");
  const form = useRef<HTMLFormElement>(null);
  const sendEmail: FormEventHandler<HTMLFormElement> = (e) => {
    console.log("Sending email");
    e.preventDefault();
    setFormStatus("Submitting...");
    emailjs
      .sendForm(
        "service_n9xh7j8",
        "template_fgcb0zp",
        form.current,
        "oV97jb2NTD_alXt6b"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormStatus("Send");
    alert("Email sent successfully");
  };

  return (
    <>
      <WrapItem>
        <Box bg="white">
          <Box m={8} color="black">
            <VStack spacing={5}>
              <form ref={form} onSubmit={sendEmail}>
                <FormControl id="name">
                  <FormLabel>Your Name</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsPerson color="gray.800" />}
                    />
                    <Input
                      type="text"
                      id="name"
                      size="md"
                      name="user_name"
                      required
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Mail</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdOutlineEmail color="gray.800" />}
                    />
                    <Input
                      type="email"
                      id="email"
                      size="md"
                      name="user_email"
                      required
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    borderColor="gray.300"
                    id="message"
                    _hover={{
                      borderRadius: "gray.300",
                    }}
                    placeholder="message"
                    name="message"
                    required
                  />
                </FormControl>
                <FormControl id="name" float="right">
                  <Button
                    type="submit"
                    variant="solid"
                    bg="#e6ffff"
                    color="black"
                    value="send"
                  >
                    {formStatus}
                  </Button>
                </FormControl>
              </form>
            </VStack>
          </Box>
        </Box>
      </WrapItem>
    </>
  );
};
export default Contactform;
