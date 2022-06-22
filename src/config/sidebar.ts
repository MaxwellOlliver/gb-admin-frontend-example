import { IconType } from "react-icons";
import { FiBox, FiTruck } from "react-icons/fi";

export interface SidebarSubCategory {
  id: string;
  title: string;
  childrens?: SidebarSubCategory[];
  path?: string;
  type: "accordion" | "link";
}

export interface SidebarCategory {
  id: string;
  title: string;
  icon: IconType;
  subCategories: SidebarSubCategory[];
}

export const sidebar: SidebarCategory[] = [
  {
    id: "category-delivery",
    icon: FiTruck,
    title: "entregas",
    subCategories: [
      {
        id: "subcategory-customers",
        title: "Clientes",
        type: "accordion",
        childrens: [
          {
            id: "subcategory-premium-customer",
            path: "/new-customer",
            title: "Cliente Premium",
            type: "accordion",
            childrens: [
              {
                id: "subcategory-customers-1",
                title: "Clientes",
                type: "link",
                path: "user",
              },
            ],
          },
        ],
      },
      {
        id: "subcategory-customers-1",
        title: "Clientes",
        type: "link",
        path: "user",
      },
    ],
  },
  {
    id: "category-products",
    icon: FiBox,
    title: "produtos",
    subCategories: [
      {
        id: "subcategory-customers",
        title: "Novo Produto",
        type: "link",
        path: "products",
      },
    ],
  },
];
