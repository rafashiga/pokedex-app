import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

import { Badge } from '../Badge';

import PokeballSvg from '../../assets/patterns/pokeballCard.svg';
import Pokemon from '../../assets/generations/generation1/001.png';

import { api } from '../../services/api';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface PokemonCardProps {
	data: {
		name: string;
		url: string;
	};
}

interface IPokemon {
	id: number;
	sprites: {
		other: {
			'official-artwork': {
				front_default: string;
			};
		};
	};
	types: {
		slot: number;
		type: {
			name: string;
		};
	}[];
}

export const PokemonCard = ({ data }: PokemonCardProps) => {
	const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon);
	const [loading, setLoading] = useState(true);

	const getPokemon = async () => {
		try {
			api.defaults.baseURL = data.url;
			const res = await api.get('');
			setPokemon(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getPokemon();
	}, []);

	return (
		<>
			{!loading && (
				<View
					style={[
						{
							backgroundColor:
								theme.colors.types.background[
									pokemon.types?.length > 0 && pokemon.types[0].type.name
								],
						},
						styles.container,
					]}
				>
					<View style={styles.content}>
						<Text style={styles.id}>#{('00' + pokemon.id).slice(-3)}</Text>
						<Text style={styles.title}>{data.name}</Text>
						<View style={styles.badgesWrapper}>
							{pokemon.types?.length &&
								pokemon.types.map(({ slot, type }) => (
									<Badge key={slot} name={type.name} />
								))}
						</View>
					</View>
					{pokemon.sprites && (
						<Image
							source={{
								uri: pokemon.sprites.other['official-artwork'].front_default,
							}}
							style={styles.pokemon}
						/>
					)}

					<PokeballSvg width={160} height={160} style={styles.background} />
				</View>
			)}
		</>
	);
};
