import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Dimensions, View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { submitVote } from '../../api/service'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'
import { TemplateType } from './types'

export const Vote: TemplateType = ({
  flexDirection = 'column',
  votes,
  prevVote,
  isVoted,
  postId,
  type = 'post',
  commentId
}): JSX.Element => {
  const [voteCount, setVoteCount] = useState(votes)
  const [prevVoteState, setPrevVoteState] = useState(prevVote)
  const DeviceWidth = Dimensions.get('window').width

  const { credentials } = useContext(AuthContext)
  const voteColor = (top: boolean) => {
    let color = 'gray'
    if (top) {
      if (prevVoteState === 1) {
        color = 'green'
      }
    } else {
      if (prevVoteState === -1) {
        color = 'red'
      }
    }
    return color
  }
  const voteHandler = async (top: boolean) => {
    let dir
    if (top) {
      if (prevVoteState === 1) {
        setVoteCount(voteCount - 1)
        setPrevVoteState(() => {
          dir = 0
          submitVote({ direction: dir, postId, commentId, isVoted, voteType: type }, credentials!)
          return dir
        })
      } else {
        setVoteCount(voteCount + 1)
        setPrevVoteState(() => {
          dir = 1
          submitVote({ direction: dir, postId,commentId, isVoted, voteType: type }, credentials!)
          return dir
        })
      }
    } else {
      if (prevVoteState === -1) {
        setVoteCount(voteCount + 1)
        setPrevVoteState(() => {
          dir = 0
          submitVote({ direction: dir, postId, commentId, isVoted, voteType: type  }, credentials!)
          return dir
        })
      } else {
        setVoteCount(voteCount - 1)
        setPrevVoteState(() => {
          dir = -1
          submitVote({ direction: dir, postId, commentId, isVoted, voteType: type }, credentials!)
          return dir
        })
      }
    }
  }
  const marginHorizontal = flexDirection === 'row' ? 5 : 0
  const viewWidth = flexDirection === 'row' ? undefined : DeviceWidth * 0.1
  return (
		<View style={{ width: viewWidth, marginBottom: 1, alignItems: 'center', flexDirection: flexDirection }}>
			<Ionicons 
        name={voteColor(true) === 'green' ? 'triangle' : 'triangle-outline'} 
        size={18} color={voteColor(true)} 
        onPress= {() => voteHandler(true)}
      />
			<Text style={{marginHorizontal: marginHorizontal}}>{voteCount}</Text>
			<Ionicons 
        name={voteColor(false) === 'red' ? 'triangle' : 'triangle-outline'} 
        style={{transform: [{rotate: '180deg'}]}} 
        size={18} color={voteColor(false)} 
        onPress= {() => voteHandler(false)}
      />
		</View>
  )
}
