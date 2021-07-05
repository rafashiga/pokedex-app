import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {},
	filterTitle: {
		fontSize: 16,
		marginBottom: 10,
		fontWeight: 'bold',
		color: theme.colors.black,
	},
	filterButtonWrapper: {
		flexDirection: 'row',
		minHeight: 50,
		maxHeight: 50,
	},
	filterButton: {
		width: 50,
		height: 50,
		backgroundColor: theme.colors.bug,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
	},
});
