import {IconType} from 'react-icons';
import {FiBox, FiTruck} from 'react-icons/fi';

export interface SidebarSubCategory {
  id: string;
  title: string;
  childrens?: SidebarSubCategory[];
  linkedTo?: string;
  path?: string;
  type: 'accordion' | 'link' | 'hidden';
}

export interface SidebarCategory {
  id: string;
  title: string;
  icon: IconType;
  subCategories: SidebarSubCategory[];
}

export const sidebar: SidebarCategory[] = [
  {
    id: 'category-delivery',
    icon: FiTruck,
    title: 'entregas',
    subCategories: [
      {
        id: 'link-components',
        title: 'Componentes',
        type: 'link',
        path: '/components',
      },
      {
        id: 'subcategory-customers',
        title: 'Clientes',
        type: 'accordion',
        childrens: [
          {
            id: 'subcategory-premium-customer',
            path: '/user',
            title: 'Novo cliente',
            type: 'link',
          },
        ],
      },
      {
        id: 'link-deliver',
        title: 'Motoristas',
        type: 'link',
        path: '/delivery',
      },
    ],
  },
  {
    id: 'category-products',
    icon: FiBox,
    title: 'produtos',
    subCategories: [
      {
        id: 'subcategory-customers',
        title: 'Novo Produto',
        type: 'link',
        path: '/products',
      },
    ],
  },
];
