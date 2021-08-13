export const BASE_URL = 'https://bubblemedia.info'
export const LOGIN_URL = `${BASE_URL}/user`

export type PostsParams = {
  token: string,
  longitude: number,
  latitude: number,
  radius: number,
  category: string
}
export const CATEGORY_URL = ({
  token,
  longitude,
  latitude,
  radius,
  category,
}: PostsParams): string => {
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
  return `${BASE_URL}/category?token=${token}&category_id=${categoryID}&logitude=${longitude}&latitude=${latitude}&radius=1000000000000000`
}

export const COMMENT_URL = ({ token, postId }: {token: string, postId: string}): string => `${BASE_URL}/comment?token=${token}&post_id=${postId}`
export const POST_COMMENT_URL = `${BASE_URL}/comment`
export const CREATE_POST_URL = `${BASE_URL}/add_post_to_category`
export const RADIUS_URL = ({ longitude, latitude }: {longitude: number, latitude: number}):string => `${BASE_URL}/radius?logitude=${longitude}&latitude=${latitude}&radius=1`
export const VOTE_URL = `${BASE_URL}/vote`
export const GET_USER_POSTS = (token: string): string => `${BASE_URL}/user_created_post?token=${token}`
export const GET_USER_LIKED_POSTS = (token: string): string => `${BASE_URL}/user_liked_post?token=${token}`
export const GET_BLOCKED_USERS = (token: string): string => `${BASE_URL}/block_user?token=${token}`
export const UNBLOCK_USER_URL = `${BASE_URL}/unblock_user`
export const BLOCK_USER_URL = `${BASE_URL}/block_user`
export const CHECK_USERNAME_URL = (username: string): string => `${BASE_URL}/check_username?username=${username}`
export const CHECK_EMAIL_URL = (email: string): string => `${BASE_URL}/check_email?email=${email}`
export const GET_USER = (token: string): string => `${BASE_URL}/user?token=${token}`
export const CREATE_USER_URL = `${BASE_URL}/create_user`
export const SUBMIT_FEEDBACK_URL = `${BASE_URL}/feedback`
export const PASSWORD_RESET_URL = `${BASE_URL}/password_reset`
export const VALIDATE_PASSWORD_RECOVERY_CODE_URL = (email: string, code: string): string => `${BASE_URL}/validate_password_recovery_code?email=${email}&recovery_code=${code}`
export const VALIDATE_PASSWORD_RESET_URL = `${BASE_URL}/validate_password_reset`
export const SET_DEFAULT_CATEGORY = `${BASE_URL}/set_default_category`
export const UPDATE_USER = `${BASE_URL}/user_update_setting`
export const SUBMIT_CONTENT_REVIEW = `${BASE_URL}/content_review`

/*
MARK: THEMES
*/
export const LIGHTERBLUE = 'rgb(162, 229, 252)'
export const LIGHTBLUE = 'rgba(112, 202, 211, 1)'
export const DARKBLUE = 'rgb(65,160,177)'
export const DARKERBLUE = 'rgba(66, 126, 132, 1)'
export const TABBARCOLOR = 'rgba(43, 149, 173, 1)'
export const TOS = 'https://www.termsfeed.com/live/ffdd0de8-f5d2-41db-9b04-b89bdd99f685'
