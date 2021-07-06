import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 15,
	},
	pokemonWrapper: {
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
		width: 100,
		height: 100,
	},
	pokeballBackground: {
		position: 'absolute',
		top: 0,
		width: 100,
		height: 100,
	},
	pokemonImage: {
		width: 75,
		height: 75,
	},
	id: {
		fontSize: 12,
		color: theme.colors.gray500,
		textAlign: 'center',
	},
	title: {
		fontSize: 16,
		color: theme.colors.black,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
