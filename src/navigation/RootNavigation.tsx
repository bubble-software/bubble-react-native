import { NavigationContainerRef } from '@react-navigation/native'
import React, { RefObject } from 'react'

export const navigationRef:
	| ((instance: NavigationContainerRef | null) => void)
	| RefObject<NavigationContainerRef>
	| null
	| undefined = React.createRef()

export const RootNavigation = (name: string): void => {
  // @ts-ignore
  navigationRef.current?.navigate(name)
}
