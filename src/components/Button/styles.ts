import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
	},
	primary: {
		backgroundColor: theme.colors.red,
	},
	secondary: {
		backgroundColor: '#F2F2F2',
	},
	title: {
		color: '#fff',
		fontSize: 16,
	},
	secondaryText: {
		color: theme.colors.gray500,
	},
});
