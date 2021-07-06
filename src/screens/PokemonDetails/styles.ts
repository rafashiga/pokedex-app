import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 40,
		paddingBottom: 10,
		position: 'relative',
	},
	back: {
		marginTop: 50,
		width: 25,
		height: 25,
	},
	patternBackground: {
		position: 'absolute',
		right: -10,
		top: 170,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
	badgesWrapper: {
		flexDirection: 'row',
	},
	id: {
		fontSize: 16,
		color: theme.colors.gray600,
		fontWeight: 'bold',
	},
	title: {
		marginBottom: 10,
		color: '#fff',
		fontSize: 32,
		fontWeight: 'bold',
	},
	imageWrapper: {
		position: 'relative',
	},
	pokemonImage: {
		width: 125,
		height: 125,
		marginRight: 25,
	},
	circleBackground: {
		position: 'absolute',
	},
});
