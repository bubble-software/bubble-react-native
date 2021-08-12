import { FunctionComponent } from 'react'

export type Props = {
   /* eslint-disable */
  data: any,
  tableCellRenderer: () => JSX.Element,
  header?: JSX.Element,
  scrollEnabled: boolean,
}
export type TemplateType = FunctionComponent<Props>
