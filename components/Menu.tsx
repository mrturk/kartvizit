import { Stack, Button, CircularProgress, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { MenuGroupModelType } from "../model/menuGroupName";
import { MenuItemType } from "../model/menuItem";
import FullScreenDialog from "./FullScreenDialog";
import MenuItem from "./MennuItem";

const Menu = () => {
  const [menuGroups, setMenuGroups] = useState<MenuGroupModelType[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getAllMenuGroup = useCallback(async () => {
    setLoading(true);
    const response = await axios.get(
      "https://mmcardsystem.online/api/Customer/api/Customer/GetMenuGroupByCustomerId?customerId=1"
    );
    const menuGropuResponse = response.data as MenuGroupModelType[];
    setMenuGroups(menuGropuResponse);
    setLoading(false);
  }, []);
  useEffect(() => {
    getAllMenuGroup();
  }, [getAllMenuGroup]);

  return (
    <Stack>
      <Stack
        flexDirection="row"
        gap="10px"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        paddingY="20px"
      >
        {loading ? (
          <Stack height="75vh" justifyContent="center">
            <CircularProgress size="100px" color="secondary" />
          </Stack>
        ) : (
          menuGroups.map((menuGroup, index) => {
            return (
              <Stack width="100%" key={index}>
                <Button
                  sx={{
                    height: "250px",

                    backgroundColor: "#363434",
                    alignItems: "end",
                    // background:
                    //   "url('https://wallpapercave.com/wp/wp1846126.jpg')",
                    // backgroundRepeat: "no-repeat",
                    // backgroundSize: "cover",
                  }}
                  variant="contained"
                  onClick={async () => {
                    const response = await axios.get(
                      "https://mmcardsystem.online/api/Customer/api/Customer/GetMenuItemByMenuGroupId?id=" +
                        menuGroup.id
                    );
                    setMenuItems(response.data as MenuItemType[]);
                    setTitle(menuGroup.groupName);
                    setOpen(true);
                  }}
                >
                  <Typography
                    sx={{
                      width: "100%",
                      borderRadius: "20px",
                    }}
                  >
                    {menuGroup.groupName}
                  </Typography>
                </Button>
              </Stack>
            );
          })
        )}
      </Stack>

      <FullScreenDialog
        sx={{ paddingTop: "56px" }}
        title={title}
        content={<MenuItem data={menuItems} />}
        setOpen={setOpen}
        open={open}
      />
    </Stack>
  );
};

export default Menu;
