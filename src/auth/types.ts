import { FunctionComponent } from 'react'

export type LocationInfo = {
  longitude: number;
  latitude: number;
  altitude: number | null;
}

export type Props = {
  credentials: string;
}
export type TemplateType = FunctionComponent<Props>

export type User = {
  dateJoined: Date
  defaultCategoryId: number,
  email: string,
  exp: Date,
  iat: Date,
  sub: number,
  userId: number,
  userType: number,
  username: string,
}
