import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Button, FiltersOptions } from '../../components';
import { heights } from '../../utils/heights';
import { weights } from '../../utils/weights';
import { types } from '../../utils/types';

import { styles } from './styles';

const Filters = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Filters</Text>
				<Text style={styles.subtitle}>
					Use advanced search to explore Pokémon by type, weakness, height and
					more!
				</Text>
			</View>
			{/* <ScrollView
				contentContainerStyle={{ paddingTop: 20, paddingBottom: 60 }}
				showsVerticalScrollIndicator={false}
			> */}
			<View style={styles.optionsContainer}>
				<FiltersOptions title='Types' data={types} />
			</View>
			<View style={styles.optionsContainer}>
				<FiltersOptions title='Weaknesses' data={types} />
			</View>
			<View style={styles.optionsContainer}>
				<FiltersOptions title='Heights' data={heights} />
			</View>
			<View style={styles.optionsContainer}>
				<FiltersOptions title='Weights' data={weights} />
			</View>

			<View style={styles.buttonContainer}>
				<Button title='Reset' />
				<View style={{ padding: 14 }} />
				<Button title='Apply' theme='primary' />
			</View>
			{/* </ScrollView> */}
		</View>
	);
};

export default Filters;
