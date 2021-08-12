import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState, useContext } from 'react'
import { getUserLikedPosts } from '../../api/service'
import { Post } from '../../api/types'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { TableCell } from '../../components/TableCell/TableCell'
import { TableView } from '../../components/TableView/TableView'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import { LoadingScreen } from '../LoadingScreen/LoadingScreen'

export const Liked = (): JSX.Element => {
  const [likedPosts, setLikedPosts] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const navigation = useNavigation()
  const { credentials } = useContext(AuthContext)

  useEffect(() => {
    (async () => {
      getUserLikedPosts(credentials!)
      .then((likedPostsData) => setLikedPosts(likedPostsData))
      .then(() => setIsLoading(false))
    })()
  }, [credentials])

  const route = (item: Post) => navigation.navigate('Post', { data: item })
  const postTableCell = ({ item }: {item: Post}) => <TableCell item={item} nav={ route } />
  console.log(likedPosts)
  return (
    isLoading
      ? <LoadingScreen/>
      : <ScreenContainer>
        <TableView
          data={likedPosts}
          tableCellRenderer={postTableCell}
          scrollEnabled={false}
        />
      </ScreenContainer>
  )
}
