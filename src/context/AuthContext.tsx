import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext<{
    userPermissions: string[];
    setUserPermissions: (permissions: string[]) => void;
  }>({
    userPermissions: [],
    setUserPermissions: () => {},
  });
export const AuthProvider = ({
  children,
  initialPermissions,
}: {
  children: React.ReactNode;
  initialPermissions: string[];
}) => {
  const [userPermissions, setUserPermissions] = useState<string[]>(initialPermissions);
  

  return (
    <AuthContext.Provider value={{ userPermissions, setUserPermissions }}>
      {children}
    </AuthContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };