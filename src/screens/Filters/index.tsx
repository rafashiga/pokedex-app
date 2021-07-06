import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Button, FiltersOptions } from '../../components';
import { heights } from '../../utils/heights';
import { weights } from '../../utils/weights';
import { types } from '../../utils/types';

import { styles } from './styles';

interface FiltersProps {
	typesSelected: string[];
	setTypes: (name: string) => void;
	weaknessesSelected: string[];
	setWeaknesses: (name: string) => void;
	heightsSelected: string[];
	setHeights: (name: string) => void;
	weightSelected: string[];
	setWeights: (name: string) => void;
}

const Filters = ({
	typesSelected,
	setTypes,
	weaknessesSelected,
	setWeaknesses,
	heightsSelected,
	setHeights,
	weightSelected,
	setWeights,
}: FiltersProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Filters</Text>
				<Text style={styles.subtitle}>
					Use advanced search to explore Pokémon by type, weakness, height and
					more!
				</Text>
			</View>

			<View style={styles.optionsContainer}>
				<FiltersOptions
					setFilters={setTypes}
					title='Types'
					data={types}
					itemsSelected={typesSelected}
				/>
			</View>
			<View style={styles.optionsContainer}>
				<FiltersOptions
					setFilters={setWeaknesses}
					title='Weaknesses'
					data={types}
					itemsSelected={weaknessesSelected}
				/>
			</View>
			<View style={styles.optionsContainer}>
				<FiltersOptions
					setFilters={setHeights}
					title='Heights'
					data={heights}
					itemsSelected={heightsSelected}
				/>
			</View>
			<View style={styles.optionsContainer}>
				<FiltersOptions
					setFilters={setWeights}
					title='Weights'
					data={weights}
					itemsSelected={weightSelected}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<Button title='Reset' />
				<View style={{ padding: 14 }} />
				<Button title='Apply' theme='primary' />
			</View>
		</View>
	);
};

export default Filters;
