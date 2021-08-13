import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

import { Alert, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Subheading, TextInput, Title } from 'react-native-paper'
import { checkEmail } from '../../api/service'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export const CreateEmail = ({ route }): JSX.Element => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const { username } = route.params
  const checkEmailAction = () => {
    checkEmail(email)
      .then(() => navigation.navigate('Create Password', { username, email }))
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
		behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		style={{ flex: 1 }}
	>
		<ScreenContainer>
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={{ flex: 1, marginHorizontal: '8%', alignContent: 'center', alignItems: 'center' }}>
				<Title style={{ marginTop: '50%' }}>What is your email address?</Title>
				<TextInput
					placeholder="Email"
					onChangeText={(emailText) => setEmail(emailText)}
					value={email}
					style={styles.usernameTextInput}
					autoCapitalize='none'
					underlineColor='transparent'
					mode="outlined"
					left={<TextInput.Icon name='email'/>}
				/>
				<Button
					mode="contained"
					style={styles.continueButton}
					onPress={() => checkEmailAction()}
				>
          Continue
				</Button>
				<Subheading>This will be used to reset your password and verify your account.</Subheading>
			</View>
			</TouchableWithoutFeedback>
		</ScreenContainer>
		</KeyboardAvoidingView>
  )
}
