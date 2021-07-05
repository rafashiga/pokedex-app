import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 40,
		paddingTop: 40,
	},
	background: {
		position: 'absolute',
		top: -220,
	},
	menu: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginBottom: 35,
	},
	menuButton: {
		marginLeft: 20,
	},
	header: {
		marginBottom: 25,
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
	},
	subtitle: {
		marginTop: 10,
		fontSize: 16,
		lineHeight: 19,
		color: theme.colors.subtitle,
	},
	inputWrapper: {
		position: 'relative',
		marginBottom: 10,
	},
	inputSearch: {
		width: '100%',
		backgroundColor: theme.colors.gray100,
		paddingVertical: 20,
		paddingRight: 20,
		paddingLeft: 55,
		borderRadius: 10,
	},
	searchSvg: {
		position: 'absolute',
		top: '35%',
		left: 25,
	},
	pokemonCards: {},
	separator: {
		marginTop: 30,
	},
});
