import { lazy, Suspense } from "react";

import { CustomRouteType } from "../types/CustomRouteType";
import { Outlet } from "react-router-dom";
import PageLoader from "../components/loader/PageLoader";
import MainLayout from "../layouts/main-layout";
import AuthLayout from "../layouts/auth-layout";

import { rootPaths } from "./paths";

const Dashboard = lazy(() => import("../pages/AdminPage/dashboard/Dashbaord"));

export const AdminRoute: CustomRouteType[] = [
  {
    path: "/admin",
    element: (
      <MainLayout>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: rootPaths.authRoot,
        element: (
          <AuthLayout>
            <Outlet />
          </AuthLayout>
        ),
        
      },
      
    ],
    isProtected: false,
    permissions: ["admin"],
    redirectIfNoPermission: "/login",
  },
];
