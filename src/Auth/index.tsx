import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomRouteType } from '../types/CustomRouteType';

export const ProtectedRoute = ({ route, userPermissions }: { route: CustomRouteType; userPermissions: string[] }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (route.isProtected && !userPermissions.some(perm => route.permissions?.includes(perm))) {
      navigate(route.redirectIfNoPermission || '/unauthorized');
    }
  }, [route, userPermissions, navigate]);

  return route.element;
};