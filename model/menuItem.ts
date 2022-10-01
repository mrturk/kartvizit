export type MenuItemType = {
  id: number;
  menuGroupId: number;
  itemName: "string";
  isActive: boolean;
  singlePrice?: number;
  doublePrice?: number;
  description?: string;
};
