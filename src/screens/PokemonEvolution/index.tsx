import React, { useState } from 'react';
import { useEffect } from 'react';
import { Text, ScrollView } from 'react-native';

import { IPokemonSpecies } from '../../models/pokemonSpecies';
import { EvolutionChart } from '../../components';
import { usePokemon } from '../../hooks/pokemon';
import { api } from '../../services/api';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

const PokemonEvolution = () => {
	const { pokemon } = usePokemon();
	const [pokemonSpecies, setPokemonSpecies] = useState({} as IPokemonSpecies);

	const color = theme.colors.types[pokemon.types[0].type.name];

	const getPokemonSpecies = async () => {
		try {
			const res = await api.get(`/pokemon-species/${pokemon.id}`);
			setPokemonSpecies(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPokemonSpecies();
	}, []);

	return (
		<ScrollView
			contentContainerStyle={{
				paddingBottom: 100,
			}}
			showsVerticalScrollIndicator={false}
			style={styles.container}
		>
			<Text
				style={[
					styles.title,
					{
						color: color,
					},
				]}
			>
				Evolution Chart
			</Text>
			<EvolutionChart
				pokemonImg={pokemon.sprites?.other['official-artwork'].front_default}
			/>
		</ScrollView>
	);
};

export default PokemonEvolution;
