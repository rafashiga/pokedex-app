import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: theme.colors.grass,
		borderRadius: 10,
		flexDirection: 'row',
		position: 'relative',
	},
	content: {
		padding: 20,
	},
	id: {
		fontSize: 12,
		color: theme.colors.gray600,
		fontWeight: 'bold',
	},
	title: {
		marginVertical: 10,
		color: '#fff',
		fontSize: 26,
		fontWeight: 'bold',
	},
	badgesWrapper: {
		flexDirection: 'row',
	},
	background: {
		position: 'absolute',
		top: 0,
		right: 0,
	},
	pokemon: {
		position: 'absolute',
		width: 140,
		height: 140,
		top: -24,
		right: 10,
		zIndex: 2,
	},
});
