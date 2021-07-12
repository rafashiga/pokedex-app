import React, { useState } from 'react';
import { useEffect } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { types } from '../../utils/types';

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

	const getTotalStats = () => {
		return pokemon.stats.reduce((total, item) => {
			return item.base_stat + total;
		}, 0);
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

			<BaseStats
				label='HP'
				value={pokemon.stats[0].base_stat}
				barWidth={pokemon.stats[0].base_stat}
				min={100}
				max={200}
				color={color}
			/>
			<BaseStats
				label='Attack'
				value={pokemon.stats[1].base_stat}
				barWidth={pokemon.stats[1].base_stat}
				min={100}
				max={200}
				color={color}
			/>
			<BaseStats
				label='Defense'
				value={pokemon.stats[2].base_stat}
				barWidth={pokemon.stats[2].base_stat}
				min={100}
				max={200}
				color={color}
			/>
			<BaseStats
				label='Sp. Atk'
				value={pokemon.stats[3].base_stat}
				barWidth={pokemon.stats[3].base_stat}
				min={100}
				max={200}
				color={color}
			/>
			<BaseStats
				label='Sp. Def'
				value={pokemon.stats[4].base_stat}
				barWidth={pokemon.stats[4].base_stat}
				min={100}
				max={200}
				color={color}
			/>
			<BaseStats
				label='Speed'
				value={pokemon.stats[5].base_stat}
				barWidth={pokemon.stats[5].base_stat}
				min={100}
				max={200}
				color={color}
			/>
			<BaseStats
				label='Total'
				value={getTotalStats()}
				barWidth={0}
				color={color}
			/>

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
			<View style={styles.typeContainer}>
				{types.map(({ id, icon: Icon, color }) => (
					<View style={styles.typeContent}>
						<View
							key={id}
							style={[
								styles.iconTypeWrapper,
								{
									backgroundColor: color,
								},
							]}
						>
							<Icon width={15} height={15} fill={'#fff'} />
						</View>
						<Text style={styles.typeText}>1/4</Text>
					</View>
				))}
			</View>
		</ScrollView>
	);
};

export default PokemonStats;
