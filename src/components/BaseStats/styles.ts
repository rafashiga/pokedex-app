import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 15,
	},
	label: {
		minWidth: 70,
		fontSize: 12,
		fontWeight: 'bold',
		color: theme.colors.black,
	},
	info: {
		fontSize: 16,
		color: theme.colors.gray500,
	},
	barWrapper: {
		width: '30%',
		marginLeft: 20,
		marginRight: 20,
	},
	bar: {
		height: 4,
		borderRadius: 2,
	},
});
