import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Subheading, Title } from 'react-native-paper'
import { createUser } from '../../api/service'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { styles } from './styles'
import * as Linking from 'expo-linking';
import { TOS } from '../../utils/constants'

export const CompleteRegistration = ({route}): JSX.Element => {
	const navigation = useNavigation()
	const { username, email, password } = route.params

	const createUserAction = async () => {
		await createUser({email, password, username})
	}

  return (
		<KeyboardAvoidingView
		behavior={Platform.OS === "ios" ? "padding" : "height"}
		style={{flex:1}}
	>
		<ScreenContainer>
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={{ flex: 1, justifyContent: 'center', marginHorizontal: '8%', alignContent: 'center', alignItems: 'center' }}>
				<Title>Complete Registration</Title>
				<Subheading style={styles.completeRegistrationSubHeader}>By tapping register, you agree to our terms, Data Policy and Cookies Policy.</Subheading>
				<Subheading 
					style={styles.tos}
				onPress={() => Linking.openURL(TOS)}>View Our Terms of Service</Subheading>
				<Button
					mode="contained"
					style={styles.completeButton}
					onPress={() =>
					Alert.alert(
						'Congratulations!', 'Your account has been created. Please check your email to activate your account',
						[
							{
								text: 'OK',
								onPress: () => {
									createUserAction().then(() => {
										navigation.navigate('Login')
									})
								},
							},
						],
					)}
				>
        Register
				</Button>
			</View>
			</TouchableWithoutFeedback>
		</ScreenContainer>
		</KeyboardAvoidingView>
  )
}
