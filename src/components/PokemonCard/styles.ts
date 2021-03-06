import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		position: 'relative',
		borderRadius: 10,
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
		marginBottom: 10,
		color: '#fff',
		fontSize: 26,
		fontWeight: 'bold',
	},
	badgesWrapper: {
		flexDirection: 'row',
	},
	patternBackground: {
		position: 'absolute',
		top: 5,
		left: 90,
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
