import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Paragraph, TextInput, Title } from 'react-native-paper'
import { passwordReset } from '../../api/service'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { styles } from './styles'

export const ForgotPassword = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const navigation = useNavigation()

  const resetPasswordAction = () => {
    passwordReset(email)
      .then(() => navigation.navigate('Password Validation', { data: email }))
      .catch((e) => {
        Alert.alert(
          'Unable To Sign In.',
          'Your username or password are incorrect.',
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
				<Title style={{fontSize: 18}}>We&apos;ll send you a code that confirms the account is yours.</Title>
				<TextInput
					placeholder="email"
					onChangeText={(usernameText) => setEmail(usernameText)}
					value={email}
					style={styles.textInput}
					autoCapitalize='none'
					underlineColor='transparent'
					mode="outlined"
					left={<TextInput.Icon name='account'/>}
				/>
				<Button
					mode="contained"
					style={styles.continueButton}
					onPress={() => resetPasswordAction()}
				>
					<Paragraph style={styles.buttonText}>Continue</Paragraph>
				</Button>
			</View>
			</TouchableWithoutFeedback>
		</ScreenContainer>
		</KeyboardAvoidingView>
  )
}
