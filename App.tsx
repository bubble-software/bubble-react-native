import { StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { Navigation } from './src/navigation/Navigation'
import * as Location from 'expo-location'
import useCachedResources from './src/utils/useCachedResources'
import { Theme } from 'react-native-paper/lib/typescript/types'

export default function App (): JSX.Element {
  const isLoadingComplete = useCachedResources()

  useEffect(() => {
    Location.requestForegroundPermissionsAsync()
      .then(({status}) =>{
        if (status !== 'granted'){
          return undefined
        }
      })
  }, [])

  return (
		<PaperProvider theme={theme}>
			{
				isLoadingComplete &&
        <>
          <StatusBar barStyle="dark-content" />
          <Navigation/>
        </>
			}
		</PaperProvider>
  )
}

const theme: Theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    text: 'white',
    placeholder: 'white',
    primary: 'white'
  }
}
