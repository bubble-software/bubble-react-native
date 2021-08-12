import React from 'react'
import { SafeAreaView, View } from 'react-native'

export const ScreenContainer = ({ children }: {children: JSX.Element}): JSX.Element => {
  return (
		<View style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
				{ children }
			</SafeAreaView>
		</View>

  )
}
