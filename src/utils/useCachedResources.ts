import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as React from 'react'
export default function useCachedResources (): boolean {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync () {
      try {
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          IcoMoon: require('../../assets/icomoon/fonts/icomoon.ttf'),
          freehand: require('../../assets/fonts/freehand.ttf'),
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
