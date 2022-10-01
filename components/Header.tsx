import { Stack, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import image from "../public/fortune-bg.svg";
import text from "../public/fortune-text.svg";
const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      paddingTop="30px"
      alignItems={isMobile ? "inherit" : "center"}
      flex={1}
    >
      <Stack position="relative" width={isMobile ? "100%" : "600px"}>
        <Image style={{ borderRadius: "30px" }} src={image} alt="header" />
        <Stack sx={{ position: "absolute", width: "100%", bottom: "37px" }}>
          <Image style={{ borderRadius: "30px" }} src={text} alt="header" />
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Header;
