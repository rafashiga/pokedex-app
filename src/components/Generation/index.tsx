import React from 'react';
import { View, Text, Image, ImageProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import PatternSvg from '../../assets/patterns/pattern.svg';
import PokeballSvg from '../../assets/patterns/pokeballGeneration.svg';

import { styles } from './styles';

interface IGeneration {
	id: number;
	name: string;
	pokemons: {
		image: ImageProps;
	}[];
}

interface GenerationProps {
	data: IGeneration;
}

export const Generation = ({ data }: GenerationProps) => {
	return (
		<RectButton style={styles.container}>
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
			<Text style={styles.title}>{data.name}</Text>
		</RectButton>
	);
};
