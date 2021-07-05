import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';

import Filters from '../Filters';
import Sort from '../Sort';
import Generations from '../Generations';
import { PokemonCard, ModalView } from '../../components';

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

	const handleOpenFiltersModal = () => {
		modalizeFiltersRef.current?.open();
	};

	const handleOpenSortModal = () => {
		modalizeSortRef.current?.open();
	};

	const handleOpenGenerationsModal = () => {
		modalizeGenerationsRef.current?.open();
	};

	const getPokemons = async () => {
		try {
			const res = await api.get('/pokemon');
			setPokemons(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	const searchPokemon = async () => {
		console.log('aaa ' + api.defaults.baseURL + '/pokemon/' + search);

		try {
			const res = await api.get('/pokemon/' + search);

			const pokemonData: Pokemons = {
				results: [
					{
						name: res.data.name,
						url: `${api.defaults.baseURL}/pokemon/${res.data.id}`,
					},
				],
			};

			setPokemons(pokemonData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPokemons();
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
					onChangeText={setSearch}
					onSubmitEditing={searchPokemon}
				/>
				<SearchSvg
					width={20}
					height={20}
					style={styles.searchSvg}
					fill={theme.colors.gray500}
				/>
			</View>

			<FlatList
				data={pokemons.results}
				keyExtractor={(item) => item.name}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				renderItem={({ item }) => <PokemonCard data={item} />}
				style={styles.pokemonCards}
				contentContainerStyle={{ paddingBottom: 69, paddingTop: 45 }}
				showsVerticalScrollIndicator={false}
			/>

			<Modalize snapPoint={250} ref={modalizeFiltersRef}>
				<Filters />
			</Modalize>

			<Modalize snapPoint={250} ref={modalizeSortRef}>
				<Sort />
			</Modalize>

			<Modalize snapPoint={250} ref={modalizeGenerationsRef}>
				<Generations />
			</Modalize>
		</View>
	);
};

export default Home;
