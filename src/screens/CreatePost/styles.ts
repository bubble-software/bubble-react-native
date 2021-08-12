import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  createPostTitle: {
    textAlign: 'center',
    marginVertical: 45,
    color: 'white',
    fontWeight: '500',
    fontSize: 34,
  },
  categoryTitle: {
    marginHorizontal: 24,
    fontSize: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
    marginTop: '5%',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  whereContainer: {
    marginHorizontal: 24,
    marginBottom: '5%',
  },
  whereText: {
    marginBottom: '5%',
    fontSize: 20,
  },
  whereTextInput: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    width: '100%',
    alignSelf: 'center',
  },
  contentTextInput: {
    minHeight: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '100%',
    alignSelf: 'center',
    padding: 20,
    paddingTop: 20,
  },
  createPostButton: {
    width: 200,
    alignSelf: 'center',
    marginVertical: 12,
    backgroundColor: 'rgb(30, 147,180)',
  },
})
