import { createContext } from 'react'

export type AuthContextType = {
  credentials?: string,
  signIn: (me: string) => void;
  signOut: () => Promise<void>;
}

const authContext: AuthContextType = {
  credentials: undefined,
  signIn: (_) => {},
  signOut: async () => {},
}
export const AuthContext = createContext<AuthContextType>(authContext)
