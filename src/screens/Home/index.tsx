import React, { useState } from 'react';
import { View, FlatList, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

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

const Home = () => {
	const [openFiltersModal, setOpenFiltersModal] = useState(false);
	const [openSortModal, setOpenSortModal] = useState(false);
	const [openGenerationsModal, setOpenGenerationsModal] = useState(false);

	const handleToggleFiltersModal = () => {
		setOpenFiltersModal(!openFiltersModal);
	};

	const handleToggleSortModal = () => {
		setOpenSortModal(!openSortModal);
	};

	const handleToggleGenerationsModal = () => {
		setOpenGenerationsModal(!openGenerationsModal);
	};

	const data = {
		result: [
			{
				name: 'bulbasaur',
				url: 'https://pokeapi.co/api/v2/pokemon/1/',
			},
			{
				name: 'ivysaur',
				url: 'https://pokeapi.co/api/v2/pokemon/2/',
			},
			{
				name: 'venusaur',
				url: 'https://pokeapi.co/api/v2/pokemon/3/',
			},
		],
	};

	return (
		<View style={styles.container}>
			<PokeballSvg width='125%' height='100%' style={styles.background} />
			<View style={styles.menu}>
				<RectButton
					style={styles.menuButton}
					onPress={handleToggleFiltersModal}
				>
					<GenerationSvg width={25} height={25} fill='#17171B' />
				</RectButton>
				<RectButton style={styles.menuButton} onPress={handleToggleSortModal}>
					<SortSvg width={25} height={25} fill='#17171B' />
				</RectButton>
				<RectButton
					style={styles.menuButton}
					onPress={handleToggleGenerationsModal}
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
				/>
				<SearchSvg
					width={20}
					height={20}
					style={styles.searchSvg}
					fill={theme.colors.gray500}
				/>
			</View>

			<FlatList
				data={data.result}
				keyExtractor={(item) => item.name}
				ItemSeparatorComponent={() => <View style={styles.separator} />}
				renderItem={({ item }) => <PokemonCard />}
				style={styles.pokemonCards}
				contentContainerStyle={{ paddingBottom: 69, paddingTop: 45 }}
				showsVerticalScrollIndicator={false}
			/>

			<ModalView
				closeModal={handleToggleFiltersModal}
				visible={openFiltersModal}
			>
				<Filters />
			</ModalView>

			<ModalView closeModal={handleToggleSortModal} visible={openSortModal}>
				<Sort />
			</ModalView>

			<ModalView
				closeModal={handleToggleGenerationsModal}
				visible={openGenerationsModal}
			>
				<Generations />
			</ModalView>
		</View>
	);
};

export default Home;
