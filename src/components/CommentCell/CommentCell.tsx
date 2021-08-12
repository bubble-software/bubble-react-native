import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Divider, List, Menu, Paragraph, Title } from 'react-native-paper'
import { FontAwesome5 } from '@expo/vector-icons'
import { prettyCurrentDatePlusYears } from '../../utils/stringhelpers'

import { Vote } from '../Vote/Vote'
import { TABBARCOLOR } from '../../utils/constants'
import { useNavigation } from '@react-navigation/native'
import { blockUser } from '../../api/service'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import { styles } from './style'
import { TemplateType } from './types'

export const CommentCell: TemplateType = ({ comment }): JSX.Element => {
  const { credentials } = useContext(AuthContext)
  const navigation = useNavigation()
  const [commentMenuvisible, setCommentMenuVisible] = React.useState(false)

  const closeCommentMenu = () => setCommentMenuVisible(false)
  const { id, userId } = comment

  const blockUserAction = async () => {
    await blockUser(credentials!, userId.toString())
  }

  const commentMenu =
		<Menu
			style={styles.menuContainer}
			visible={commentMenuvisible}
			onDismiss={closeCommentMenu}
			anchor={
				<FontAwesome5
					name="ellipsis-v"
					size={20}
					color={TABBARCOLOR}
					onPress={() => setCommentMenuVisible(!commentMenuvisible)}
					style={{ marginLeft: 5 }}
				/>
			}
		>
			<Menu.Item
				title={<Text style={{ color: 'black', fontSize: 18 }}>	Report Comment</Text>}
			/>
			<Divider />
			<Menu.Item
				onPress={() => blockUserAction()
				  .then(() => {
				    closeCommentMenu()
				    setTimeout(() => {
				      navigation.goBack()
				    }, 50)
				  })
				}
				title={<Text style={{ color: 'black', fontSize: 18 }}>Block User</Text>}
			/>
		</Menu>

  return (
		<View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
			<List.Item
				title={
					<View style={{ paddingVertical: 10, marginLeft: 10 }}>
						<Text style={{ color: 'black' }}>
							{comment.content}
						</Text>
					</View>
				}
				description={
					() => {
				  return (
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<View style={{ flexDirection: 'row' }}>
								<Paragraph style={{ color: 'black' }}>{comment.username} -</Paragraph>
								<Paragraph style={{ color: 'black' }}>{prettyCurrentDatePlusYears(comment.dateCreated)}</Paragraph>
							</View>
							<Vote
								votes={comment.votes}
								prevVote={comment.prevVote}
								isVoted={comment.isVoted}
								commentId={comment.id.toString()}
								flexDirection={'row'}
								type='comment'
							/>
						</View>
				  )
					}
			}
				style={{ width: '95%', backgroundColor: 'white', borderRadius: 20 }}
			/>
			{commentMenu}
		</View>
  )
}
/*
onPress={() => {
setCommentMenuVisible(false)
setTimeout(() => {
navigation.navigate('Report', { data: { type: 'comment', id } })
}, 50)
}}
*/
