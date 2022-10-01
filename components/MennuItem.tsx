import { MenuItemType } from "../model/menuItem";
import { Stack, Typography } from "@mui/material";
type MenuItemProps = {
  data: MenuItemType[];
};

const MenuItem = ({ data }: MenuItemProps) => {
  return (
    <Stack
      gap="40px"
      paddingX="20px"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      paddingY="20px"
    >
      {data.map((item, index) => {
        return (
          <Stack
            border="1px solid white"
            gap="10px"
            sx={{
              // background: "url('https://wallpapercave.com/wp/wp1846126.jpg')",
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "cover",
              width: "100%",
              height: "250px",
              textAlign: "center",
              backgroundColor: "#363434",
              borderRadius: "16px",
              justifyContent: "space-between",
              paddingY: "20px",
              color: "white",
              paddingX: "10px",
            }}
            key={index}
          >
            <Stack>
              <Typography>{item.itemName.toUpperCase()}</Typography>
            </Stack>
            {item.singlePrice ? (
              <Stack>
                <Typography>Tek {item.singlePrice}TL</Typography>
              </Stack>
            ) : null}
            {item.doublePrice ? (
              <Stack>
                <Typography>Duble {item.doublePrice}TL</Typography>
              </Stack>
            ) : null}
            {item.description ? (
              <Stack>
                <Typography>{item.description}</Typography>
              </Stack>
            ) : null}
          </Stack>
        );
      })}
    </Stack>
  );
};

export default MenuItem;
