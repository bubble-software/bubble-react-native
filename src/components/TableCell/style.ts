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
  tableCellContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 15,
    height: 100,
    maxHeight: 100,
  },
})
