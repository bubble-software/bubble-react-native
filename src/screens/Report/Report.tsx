import React, { useContext, useState } from 'react'

import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native'
import { Button, Title } from 'react-native-paper'
import { submitContentReview } from '../../api/service'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import { DARKBLUE } from '../../utils/constants'
import Cog from '../../../assets/icons/feedbackCog.svg'
import { styles } from '../Feedback/styles'
import { ReportProps } from './types'

export const Report = ({ route }: {route: ReportProps}): JSX.Element => {
  const { credentials } = useContext(AuthContext)
  const [feedback, setFeedback] = useState('')
  const { data: routeData } = route.params

  const { id, type } = routeData

  const postFeedback = () => {
    if (feedback.length !== 0) {
      submitContentReview(credentials!, {
        postId: type === 'post' ? id.toString() : undefined,
        commentId: type === 'comment' ? id.toString() : undefined,
        content: feedback,
        contentType: type,
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
			<View style={{ alignItems: 'center', flex: 1 }}>
				<View style={styles.titleContainer}>
					<Cog width={40} height={50}/>
					<Text style={{ textAlign: 'center', fontSize: 36, color: 'white', fontWeight: '600', marginHorizontal: 20 }}>Report</Text>
					<Cog width={40} height={50}/>
				</View>
				<TextInput
					placeholder='Enter report here...'
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
