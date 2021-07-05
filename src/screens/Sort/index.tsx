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

			<ScrollView
				contentContainerStyle={{ paddingTop: 20, paddingBottom: 60 }}
				showsVerticalScrollIndicator={false}
			>
				<Button title='Smallest number first' />
				<View style={{ padding: 10 }} />

				<Button title='Highest number first' />
				<View style={{ padding: 10 }} />

				<Button title='A-Z' />
				<View style={{ padding: 10 }} />

				<Button title='Z-A' />
			</ScrollView>
		</View>
	);
};

export default Filters;
