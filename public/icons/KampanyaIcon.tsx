import { createSvgIcon, SvgIcon } from "@mui/material";

export const KampanyaIcon = ({ ...rest }) => {
  const svg = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="112"
      height="101"
      fill="none"
      viewBox="0 0 112 101"
    >
      <path
        fill="#fff"
        d="M61.023 65.273v-2.455c0-1.803.378-3.462 1.136-4.977.773-1.515 1.894-2.735 3.364-3.66 1.47-.923 3.25-1.386 5.34-1.386 2.152 0 3.955.463 5.41 1.387a8.763 8.763 0 013.295 3.636c.758 1.515 1.136 3.182 1.136 5v2.455c0 1.803-.378 3.462-1.136 4.977-.757 1.515-1.871 2.735-3.34 3.66-1.455.923-3.243 1.386-5.364 1.386-2.122 0-3.917-.463-5.387-1.387-1.47-.924-2.583-2.144-3.34-3.659-.743-1.515-1.114-3.174-1.114-4.977zm5.931-2.455v2.455c0 1.197.288 2.295.864 3.295.576 1 1.591 1.5 3.046 1.5 1.47 0 2.477-.492 3.022-1.477.561-1 .841-2.106.841-3.318v-2.455c0-1.212-.265-2.318-.795-3.318-.53-1.015-1.553-1.523-3.068-1.523-1.425 0-2.432.508-3.023 1.523-.591 1-.886 2.106-.886 3.318zm-29.59-24.182v-2.454c0-1.818.386-3.485 1.159-5a9.033 9.033 0 013.363-3.636c1.47-.925 3.25-1.387 5.341-1.387 2.137 0 3.932.462 5.387 1.387 1.47.909 2.575 2.12 3.318 3.636.742 1.515 1.113 3.182 1.113 5v2.454c0 1.819-.378 3.485-1.136 5-.742 1.5-1.848 2.705-3.318 3.614-1.47.91-3.258 1.364-5.364 1.364-2.136 0-3.94-.455-5.409-1.364a8.921 8.921 0 01-3.318-3.636c-.758-1.515-1.136-3.175-1.136-4.978zm5.977-2.454v2.454c0 1.212.28 2.319.84 3.319.577.984 1.592 1.477 3.046 1.477 1.455 0 2.455-.493 3-1.477.56-1 .841-2.106.841-3.319v-2.454c0-1.212-.265-2.318-.795-3.318-.53-1.015-1.546-1.523-3.046-1.523-1.44 0-2.447.508-3.022 1.523a6.612 6.612 0 00-.864 3.318zM39.955 74l32-46.546h5.681L45.636 74h-5.681z"
      ></path>
      <path
        stroke="#fff"
        strokeWidth="6"
        d="M107 50.5C107 76.706 85.538 98 59 98S11 76.706 11 50.5 32.462 3 59 3s48 21.294 48 47.5z"
      ></path>
    </svg>,
    "Svg"
  );

  return <SvgIcon {...rest} viewBox="0 0 110 114" component={svg} />;
};
