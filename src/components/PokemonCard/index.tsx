import React from 'react';
import { View, Text, Image } from 'react-native';

import { Badge } from '../Badge';

import PokeballSvg from '../../assets/patterns/pokeballCard.svg';
import Pokemon from '../../assets/generations/generation1/001.png';

import { styles } from './styles';

export const PokemonCard = () => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.id}>#001</Text>
				<Text style={styles.title}>Bulbasaur</Text>
				<View style={styles.badgesWrapper}>
					<Badge name='a' icon='a' />
					<Badge name='a' icon='a' />
				</View>
			</View>
			<Image source={Pokemon} style={styles.pokemon} />
			<PokeballSvg width={160} height={160} style={styles.background} />
		</View>
	);
};
