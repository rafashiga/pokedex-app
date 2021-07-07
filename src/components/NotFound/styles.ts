import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		marginTop: 10,
		fontSize: 20,
		color: theme.colors.black,
		fontWeight: 'bold',
	},
});
