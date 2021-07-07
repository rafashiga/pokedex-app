import React, { useState } from 'react';
import { useEffect } from 'react';
import { Text, ScrollView } from 'react-native';

import { IEvolutionChain } from '../../models/evolutionChain';
import { IPokemonSpecies } from '../../models/pokemonSpecies';
import { EvolutionChart, Loading } from '../../components';
import { usePokemon } from '../../hooks/pokemon';
import { api } from '../../services/api';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import axios from 'axios';

const PokemonEvolution = () => {
	const { pokemon } = usePokemon();
	const [pokemonSpecies, setPokemonSpecies] = useState({} as IPokemonSpecies);
	const [evolutionChain, setEvolutionChain] = useState({} as IEvolutionChain);
	const [loading, setLoading] = useState(false);

	const color = theme.colors.types[pokemon.types[0].type.name];

	const getPokemonSpecies = async () => {
		setLoading(true);
		try {
			const res = await api.get(`/pokemon-species/${pokemon.id}`);
			setPokemonSpecies(res.data);
			getEvolutionChain(res.data.evolution_chain.url);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const getEvolutionChain = async (url: string) => {
		const res = await axios.get(url);
		setEvolutionChain(res.data);
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
				Evolution Chart
			</Text>

			{loading && <Loading />}

			{!loading && !!evolutionChain?.chain && (
				<EvolutionChart
					pokemon={evolutionChain.chain.species.name}
					urlPokemon={evolutionChain.chain.species.url}
					level={
						evolutionChain.chain.evolves_to[0]?.evolution_details[0]?.min_level
					}
					evolution={evolutionChain.chain.evolves_to[0]?.species.name}
					urlEvolution={evolutionChain.chain.evolves_to[0]?.species.url}
				/>
			)}

			{!loading && !!evolutionChain?.chain?.evolves_to[0]?.evolves_to[0] && (
				<EvolutionChart
					pokemon={evolutionChain.chain.evolves_to[0].species.name}
					urlPokemon={evolutionChain.chain.evolves_to[0].species.url}
					level={
						evolutionChain.chain.evolves_to[0]?.evolves_to[0]
							.evolution_details[0]?.min_level
					}
					evolution={
						evolutionChain.chain.evolves_to[0]?.evolves_to[0].species.name
					}
					urlEvolution={
						evolutionChain.chain.evolves_to[0]?.evolves_to[0].species.url
					}
				/>
			)}
		</ScrollView>
	);
};

export default PokemonEvolution;
