import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { Badge } from '../../components';
import { TabsRoutes } from '../../routes/tabs.routes';
import { IPokemon } from '../../models/pokemon';

import PatternSvg from '../../assets/patterns/patternDetails.svg';
import CircleSvg from '../../assets/patterns/circleDetails.svg';
import BackSvg from '../../assets/icons/back.svg';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { usePokemon } from '../../hooks/pokemon';

interface IParam {
	pokemon: IPokemon;
}

const PokemonDetails = () => {
	const { pokemon } = usePokemon();
	const navigation = useNavigation();

	const color = theme.colors.types.background[pokemon.types[0].type.name];

	const handleBack = () => navigation.goBack();

	return (
		<>
			<View
				style={[
					styles.container,
					{
						backgroundColor: pokemon.types?.length > 0 ? color : '#fff',
					},
				]}
			>
				<RectButton onPress={handleBack} style={styles.back}>
					<BackSvg width={25} height={25} fill='#fff' />
				</RectButton>
				<PatternSvg style={styles.patternBackground} />
				<View style={styles.header}>
					<View style={styles.imageWrapper}>
						<CircleSvg style={styles.circleBackground} />
						<Image
							source={{
								uri: pokemon.sprites?.other['official-artwork'].front_default,
							}}
							style={styles.pokemonImage}
						/>
					</View>
					<View>
						<Text style={styles.id}>#{('00' + pokemon.id).slice(-3)}</Text>
						<Text style={styles.title}>{pokemon.name}</Text>
						<View style={styles.badgesWrapper}>
							{pokemon.types?.length &&
								pokemon.types.map(({ slot, type }) => (
									<Badge key={slot} name={type.name} />
								))}
						</View>
					</View>
				</View>
			</View>
			<TabsRoutes color={color} />
		</>
	);
};

export default PokemonDetails;
