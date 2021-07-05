import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

interface ButtonProps {
	title: string;
	theme?: string;
}

export const Button = ({ title, theme }: ButtonProps) => {
	return (
		<RectButton
			style={[
				styles.container,
				theme === 'primary' ? styles.primary : styles.secondary,
			]}
		>
			<Text style={[styles.title, !theme && styles.secondaryText]}>
				{title}
			</Text>
		</RectButton>
	);
};
