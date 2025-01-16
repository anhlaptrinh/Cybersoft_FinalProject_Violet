import { useRoutes } from "react-router-dom"
import { AdminRoute } from "./AdminRoute"
import { MainRoute } from "./MainRoute"
import { AuthenRoute } from "./AuthenRoute"

export const useRouteElement = ()=>{
    return useRoutes([
        ...MainRoute,
        ...AuthenRoute,
        ...AdminRoute,
        
        
    ])
}