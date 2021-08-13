import { LocationObject } from 'expo-location'
import { createContext, Dispatch, SetStateAction } from 'react'

export type TabContextType = {
  currTab: string,
  setCurrTab: Dispatch<SetStateAction<string>>
  drawerActive: boolean,
  setDrawerActive: Dispatch<SetStateAction<boolean>>,
  location: LocationObject,
  setLocation: Dispatch<SetStateAction<LocationObject>>
}

const tabContext: TabContextType = {
  currTab: 'Happy Hour',
  setCurrTab: () => {},
  drawerActive: false,
  setDrawerActive: () => {},
  location: {} as LocationObject,
  setLocation: () => {},
}
export const TabContext = createContext<TabContextType>(tabContext)
