import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { TabContext } from '../../providers/TabProvider/TabProvider'
import HappyHour from '../../../assets/icons/happyHourFilled.svg'
import Deals from '../../../assets/icons/dealsFilled.svg'
import Misc from '../../../assets/icons/miscFilled.svg'
import WhatsHappening from '../../../assets/icons/whatsHappeningFilled.svg'
import Rec from '../../../assets/icons/recFilled.svg'

export const HeaderTitle = (): JSX.Element => {
  const { currTab } = useContext(TabContext)
  const deals = 'Deals'
  const happyHour = 'Happy Hour'
  const whatsHappening = 'Whats Happening'
  const misc = 'Misc'
  const rec = 'Recreation'

  let icon

  switch (currTab) {
    case deals:
      icon = <Deals width={45}/>
      break
    case happyHour:
      icon = <HappyHour width={45}/>
      break
    case whatsHappening:
      icon = <WhatsHappening width={45}/>
      break
    case misc:
      icon = <Misc width={45}/>
      break
    case rec:
      icon = <Rec width={45}/>
      break
  }

  return (
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
			{icon}
			<Text style={{ color: 'white', fontFamily: 'freehand', fontSize: 40 }}>{currTab}</Text>
			{icon}
		</View>
  )
}
