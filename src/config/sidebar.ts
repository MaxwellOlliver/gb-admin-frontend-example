import { IconType } from "react-icons";
import { FiBox, FiTruck } from "react-icons/fi";

interface SidebarLink {
  id: string;
  title: string;
  path: string;
}

interface SidebarSubCategory {
  id: string;
  title: string;
  links: SidebarLink[];
}

interface SidebarCategory {
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
        links: [
          {
            id: "link-create-customer",
            path: "/new-customer",
            title: "Novo cliente",
          },
        ],
      },
      {
        id: "subcategory-customers-1",
        title: "Clientes",
        links: [
          {
            id: "link-create-customer",
            path: "/new-customer",
            title: "Novo cliente",
          },
        ],
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
        title: "Clientes",
        links: [
          {
            id: "link-create-customer",
            path: "/new-customer",
            title: "Novo cliente",
          },
        ],
      },
    ],
  },
];
