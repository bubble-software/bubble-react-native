import axios from 'axios'
import { Credentials } from '../../providers/AuthProvider/types'
import { LOGIN_URL } from '../../utils/constants'
import { LoginInfo } from '..//Login/types'

// args include token, categoryID, longitude, latitude, radius
export const getLikes = async (loginInfo: LoginInfo): Promise<Credentials | undefined> => {
  const response = await axios({
    method: 'post',
    url: LOGIN_URL,
    data: loginInfo,
  }).catch((e) => {
    throw new Error(e.response.data.errors)
  })
  if (response.status === 200) {
    return response.data[0].token
  } else if (response.status === 401) {
    return undefined
  }
}
