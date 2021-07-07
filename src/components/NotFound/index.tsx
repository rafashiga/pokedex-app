import React from 'react';
import { View, Image, Text } from 'react-native';

import PokeballOpenImage from '../../assets/icons/pokeballOpen.png';

import { styles } from './styles';

export const NotFound = () => {
	return (
		<View style={styles.container}>
			<Image source={PokeballOpenImage} />
			<Text style={styles.title}>Not Found</Text>
		</View>
	);
};
