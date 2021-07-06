import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Button, FiltersOptions } from '../../components';

import { styles } from './styles';

interface SortProps {
	sortSelected: string;
	setSort: (sortSelected: string) => void;
}

const Sort = ({ sortSelected, setSort }: SortProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Sort</Text>
				<Text style={styles.subtitle}>
					Sort Pokémons alphabetically or by National Pokédex number!
				</Text>
			</View>

			<View>
				<Button
					title='Smallest number first'
					theme={sortSelected === 'smallest' ? 'primary' : ''}
					onPress={() => setSort('smallest')}
				/>
				<View style={{ padding: 10 }} />

				<Button
					title='Highest number first'
					theme={sortSelected === 'highest' ? 'primary' : ''}
					onPress={() => setSort('highest')}
				/>
				<View style={{ padding: 10 }} />

				<Button
					title='A-Z'
					theme={sortSelected === 'A-Z' ? 'primary' : ''}
					onPress={() => setSort('A-Z')}
				/>
				<View style={{ padding: 10 }} />

				<Button
					title='Z-A'
					theme={sortSelected === 'Z-A' ? 'primary' : ''}
					onPress={() => setSort('Z-A')}
				/>
			</View>
		</View>
	);
};

export default Sort;
