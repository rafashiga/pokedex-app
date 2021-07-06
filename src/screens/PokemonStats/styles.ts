import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 40,
		paddingTop: 20,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		marginVertical: 20,
	},
	description: {
		fontSize: 12,
		color: theme.colors.gray500,
		lineHeight: 19,
		marginTop: 20,
	},
	infoWrapper: {
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
	typeInfo: {
		fontSize: 16,
		color: theme.colors.gray500,
		lineHeight: 19,
	},
});
