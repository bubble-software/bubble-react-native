import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { IsAuthenticated } from '../auth/IsAuthenticated'
import { AuthContext } from '../providers/AuthProvider/AuthProvider'
import { BUBBLEBLUE, WHITE } from '../theme/theme'
import { clearStorage, getAsyncStorageItem } from '../utils/asyncStorage'
import { navigationRef } from './RootNavigation'

// show loading screen first
// then choose if logged in or not
export const Navigation = (): JSX.Element => {
  const [isLoading] = useState(true)
  const [credentials, setCredentials] = useState<any | undefined>()

  const authContext = React.useMemo(() => {
    return {
      credentials,
      signIn: (credentials: any) => {
        setCredentials(credentials)
      },
      signOut: async () => {
        setCredentials(undefined)
        await clearStorage()
      },
    }
  }, [credentials])

  const getData = async () => {
    try {
      const storageCredentials = await getAsyncStorageItem('credentials')
      if (storageCredentials !== null) {
        setCredentials(JSON.parse(storageCredentials))
      }
    } catch (e) {
      console.log('err')
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
		<AuthContext.Provider value={authContext}>
			{
				!isLoading
				  ? <View> </View>
				  : <NavigationContainer theme={theme} ref={navigationRef}>
						<IsAuthenticated credentials={credentials}/>
					</NavigationContainer>
			}
		</AuthContext.Provider>
  )
}

const theme = {
  colors: {
    primary: BUBBLEBLUE,
    background: BUBBLEBLUE,
    card: BUBBLEBLUE,
    text: WHITE,
  },
}
