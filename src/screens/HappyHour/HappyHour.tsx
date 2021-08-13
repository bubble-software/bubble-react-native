import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState, useContext } from 'react'

import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { TableCell } from '../../components/TableCell/TableCell'
import { TableView } from '../../components/TableView/TableView'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import { getCategoryPosts, getRadius } from '../../api/service'
import * as Location from 'expo-location'
import { Post } from '../../api/types'
import { LoadingScreen } from '../LoadingScreen/LoadingScreen'

export const HappyHour = (): JSX.Element => {
  const [happyHour, setHappyHour] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const navigation = useNavigation()
  const { credentials } = useContext(AuthContext)

  useEffect(() => {
    (async () => {
      const location = await Location.getCurrentPositionAsync({})
      // @ts-ignore
      const { coords } = location
      const longitude = coords.longitude
      const latitude = coords.latitude

      getRadius({ longitude, latitude })
        .then((resp) => {
          getCategoryPosts({
            token: credentials,
            longitude,
            latitude,
            radius: resp.radius,
            category: 'Happy Hour',
          })
            .then((happyHourData) => setHappyHour(happyHourData))
            .then(() => setIsLoading(false))
        })
    })()
  }, [credentials])

  const route = (item: Post) => navigation.navigate('Post', { data: item })
  const postTableCell = ({ item }: {item: Post}) => <TableCell item={item} nav={ route } />

  return (
    isLoading
      ? <LoadingScreen/>
      : <ScreenContainer>
        <TableView
          data={happyHour}
          tableCellRenderer={postTableCell}
          scrollEnabled={false}
        />
		</ScreenContainer>
  )
}
