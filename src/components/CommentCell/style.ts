import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: '6%',
    marginVertical: '2%',
    borderRadius: 8,
  },
  postTitle: {
    textAlign: 'center',
  },
  postContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voteContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  menuContainer: {
    backgroundColor: '#f0f8ff',
    width: '70%',
    marginTop: 40,
    marginRight: 15,
    borderRadius: 20,
  },
})
