import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Button, FiltersOptions } from '../../components';

import { styles } from './styles';

const Filters = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Sort</Text>
				<Text style={styles.subtitle}>
					Sort Pokémons alphabetically or by National Pokédex number!
				</Text>
			</View>

			<View>
				<Button title='Smallest number first' />
				<View style={{ padding: 10 }} />

				<Button title='Highest number first' />
				<View style={{ padding: 10 }} />

				<Button title='A-Z' />
				<View style={{ padding: 10 }} />

				<Button title='Z-A' />
			</View>
		</View>
	);
};

export default Filters;
