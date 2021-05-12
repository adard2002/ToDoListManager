import { useContext, useState } from 'react';

export const AuthContext = React.createContext();

export function AuthProvider(props) {
  const [state, setState] = useState({
    user: { name: 'Adara' },
  });

  return (
    <AuthContext.Provider value={state}>
      {props.children}
    </AuthContext.Provider>
  );
}