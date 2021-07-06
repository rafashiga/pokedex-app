import React, { useState } from 'react';
import { Text, Image, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import PokeballSvg from '../../assets/patterns/pokeballEvolution.svg';

import { styles } from './styles';

interface BaseStatsProps {
	pokemonImg: string;
}

export const EvolutionChart = ({ pokemonImg }: BaseStatsProps) => {
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
							uri: pokemonImg,
						}}
						style={styles.pokemonImage}
					/>
				</View>
				<Text style={styles.id}>#004</Text>
				<Text style={styles.title}>Charmander</Text>
			</View>

			<View>
				<View style={styles.pokemonWrapper}>
					<PokeballSvg
						width={100}
						height={100}
						style={styles.pokeballBackground}
					/>
					<Image
						source={{
							uri: pokemonImg,
						}}
						style={styles.pokemonImage}
					/>
				</View>
				<Text style={styles.id}>#004</Text>
				<Text style={styles.title}>Charmander</Text>
			</View>
		</View>
	);
};
