import { StyleSheet } from 'react-native'
import { BUBBLEBLUE } from '../../theme/theme'
import { DARKBLUE } from '../../utils/constants'

export const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'transparent',
    color: 'white',
    width: '100%',
    alignSelf: 'center',
  },
  usernameTextInput: {
    backgroundColor: 'transparent',
    color: 'white',
    width: '100%',
    alignSelf: 'center',
    marginVertical: '10%',
  },
  passwordTextInput: {
    backgroundColor: 'transparent',
    color: 'white',
    width: '100%',
    alignSelf: 'center',
    marginVertical: '2%'
  },
  confirmPasswordTextInput: {
    backgroundColor: 'transparent',
    color: 'white',
    width: '100%',
    alignSelf: 'center',
    marginBottom: '10%'
  },
  continueButton: {
    marginTop: '2%',
    width: '100%',
    borderRadius: 20,
    height: 65,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: '10%'
  },
  completeRegistrationSubHeader: {
    marginVertical: '10%'
  },
  buttonText: {
    color: BUBBLEBLUE,
    fontWeight: '700',
  },
  completeButton: {
    marginTop: '10%',
    width: '100%',
    borderRadius: 20,
    height: 65,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: '10%'
  },
  tos:{
    color: DARKBLUE,
    fontWeight:'600'
  }
})
