import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 40,
		marginTop: 40,
	},
	header: {
		marginBottom: 0,
	},
	title: {
		fontSize: 26,
		fontWeight: 'bold',
	},
	subtitle: {
		marginTop: 10,
		fontSize: 16,
		lineHeight: 19,
		color: theme.colors.subtitle,
		marginBottom: 35,
	},
	optionsContainer: {
		marginBottom: 35,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginBottom: 80,
	},
});
