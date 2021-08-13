import React, { useContext, useEffect, useState } from 'react'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { TableView } from '../../components/TableView/TableView'
import { getUserPosts } from '../../api/service'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import { Title } from 'react-native-paper'
import { UserContext } from '../../providers/UserProvider/UserProvider'
import { Text } from 'react-native'
import { styles } from './styles'
import { Post } from '../../api/types'
import { TableCell } from '../../components/TableCell/TableCell'
import { LoadingScreen } from '../LoadingScreen/LoadingScreen'
import { useNavigation } from '@react-navigation/native'

export const Account = (): JSX.Element => {
  const [userPosts, setUserPosts] = useState([])
  const { credentials } = useContext(AuthContext)
  const { me } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)
  const navigation = useNavigation()

  useEffect(() => {
    (async () => {
      await getUserPosts(credentials!).then((userPostData) => {
        setUserPosts(userPostData)
      })
        .then(() => setIsLoading(false))
    })()
  }, [credentials])

  const route = (item: Post) => navigation.navigate('Post', { data: item })
  const postTableCell = ({ item }: {item: Post}) => <TableCell item={item} nav={route} />

  return (
    isLoading
      ? <LoadingScreen/>
      : <ScreenContainer>
			<Text style={styles.accountNameText}>
				{me?.username}
			</Text>
			<Title style={styles.bubbleText}>
				{userPosts.length} Bubbles
			</Title>
			<TableView
				data={userPosts}
				tableCellRenderer={postTableCell}
				scrollEnabled={false}
			/>
		</ScreenContainer>
  )
}
