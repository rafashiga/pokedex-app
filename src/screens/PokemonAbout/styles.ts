import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 40,
		paddingTop: 40,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		marginVertical: 20,
	},
	description: {
		fontSize: 16,
		color: theme.colors.gray500,
		lineHeight: 19,
	},
	infoWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 15,
	},
	label: {
		minWidth: 100,
		fontSize: 12,
		fontWeight: 'bold',
		color: theme.colors.black,
	},
	info: {
		fontSize: 16,
		color: theme.colors.gray500,
	},
	infoSmall: {
		fontSize: 12,
		color: theme.colors.gray500,
	},
});
