export type GET_COMMENTS_PARAMS = {
  token: string,
  postId: string
}

export type POST_COMMENT_PARAMS = {
  token: string,
  content: string,
  postId: string
}

export type CREATE_POST_PARAMS = {
  token: string,
  categoryId: number,
  content: string,
  title: string,
  latitude: number,
  longitude: number
}

export type RADIUS_PARAMS = {
  latitude: number,
  longitude: number,
}

export type VOTE_PARAMS = {
  voteType: 'post' | 'comment',
  postId?: string,
  direction: number,
  isVoted: boolean,
  commentId?: string
}

export type UNBLOCK_PARAMS = string

export type REGISTER_PARAMS = {
  username: string,
  password: string,
  email: string,
}

export type VALIDATE_PASSWORD_PARAMS = {
  password: string,
  email: string,
  recoveryCode: string
}

export type UPDATE_USER_PARAMS = {
  setting: 'username' | 'password',
  value: string,
}

export type CONTENT_REVIEW_PARAMS = {
  content: string,
  contentType: 'post' | 'comment',
  postId ?: string,
  commentId?: string,
}

export type FEEDBACK_PARAMS = {
  content: string,
  longitude: number,
  latitude: number,
  userId ?: string,
}

export type Post = {
  categoryId: number,
  comments: number,
  content: string
  dateCreated: Date,
  id: number,
  isVoted: true,
  latitude: number,
  longitude: number,
  prevVote: number,
  title: string,
  userId: number,
  username: string,
  votes: number,
}

export type Comment = {
  content: string
  dateCreated: Date,
  id: number,
  isVoted: boolean,
  prevVote: number,
  userId: number,
  username: string,
  votes: number,
}

export type BlockedUser = {
  blockedReason: string,
  blockedType: string,
  blockedUserId: string,
  blockedUsername: string,
  id: 1,
}

export type Category = 'Deals' | 'Happy Hour' | 'Recreation' | 'Whats Happening' | 'Misc'
