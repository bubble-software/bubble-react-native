import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from '../../components/SVG/Icon/Icon'
import { TabContext } from '../../providers/TabProvider/TabProvider'
import { Deals } from '../../screens/Deals/Deals'
import { HappyHour } from '../../screens/HappyHour/HappyHour'
import { Misc } from '../../screens/Misc/Misc'
import { Recreation } from '../../screens/Recreation/Recreation'
import { WhatsHappening } from '../../screens/WhatsHappening/WhatsHappening'
import HappyHourFilled from '../../../assets/icons/happyHourFilled.svg'
import WhatsHappeningFilled from '../../../assets/icons/whatsHappeningFilled.svg'
import DealsFilled from '../../../assets/icons/dealsFilled.svg'
import MiscFilled from '../../../assets/icons/miscFilled.svg'
import RecFilled from '../../../assets/icons/recFilled.svg'
import { LIGHTBLUE } from '../../utils/constants'
import { useIsDrawerOpen } from '@react-navigation/drawer'

export const TabStack = (): JSX.Element => {
  const Tab = createBottomTabNavigator()
  const {
    currTab,
    setCurrTab,
    setDrawerActive,
  } = useContext(TabContext)
  const navigation = useNavigation()
  const deals = 'Deals'
  const happyHour = 'Happy Hour'
  const whatsHappening = 'Whats Happening'
  const misc = 'Misc'
  const rec = 'Recreation'
  const isDrawerOpen = useIsDrawerOpen()

  useEffect(() => {
    setDrawerActive(isDrawerOpen)
  }, [isDrawerOpen, setDrawerActive])

  useEffect(() => {
    navigation.navigate(currTab)
  }, [currTab, navigation])

  return (
		<Tab.Navigator
			tabBarOptions={{
			  style: { backgroundColor: LIGHTBLUE },
			  showLabel: false,
			}}
			screenOptions={({ route }) => ({
			  tabBarButton: props => <TouchableOpacity {...props} />,
			  tabBarIcon: ({ focused, color, size }) => {
			    let icon
			    if (route.name === deals) {
			      icon = focused
			        ? <DealsFilled/>
			        : <Icon name ='deals' size={35} color={color} onPress={() => (setCurrTab(deals))}/>
			    } else if (route.name === happyHour) {
			      icon = focused
			        ? <HappyHourFilled/>
			        : <Icon name ='happyHour' size={35} color={color} onPress={() => (setCurrTab(happyHour))}/>
			    } else if (route.name === whatsHappening) {
			      icon = focused
			        ? <WhatsHappeningFilled/>
			        : <Icon name ='whatsHappening' size={42} color={color} onPress={() => (setCurrTab(whatsHappening))}/>
			    } else if (route.name === misc) {
			      icon = focused
			        ? <MiscFilled/>
			        : <Icon name ='misc' size={35} color={color} onPress={() => (setCurrTab(misc))}/>
			    } else if (route.name === rec) {
			      icon = focused
			        ? <RecFilled/>
			        : <Icon name ='rec' size={35} color={color} onPress={() => (setCurrTab(rec))}/>
			    }
			    return icon
			  },
			})}
		>
			<Tab.Screen name={deals} component={Deals}/>
			<Tab.Screen name={happyHour} component={HappyHour}/>
			<Tab.Screen name={rec} component={Recreation}/>
			<Tab.Screen name={whatsHappening} component={WhatsHappening}/>
			<Tab.Screen name={misc} component={Misc}/>
		</Tab.Navigator>
  )
}
