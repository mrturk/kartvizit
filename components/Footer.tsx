import { Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
const Footer = () => {
  return (
    <Stack
      color="white"
      flex={1}
      flexDirection="row"
      gap="20px"
      bgcolor="#779a3e"
      paddingTop="40px"
      paddingLeft="50px"
    >
      <Stack>
        <Stack flexDirection="row" gap="2px">
          <Stack>
            <InstagramIcon />
          </Stack>
          <Stack>
            <FacebookIcon />
          </Stack>
          <Stack>
            <TwitterIcon />
          </Stack>
        </Stack>
        <Stack>cfbarcode</Stack>
      </Stack>
      <Stack>
        <Link href="tel:+905461121414">
          <Typography style={{ cursor: "pointer" }}>0546 112 14 14</Typography>
        </Link>
        <Link href="/">
          <Typography style={{ cursor: "pointer" }}>cafebarcode.com</Typography>
        </Link>
      </Stack>
    </Stack>
  );
};
export default Footer;
