import React, { useContext, useEffect, useState } from 'react'
import { FlatList, KeyboardAvoidingView, TextInput, View, Text, Keyboard, Platform } from 'react-native'
import { Card, Title, Paragraph, Menu, Divider } from 'react-native-paper'
import { blockUser, getComments, postComment } from '../../api/service'
import { Vote } from '../../components/Vote/Vote'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import { prettyCurrentDatePlusYears } from '../../utils/stringhelpers'
import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons'
import { CommentCell } from '../../components/CommentCell/CommentCell'
import { LIGHTBLUE, TABBARCOLOR } from '../../utils/constants'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { PostRouteProps } from './types'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { Comment } from '../../api/types'
import { UserContext } from '../../providers/UserProvider/UserProvider'
export const Post = ({ route }: {route: PostRouteProps}): JSX.Element => {
  const { credentials } = useContext(AuthContext)
  const { me } = useContext(UserContext)

  const navigation = useNavigation()
  const [postMenuvisible, setPostMenuVisible] = useState(false)
  const [comments, setComments] = useState()
  const [text, setText] = useState('')

  const openPostMenu = () => setPostMenuVisible(true)
  const closePostMenu = () => setPostMenuVisible(false)

  const { data: routeData } = route.params
  const { title, username, dateCreated, votes, content, id, userId } = routeData

  useEffect(() => {
    getComments({ token: credentials, postId: id.toString() }).then((commentData) => {
      setComments(commentData)
    })
  }, [credentials, id])

  const blockUserAction = async () => {
    await blockUser(credentials!, userId)
  }

  const postMenu =
	<Menu
	style={styles.menu}
	visible={postMenuvisible}
	onDismiss={() => setPostMenuVisible(!postMenuvisible)}
	anchor={
		<FontAwesome5
		name="ellipsis-h"
		size={20}
		color={TABBARCOLOR}
		onPress={openPostMenu}
	/>
	}
	>
<Menu.Item
onPress={() => {
  closePostMenu()
  setTimeout(() => {
    navigation.navigate('Report', { data: { type: 'post', id } })
  }, 50)
}}
title={<Text style={{ color: 'black', fontSize: 18 }}>Report User</Text>}
/>
<Divider/>
<Menu.Item
onPress={() =>
  blockUserAction()
    .then(() => {
      closePostMenu()
      setTimeout(() => {
        navigation.goBack()
      }, 50)
    })
}
title={<Text style={{ color: 'black', fontSize: 18 }}>Block User</Text>}
/>
</Menu>

  const renderItem = ({ item }: {item: Comment}) => {
    return <CommentCell comment={item}/>
  }

  const postCommentAction = () => {
    postComment({ token: credentials!, content: text, postId: id.toString() })
      .then(() => {
        const currComment: Comment = {
          content: text,
          dateCreated: new Date(),
          username: me!.username,
          isVoted: false,
          id: Math.random(),
          userId: me!.userId,
          votes: 0,
          prevVote: 0,
        }
        setComments((prevComments) => [...prevComments, currComment])
      })
      .then(() => setText(''))
  }
  return (
  <ScreenContainer>
  <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
  >
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Card.Content style={styles.cardContent}>
          <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <Title style={styles.cardTitle}>{ title }</Title>
            <View style={styles.cardBody}>
              <Paragraph style={styles.postText}>{content}</Paragraph>
            </View>
          </View>
          <View style={{ position: 'absolute', right: 0 }}>
          <Vote
            votes={votes}
            postId={id}
          />
          </View>
        </Card.Content>
      </Card>
<View style={styles.metadataContainer}>
<View style={{ flexDirection: 'row' }}>
<Paragraph style={{ color: 'black' }}>{username} - </Paragraph>
<Paragraph style={{ color: 'black' }}>{prettyCurrentDatePlusYears(dateCreated)}</Paragraph>
</View>
<View style={styles.metadataRight}>
<MaterialCommunityIcons name="comment-text-outline" size={20} color="black"/>
<Paragraph style={{ color: 'black', marginHorizontal: 10 }}>
{comments
  ? comments.length
  : 0
}
</Paragraph>
{postMenu}
</View>
</View>
<Divider style={{ marginVertical: 10 }}/>
<FlatList
  data={comments}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  onStartShouldSetResponder={() => true}
/>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: LIGHTBLUE, paddingBottom: 10 }}>
<TextInput
placeholder='Enter comment here...'
value={text}
onChangeText={comment => setText(comment)}
textAlign={'left'}
style={styles.textInput}
multiline={true}
/>
<FontAwesome
name="paper-plane"
size={24}
color={TABBARCOLOR}
style={styles.planeIcon}
onPress={() => postCommentAction()}
/>
</View>
</View>
</KeyboardAvoidingView>
</ScreenContainer>
  )
}
