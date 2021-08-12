import axios from 'axios'
import {
  BLOCK_USER_URL,
  CATEGORY_URL,
  CHECK_EMAIL_URL,
  CHECK_USERNAME_URL,
  COMMENT_URL,
  CREATE_POST_URL,
  CREATE_USER_URL,
  GET_BLOCKED_USERS,
  GET_USER_LIKED_POSTS,
  GET_USER_POSTS,
  PASSWORD_RESET_URL,
  PostsParams,
  POST_COMMENT_URL,
  RADIUS_URL,
  SET_DEFAULT_CATEGORY,
  SUBMIT_FEEDBACK_URL,
  UNBLOCK_USER_URL,
  UPDATE_USER,
  VALIDATE_PASSWORD_RECOVERY_CODE_URL,
  VALIDATE_PASSWORD_RESET_URL,
  VOTE_URL,
} from '../utils/constants'
import { keysToCamel } from '../utils/stringhelpers'
import { BlockedUser, Category, Comment, CONTENT_REVIEW_PARAMS, CREATE_POST_PARAMS, FEEDBACK_PARAMS, GET_COMMENTS_PARAMS, Post, POST_COMMENT_PARAMS, RADIUS_PARAMS, REGISTER_PARAMS, UNBLOCK_PARAMS, UPDATE_USER_PARAMS, VALIDATE_PASSWORD_PARAMS, VOTE_PARAMS } from './types'

export const getCategoryPosts = async (postParams: PostsParams): Promise<Post[] | undefined> => {
  const response = await axios({
    method: 'GET',
    url: CATEGORY_URL(postParams),
  }).catch((e) => {
    throw new Error(e.response.data.errors)
  })
  if (response.status === 200) {
    return keysToCamel(response.data) as Post[]
  } else if (response.status === 401) {
    return undefined
  }
}

export const getComments = async (commentParams: GET_COMMENTS_PARAMS): Promise<Comment[] | undefined> => {
  const response = await axios({
    method: 'GET',
    url: COMMENT_URL(commentParams),
  }).catch((e) => {
    throw new Error(e.response.data.errors)
  })
  if (response.status === 200) {
    return keysToCamel(response.data) as Comment[]
  } else if (response.status === 401) {
    return undefined
  }
}

export const postComment = async (commentParams: POST_COMMENT_PARAMS): Promise<string | undefined> => {
  const response = await axios({
    method: 'POST',
    headers: {
      Authorization: commentParams.token,
    },
    url: POST_COMMENT_URL,
    data: {
      post_id: commentParams.postId,
      content: commentParams.content,
    },
  }).catch((e) => {
    throw new Error(e.response.data.errors)
  })
  if (response.status === 200) {
    console.log(response.data)
    return response.data
  } else if (response.status === 401) {
    return undefined
  }
}

export const createPost = async (newPostParams: CREATE_POST_PARAMS):Promise<string | undefined> => {
  const response = await axios({
    method: 'POST',
    url: CREATE_POST_URL,
    headers: {
      Authorization: newPostParams.token,
    },
    data: {
      category_id: newPostParams.categoryId,
      content: newPostParams.content,
      title: newPostParams.title,
      latitude: newPostParams.latitude,
      longitude: newPostParams.longitude,
    },
  })
  if (response.status === 200) {
    return response.data
  } else if (response.status === 401) {
    return undefined
  }
}

export const getRadius = async (radiusParams: RADIUS_PARAMS): Promise<number | undefined> => (
  await axios({
    method: 'GET',
    url: RADIUS_URL(radiusParams),
  }).then((response) => {
    if (response.status === 200) {
      return response.data
    }
  })
)

export const submitVote = async (voteParams: VOTE_PARAMS, token: string): Promise<string | undefined> => {
  const response = await axios({
    method: 'POST',
    url: VOTE_URL,
    headers: {
      Authorization: token,
    },
    data: {
      vote_type: voteParams.voteType,
      post_id: voteParams.postId,
      direction: voteParams.direction,
      is_voted: voteParams.isVoted,
      comment_id: voteParams.commentId
    },
  })
  if (response.status === 200) {
    return response.data
  } else if (response.status === 401) {
    return undefined
  }
}

export const getUserPosts = async (token: string): Promise<Post[] | undefined> => {
  return await axios({
    method: 'GET',
    url: GET_USER_POSTS(token),
  }).then((resp) => {
    if (resp.status === 200) {
      return keysToCamel(resp.data) as Post[]
    }
  })
}

export const getUserLikedPosts = async (token: string): Promise<Post[] | undefined> => (
  await axios({
    method: 'GET',
    url: GET_USER_LIKED_POSTS(token),
  }).then((resp) => {
    if (resp.status === 200) {
      return keysToCamel(resp.data) as Post[]
    }
  })
)

export const getBlockedUsers = async (token: string): Promise<BlockedUser[] | undefined> => (
  await axios({
    method: 'GET',
    url: GET_BLOCKED_USERS(token),
  }).then((resp) => {
    if (resp.status === 200) {
      return keysToCamel(resp.data) as BlockedUser[]
    }
  })
)

