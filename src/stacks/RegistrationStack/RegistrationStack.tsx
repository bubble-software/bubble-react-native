import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { CompleteRegistration } from '../../screens/Register/CompleteRegistration'
import { CreateEmail } from '../../screens/Register/CreateEmail'
import { CreatePassword } from '../../screens/Register/CreatePassword'
import { CreateUsername } from '../../screens/Register/CreateUsername'
import { StartRegistration } from '../../screens/Register/StartRegistration'
import { Title } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

export const RegistrationStack = (): JSX.Element => {
  const RegistrationStack = createStackNavigator()
  const navigation = useNavigation()
  return (
		<RegistrationStack.Navigator
			initialRouteName={'Start Registration'}
		>
			<RegistrationStack.Screen
				name="Start Registration"
				component={StartRegistration}
				options={{
				  headerRight: () => <Title
						style={{ fontSize: 16, marginRight: 12 }}
						onPress={() => navigation.goBack()}
					>
						Cancel
					</Title>,
				}}
			/>
			<RegistrationStack.Screen
				name="Complete Registration"
				component={CompleteRegistration}
				options={{
				  headerRight: () => <Title
						style={{ fontSize: 16, marginRight: 12 }}
						onPress={() => navigation.navigate('Login')}
					>
						Cancel
					</Title>,
				  headerLeft: () => <Title
						style={{ fontSize: 16, marginLeft: 12 }}
						onPress={() => navigation.navigate('Create Password')}
					>
						Back
					</Title>,
				}}
			/>
			<RegistrationStack.Screen
				name="Create Email"
				component={CreateEmail}
				options={{
				  headerRight: () => <Title
						style={{ fontSize: 16, marginRight: 12 }}
						onPress={() => navigation.navigate('Login')}
					>
						Cancel
					</Title>,
				  headerLeft: () => <Title
						style={{ fontSize: 16, marginLeft: 12 }}
						onPress={() => navigation.navigate('Create Username')}
					>
						Back
					</Title>,
				}}
			/>
			<RegistrationStack.Screen
				name="Create Password"
				component={CreatePassword}
				options={{
				  headerRight: () => <Title
						style={{ fontSize: 16, marginRight: 12 }}
						onPress={() => navigation.navigate('Login')}
					>
						Cancel
					</Title>,
				  headerLeft: () => <Title
						style={{ fontSize: 16, marginLeft: 12 }}
						onPress={() => navigation.navigate('Create Email')}
					>
						Back
					</Title>,
				}}
			/>
			<RegistrationStack.Screen
				name="Create Username"
				component={CreateUsername}
				options={{
				  headerRight: () => <Title
						style={{ fontSize: 16, marginRight: 12 }}
						onPress={() => navigation.navigate('Login')}
					>
						Cancel
					</Title>,
				  headerLeft: () => <Title
						style={{ fontSize: 16, marginLeft: 12 }}
						onPress={() => navigation.navigate('Start Registration')}
					>
						Back
					</Title>,
				}}
			/>
		</RegistrationStack.Navigator>
  )
}
