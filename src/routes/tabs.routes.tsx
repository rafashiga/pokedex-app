import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PokemonAbout from '../screens/PokemonAbout';
import PokemonStats from '../screens/PokemonStats';
import PokemonEvolution from '../screens/PokemonEvolution';

const { Navigator, Screen } = createMaterialTopTabNavigator();

interface TabsRoutesProps {
	color: string;
}

export const TabsRoutes = ({ color }: TabsRoutesProps) => {
	return (
		<Navigator
			tabBarOptions={{
				style: {
					backgroundColor: color,
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
				component={PokemonAbout}
				options={{ tabBarLabel: 'About' }}
			/>
			<Screen
				name='PokemonStats'
				component={PokemonStats}
				options={{ tabBarLabel: 'Stats' }}
			/>
			<Screen
				name='PokemonEvolution'
				component={PokemonEvolution}
				options={{ tabBarLabel: 'Evolution' }}
			/>
		</Navigator>
	);
};
