import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Title } from 'react-native-paper'
import { ConfirmPasswordChange } from '../../screens/ForgotPassword/ConfirmPasswordChange'
import { ForgotPassword } from '../../screens/ForgotPassword/ForgotPassword'
import { PasswordValidation } from '../../screens/ForgotPassword/PasswordValidation'

export const ForgotPasswordStack = (): JSX.Element => {
  const ForgotPasswordStack = createStackNavigator()
  const navigation = useNavigation()
  return (
		<ForgotPasswordStack.Navigator
			initialRouteName={'Forgot Password'}
		>
			<ForgotPasswordStack.Screen
				name="Forgot Password"
				component={ForgotPassword}
				options={{
				  headerLeft: undefined,
				  headerRight: () => <Title style={{ marginRight: 10, fontSize: 16 }}onPress={() => navigation.goBack()}>Cancel</Title>,
				}}
			/>
			<ForgotPasswordStack.Screen
				name="Password Validation"
				component={PasswordValidation}
				options={{
				  headerRight: () => <Title style={{ marginRight: 10, fontSize: 16 }}onPress={() => navigation.goBack()}>Cancel</Title>,
				  headerLeft: () => <Title style={{ marginLeft: 10, fontSize: 16 }}onPress={() => navigation.navigate('Forgot Password')}>Back</Title>,
				}}
			/>
			<ForgotPasswordStack.Screen
				name="Confirm Password"
				component={ConfirmPasswordChange}
				options={{
				  headerRight: () => <Title style={{ marginRight: 10, fontSize: 16 }} onPress={() => navigation.goBack()}>Cancel</Title>,
				  headerLeft: () => <Title style={{ marginLeft: 10, fontSize: 16 }} onPress={() => navigation.navigate('Password Validation')}>Back</Title>,
				}}
			/>
		</ForgotPasswordStack.Navigator>
  )
}
