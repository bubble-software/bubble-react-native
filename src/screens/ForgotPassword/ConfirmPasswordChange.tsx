import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Paragraph, Subheading, TextInput, Title } from 'react-native-paper'
import { validatePasswordReset } from '../../api/service'

import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { styles } from './styles'

export const ConfirmPasswordChange = ({ route }): JSX.Element => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { data, code } = route.params
  const navigation = useNavigation()
  const validateCode = () => {
    if (password === confirmPassword) {
      validatePasswordReset({ email: data, recoveryCode: code, password: password })
        .then(() => {
          Alert.alert('Succesfully Changed Password')
          navigation.navigate('Login')
        })
    }
  }
  return (
		<KeyboardAvoidingView
		behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		style={{ flex: 1 }}
	>
		<ScreenContainer>
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={{ flex: 1, marginHorizontal: '8%', marginTop: '24%' }}>
				<Title style={{ textAlign: 'center', marginBottom: '12%' }}>Create a New Password</Title>
				<Subheading style={{ marginBottom: '12%' }}>
					Enter a combination of at least six numbers, letters, and special characters
				</Subheading>
				<TextInput
					placeholder="New Password"
					style={styles.passwordTextInput}
					onChangeText={(password) => setPassword(password)}
					value={password}
					secureTextEntry={true}
					autoCapitalize='none'
					mode="outlined"
					left={<TextInput.Icon name='lock-outline'/>}
				/>
				<TextInput
					style={styles.confirmPasswordTextInput}
					placeholder="Confirm Password"
					onChangeText={(password) => setConfirmPassword(password)}
					value={confirmPassword}
					secureTextEntry={true}
					autoCapitalize='none'
					mode="outlined"
					left={<TextInput.Icon name='lock-outline'/>}
				/>
				<Button
					mode="contained"
					style={[styles.continueButton, { marginTop: '12%' }]}
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
