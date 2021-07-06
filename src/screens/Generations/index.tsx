import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';

import { Generation } from '../../components';
import { generations } from '../../utils/generations';

import { styles } from './styles';

interface GenerationsProps {
	generationSelected: number;
	setGeneration: (generationSelected: number) => void;
}

const Generations = ({
	generationSelected,
	setGeneration,
}: GenerationsProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Generations</Text>
				<Text style={styles.subtitle}>
					Use search for generations to explore your Pokémon!
				</Text>
			</View>
			<View style={styles.generationsWrapper}>
				{generations.map((item) => (
					<Generation
						data={item}
						key={item.id}
						generationSelected={item.id === generationSelected}
						onPress={() => setGeneration(item.id)}
					/>
				))}
			</View>
		</View>
	);
};

export default Generations;
