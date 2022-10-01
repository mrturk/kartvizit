import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useEffect, forwardRef, Dispatch, SetStateAction } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { MenuItemType } from "../model/menuItem";
import { title } from "process";
import { BackIcon } from "../public/icons/BackIcon";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type FullScreenDialog = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  content: JSX.Element;
  title: string;
  sx?: SxProps;
};

export default function FullScreenDialog({
  open,
  setOpen,
  content,
  title,
  sx,
}: FullScreenDialog) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "#4F4D4D",
        },
        ...sx,
      }}
    >
      <AppBar sx={{ position: "fixed", backgroundColor: "#4F4D4D" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <BackIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack>{content}</Stack>
    </Dialog>
  );
}