export const unblockUser = async (token: string, unblockParams: UNBLOCK_PARAMS): Promise<void> => (
  await axios({
    method: 'POST',
    url: UNBLOCK_USER_URL,
    headers: {
      Authorization: token,
    },
    data: {
      blocked_user_id: unblockParams,
    },
  }).then((resp) => {
    console.log(resp.data)
    if (resp.status === 200) {
      return resp.data
    }
  })
)

export const blockUser = async (token: string, unblockParams: UNBLOCK_PARAMS): Promise<void> => {
  await axios({
    method: 'POST',
    url: BLOCK_USER_URL,
    headers: {
      Authorization: token,
    },
    data: {
      blocked_user_id: unblockParams,
      blocked_reason: '',
      blocked_type: '',
    },
  }).then((resp) => {
    if (resp.status === 200) {
      return resp.data
    }
  })
}

export const checkUsername = async (username: string): Promise<void> => {
  const response = await axios({
    method: 'GET',
    url: CHECK_USERNAME_URL(username),
  }).catch((e) => {
    throw (e.response.data)
  })
  if (response.status === 200) {
    return response.data
  }
}

export const checkEmail = async (email: string): Promise<void> => {
  const response = await axios({
    method: 'GET',
    url: CHECK_EMAIL_URL(email),
  }).catch((e) => {
    throw (e.response.data)
  })
  if (response.status === 200) {
    return response.data
  }
}

export const createUser = async (registerParams: REGISTER_PARAMS): Promise<void> => {
  await axios({
    method: 'POST',
    url: CREATE_USER_URL,
    data: {
      username: registerParams.username,
      user_type: 2,
      password: registerParams.password,
      email: registerParams.email,
    },
  })
}

export const passwordReset = async (email: string): Promise<void> => {
  await axios({
    method: 'POST',
    url: PASSWORD_RESET_URL,
    data: {
      email,
    },
  })
}

export const validatePasswordRecoveryCode = async (email: string, code: string): Promise<void> => {
  const response = await axios({
    method: 'GET',
    url: VALIDATE_PASSWORD_RECOVERY_CODE_URL(email, code),
  }).catch((e) => {
    throw (e.response.data)
  })
  if (response.status === 200) {
    return response.data
  }
}

export const validatePasswordReset = async (validatePasswordParams: VALIDATE_PASSWORD_PARAMS): Promise<void> => {
  console.log(VALIDATE_PASSWORD_RESET_URL,validatePasswordParams )
  await axios({
    method: 'POST',
    url: VALIDATE_PASSWORD_RESET_URL,
    data: {
      password: validatePasswordParams.password,
      email: validatePasswordParams.email,
      recovery_code: validatePasswordParams.recoveryCode,
    },
  })
}

export const setDefaultCategory = async (token: string, category: Category): Promise<number | undefined> => {
  let categoryID
  switch (category) {
    case 'Deals':
      categoryID = 1
      break
    case 'Happy Hour':
      categoryID = 2
      break
    case 'Recreation':
      categoryID = 3
      break
    case 'Whats Happening':
      categoryID = 4
      break
    case 'Misc':
      categoryID = 5
      break
  }
  const resp = await axios({
    method: 'POST',
    headers: {
      Authorization: token,
    },
    url: SET_DEFAULT_CATEGORY,
    data: {
      default_category_id: categoryID,
    },
  })
  if (resp.status === 200) {
    return resp.data
  }
}

export const updateUser = async (token: string, updateParams: UPDATE_USER_PARAMS): Promise<undefined> => {
  const resp = await axios({
    method: 'POST',
    headers: {
      Authorization: token,
    },
    url: UPDATE_USER,
    data: updateParams,
  })
  if (resp.status === 200) {
    return resp.data
  }
}

export const submitContentReview = async (token: string, contentReviewParams: CONTENT_REVIEW_PARAMS): Promise<undefined> => {
  const resp = await axios({
    method: 'POST',
    headers: {
      Authorization: token,
    },
    url: SET_DEFAULT_CATEGORY,
    data: {
      content: contentReviewParams.content,
      content_type: contentReviewParams.contentType,
      post_id: contentReviewParams.postId,
      comment_id: contentReviewParams.commentId,
    },
  })
  if (resp.status === 200) {
    return resp.data
  }
}

export const submitFeedback = async (token: string, feedbackParams: FEEDBACK_PARAMS): Promise<undefined> => {
  const resp = await axios({
    method: 'POST',
    headers: {
      Authorization: token,
    },
    url: SUBMIT_FEEDBACK_URL,
    data: {
      content: feedbackParams.content,
      longitude: feedbackParams.longitude,
      latitude: feedbackParams.latitude,
      user_id: feedbackParams.userId,
    },
  })
  if (resp.status === 200) {
    return resp.data
  }
}
