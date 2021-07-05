import React from 'react';
import { View, Text } from 'react-native';

import BugSvg from '../../assets/types/bug.svg';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

interface BadgeProps {
	name: string;
}

export const Badge = ({ name }: BadgeProps) => {
	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: theme.colors.types[name],
				},
			]}
		>
			<BugSvg width={15} height={15} fill='#fff' />
			<Text style={styles.title}>{name}</Text>
		</View>
	);
};
