import React, { useState } from 'react';
import { Text, Image, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import PokeballSvg from '../../assets/patterns/pokeballEvolution.svg';
import ArrowSvg from '../../assets/icons/arrow.svg';

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

			<View style={styles.levelWrapper}>
				<ArrowSvg width={25} height={25} style={{ marginBottom: 5 }} />
				<Text style={styles.title}>(Level 16)</Text>
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
