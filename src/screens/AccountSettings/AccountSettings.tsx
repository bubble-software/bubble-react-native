import React, { useContext, useEffect, useState } from 'react'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'
import { TableView } from '../../components/TableView/TableView'
import { getBlockedUsers, setDefaultCategory, unblockUser } from '../../api/service'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import { Divider, Subheading, Title } from 'react-native-paper'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from '../../components/SVG/Icon/Icon'
import { DARKBLUE } from '../../utils/constants'
import { UserContext } from '../../providers/UserProvider/UserProvider'
import { FontAwesome, FontAwesome5, Feather } from '@expo/vector-icons'
import { UsernameModal } from './components/UsernameModal/UsernameModal'
import { PasswordModal } from './components/PasswordModal/PasswordModal'
import { styles } from './styles'
import { BlockedUser, Category, UNBLOCK_PARAMS } from '../../api/types'
import HappyHour from '../../../assets/icons/happyHourFilled.svg'
import WhatsHappening from '../../../assets/icons/whatsHappeningFilled.svg'
import Deals from '../../../assets/icons/dealsFilled.svg'
import Misc from '../../../assets/icons/miscFilled.svg'
import Rec from '../../../assets/icons/recFilled.svg'
import { filter } from 'lodash'

export const AccountSettings = (): JSX.Element => {
  const [emailModalVisible, setEmailModalVisible] = useState(false)
  const [passwordModalVisible, setPasswordModalVisible] = useState(false)
  const [blockedUsers, setBlockedUsers] = useState<BlockedUser[] | []>()
  const { credentials } = useContext(AuthContext)
  const { me } = useContext(UserContext)
  const [defaultCat, setDefaultCat] = useState<undefined | Category>()
  const [usernameText] = useState<undefined | string>(me?.username)
  const [showBlocked, setShowBlocked] = useState(false)

  useEffect(() => {
    (async () => {
      await getBlockedUsers(credentials!).then((blockedUserData) => {
        setBlockedUsers(blockedUserData)
      })
    })()
  }, [credentials])

  useEffect(() => {
    defaultCat && setDefaultCategory(credentials!, defaultCat)
  }, [credentials, defaultCat])

  const unblockUserAction = (unblockParams: UNBLOCK_PARAMS) => {
    unblockUser(credentials!, unblockParams)
      .then(() => {
        setBlockedUsers((prevArr) => (
          filter(prevArr, (blockedUser) => blockedUser.blockedUserId !== unblockParams )
        ))
      })
    }
  // const blockUserAction = (unblockParams: UNBLOCK_PARAMS) => {
  //   blockUser(credentials!, unblockParams)
  // }

  const postTableCell = ({ item }: {item: BlockedUser}) => {
    return (
			<View style={styles.postTableCell}>
			<Title style={{ color: DARKBLUE }}>{item.blockedUsername}</Title>
      <TouchableOpacity onPress={ ()=> unblockUserAction(item.blockedUserId)}>
        <FontAwesome5 name="trash-alt" size={24} color="#ff6961"/>        
      </TouchableOpacity>
			</View>
    )
  }

  return (
    <>
      <UsernameModal
        visible={emailModalVisible}
        onDismiss={() => setEmailModalVisible(!emailModalVisible)}
        placeholderText={usernameText}
        credentials={credentials!}
      />
      <PasswordModal
        visible={passwordModalVisible}
        onDismiss={() => setPasswordModalVisible(!passwordModalVisible)}
        placeholderText={usernameText}
        credentials={credentials!}
      />
      <ScreenContainer>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.accountTitle}>Account</Text>
          <Divider style={[styles.divider, { width: '60%', alignSelf: 'center' }]}/>
          <Title style={styles.userSettingsText}>User Settings</Title>
          <Divider style={styles.divider}/>
          <Title>Change Username</Title>
          <View style={styles.textInputField}>
            <Subheading style={{ color: DARKBLUE }}>{usernameText}</Subheading>
            <FontAwesome
              name="pencil"
              size={30}
              color='rgba(0,0,0,.45)'
              onPress={() => setEmailModalVisible(!emailModalVisible)}
            />
          </View>
          <Title>Password</Title>
          <View style={styles.textInputField}>
            <Subheading style={{ color: DARKBLUE }}>********</Subheading>
            <FontAwesome
              name="pencil"
              size={30}
              color='rgba(0,0,0,.45)'
              onPress={() => setPasswordModalVisible(!passwordModalVisible)}
            />
          </View>
          <Title style={{ marginTop: 24, fontSize: 24 }}>Default Category</Title>
          <Divider style={styles.categoryDivder}/>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            {
              defaultCat === 'Deals'
                ? <Deals width={45}/>
                : <Icon
                  name ='deals'
                  size={40}
                  color='white'
                  onPress={() => setDefaultCat('Deals')}
                />
            }
            {
              defaultCat === 'Happy Hour'
                ? <HappyHour width={45}/>
                : <Icon
                  name ='happyHour'
                  size={40}
                  color='white'
                  onPress={() => setDefaultCat('Happy Hour')}
                />
            }
            {
              defaultCat === 'Whats Happening'
                ? <WhatsHappening width={45}/>
                : <Icon
                  name ='whatsHappening'
                  size={40}
                  color='white'
                  onPress={() => setDefaultCat('Whats Happening')}
                />
            }
            {
              defaultCat === 'Misc'
                ? <Misc width={45}/>
                : <Icon
                  name ='misc'
                  size={40}
                  color='white'
                  onPress={() => setDefaultCat('Misc')}
                />
            }
            {
              defaultCat === 'Recreation'
                ? <Rec width={45}/>
                : <Icon
                  name ='rec'
                  size={40}
                  color='white'
                  onPress={() => setDefaultCat('Recreation')}
                />
            }
          </View>
        <View style={{ marginTop: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title style={{ fontSize: 24 }}>Privacy</Title>
          <Feather
            name={showBlocked ? 'eye' : 'eye-off'}
            size={24}
            color="white"
            onPress={() => setShowBlocked(!showBlocked)}
          />
        </View>
        <Divider style={{ borderWidth: 1.75, borderColor: DARKBLUE, width: '100%', marginTop: '3%', alignSelf: 'center' }}/>
        { showBlocked &&
          <TableView
            data={blockedUsers}
            tableCellRenderer={postTableCell}
            scrollEnabled={false}
          />
        }
      </View>
      </ScreenContainer>
    </>
  )
}
