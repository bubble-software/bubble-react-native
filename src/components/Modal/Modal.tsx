import React from 'react'
import { Portal, Modal as RNModal } from 'react-native-paper'
import { styles } from './style'
import { TemplateType } from './types'

export const Modal: TemplateType = ({ visible, onDismiss, children }) => {
  return (
		<Portal>
			<RNModal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.container}>
				{children}
			</RNModal>
		</Portal>
  )
}
