import { useSelector } from "react-redux";
import { Image } from "@chakra-ui/react";

const Hof = ({ children }) => {
  let data = useSelector((state) => state.profile);

  if (data === "please login again.") {
    return (
      <Image
        textAlign={"center"}
        src="https://www.wallpaperflare.com/static/765/775/653/errors-minimalism-typography-x-wallpaper.jpg"
      />
    );
  }
  return children;
};

export default Hof;
