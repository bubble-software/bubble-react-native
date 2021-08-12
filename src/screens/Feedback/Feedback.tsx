import React, { useContext, useEffect, useState } from 'react'

import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native'
import { Button, Title } from 'react-native-paper'
import { submitFeedback } from '../../api/service'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import * as Location from 'expo-location'
import { DARKBLUE } from '../../utils/constants'
import Cog from '../../../assets/icons/feedbackCog.svg'
import { styles } from './styles'

export const Feedback = (): JSX.Element => {
  const { credentials } = useContext(AuthContext)

  const [location, setLocation] = useState <{longitude: undefined | number, latitude: undefined| number}>({ longitude: undefined, latitude: null })
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    (async () => {
      const location = await Location.getCurrentPositionAsync({})
      // @ts-ignore`
      const { coords } = location
      const longitude = coords.longitude
      const latitude = coords.latitude
      setLocation({ longitude, latitude })
    })()
  }, [])

  const { longitude, latitude } = location
  const postFeedback = () => (
    longitude &&
    latitude &&
    submitFeedback(credentials!, { longitude, latitude, content: feedback })
  )

  return (
		<KeyboardAvoidingView
		behavior={Platform.OS === "ios" ? "padding" : "height"}
		style={{flex:1}}
	>
		<ScreenContainer>
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={{ alignItems: 'center', flex: 1 }}>
				<View style={styles.titleContainer}>
					<Cog width={40} height={50}/>
					<Text style={styles.titleText}>Feedback</Text>
					<Cog width={40} height={50}/>
				</View>
				<TextInput
					placeholder='Enter comment here...'
					value={feedback}
					onChangeText={(text) => setFeedback(text)}
					textAlign={'left'}
					style={styles.textInput}
					multiline={true}
				/>
				<Button
					style={styles.button}
					onPress={() => postFeedback()} mode='contained'
				>
					<Title style={{ color: DARKBLUE }}>
            Submit
					</Title>
				</Button>
			</View>
			</TouchableWithoutFeedback>

		</ScreenContainer>
		</KeyboardAvoidingView>
  )
}
