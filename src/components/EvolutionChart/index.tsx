import React, { useState } from 'react';
import { Text, Image, View } from 'react-native';

import PokeballSvg from '../../assets/patterns/pokeballEvolution.svg';
import { Chain } from '../../models/evolutionChain';
import ArrowSvg from '../../assets/icons/arrow.svg';

import { IMAGE_URL } from '../../config/env';

import { styles } from './styles';

interface BaseStatsProps {
	id: number;
	pokemon: Chain;
}

export const EvolutionChart = ({ id, pokemon }: BaseStatsProps) => {
	return (
		<View style={styles.container}>
			<View>
				<View style={styles.pokemonWrapper}>
					<PokeballSvg
						width={100}
						height={100}
						style={styles.pokeballBackground}
					/>
					<Image
						source={{
							uri: `${IMAGE_URL}${id}.png`,
						}}
						style={styles.pokemonImage}
					/>
				</View>
				<Text style={styles.id}>#{('00' + id).slice(-3)}</Text>
				<Text style={styles.title}>{pokemon?.species?.name}</Text>
			</View>

			{pokemon?.evolves_to[0] && (
				<View style={styles.levelWrapper}>
					<ArrowSvg width={25} height={25} style={{ marginBottom: 5 }} />
					<Text style={styles.title}>
						(Level {pokemon?.evolves_to[0].evolution_details[0].min_level})
					</Text>
				</View>
			)}

			{pokemon?.evolves_to[0] && (
				<View>
					<View style={styles.pokemonWrapper}>
						<PokeballSvg
							width={100}
							height={100}
							style={styles.pokeballBackground}
						/>
						<Image
							source={{
								uri: `${IMAGE_URL}${id + 1}.png`,
							}}
							style={styles.pokemonImage}
						/>
					</View>
					<Text style={styles.id}>#{('00' + (id + 1)).slice(-3)}</Text>
					<Text style={styles.title}>
						{pokemon?.evolves_to[0].species.name}
					</Text>
				</View>
			)}
		</View>
	);
};
