import React, { useState } from 'react'
import { List, Button, Paragraph } from 'react-native-paper'
import { Alert, FlatList, TextInput } from 'react-native'
import { Modal } from '../../../../components/Modal/Modal'
import { DARKBLUE, LIGHTERBLUE } from '../../../../utils/constants'
import { updateUser } from '../../../../api/service'
import { TemplateType } from './types'

export const UsernameModal: TemplateType = ({ credentials, visible, onDismiss, placeholderText }) => {
  const [username, setUsername] = useState(placeholderText || '')

  // useEffect(() => {
  //   if (emailIsValid(email)) {
  //     setIsDisabled(false)
  //   } else {
  //     setIsDisabled(true)
  //   }
  // }, [email])

  const renderItem = ({ item }) => item.component

  const submitAccountEdit = async () => {
    await updateUser(credentials, { setting: 'username', value: username })
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
      id: 1,
      component:
        <TextInput
          placeholder={'Email'}
          value={username}
          onChangeText={text => setUsername(text)}
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
      component:
        <Button
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

  return (
    <Modal visible={visible} onDismiss={onDismiss}>
      <FlatList
        renderItem={renderItem}
        scrollEnabled={false}
        data={EmailFields}
        style={{ borderRadius: 15, backgroundColor: '#e9e9e9', width: '90%', alignSelf: 'center' }}
        ListHeaderComponent={
          <List.Item
            style={{ alignSelf: 'stretch', backgroundColor: DARKBLUE, width: '100%' }}
            titleStyle={{ fontWeight: '800' }}
            title={'Enter your new '}
          />
        }
      />
    </Modal>
  )
}
