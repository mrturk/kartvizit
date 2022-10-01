import { createSvgIcon, SvgIcon } from "@mui/material";

export const BackIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="28"
      fill="none"
      viewBox="0 0 34 28"
    >
      <path
        fill="#fff"
        d="M15.453 21.064v6.656L2.958 17.43 15.453 7.14v6.801c14.538.28 13.913-8.14 10.214-13.661 9.132 8.131 7.194 21.157-10.214 20.784z"
      ></path>
    </svg>,
    "Svg"
  );

  return <SvgIcon {...rest} viewBox="0 0 34 28" component={svg} />;
};
