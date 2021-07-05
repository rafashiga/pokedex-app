import ShortSvg from '../assets/heights/short.svg';
import MediumSvg from '../assets/heights/medium.svg';
import TallSvg from '../assets/heights/tall.svg';
import { theme } from '../global/styles/theme';

export const heights = [
	{
		id: '1',
		name: 'short',
		icon: ShortSvg,
		color: theme.colors.heights.short,
	},
	{
		id: '2',
		name: 'medium',
		icon: MediumSvg,
		color: theme.colors.heights.medium,
	},
	{
		id: '3',
		name: 'tall',
		icon: TallSvg,
		color: theme.colors.heights.tall,
	},
];
