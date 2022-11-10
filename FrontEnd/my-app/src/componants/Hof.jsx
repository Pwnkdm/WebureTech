import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";

const Hof = ({ children }) => {
  let data = useSelector((state) => state.profile);
  const toast = useToast();

  if (data === "please login again.") {
    return toast({
      title: "Not Authorized.",
      description: "Please Login again.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }
  return children;
};

export default Hof;
