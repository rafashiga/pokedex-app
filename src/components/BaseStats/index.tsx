import React, { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';

import { styles } from './styles';

interface BaseStatsProps {
	label: string;
	barWidth: string;
	color: string;
}

export const BaseStats = ({ label, color, barWidth }: BaseStatsProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<Text style={styles.info}>45</Text>
			<View style={styles.barWrapper}>
				<View
					style={[
						styles.bar,
						{
							backgroundColor: color,
							width: barWidth,
						},
					]}
				/>
			</View>
			<Text style={styles.info}>45</Text>
			<Text style={styles.info}>245</Text>
		</View>
	);
};
