import { useNavigation } from '@react-navigation/native'
import React, { useState, useContext } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { TextInput, Text, Button, Paragraph } from 'react-native-paper'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { styles } from './styles'
import { setAsyncStorageItem } from '../../utils/asyncStorage'

import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import { login } from './service'
import BubbleText from '../../../assets/icons/bubbleText.svg'
export const Login = (): JSX.Element => {
  const navigation = useNavigation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  const onLoginPressed = async () => {
    const credentials = await login({
      username,
      password,
    }).catch((e) => {
      Alert.alert(
        'Unable To Sign In.',
        'Your username or password are incorrect.',
        [
          { text: 'OK' },
        ],
      )
    })
    if (credentials) {
      await setAsyncStorageItem('credentials', JSON.stringify(credentials))
      signIn(credentials)
    }
  }

  return (
		<ScreenContainer>
			<KeyboardAvoidingView
				keyboardVerticalOffset={0}
				style={{flex:1}}
			>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={{ flex: 1, marginVertical: '25%', marginHorizontal: '8%' }}>
					<BubbleText height={100} style={{ marginBottom: '20%' }}/>
					<TextInput
						placeholder="username"
						onChangeText={(username) => setUsername(username)}
						value={username}
						style={styles.emailTextInput}
						autoCapitalize='none'
						underlineColor='transparent'
						mode="outlined"
						left={<TextInput.Icon name='account'/>}
					/>
					<TextInput
						placeholder="password"
						onChangeText={(password) => setPassword(password)}
						value={password}
						secureTextEntry={true}
						style={styles.emailTextInput}
						autoCapitalize='none'
						mode="outlined"
						left={<TextInput.Icon name='lock-outline'/>}
					/>
					<Button
						mode="contained"
						style={styles.loginButton}
						onPress={() => onLoginPressed()}
					>
						<Paragraph style={styles.loginText}>Login</Paragraph>
					</Button>
					<View style={styles.footerTextContainer}>
						<TouchableOpacity onPress={() => navigation.navigate('Registration')}>
							<Text style={styles.footerText}>Register</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate('Forgot Password Stack')}>
							<Text style={styles.footerText}>Forgot Password</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</ScreenContainer>
  )
}
