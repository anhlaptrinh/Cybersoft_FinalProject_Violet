import { useRoutes } from "react-router-dom"
import { AdminRoute } from "./AdminRoute"
import { MainRoute } from "./MainRoute"
import { AuthenRoute } from "./AuthenRoute"
import { ProtectedRoute } from "../Auth"
import { useAuth } from "../context/AuthContext"

export const useRouteElement = ()=>{
    const { userPermissions } = useAuth();
    return useRoutes([
        ...MainRoute.map((route)=> ({
            ...route,
            element: <ProtectedRoute route={route} userPermissions={userPermissions} />,
          })),
        ...AuthenRoute,
        ...AdminRoute.map(route => ({
            ...route,
            element: <ProtectedRoute route={route} userPermissions={userPermissions} />,
          })),
        
        
    ])
}