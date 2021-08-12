import React from 'react'
import { View } from 'react-native'
import { Icon } from '../../components/SVG/Icon/Icon'
import { DARKBLUE, LIGHTBLUE } from '../../utils/constants'

export const LoadingScreen = (): JSX.Element => {
  return (
		<View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: LIGHTBLUE }}>
			<Icon name='menuBLogo' color={DARKBLUE} size={400}/>	
		</View>
  )
}
