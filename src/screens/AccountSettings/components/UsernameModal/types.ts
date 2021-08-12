import { FunctionComponent } from 'react'

export type Props = {
	credentials: string,
	visible: boolean,
	onDismiss: () => void,
	placeholderText: string
}

export type TemplateType = FunctionComponent<Props>
