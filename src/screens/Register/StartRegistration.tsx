import React from 'react'
import { View } from 'react-native'
import { Button, Subheading, Title, Text } from 'react-native-paper'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

export const StartRegistration = (): JSX.Element => {
  const navigation = useNavigation()
  return (
		<ScreenContainer>
			<View style={{ flex: 1, marginHorizontal: '8%', alignContent: 'center', alignItems: 'center' }}>
				<Title style={{ marginTop: '50%' }}> Join Bubble</Title>
				<Subheading style={{ marginVertical: '15%' }}>Creating an account will take a few easy steps</Subheading>
				<Button
					mode="contained"
					onPress={() => navigation.navigate('Create Username')}
					style={styles.continueButton}
				>
					<Text style={styles.buttonText}>Start Registration</Text>
				</Button>
			</View>
		</ScreenContainer>
  )
}
