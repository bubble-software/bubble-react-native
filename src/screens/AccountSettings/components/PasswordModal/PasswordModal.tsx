import React, { useState } from 'react'
import { List, Button, Paragraph } from 'react-native-paper'
import { Alert, FlatList, TextInput } from 'react-native'
import { Modal } from '../../../../components/Modal/Modal'
import { DARKBLUE, LIGHTERBLUE } from '../../../../utils/constants'
import { updateUser } from '../../../../api/service'
import { TemplateType } from '../UsernameModal/types'

export const PasswordModal: TemplateType = ({ credentials, visible, onDismiss, placeholderText }) => {
  const [password, setPassword] = useState(placeholderText || '')
  const [newPassword, setNewPassword] = useState(placeholderText || '')
  const [confirmPassword, setConfirmPassword] = useState(placeholderText || '')

  // useEffect(() => {
  //   if (emailIsValid(email)) {
  //     setIsDisabled(false)
  //   } else {
  //     setIsDisabled(true)
  //   }
  // }, [email])

  const submitAccountEdit = async () => {
    await updateUser(credentials, { setting: 'password', value: password })
      .then(() => {
        Alert.alert(
          'Username has been updated',
        )
      })
      .catch((e) => {
        Alert.alert(
          'Username already taken',
        )
      })
  }

  const EmailFields = [
    {
      id: 0,
      component:
        <TextInput
        placeholder={'Old Password'}
        value={password}
        onChangeText={text => setPassword(text)}
        style={{
          marginTop: '8%',
          marginHorizontal: 20,
          borderRadius: 5,
          borderWidth: 3,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderColor: DARKBLUE,
          backgroundColor: LIGHTERBLUE,
        }}
        />,
    },
    {
      id: 1,
      component:
        <TextInput
        placeholder={'New Password'}
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
        style={{
          marginTop: '8%',
          marginHorizontal: 20,
          borderRadius: 5,
          borderWidth: 3,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderColor: DARKBLUE,
          backgroundColor: LIGHTERBLUE,
        }}
        />,
    },
    {
      id: 1,
      component:
        <TextInput
        placeholder={'Confirm New Password'}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        style={{
          marginTop: '8%',
          marginHorizontal: 20,
          borderRadius: 5,
          borderWidth: 3,
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderColor: DARKBLUE,
          backgroundColor: LIGHTERBLUE,
        }}
        />,
    },
    {
      id: 2,
      component: <Button
        style={{
          marginVertical: '8%',
          width: '60%',
          alignSelf: 'center',
          backgroundColor: DARKBLUE,
        }}
        mode ='contained'
        onPress={() => {
          submitAccountEdit().then(() => onDismiss())
        }}
      >
        <Paragraph style={{ color: 'white' }}>Submit</Paragraph>
      </Button>,
    },
  ]

  const renderItem = ({ item }) => item.component
  // const submitAccountEdit = () => {
  //   const accountInfo: EditableAccountFieldsType = {
  //     attribute: 'email',
  //     firstName,
  //     lastName,
  //     email,
  //     referralCode: ozoneReferralCode,
  //   }
  //   Alert.alert(
  //     'Updating your email address will log you out. Continue?',
  //     '',
  //     [
  //       {
  //         text: 'Cancel',
  //         onPress: () => {},
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           editAccountInfo(accountInfo, credentials!)
  //             .then(() => {
  //               Alert.alert('Success', 'Email successfully changed.')
  //               signOut().then(() => setMe(null))
  //             })
  //             .catch((e) => {
  //               Alert.alert(
  //                 'Email Address already taken',
  //               )
  //             })
  //         },
  //       },
  //     ],
  //   )
  // }

  return (
<Modal visible={visible} onDismiss={onDismiss}>
<FlatList
renderItem={renderItem}
scrollEnabled={false}
data={EmailFields}
style={{ borderRadius: 15, backgroundColor: '#e9e9e9', width: '90%', alignSelf: 'center' }}
ListHeaderComponent={<List.Item
style={{ alignSelf: 'stretch', backgroundColor: DARKBLUE, width: '100%' }}
titleStyle={{ fontWeight: '800' }}
title={'Change your password'}
/>}
/>
</Modal>
  )
}
