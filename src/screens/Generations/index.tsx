import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';

import { Generation } from '../../components';
import { generations } from '../../utils/generations';

import { styles } from './styles';

const Generations = () => {
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
					<Generation data={item} key={item.id} />
				))}
			</View>
		</View>
	);
};

export default Generations;
