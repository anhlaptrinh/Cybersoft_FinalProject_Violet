import AuthenTemplate from "../pages/AuthenPage";

export const AuthenRoute = [
    {
        path: '/login',
        name: 'Login',
        element: <AuthenTemplate/>,
        auth: false
    }
]