import { ReactNode } from "react";

export interface CustomRouteType{
    path: string; // Đường dẫn của route
    element: ReactNode; // Component được hiển thị
    children?: CustomRouteType[]; // Các route con (nếu có)
    permissions?: string[]; // Danh sách các quyền cần thiết để truy cập route
    isProtected?: boolean; // Route có yêu cầu đăng nhập không?
    redirectIfNoPermission?: string; // Đường dẫn chuyển hướng nếu không có quyền
} 