import * as React from 'react'
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Circle,
  Ellipse,
  SvgProps,
} from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent (props: SvgProps): JSX.Element {
  return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 25 25"
			{...props}
		>
			<Defs>
				<LinearGradient
					id="prefix__a"
					x1={23.74}
					y1={19.49}
					x2={21.34}
					y2={18.68}
					gradientUnits="userSpaceOnUse"
				>
					<Stop offset={0} stopColor="#8fccd5" />
					<Stop offset={0.5} stopColor="#5bbac7" />
					<Stop offset={1} stopColor="#00aab9" />
				</LinearGradient>
				<LinearGradient
					id="prefix__d"
					x1={1.33}
					y1={19.49}
					x2={5.69}
					y2={18.41}
					xlinkHref="#prefix__a"
				/>
				<LinearGradient
					id="prefix__b"
					x1={2.05}
					y1={12.5}
					x2={22.79}
					y2={12.5}
					gradientUnits="userSpaceOnUse"
				>
					<Stop offset={0} stopColor="#b1dae0" />
					<Stop offset={0.5} stopColor="#82c7d1" />
					<Stop offset={0.62} stopColor="#75c3ce" />
					<Stop offset={0.84} stopColor="#62bcc9" />
					<Stop offset={1} stopColor="#5bbac7" />
				</LinearGradient>
				<LinearGradient
					id="prefix__c"
					x1={-2258.14}
					y1={3458.38}
					x2={-2261.57}
					y2={3461.81}
					gradientTransform="rotate(90 605.56 2872.36)"
					gradientUnits="userSpaceOnUse"
				>
					<Stop offset={0} stopColor="#77b2c6" />
					<Stop offset={0.5} stopColor="#349ab4" />
					<Stop offset={1} stopColor="#0089a6" />
				</LinearGradient>
				<LinearGradient
					id="prefix__e"
					x1={21.44}
					y1={3.41}
					x2={17.23}
					y2={7.61}
					xlinkHref="#prefix__b"
				/>
				<LinearGradient
					id="prefix__f"
					x1={-567.95}
					y1={604.89}
					x2={-565.81}
					y2={607.03}
					gradientTransform="rotate(90 18.575 594.035)"
					xlinkHref="#prefix__c"
				/>
				<LinearGradient
					id="prefix__g"
					x1={5.01}
					y1={7.19}
					x2={6.97}
					y2={9.15}
					gradientUnits="userSpaceOnUse"
				>
					<Stop offset={0} stopColor="#d0e7ea" />
					<Stop offset={0.5} stopColor="#a9d7de" />
					<Stop offset={0.73} stopColor="#9fd2da" />
					<Stop offset={1} stopColor="#98cfd8" />
				</LinearGradient>
				<LinearGradient
					id="prefix__h"
					x1={17.62}
					y1={20.74}
					x2={19.76}
					y2={20.74}
					xlinkHref="#prefix__c"
				/>
				<LinearGradient
					id="prefix__i"
					x1={18.83}
					y1={20.56}
					x2={16.92}
					y2={22.47}
					xlinkHref="#prefix__a"
				/>
			</Defs>
			<G data-name="Layer 2">
				<Path
					d="M22.49 15.14a10.45 10.45 0 00.38-2.64A10.22 10.22 0 0021.8 8a3.5 3.5 0 00-5-4.93A10.37 10.37 0 002.62 16a3.25 3.25 0 103.92 5.13 10.38 10.38 0 0010.12.87 1.38 1.38 0 002.51.06 4.14 4.14 0 00.87.1 3.95 3.95 0 002.45-7z"
					fill="#fff"
					stroke="#fff"
					strokeMiterlimit={10}
					strokeWidth={0.25}
				/>
				<Circle cx={20.04} cy={18.24} r={3.88} fill="url(#prefix__a)" />
				<Circle cx={4.28} cy={18.76} r={3.16} fill="url(#prefix__d)" />
				<Circle cx={12.42} cy={12.5} r={10.37} fill="url(#prefix__b)" />
				<Ellipse
					cx={17.78}
					cy={6.9}
					rx={2.82}
					ry={2.78}
					transform="rotate(-63.91 17.783 6.906)"
					fill="url(#prefix__c)"
					opacity={0.3}
				/>
				<Circle cx={19.29} cy={5.56} r={3.44} fill="url(#prefix__e)" />
				<Ellipse
					cx={6.58}
					cy={8.65}
					rx={1.52}
					ry={1.75}
					transform="matrix(.09 -1 1 .09 -2.63 14.43)"
					fill="url(#prefix__f)"
					opacity={0.3}
				/>
				<Circle cx={6.05} cy={8.24} r={1.51} fill="url(#prefix__g)" />
				<Circle
					cx={18.58}
					cy={20.74}
					r={1.09}
					fill="url(#prefix__h)"
					opacity={0.3}
				/>
				<Circle cx={17.97} cy={21.42} r={1.37} fill="url(#prefix__i)" />
			</G>
		</Svg>
  )
}

export default SvgComponent
