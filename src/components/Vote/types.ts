import { FunctionComponent } from 'react'

export type Props = {
  flexDirection?: 'column' | 'row',
  votes: number,
  prevVote: number,
  isVoted: boolean,
  postId?: string,
  type?: 'post' | 'comment',
  commentId?: string
}

export type TemplateType = FunctionComponent<Props>
