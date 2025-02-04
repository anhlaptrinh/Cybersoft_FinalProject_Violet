import AdminTemplate from "../pages/AdminPage";
import { CustomRouteType } from "../types/CustomRouteType";

export const AdminRoute: CustomRouteType[] = [
  {
    path: "/admin",
    element: <AdminTemplate />,
    children: [],
    isProtected: true,
    permissions: ["admin"],
    redirectIfNoPermission: "/login",
  },
];