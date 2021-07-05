import React from 'react';
import { View, Text, Image, ImageProps } from 'react-native';

import Pokemon01 from '../../assets/generations/generation1/001.png';
import Pokemon02 from '../../assets/generations/generation1/004.png';
import Pokemon03 from '../../assets/generations/generation1/007.png';
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
		<View style={styles.container}>
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
		</View>
	);
};
