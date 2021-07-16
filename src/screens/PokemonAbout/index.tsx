import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, { useAnimatedScrollHandler } from 'react-native-reanimated';

import { Loading } from '../../components';
import { usePokemon } from '../../hooks/pokemon';
import { IPokemonSpecies } from '../../models/pokemonSpecies';
import { api } from '../../services/api';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

interface PokemonAboutProps {
	scrollY: any;
}

const PokemonAbout = ({ scrollY }: PokemonAboutProps) => {
	const { pokemon } = usePokemon();
	const [pokemonSpecies, setPokemonSpecies] = useState({} as IPokemonSpecies);
	const [loading, setLoading] = useState(true);

	const scrollHandler = useAnimatedScrollHandler((event: any) => {
		scrollY.value = event.contentOffset.y;
	});

	const color = theme.colors.types[pokemon.types[0].type.name];

	const getPokemonSpecies = async () => {
		try {
			const res = await api.get(`/pokemon-species/${pokemon.id}`);
			setPokemonSpecies(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getPokemonSpecies();
	}, []);

	return (
		<Animated.ScrollView
			onScroll={scrollHandler}
			scrollEventThrottle={16}
			contentContainerStyle={{
				paddingBottom: 100,
			}}
			showsVerticalScrollIndicator={false}
			style={styles.container}
		>
			{loading ? (
				<Loading />
			) : (
				<>
					<Text style={styles.description}>
						{pokemonSpecies.flavor_text_entries[0].flavor_text
							.replace('\n', '')
							.replace('\n', ' ')}
					</Text>

					<Text
						style={[
							styles.title,
							{
								color: color,
							},
						]}
					>
						Pokédex Data
					</Text>
					<View style={styles.infoWrapper}>
						<Text style={styles.label}>Species</Text>
						<Text style={styles.info}>{pokemonSpecies.genera[7].genus}</Text>
					</View>
					<View style={styles.infoWrapper}>
						<Text style={styles.label}>Height</Text>
						<Text style={styles.info}>{pokemon.height}</Text>
					</View>
					<View style={styles.infoWrapper}>
						<Text style={styles.label}>Weight</Text>
						<Text style={styles.info}>{pokemon.weight}kg</Text>
					</View>
					<View style={styles.infoWrapper}>
						<Text style={styles.label}>Abilities</Text>
						<View>
							<Text style={styles.info}>
								{pokemon.abilities[0].slot}. {pokemon.abilities[0].ability.name}
							</Text>
							{pokemon.abilities.length > 1 && (
								<Text style={styles.infoSmall}>
									{pokemon.abilities[1].ability.name}
									{pokemon.abilities[1].is_hidden && ' (hidden ability)'}
								</Text>
							)}
						</View>
					</View>
					<View style={styles.infoWrapper}>
						<Text style={styles.label}>Weaknesses</Text>
						<Text style={styles.info}>-</Text>
					</View>

					<Text
						style={[
							styles.title,
							{
								color: color,
							},
						]}
					>
						Training
					</Text>
					<View style={styles.infoWrapper}>
						<Text style={styles.label}>EV Yield</Text>
						<Text style={styles.info}>Seed Pokemon</Text>
					</View>
					<View style={styles.infoWrapper}>
						<Text style={styles.label}>Catch Rate</Text>
						<Text style={styles.info}>{pokemonSpecies.capture_rate}</Text>
					</View>
					<View style={styles.infoWrapper}>
						<Text style={styles.label}>Base Friendship</Text>
						<Text style={styles.info}>{pokemonSpecies.base_happiness}</Text>
					</View>
					<View style={styles.infoWrapper}>
						<Text style={styles.label}>Base Exp</Text>
						<Text style={styles.info}>{pokemon.base_experience}</Text>
					</View>
					<View style={styles.infoWrapper}>
						<Text style={styles.label}>Growth Rate</Text>
						<Text style={styles.info}>
							{pokemonSpecies.growth_rate?.name.split('-').join(' ')}
						</Text>
					</View>

					<Text
						style={[
							styles.title,
							{
								color: color,
							},
						]}
					>
						Breeding
					</Text>
					<View style={styles.infoWrapper}>
						<Text style={styles.label}>Gender</Text>
						<Text style={styles.info}>Seed Pokemon</Text>
					</View>
					<View style={styles.infoWrapper}>
						<Text style={styles.label}>Egg Groups</Text>
						{pokemonSpecies?.egg_groups?.map((egg, index) => (
							<Text style={styles.info} key={`egg-${index}`}>
								{egg.name}
								{pokemonSpecies.egg_groups?.length !== index + 1 && ', '}
							</Text>
						))}
					</View>
					<View style={styles.infoWrapper}>
						<Text style={styles.label}>Egg Cycles</Text>
						<Text style={styles.info}></Text>
					</View>

					<Text
						style={[
							styles.title,
							{
								color: color,
							},
						]}
					>
						Location
					</Text>
				</>
			)}
		</Animated.ScrollView>
	);
};

export default PokemonAbout;
