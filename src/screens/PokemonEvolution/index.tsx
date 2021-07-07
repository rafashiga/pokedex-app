import React, { useState } from 'react';
import { useEffect } from 'react';
import { Text, ScrollView } from 'react-native';

import { IEvolutionChain } from '../../models/evolutionChain';
import { EvolutionChart } from '../../components';
import { usePokemon } from '../../hooks/pokemon';
import { api } from '../../services/api';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

const PokemonEvolution = () => {
	const { pokemon } = usePokemon();
	const [evolutionChain, setEvolutionChain] = useState({} as IEvolutionChain);

	const color = theme.colors.types[pokemon.types[0].type.name];

	const getEvolutionChain = async () => {
		try {
			const res = await api.get(`/evolution-chain/${pokemon.id}`);
			console.log(evolutionChain);
			setEvolutionChain(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getEvolutionChain();
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

			{evolutionChain && (
				<EvolutionChart id={pokemon.id} pokemon={evolutionChain.chain} />
			)}
		</ScrollView>
	);
};

export default PokemonEvolution;
