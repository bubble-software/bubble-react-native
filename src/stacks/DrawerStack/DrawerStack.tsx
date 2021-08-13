import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState, useEffect } from 'react'
import { TabStack } from '../TabStack/TabStack'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import { Icon } from '../../components/SVG/Icon/Icon'
import { DARKBLUE } from '../../utils/constants'
import { Divider, Title } from 'react-native-paper'
import { View } from 'react-native'
import { TabContext } from '../../providers/TabProvider/TabProvider'

import * as Location from 'expo-location'
function CustomDrawerContent (props: DrawerContentComponentProps<DrawerContentOptions>): JSX.Element {
  // @ts-ignore
  const { signOut } = useContext(AuthContext)
  const navigation = useNavigation()
  const { location } = useContext(TabContext)
  const [city, setCity] = useState<string>('')
  const { longitude, latitude } = location?.coords ?? {}

  useEffect(() => {
    Location.reverseGeocodeAsync({ longitude, latitude })
      .then((resp) => resp[0].city !== null && setCity(resp[0].city))
  }, [location])

  return (
		<DrawerContentScrollView {...props} contentContainerStyle={{ justifyContent: 'space-evenly' }}>
			<DrawerItemList {...props} />
			<Icon name='menuLogo' color={DARKBLUE} size={45} style={{ top: 45, position: 'absolute', alignSelf: 'center' }}/>
			<View style={{ marginLeft: 25, width: '100%', alignSelf: 'center' }}>
				<DrawerItem
					label={() => <Title>Account</Title>}
					onPress={() => navigation.navigate('Account')}
					style={{ marginTop: '20%' }}
				/>
				<Divider style={{ borderWidth: 1.75, borderColor: DARKBLUE, marginTop: -5, width: '80%' }}/>
				<DrawerItem
					label={() => <Title style={{}}>Liked</Title>}
					onPress={() => navigation.navigate('Liked')}
					style={{ marginTop: -5 }}
				/>
				<Divider style={{ borderWidth: 1.75, borderColor: DARKBLUE, marginTop: -5, width: '80%' }}/>
				<DrawerItem
					label={() => <Title style={{}}>Feedback</Title>}
					onPress={() => navigation.navigate('Feedback')}
					style={{ marginTop: -5 }}
				/>
				<Divider style={{ borderWidth: 1.75, borderColor: DARKBLUE, marginTop: -5, width: '80%' }}/>
				<DrawerItem
					label={() => <Title style={{}}>Logout</Title>}
					onPress={() => signOut()}
					style={{ marginTop: -5 }}

				/>
			</View>
			<View style={{ flexDirection: 'column', alignItems: 'center' }}>
				<Icon name='menuBLogo' color={DARKBLUE} size={150} style={{ alignSelf: 'center', marginTop: '25%' }}/>
				<Title style={{ color: DARKBLUE, marginTop: '15%' }}>{city}</Title>
			</View>
		</DrawerContentScrollView>
  )
}

export const DrawerStack = (): JSX.Element => {
  const Drawer = createDrawerNavigator()
  return (
		<Drawer.Navigator
			screenOptions={{
			  swipeEnabled: false,
			}}
			drawerStyle={{
			  width: '45%',
			}}
			initialRouteName="Home"
			drawerContent={props => <CustomDrawerContent {...props} />}
		>
			<Drawer.Screen name="Home" component={TabStack}/>
		</Drawer.Navigator>
  )
}
