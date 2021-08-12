import { StyleSheet } from 'react-native'
import { BUBBLEBLUE } from '../../theme/theme'

export const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'transparent',
    color: 'white',
    width: '100%',
    alignSelf: 'center',
    marginVertical: '10%'
  },
  passwordTextInput: {
    backgroundColor: 'transparent',
    color: 'white',
    width: '100%',
    alignSelf: 'center',
  },
  confirmPasswordTextInput: {
    backgroundColor: 'transparent',
    color: 'white',
    width: '100%',
    alignSelf: 'center',
  },
  continueButton: {
    marginTop: '2%',
    width: '100%',
    borderRadius: 20,
    height: 65,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: BUBBLEBLUE,
    fontWeight: '700',
  },
})
