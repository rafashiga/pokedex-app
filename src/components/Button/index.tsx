import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface ButtonProps extends RectButtonProps {
	title: string;
	theme?: string;
}

export const Button = ({ title, theme, ...rest }: ButtonProps) => {
	return (
		<RectButton
			style={[
				styles.container,
				theme === 'primary' ? styles.primary : styles.secondary,
			]}
			{...rest}
		>
			<Text style={[styles.title, !theme && styles.secondaryText]}>
				{title}
			</Text>
		</RectButton>
	);
};
