
import HomeTemplate from "../modules/HomeTemplate";

import UserTemplate from "../pages/UserPage";
import CartPage from "../pages/UserPage/CartPage";
import ProductPage from "../pages/UserPage/ProductPage";
import { CustomRouteType } from "../types/CustomRouteType";

export const MainRoute: CustomRouteType[] = [
  {
    path: "/",
    element: <UserTemplate />,
    children: [
      {
        path: "/",
        element: <HomeTemplate />,
        isProtected: false,
      },

      {
        path: "/products",
        element: <ProductPage/>,
        isProtected: false,

      },
      {
        path: "/cart",
        element: <CartPage/>,
        isProtected: false,
      },
      

    ],
    isProtected: false,
  },
];
