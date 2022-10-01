import { Stack, SxProps, Typography } from "@mui/material";

type PageLayoutProps = {
  header: JSX.Element;
  body: JSX.Element;
  footer?: JSX.Element;
  sx?: SxProps;
  sxFooter?: SxProps;
};

const PageLayout = ({ header, body, footer, sx }: PageLayoutProps) => {
  return (
    <Stack gap="20px" sx={sx}>
      <Stack>{header}</Stack>
      <Stack paddingX="16px">
        <Stack
          height="35px"
          bgcolor=" #D7440E"
          color="white"
          justifyContent="center"
          alignItems="center"
          sx={{ maxHeight: "357px", width: "100%", borderRadius: "9px" }}
        >
          <Typography fontSize="27px">HOŞGELDİNİZ</Typography>
        </Stack>
      </Stack>
      <Stack>{body}</Stack>
      {footer && <Stack sx={{ height: "150px" }}>{footer}</Stack>}
    </Stack>
  );
};

export default PageLayout;
