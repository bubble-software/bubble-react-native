import { useNavigation, DrawerActions } from '@react-navigation/native'
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

export const HeaderRight = (): JSX.Element => {
  const navigation = useNavigation()
  return (
		<View style={{ flexDirection: 'row' }}>
			<TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
				<Feather
					name="plus-circle"
					size={30}
					color='white'
					style={{ paddingRight: 20 }}
					onPress={() => navigation.navigate('CreatePost')}
				/>
			</TouchableOpacity>
		</View>
  )
}
