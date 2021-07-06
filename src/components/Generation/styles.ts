import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		height: 129,
		alignItems: 'center',
		position: 'relative',
		marginBottom: 15,
	},
	pattern: {
		position: 'absolute',
		top: 10,
		left: 15,
	},
	pokeballBackground: {
		position: 'absolute',
		bottom: -5,
		right: -5,
	},
	pokemonsWrapper: {
		marginHorizontal: 10,
		marginTop: 30,
		marginBottom: 15,
		flexDirection: 'row',
	},
	pokemon: {
		width: 45,
		height: 45,
	},
	title: {
		fontSize: 16,
		marginBottom: 20,
	},
});
