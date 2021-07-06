import React, { useState } from 'react';
import { useEffect } from 'react';
import { Text, ScrollView, View } from 'react-native';

import { IPokemonSpecies } from '../../models/pokemonSpecies';
import { BaseStats } from '../../components';
import { usePokemon } from '../../hooks/pokemon';
import { api } from '../../services/api';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

const PokemonStats = () => {
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
				Base Stats
			</Text>

			<BaseStats label='HP' barWidth='50%' color={color} />
			<BaseStats label='Attack' barWidth='50%' color={color} />
			<BaseStats label='Defense' barWidth='50%' color={color} />
			<BaseStats label='Sp. Atk' barWidth='50%' color={color} />
			<BaseStats label='Sp. Def' barWidth='50%' color={color} />
			<BaseStats label='Speed' barWidth='50%' color={color} />
			<BaseStats label='Total' barWidth='0%' color={color} />

			<Text style={styles.description}>
				The ranges shown on the right are for a level 100 Pokémon. Maximum
				values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values
				are based on a hindering nature, 0 EVs, 0 IVs.
			</Text>

			<Text
				style={[
					styles.title,
					{
						color: color,
					},
				]}
			>
				Type Defenses
			</Text>
			<Text style={styles.typeInfo}>
				The effectiveness of each type on {pokemon.name}.
			</Text>
		</ScrollView>
	);
};

export default PokemonStats;
