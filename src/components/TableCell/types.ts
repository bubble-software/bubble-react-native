import { FunctionComponent } from 'react'
import { Post } from '../../api/types'

export type Props = {
	item: Post,
	nav?: () => void
}
export type TemplateType = FunctionComponent<Props>
