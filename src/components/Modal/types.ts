import { FunctionComponent } from 'react'

export type Props = {
  visible: boolean,
  onDismiss: () => void;
}

export type TemplateType = FunctionComponent<Props>
