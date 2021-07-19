import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { Badge } from '../Badge';
import { IPokemon } from '../../models/pokemon';

import PokeballSvg from '../../assets/patterns/pokeballCard.svg';
import PatternSvg from '../../assets/patterns/patternCard.svg';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { usePokemon } from '../../hooks/pokemon';
import { api } from '../../services/api';

interface PokemonCardProps extends RectButtonProps {
	data: {
		name: string;
		url: string;
	};
}

export const PokemonCard = ({ data, ...rest }: PokemonCardProps) => {
	const { setPokemonDetail } = usePokemon();
	const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon);
	const [loading, setLoading] = useState(true);
	const navigation = useNavigation();

	const getPokemon = async () => {
		try {
			const urlSplit = data.url.split('/');
			const id = urlSplit[urlSplit.length - 2];
			const res = await api.get(`/pokemon/${id}`);
			setPokemon(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const handleDetailsPage = () => {
		setPokemonDetail(pokemon);
		navigation.navigate('PokemonDetails', {
			pokemonId: null,
		});
	};

	useEffect(() => {
		let isUnmount = false;

		if (!isUnmount) {
			getPokemon();
		}

		return () => {
			isUnmount = true;
		};
	}, []);

	return (
		<>
			{!loading && (
				<RectButton
					style={[
						{
							backgroundColor:
								pokemon.types?.length > 0
									? theme.colors.types.background[pokemon.types[0].type.name]
									: '#fff',
						},
						styles.container,
					]}
					onPress={handleDetailsPage}
					{...rest}
				>
					<PokeballSvg width={160} height={160} style={styles.background} />
					<PatternSvg style={styles.patternBackground} />
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
				</RectButton>
			)}
		</>
	);
};
