import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		left: 0,
		right: 0,
		overflow: 'hidden',
		height: 230,
	},
	content: {
		paddingHorizontal: 40,
		paddingBottom: 10,
	},
	nameWrapper: {
		marginTop: 50,

		flexDirection: 'row',
		alignItems: 'center',
	},
	name: {
		flex: 1,
		textAlign: 'center',
		marginLeft: -25,
		color: '#fff',
		fontSize: 26,
		fontWeight: 'bold',
	},
	back: {
		width: 25,
		height: 25,
		zIndex: 9,
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
