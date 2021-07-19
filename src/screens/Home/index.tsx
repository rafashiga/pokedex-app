import React, { useEffect, useState, useRef } from 'react';
import {
	View,
	FlatList,
	Text,
	TextInput,
	ActivityIndicator,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';

import Filters from '../Filters';
import Sort from '../Sort';
import Generations from '../Generations';
import { PokemonCard, Loading, NotFound } from '../../components';

import FilterSvg from '../../assets/icons/filter.svg';
import GenerationSvg from '../../assets/icons/generation.svg';
import SortSvg from '../../assets/icons/sort.svg';
import SearchSvg from '../../assets/icons/search.svg';
import PokeballSvg from '../../assets/patterns/pokeballBackground.svg';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { api } from '../../services/api';

interface Pokemons {
	results: {
		name: string;
		url: string;
	}[];
}

const Home = () => {
	const modalizeFiltersRef = useRef<Modalize>(null);
	const modalizeSortRef = useRef<Modalize>(null);
	const modalizeGenerationsRef = useRef<Modalize>(null);

	const [pokemons, setPokemons] = useState<Pokemons>({} as Pokemons);
	const [search, setSearch] = useState('');
	const [loadingInfiniteScroll, setLoadingInfiniteScroll] = useState(false);
	const [offset, setOffset] = useState(20);
	const [sort, setSort] = useState('smallest');
	const [generation, setGeneration] = useState(0);
	const [loading, setLoading] = useState(false);
	const [notFound, setNotFound] = useState(false);

	const [types, setTypes] = useState<string[]>([]);
	const [weaknesses, setWeaknesses] = useState<string[]>([]);
	const [weights, setWeights] = useState<string[]>([]);
	const [heights, setHeights] = useState<string[]>([]);

	const handleOpenFiltersModal = () => {
		modalizeFiltersRef.current?.open();
	};

	const handleOpenSortModal = () => {
		modalizeSortRef.current?.open();
	};

	const handleOpenGenerationsModal = () => {
		modalizeGenerationsRef.current?.open();
	};

	const handleSort = (sortSelected: string) => {
		setSort(sortSelected);
	};

	const handleGeneration = async (generationSelected: number) => {
		setGeneration(generationSelected);
		setLoading(true);
		setNotFound(false);
		setSearch('');
		setOffset(20);

		try {
			const res = await api.get(`/generation/${generationSelected}`);

			const pokemonData = {
				results: res.data.pokemon_species.slice(0, 20),
			};

			setPokemons(pokemonData);
		} catch (error) {
			console.log(error);
			if (error.response.status === 404) {
				setNotFound(true);
			}
		} finally {
			setLoading(false);
		}
	};

	const getPokemons = async () => {
		setLoading(true);
		setNotFound(false);
		setGeneration(0);

		try {
			const res = await api.get('/pokemon');
			setPokemons(res.data);
		} catch (error) {
			console.log(error);
			if (error.response.status === 404) {
				setNotFound(true);
			}
		} finally {
			setLoading(false);
		}
	};

	const loadPokemons = async () => {
		if (search || generation) return;

		setLoadingInfiniteScroll(true);
		try {
			const res = await api.get(`/pokemon?offset=${offset}&limit=20`);

			const newData = {
				results: [...pokemons.results, ...res.data.results],
			};

			setPokemons(newData);
			setOffset((oldState) => oldState + 20);
		} catch (error) {
			console.log(error);
		} finally {
			setLoadingInfiniteScroll(false);
		}
	};

	const renderLoadingFooter = () => {
		if (!loadingInfiniteScroll) return null;

		return (
			<View style={styles.loadingInfiniteScroll}>
				<ActivityIndicator size='large' color={theme.colors.red} />
			</View>
		);
	};

	const handleSetSearch = (text: string) => {
		setSearch(text);
		console.log(text);
		if (!text) getPokemons();
	};

	const searchPokemon = async () => {
		setLoading(true);
		setNotFound(false);
		setOffset(20);

		try {
			if (search) {
				const res = await api.get('/pokemon/' + search);

				const pokemonData: Pokemons = {
					results: [
						{
							name: res.data.name,
							url: `${api.defaults.baseURL}/pokemon/${res.data.id}/`,
						},
					],
				};
				setPokemons(pokemonData);
			} else {
				getPokemons();
			}
		} catch (error) {
			console.log(error);
			if (error.response.status === 404) {
				setNotFound(true);
			}
		} finally {
			setLoading(false);
		}
	};

	const handleTypesFilter = (name: string) => {
		const found = types.find((item) => item === name);

		if (!found) {
			setTypes((oldState) => [name, ...oldState]);
		} else {
			const typesFiltered = types.filter((type) => type !== name);
			setTypes(typesFiltered);
		}
	};

	const handleWeaknessesFilter = (name: string) => {
		const found = weaknesses.find((item) => item === name);

		if (!found) {
			setWeaknesses((oldState) => [name, ...oldState]);
		} else {
			const weaknessesFiltered = weaknesses.filter((item) => item !== name);
			setWeaknesses(weaknessesFiltered);
		}
	};

	const handleWeightsFilter = (name: string) => {
		const found = weights.find((item) => item === name);

		if (!found) {
			setWeights((oldState) => [name, ...oldState]);
		} else {
			const weightsFiltered = weights.filter((item) => item !== name);
			setWeights(weightsFiltered);
		}
	};

	const handleHeightsFilter = (name: string) => {
		const found = heights.find((item) => item === name);

		if (!found) {
			setHeights((oldState) => [name, ...oldState]);
		} else {
			const heightsFiltered = heights.filter((item) => item !== name);
			setHeights(heightsFiltered);
		}
	};

	useEffect(() => {
		let isUnmount = false;

		if (!isUnmount) {
			getPokemons();
		}

		return () => {
			isUnmount = true;
		};
	}, []);

	return (
		<View style={styles.container}>
			<PokeballSvg width='125%' height='100%' style={styles.background} />
			<View style={styles.menu}>
				<RectButton style={styles.menuButton} onPress={handleOpenFiltersModal}>
					<GenerationSvg width={25} height={25} fill='#17171B' />
				</RectButton>
				<RectButton style={styles.menuButton} onPress={handleOpenSortModal}>
					<SortSvg width={25} height={25} fill='#17171B' />
				</RectButton>
				<RectButton
					style={styles.menuButton}
					onPress={handleOpenGenerationsModal}
				>
					<FilterSvg width={25} height={25} fill='#17171B' />
				</RectButton>
			</View>
			<View style={styles.header}>
				<Text style={styles.title}>Pokédex</Text>
				<Text style={styles.subtitle}>
					Search for Pokémon by name or using the National Pokédex number.
				</Text>
			</View>
			<View style={styles.inputWrapper}>
				<TextInput
					style={styles.inputSearch}
					placeholder='What Pokémon are you looking for?'
					value={search}
					onChangeText={(text) => handleSetSearch(text)}
					onSubmitEditing={searchPokemon}
				/>
				<SearchSvg
					width={20}
					height={20}
					style={styles.searchSvg}
					fill={theme.colors.gray500}
				/>
			</View>

			{!notFound &&
				(loading ? (
					<Loading />
				) : (
					<FlatList
						data={pokemons.results}
						keyExtractor={(item) => item.name}
						ItemSeparatorComponent={() => <View style={styles.separator} />}
						renderItem={({ item }) => <PokemonCard data={item} />}
						style={styles.pokemonCards}
						contentContainerStyle={{ paddingBottom: 69, paddingTop: 45 }}
						showsVerticalScrollIndicator={false}
						onEndReached={loadPokemons}
						onEndReachedThreshold={0.1}
						ListFooterComponent={renderLoadingFooter}
					/>
				))}

			{notFound && <NotFound />}

			<Modalize snapPoint={250} ref={modalizeFiltersRef}>
				<Filters
					typesSelected={types}
					setTypes={handleTypesFilter}
					setWeaknesses={handleWeaknessesFilter}
					weaknessesSelected={weaknesses}
					setHeights={handleHeightsFilter}
					heightsSelected={heights}
					setWeights={handleWeightsFilter}
					weightSelected={weights}
				/>
			</Modalize>
			<Modalize snapPoint={250} ref={modalizeSortRef}>
				<Sort setSort={handleSort} sortSelected={sort} />
			</Modalize>
			<Modalize snapPoint={250} ref={modalizeGenerationsRef}>
				<Generations
					generationSelected={generation}
					setGeneration={handleGeneration}
				/>
			</Modalize>
		</View>
	);
};

export default Home;
