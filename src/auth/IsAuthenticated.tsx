import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TemplateType, User } from './types'
import { Login } from '../screens/Login/Login'
import { RegistrationStack } from '../stacks/RegistrationStack/RegistrationStack'
import { ForgotPasswordStack } from '../stacks/ForgotPasswordStack/ForgotPasswordStack'
import { AuthenticatedStack } from '../stacks/AuthenticatedStack/AuthenticatedStack'
import { keysToCamel } from '../utils/stringhelpers'
import jwtDecode from 'jwt-decode'
import { UserContext } from '../providers/UserProvider/UserProvider'

export const IsAuthenticated: TemplateType = ({ credentials }) => {
  const [me, setMe] = useState<User | null>(null)

  useEffect(() => {
    if (credentials) {
      const userDecoded = jwtDecode(credentials)
      setMe(keysToCamel(userDecoded) as User)
    }
  }, [credentials])

  const userContext = React.useMemo(() => {
    return {
      me,
      setMe,
    }
  }, [me])

  const RootStack = createStackNavigator()
  return (
		<UserContext.Provider value={userContext}>
			<RootStack.Navigator mode='modal'>
				{ credentials
				  ? <RootStack.Screen
						name="Authenticated"
						component={AuthenticatedStack}
						options={{ headerShown: false }}
					/>
				  : <>
						<RootStack.Screen
							name="Login"
							component={Login}
							options={{ headerShown: false }}
						/>
						<RootStack.Screen
							name="Forgot Password Stack"
							component={ForgotPasswordStack}
							options={{ headerShown: false }}
						/>
						<RootStack.Screen
							name="Registration"
							component={RegistrationStack}
							options={{ headerShown: false }}
						/>
					</>
				}

			</RootStack.Navigator>
		</UserContext.Provider>
  )
}
