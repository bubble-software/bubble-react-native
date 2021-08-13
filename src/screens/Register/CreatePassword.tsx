import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Subheading, TextInput, Title } from 'react-native-paper'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { styles } from './styles'

export const CreatePassword = ({ route }): JSX.Element => {
  const navigation = useNavigation()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { username, email } = route.params
  return (
		<KeyboardAvoidingView
		behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		style={{ flex: 1 }}
	>
		<ScreenContainer>
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={{ flex: 1, marginHorizontal: '8%', alignContent: 'center', alignItems: 'center' }}>
				<Title style={{ marginTop: '50%', marginBottom: '10%' }}>Create a new Pasword</Title>
				<TextInput
					placeholder="Password"
					onChangeText={(passwordText) => setPassword(passwordText)}
					value={password}
					style={styles.passwordTextInput}
					autoCapitalize='none'
					underlineColor='transparent'
					mode="outlined"
					secureTextEntry={true}
					left={<TextInput.Icon name='lock-outline'/>}
				/>
				<TextInput
					placeholder="Confirm Password"
					onChangeText={(text) => setConfirmPassword(text)}
					value={confirmPassword}
					style={styles.confirmPasswordTextInput}
					autoCapitalize='none'
					underlineColor='transparent'
					mode="outlined"
					secureTextEntry={true}
					left={<TextInput.Icon name='lock-outline'/>}
				/>
				<Button
					mode="contained"
					style={styles.continueButton}
					onPress={() => navigation.navigate('Complete Registration', { email, username, password })}
				>
          Continue
				</Button>
				<Subheading>
					Enter a combination of at least six numbers, letters, and special characters
					</Subheading>
			</View>
			</TouchableWithoutFeedback>
		</ScreenContainer>
		</KeyboardAvoidingView>
  )
}
