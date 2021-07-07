import React, { useState } from 'react';
import { Text, Image, View } from 'react-native';

import PokeballSvg from '../../assets/patterns/pokeballEvolution.svg';
import { Chain } from '../../models/evolutionChain';
import ArrowSvg from '../../assets/icons/arrow.svg';

import { IMAGE_URL } from '../../config/env';

import { styles } from './styles';
import { api } from '../../services/api';
import { useEffect } from 'react';

interface BaseStatsProps {
	pokemon: string;
	urlPokemon: string;
	evolution: string;
	urlEvolution: string;
	level: number;
}

export const EvolutionChart = ({
	pokemon,
	urlPokemon,
	evolution,
	urlEvolution,
	level,
}: BaseStatsProps) => {
	const [id, setId] = useState('');
	const [idEvolution, setIdEvolution] = useState('');
	const removeString = api.defaults.baseURL + '/pokemon-species/';

	const getId = () => {
		if (urlPokemon) {
			const idPokemon = urlPokemon.replace(removeString, '').replace('/', '');
			setId(idPokemon);
		}
	};

	const getIdEvolution = () => {
		if (urlEvolution) {
			const idPokemon = urlEvolution.replace(removeString, '').replace('/', '');
			setIdEvolution(idPokemon);
		}
	};

	useEffect(() => {
		getId();
		getIdEvolution();
	}, []);

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
				<Text style={styles.title}>{pokemon}</Text>
			</View>

			<View style={styles.levelWrapper}>
				<ArrowSvg width={25} height={25} style={{ marginBottom: 5 }} />
				{level && <Text style={styles.title}>(Level {level})</Text>}
			</View>

			{evolution && (
				<View>
					<View style={styles.pokemonWrapper}>
						<PokeballSvg
							width={100}
							height={100}
							style={styles.pokeballBackground}
						/>
						<Image
							source={{
								uri: `${IMAGE_URL}${idEvolution}.png`,
							}}
							style={styles.pokemonImage}
						/>
					</View>
					<Text style={styles.id}>#{('00' + idEvolution).slice(-3)}</Text>
					<Text style={styles.title}>{evolution}</Text>
				</View>
			)}
		</View>
	);
};
