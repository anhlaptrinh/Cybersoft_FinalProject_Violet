import { lazy } from "react";
import AuthenTemplate from "../pages/AuthenPage";
import paths from "./paths";
const Signin = lazy(() => import('../pages/authentication/Signin'));
const Signup = lazy(() => import('../pages/authentication/Signup'));
export const AuthenRoute = [
    {
        path: '/authentication',
        name: 'Login',
        element: <AuthenTemplate/>,
        children: [
            {
              path: `/authentication${paths.signin}`,
              element: <Signin />,
            },
            {
              path: `/authentication${paths.signup}`,
              element: <Signup />,
            },
          ],
        auth: false,
        
    }
]