import HomeTemplate from "../modules/HomeTemplate";
import UserTemplate from "../pages/UserPage";
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
    ],
    isProtected: false,
  },
];
