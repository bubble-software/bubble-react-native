import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Vote } from '../Vote/Vote'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { prettyCurrentDatePlusYears, truncateString } from '../../utils/stringhelpers'
import { TemplateType } from './types'
import { styles } from './style'

export const TableCell: TemplateType = ({ item, nav }) => {
  const { title, username, dateCreated, votes, content, prevVote, isVoted, id, comments } = item
  const navigate = () => { nav(item) }
  console.log(item)
  return (
		<TouchableOpacity
			style={styles.tableCellContainer}
			onPress={ navigate }
		>

			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
				<Text style={{ color: 'gray', left: 0, position: 'absolute' }}>{truncateString(username, 8)}</Text>
				<Text style={{ color: 'rgb(40, 137, 161)', fontSize: 18, textAlign: 'center' }}>{truncateString(title, 15)}</Text>
			</View>

			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -15 }}>
				<Text numberOfLines={1} style={{ color: 'rgb(100, 195, 220)', width: '80%' }}>{content}</Text>
				<Vote
					votes={votes}
					prevVote={prevVote}
					isVoted={isVoted}
					postId={id.toString()}
				/>
			</View>
			<View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: -10, justifyContent: 'space-between' }}>
				<Text style={{ color: 'black', marginRight: '5%' }}>{prettyCurrentDatePlusYears(dateCreated)}</Text>
				<MaterialCommunityIcons style={{ marginRight: '2%' }}name="comment-text-outline" size={20} color="black"/>
				<Text style={{ color: 'black' }}>{comments}</Text>
			</View>
		</TouchableOpacity>
  )
}
