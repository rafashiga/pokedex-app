import React, { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';

import { styles } from './styles';

interface BaseStatsProps {
	label: string;
	barWidth: number;
	color: string;
	value: number;
	min?: number;
	max?: number;
}

export const BaseStats = ({
	label,
	color,
	barWidth,
	value,
	min,
	max,
}: BaseStatsProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<Text style={styles.info}>{value}</Text>
			<View style={styles.barWrapper}>
				<View
					style={[
						styles.bar,
						{
							backgroundColor: color,
							width: String(barWidth) + '%',
						},
					]}
				/>
			</View>
			<Text style={[styles.info, !min && styles.totalMinMax]}>
				{min ? min : 'Min'}
			</Text>
			<Text style={[styles.info, !max && styles.totalMinMax]}>
				{max ? max : 'Max'}
			</Text>
		</View>
	);
};
