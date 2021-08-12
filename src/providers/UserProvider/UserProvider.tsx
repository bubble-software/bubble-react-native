import React, { createContext } from 'react'
import { User } from '../../auth/types'

export type UserContextType = {
  me: User | null;
  setMe: React.Dispatch<React.SetStateAction<User | null>>;
}

const userContext: UserContextType = {
  me: null,
  setMe: (_) => {},

}

export const UserContext = createContext(userContext)
