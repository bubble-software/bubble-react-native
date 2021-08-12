import { createContext, Dispatch, SetStateAction } from 'react'

export type DrawerContextType = {
  drawerActive: boolean,
  setDrawerActive: Dispatch<SetStateAction<boolean>>
}

const drawerContext: DrawerContextType = {
  drawerActive: false,
  setDrawerActive: () => {},
}
export const DrawerContext = createContext<DrawerContextType>(drawerContext)
