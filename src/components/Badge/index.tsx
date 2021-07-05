import React from 'react';
import { View, Text } from 'react-native';

import BugSvg from '../../assets/types/bug.svg';

import { styles } from './styles';

interface BadgeProps {
	name: string;
	icon: string;
}

export const Badge = ({ name, icon }: BadgeProps) => {
	return (
		<View style={styles.container}>
			<BugSvg width={15} height={15} fill='#fff' />
			<Text style={styles.title}>aaaa</Text>
		</View>
	);
};
