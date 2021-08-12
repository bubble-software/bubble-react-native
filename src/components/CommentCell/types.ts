import { FunctionComponent } from 'react'
import { Comment } from '../../api/types'

export type Props = {
	comment: Comment
}
export type TemplateType = FunctionComponent<Props>
