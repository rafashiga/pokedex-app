import React from 'react';
import { View, Text, Image, ImageProps } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import PatternSvg from '../../assets/patterns/pattern.svg';
import PokeballSvg from '../../assets/patterns/pokeballGeneration.svg';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

interface IGeneration {
	id: number;
	name: string;
	pokemons: {
		image: ImageProps;
	}[];
}

interface GenerationProps extends RectButtonProps {
	data: IGeneration;
	generationSelected: boolean;
}

export const Generation = ({
	data,
	generationSelected,
	...rest
}: GenerationProps) => {
	return (
		<RectButton
			style={[
				styles.container,
				{
					backgroundColor: generationSelected
						? theme.colors.red
						: theme.colors.gray100,
				},
			]}
			{...rest}
		>
			<PatternSvg style={styles.pattern} />
			<PokeballSvg style={styles.pokeballBackground} />
			<View style={styles.pokemonsWrapper}>
				{data.pokemons.map((item, index) => (
					<Image
						key={`pokemon-${index}`}
						source={item.image}
						style={styles.pokemon}
					/>
				))}
			</View>
			<Text
				style={[
					styles.title,
					{
						color: generationSelected ? '#fff' : theme.colors.gray500,
					},
				]}
			>
				{data.name}
			</Text>
		</RectButton>
	);
};
