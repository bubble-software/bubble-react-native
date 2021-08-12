import { StyleSheet } from 'react-native'
import { LIGHTERBLUE, DARKBLUE } from '../../utils/constants'

export const styles = StyleSheet.create({
  postTableCell: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: LIGHTERBLUE,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: DARKBLUE,
    borderWidth: 3,
    borderRadius: 10,
  },
  accountTitle: {
    textAlign: 'center',
    fontSize: 45,
    color: 'white',
    marginTop: 24,
    marginBottom: '3%',
  },
  divider: {
    borderWidth: 1.75,
    borderColor: DARKBLUE,
    marginTop: -5,
  },
  userSettingsText: {
    marginTop: 24,
    marginBottom: '3%',
    fontSize: 24,
  },
  textInputField: {
    backgroundColor: LIGHTERBLUE,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: DARKBLUE,
    borderWidth: 3,
  },
  categoryDivder: {
    borderWidth: 1.75,
    borderColor: DARKBLUE,
    marginTop: '3%',
    marginBottom: '8%',
  },
})
