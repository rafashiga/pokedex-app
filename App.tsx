import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { PokemonProvider } from './src/hooks/pokemon';

export default function App() {
	return (
		<>
			<StatusBar style='auto' />
			<PokemonProvider>
				<Routes />
			</PokemonProvider>
		</>
	);
}
