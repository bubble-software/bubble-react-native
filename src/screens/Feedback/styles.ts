import { StyleSheet } from 'react-native'
import { DARKBLUE, LIGHTERBLUE } from '../../utils/constants'

export const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 36,
    color: 'white',
    fontWeight: '600',
    marginHorizontal: 20,
  },
  textInput: {
    marginTop: 20,
    minHeight: 100,
    backgroundColor: 'white',
    borderColor: DARKBLUE,
    borderRadius: 20,
    borderWidth: 2,
    width: '85%',
    alignSelf: 'center',
    padding: 20,
    paddingTop: 20,
  },
  button: {
    marginVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: LIGHTERBLUE,
    borderWidth: 2,
    borderColor: DARKBLUE,
  },
})
