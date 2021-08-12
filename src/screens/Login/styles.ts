import { StyleSheet } from 'react-native'
import { BUBBLEBLUE } from '../../theme/theme'

export const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
  brandContent: {
    marginTop: '1%',
    alignSelf: 'center',
  },
  brandText: {
    textAlign: 'center',
  },
  brandTitle: {
    fontWeight: '900',
  },
  brandSubTitle: {
    fontWeight: '700',
  },
  emailTextInput: {
    backgroundColor: 'transparent',
    color: 'white',
    width: '100%',
    alignSelf: 'center',
  },
  textInputContainer: {
    marginHorizontal: '8%',
    marginTop: '2%',
    paddingHorizontal: '2%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
  },
  loginButton: {
    marginTop: '2%',
    width: '100%',
    borderRadius: 20,
    height: 65,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  google: {
    alignItems: 'center',
    width: 125,
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 44,
  },
  facebook: {
    alignItems: 'center',
    width: 125,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: '#4267B2',
    padding: 10,
    marginLeft: 10,
    justifyContent: 'space-evenly',
    height: 44,

  },
  facebookText: {
    color: 'white',
    fontSize: 16,
  },
  googleText: {
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
  },
  buttonDisabled: {
    backgroundColor: 'grey',
  },
  signUpButton: {
    marginHorizontal: '20%',
  },
  socialMediaContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignContent: 'space-between',

  },
  divider: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  dividerLine: {
    backgroundColor: 'white',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  dividerText: {
    alignSelf: 'center',
    paddingHorizontal: 5,
    fontSize: 16,
    color: 'white',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginHorizontal: '8%',
    marginBottom: '2%',
  },
  footerText: {
    fontWeight: '700',
  },

  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  loginText: {
    color: BUBBLEBLUE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerTextContainer: {
    marginTop: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
