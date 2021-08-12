import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from './styles'
import { TemplateType } from './types'

export const TableView: TemplateType = ({
  data,
  tableCellRenderer,
  header,
  scrollEnabled,
}): JSX.Element => {
  return (
		<View style={styles.container}>
			<FlatList
				style={styles.table}
				data={data}
				renderItem={tableCellRenderer}
				keyExtractor={(item) => item.id.toString()}
				scrollEnabled={true}
				ListHeaderComponent={() => header || null}
			/>
		</View>
  )
}
