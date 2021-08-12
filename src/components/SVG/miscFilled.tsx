import * as React from 'react'
import Svg, { SvgProps, Defs, Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

export const MiscFilled = (props: SvgProps): JSX.Element => {
  return (
		<Svg
			id="prefix__Layer_1"
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 23 23"
			{...props}
		>
			<Defs></Defs>
			<Path className="prefix__cls-1" d="M.8.8h21.4v21.4H.8z" />
			<Path className="prefix__cls-2" d="M.5.5h22v22H.5z" />
			<Path className="prefix__cls-1" d="M1.1 1.1h20.81v20.81H1.1z" />
			<Path
				className="prefix__cls-2"
				d="M11.45 16.22a.93.93 0 01-.68-.27.91.91 0 01-.27-.68 4 4 0 01.37-1.59A4.27 4.27 0 0112 12.14c.35-.3.67-.6 1-.89a3.61 3.61 0 00.71-1 3.19 3.19 0 00.29-1.4 2.26 2.26 0 00-.28-1.11 2.23 2.23 0 00-.79-.85 2.32 2.32 0 00-1.26-.33 3 3 0 00-1.51.34 2.05 2.05 0 00-.89.93A3.21 3.21 0 009 9.23a1 1 0 01-.26.68 1 1 0 01-1.64-.68 4.54 4.54 0 01.57-2.3 4 4 0 011.6-1.55 5 5 0 012.42-.57 4.44 4.44 0 012.15.51 3.77 3.77 0 011.49 1.42 4 4 0 01.56 2.11 4.53 4.53 0 01-.34 1.81 4.73 4.73 0 01-.96 1.34 14.51 14.51 0 01-1.33 1.2 2 2 0 00-.67 1 3.48 3.48 0 00-.19 1 .91.91 0 01-1 .95zm0 3.46a1.33 1.33 0 01-1.29-1.29 1.23 1.23 0 01.39-.92 1.2 1.2 0 01.9-.39 1.33 1.33 0 011.31 1.31 1.2 1.2 0 01-.39.9 1.23 1.23 0 01-.92.39zM19.6 19.61h1.49v1.48H19.6zM1.51 19.61H3v1.48H1.51zM1.89 1.8h1.49v1.48H1.89zM19.07 1.8h1.49v1.48h-1.49z"
			/>
		</Svg>
  )
}
