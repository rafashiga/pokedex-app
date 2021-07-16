import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Animated from 'react-native-reanimated';

import PokemonAbout from '../screens/PokemonAbout';
import PokemonStats from '../screens/PokemonStats';
import PokemonEvolution from '../screens/PokemonEvolution';

const { Navigator, Screen } = createMaterialTopTabNavigator();

interface TabsRoutesProps {
	color: string;
	scrollY: Animated.SharedValue<number>;
	tabStyle: any;
}

export const TabsRoutes = ({ color, scrollY, tabStyle }: TabsRoutesProps) => {
	const PokemonAboutComponent = () => <PokemonAbout scrollY={scrollY} />;

	const PokemonStatsComponent = () => <PokemonStats scrollY={scrollY} />;

	const PokemonEvolutionComponent = () => (
		<PokemonEvolution scrollY={scrollY} />
	);

	return (
		<Navigator
			tabBarOptions={{
				style: {
					backgroundColor: color,
					paddingTop: 230,
					...tabStyle,
				},
				labelStyle: {
					fontSize: 16,
					textTransform: 'none',
					color: '#fff',
				},
			}}
		>
			<Screen
				name='PokemonAbout'
				component={PokemonAboutComponent}
				options={{ tabBarLabel: 'About' }}
			/>
			<Screen
				name='PokemonStats'
				component={PokemonStatsComponent}
				options={{ tabBarLabel: 'Stats' }}
			/>
			<Screen
				name='PokemonEvolution'
				component={PokemonEvolutionComponent}
				options={{ tabBarLabel: 'Evolution' }}
			/>
		</Navigator>
	);
};
