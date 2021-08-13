import { StyleSheet } from 'react-native'
import { DARKBLUE, LIGHTBLUE, LIGHTERBLUE } from '../../utils/constants'

export const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'rgba(255,255,255,1)',
    width: '70%',
    marginTop: 40,
    marginRight: 200,
    borderRadius: 20,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex: 1,
    marginHorizontal: 10,
  },
  cardContainer: {
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,
  },
  cardContent: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardTitle: {
    color: DARKBLUE,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  postText: {
    color: LIGHTBLUE,
    width: '80%',
  },
  metadataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metadataRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 20,
    minHeight: 100,
    backgroundColor: LIGHTERBLUE,
    borderColor: DARKBLUE,
    borderRadius: 20,
    borderWidth: 2,
    width: '85%',
    alignSelf: 'center',
    padding: 20,
    marginLeft: 20,
    paddingTop: 20,
  },
  planeIcon: {
    marginHorizontal: 5,
    marginRight: 12,
  },
})
