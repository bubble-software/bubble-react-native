import React, { useState, useContext, useEffect } from 'react'
import { View, TextInput, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native'
import { Subheading, Button } from 'react-native-paper'
import { Icon } from '../../components/SVG/Icon/Icon'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import * as Location from 'expo-location'
import { createPost } from '../../api/service'
import HappyHourFilled from '../../../assets/icons/happyHourFilled.svg'
import WhatsHappeningFilled from '../../../assets/icons/whatsHappeningFilled.svg'
import DealsFilled from '../../../assets/icons/dealsFilled.svg'
import MiscFilled from '../../../assets/icons/miscFilled.svg'
import RecFilled from '../../../assets/icons/recFilled.svg'
import { styles } from './styles'
import { ScreenContainer } from '../../components/ScreenContainer/ScreenContainer'

export const CreatePost = (): JSX.Element => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const { credentials } = useContext(AuthContext)

  const [location, setLocation] = useState<{
    longitude: undefined;
    latitude: undefined;
    } | {
    longitude: number;
    latitude: number;
    }>({
      longitude: undefined,
      latitude: undefined,
    })

  const { longitude, latitude } = location
  useEffect(() => {
    (async () => {
      const location = await Location.getCurrentPositionAsync({})
      // @ts-ignore
      const { coords } = location
      const longitude = coords.longitude
      const latitude = coords.latitude
      // @ts-ignore
      setLocation({ longitude: longitude, latitude: latitude })
    })()
  }, [])

  const createPostAction = () => {
    if (longitude && latitude) {
      createPost({ content, title, token: credentials!, longitude, latitude, categoryId: 1 })
    }
  }

  const rec = 'Recreation'
  const happyHour = 'Happy_Hour'
  const misc = 'Misc'
  const deals = 'Deals'
  const whatsHappening = "What's_Happening?"

  return (
    <ScreenContainer>

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <View>
    <Text style={styles.createPostTitle}> Create Your Post</Text>
    <Subheading style={styles.categoryTitle}> Category </Subheading>
    <View style={styles.categoryContainer}>
      {
      category === deals
        ? <DealsFilled width={45} height={45}/>
        : <Icon
          name="deals"
          size={40}
          color={'white'}
          onPress={() => setCategory(deals)}
        />
      }
      {
      category === happyHour
        ? <HappyHourFilled width={45} height={45}/>
        : <Icon
          name="happyHour"
          size={40}
          color={'white'}
          onPress={() => setCategory(happyHour)}
        />
      }
      {
      category === rec
        ? <RecFilled width={45} height={45}/>
        : <Icon
          name="rec"
          size={40}
          color={'white'}
          onPress={() => setCategory(rec)}
        />
      }
      {
      category === whatsHappening
        ? <WhatsHappeningFilled width={45} height={45}/>
        : <Icon
          name="whatsHappening"
          size={40} color={'white'}
          onPress={() => setCategory(whatsHappening)}
        />
      }
      {
      category === misc
        ? <MiscFilled width={45} height={45}/>
        : <Icon
          name="misc"
          size={40}
          color={'white'}
          onPress={() => setCategory(misc)}
        />
      }
    </View>
    <View style={styles.whereContainer}>
      <Subheading style={styles.whereText}> Where </Subheading>
      <TextInput
        placeholder='Location of post!'
        value={title}
        onChangeText={title => setTitle(title)}
        textAlign={'left'}
        style={styles.whereTextInput}
      />
    </View>
    <View style={{ marginHorizontal: 24 }}>
      <Subheading style={{ fontSize: 20, marginBottom: '5%' }}> Content </Subheading>
      <TextInput
        placeholder='Write some content for your post!'
        value={content}
        onChangeText={content => setContent(content)}
        textAlign={'left'}
        style={styles.contentTextInput}
        multiline={true}
    />
    </View>
    <Button
      mode='contained' style={styles.createPostButton} onPress={() => createPostAction()}>
      <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>
        Submit
      </Text>
    </Button>
  </View>
  </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  </ScreenContainer>
  )
}
