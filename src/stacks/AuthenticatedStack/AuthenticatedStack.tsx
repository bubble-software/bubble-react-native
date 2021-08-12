import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { HeaderLeft } from '../../components/HeaderLeft/HeaderLeft'
import { HeaderRight } from '../../components/HeaderRight/HeaderRight'
import { RootNavigation } from '../../navigation/RootNavigation'
import { Account } from '../../screens/Account/Account'
import { AccountSettings } from '../../screens/AccountSettings/AccountSettings'
import { CreatePost } from '../../screens/CreatePost/CreatePost'
import { Feedback } from '../../screens/Feedback/Feedback'
import { Report } from '../../screens/Report/Report'
import { Liked } from '../../screens/Liked/Liked'
import { Post } from '../../screens/Post/Post'
import { DrawerStack } from '../DrawerStack/DrawerStack'
import { Entypo } from '@expo/vector-icons'
import { HeaderTitle } from '../../components/HeaderTitle/HeaderTitle'
import { TabContext } from '../../providers/TabProvider/TabProvider'
import { LocationObject } from 'expo-location'
import * as Location from 'expo-location'

/*
	get location here and it will be accessable throughout the authenticated stack 
*/
export const AuthenticatedStack = (): JSX.Element => {
  const ForgotPasswordStack = createStackNavigator()
  const [currTab, setCurrTab] = useState('Happy Hour')
  const [drawerActive, setDrawerActive] = useState(false)
	const [location, setLocation] = useState({} as LocationObject)
  const navigation = useNavigation()

	useEffect(() => {
		Location.getLastKnownPositionAsync()
		.then((locationObj) => {
			if(locationObj !== null){
				setLocation(locationObj)
			}
		})
	}, [])

  return (
		<TabContext.Provider value={{
		  currTab,
		  setCurrTab,
		  drawerActive,
		  setDrawerActive,
			location,
			setLocation
		}}>
			<ForgotPasswordStack.Navigator
				initialRouteName={'Authenticated'}
				screenOptions={{headerTitleAlign: 'center'}}
			>
				<ForgotPasswordStack.Screen
					name="Authenticated"
					component={DrawerStack}
					options={{
					  headerTitle: () => <HeaderTitle />,
					  headerLeft: () => <HeaderLeft />,
					  headerRight: () => <HeaderRight />,
					}}
				/>
				<ForgotPasswordStack.Screen
					name="CreatePost"
					component={CreatePost}
					options={{
					  title: '',
					  headerLeft: () => <Entypo name="chevron-left" size={24} color="white" onPress={() => RootNavigation('Authenticated')} />,
					}}
				/>
				<ForgotPasswordStack.Screen
					name="Liked"
					component={Liked}
					options={{
					  title: 'Liked Post',
					  headerLeft: () => <Entypo name="chevron-left" size={24} color="white" onPress={() => RootNavigation('Authenticated')} />,
						headerTitleStyle:{}
						
					}}
				/>
				<ForgotPasswordStack.Screen
					name="Feedback"
					component={Feedback}
					options={{
					  headerLeft: () => <Entypo name="chevron-left" size={24} color="white" onPress={() => RootNavigation('Authenticated')} />,
					  headerTitle: '',
					}}
				/>
				<ForgotPasswordStack.Screen
					name="Report"
					component={Report}
					options={{
					  headerLeft: () => <Entypo name="chevron-left" size={24} color="white" onPress={() => navigation.goBack()} />,
					  headerTitle: '',
					}}
				/>
				<ForgotPasswordStack.Screen
					name="Account"
					component={Account}
					options={{
					  title: '',
					  headerLeft: () => <Entypo name="chevron-left" style={{ paddingLeft: 10 }} size={30} color="white" onPress={() => RootNavigation('Authenticated')} />,
					  headerRight: () => <Entypo name="cog" size={24} style={{ paddingRight: 20 }}
							color="white" onPress={() => RootNavigation('Account Settings')} />,
					}}
				/>
				<ForgotPasswordStack.Screen
					name="Account Settings"
					component={AccountSettings}
					options={{
					  title: '',
					  headerLeft: () => <Entypo name="chevron-left" size={24} color="white" onPress={() => RootNavigation('Account')} />,
					}}
				/>
				<ForgotPasswordStack.Screen
					name="Post"
					component={Post}
					options={{
					  title: '',
					  headerLeft: () => <Entypo name="chevron-left" size={24} color="white" onPress={() => RootNavigation('Authenticated')} />,
					}}
				/>
			</ForgotPasswordStack.Navigator>
		</TabContext.Provider>
  )
}
