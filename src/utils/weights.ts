import LightSvg from '../assets/weights/light.svg';
import NormalSvg from '../assets/weights/normal.svg';
import HeavySvg from '../assets/weights/heavy.svg';
import { theme } from '../global/styles/theme';

export const weights = [
	{
		id: '1',
		name: 'light',
		icon: LightSvg,
		color: theme.colors.weights.light,
	},
	{
		id: '2',
		name: 'normal',
		icon: NormalSvg,
		color: theme.colors.weights.normal,
	},
	{
		id: '3',
		name: 'heavy',
		icon: HeavySvg,
		color: theme.colors.weights.heavy,
	},
];
