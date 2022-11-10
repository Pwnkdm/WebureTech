import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdataApi } from "../redux/action";
import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Dashboard = () => {
  //   const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const info = useSelector((state) => state.profile);

  console.log(info.email);
  let creds = JSON.parse(localStorage.getItem("creds"));
  useEffect(() => {
    dispatch(getdataApi(creds.email));
  }, []);

  return (
    <>
      <Text fontWeight={"bold"} fontSize="3xl">
        DashBoard
      </Text>
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "100%", md: "540px" }}
          height={{ sm: "476px", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000"
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            textAlign="left"
            p={1}
            pt={2}
          >
            <Heading fontSize={"xl"} fontFamily={"body"}>
              First Name: {info.firstname}
            </Heading>
            <Heading fontSize={"xl"} fontFamily={"body"}>
              Last Name : {info.lastname}
            </Heading>
            <Heading fontSize={"xl"} fontFamily={"body"}>
              Email :{info.email}
            </Heading>
          </Stack>
        </Stack>
      </Center>
    </>
  );
};

export default Dashboard;
