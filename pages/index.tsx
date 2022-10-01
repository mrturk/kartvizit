import { Stack, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "../components/Footer";
import FullScreenDialog from "../components/FullScreenDialog";
import Header from "../components/Header";
import Menu from "../components/Menu";
import PageLayout from "../components/PageLayout";
import text from "../public/hamburger-bg.svg";
import { KampanyaIcon } from "../public/icons/KampanyaIcon";
import { MenuIcon } from "../public/icons/MenuIcon";
import { SupportIcon } from "../public/icons/SupportIcon";

type HomeContentButtonProps = {
  icon?: JSX.Element;
  text?: string;
  fontSize?: string;
  onClick?: () => void;
};

const HomeContentButton = ({
  icon,
  text,
  fontSize = "10px",
  onClick,
}: HomeContentButtonProps) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: "158px",
        height: "155px",
        border: "1px solid white",
        borderRadius: "16px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {icon}
      {text && (
        <Typography color="white" fontSize={fontSize}>
          {text}
        </Typography>
      )}
    </Button>
  );
};

const HomePageContent = () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack justifyContent="center" alignItems="center">
      <Stack position="relative" height="412px" maxWidth="376px" width="100%">
        <Image style={{ borderRadius: "30px" }} src={text} alt="header" />
        <Stack
          position="absolute"
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap="30px"
          flexDirection="row"
        >
          <HomeContentButton
            onClick={() => {
              setOpen(true);
            }}
            icon={<MenuIcon sx={{ fontSize: "150px" }} />}
          />
          <HomeContentButton
            icon={<SupportIcon sx={{ fontSize: "100px" }} />}
            text="Restaurant Hakkında Görüşleriniz"
          />
          <HomeContentButton
            icon={<KampanyaIcon sx={{ fontSize: "100px" }} />}
            text="Kampanyalar"
          />
          <HomeContentButton text="İLETİŞİM" fontSize="25px" />
        </Stack>
      </Stack>
      <FullScreenDialog
        sx={{ paddingTop: "56px" }}
        title="MENU"
        content={<Menu />}
        setOpen={setOpen}
        open={open}
      />
    </Stack>
  );
};

const Home = () => {
  const router = useRouter();
  console.log(router);
  return (
    <PageLayout
      sx={{ backgroundColor: "#4F4D4D", height: "100vh" }}
      header={<Header />}
      body={<HomePageContent />}
    />
  );
};

export default Home;
