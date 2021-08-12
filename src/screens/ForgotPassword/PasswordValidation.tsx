import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Paragraph, TextInput, Title } from 'react-native-paper'
import { validatePasswordRecoveryCode } from '../../api/service'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { styles } from './styles'
import { PasswordValidationRouteProps } from './types'

export const PasswordValidation = ({ route }: {route: PasswordValidationRouteProps}): JSX.Element => {
  const [validationCode, setValidationCode] = useState('')
  const navigation = useNavigation()
  const { data: routeData } = route.params
  const validateCode = () => {
    validatePasswordRecoveryCode(routeData, validationCode)
      .then(() => navigation.navigate('Confirm Password', { data: routeData, code: validationCode }))
      .catch((e) => {
        Alert.alert(
					`${e}`,
					'',
					[
					  { text: 'OK' },
					],
        )
      })
  }
  return (
		<KeyboardAvoidingView
		behavior={Platform.OS === "ios" ? "padding" : "height"}
		style={{flex:1}}
	>
		<ScreenContainer>
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={{ flex: 1, marginHorizontal: '8%', marginTop: '24%' }}>
				<Title>A code has been sent to your email address. Enter that code here.</Title>
				<TextInput
					placeholder="Enter Code"
					onChangeText={(usernameText) => setValidationCode(usernameText)}
					value={validationCode}
					style={styles.textInput}
					autoCapitalize='none'
					underlineColor='transparent'
					mode="outlined"
				/>
				<Button
					mode="contained"
					style={styles.continueButton}
					onPress={() => validateCode()}
				>
					<Paragraph style={styles.buttonText}>Continue</Paragraph>
				</Button>
			</View>
			</TouchableWithoutFeedback>
		</ScreenContainer>
		</KeyboardAvoidingView>
  )
}
