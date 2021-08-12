import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

import { Alert, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Subheading, TextInput, Title } from 'react-native-paper'
import { checkUsername } from '../../api/service'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { styles } from './styles'

export const CreateUsername = (): JSX.Element => {
  const navigation = useNavigation()

  const [username, setUsername] = useState('')

  const checkUsernameAction = () => {
    checkUsername(username)
      .then(() => navigation.navigate('Create Email', { username }))
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
			<View style={{ flex: 1, marginHorizontal: '8%', alignContent: 'center', alignItems: 'center', }}>
				<Title style={{ marginTop: '50%'}}>Enter in your username</Title>
				<TextInput
					placeholder="username"
					onChangeText={(usernameText) => setUsername(usernameText)}
					value={username}
					style={styles.usernameTextInput}
					autoCapitalize='none'
					underlineColor='transparent'
					mode="outlined"
				/>
				<Button
					mode="contained"
					style={styles.continueButton}
					onPress={() => {
						checkUsernameAction()
					}}
				>
          Continue
				</Button>
				<Subheading>Bubble is an anonymous platform. Choose the username to associate with your profile.</Subheading>
			</View>
			</TouchableWithoutFeedback>
		</ScreenContainer>
		</KeyboardAvoidingView>
  )
}
