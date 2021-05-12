import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error('GASP YOU FORDIGOT AUTHPROVIDERRR');
  return auth;
}

export function AuthProvider(props) {
  const [state] = useState({
    user: null,
  });
  
  return (
    <AuthContext.Provider value={state}>
      {props.children}
    </AuthContext.Provider>
  );
}