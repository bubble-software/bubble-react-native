import * as React from 'react'
import Svg, { SvgProps, Defs, Circle } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

export const MenuIcon = (props: SvgProps): JSX.Element => {
  return (
		<Svg
			id="prefix__Layer_1"
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 75 75"
			width="1em"
			height="1em"
			{...props}
		>
			<Defs></Defs>
			<Circle className="prefix__cls-1" cx={37.5} cy={14.26} r={14.01} />
			<Circle className="prefix__cls-1" cx={37.91} cy={43.77} r={9.18} />
			<Circle className="prefix__cls-1" cx={38.4} cy={67.29} r={7.46} />
		</Svg>
  )
}
