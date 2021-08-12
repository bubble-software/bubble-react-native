import { useNavigation, DrawerActions } from '@react-navigation/native'
import React, { useContext } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Icon } from '../../components/SVG/Icon/Icon'
import { TabContext } from '../../providers/TabProvider/TabProvider'
import { DARKBLUE } from '../../utils/constants'

export const HeaderLeft = (): JSX.Element => {
  const navigation = useNavigation()

  const { drawerActive } = useContext(TabContext)

  const color = drawerActive ? DARKBLUE : 'white'

  return (
		<View style={{ flexDirection: 'row' }}>
			<TouchableOpacity
				onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
			>
				<Icon
					name='Bubble_x3'
					style={{ paddingLeft: 20 }}
					size={30}
					color={color}
				/>
			</TouchableOpacity>
		</View>
  )
}
