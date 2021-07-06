import React, { createContext, useContext, useState, useEffect } from 'react';
import { IPokemon } from '../models/pokemon';

interface PokemonContextData {
	pokemon: IPokemon;
	setPokemonDetail: (pokemon: IPokemon) => void;
}

export const PokemonContext = createContext({} as PokemonContextData);

interface PokemonProviderProps {
	children: React.ReactNode;
}

const PokemonProvider = ({ children }: PokemonProviderProps) => {
	const [pokemon, setPokemon] = useState({} as IPokemon);

	const setPokemonDetail = (pokemon: IPokemon) => {
		setPokemon(pokemon);
	};

	return (
		<PokemonContext.Provider value={{ pokemon, setPokemonDetail }}>
			{children}
		</PokemonContext.Provider>
	);
};

const usePokemon = () => {
	const context = useContext(PokemonContext);

	return context;
};

export { PokemonProvider, usePokemon };
