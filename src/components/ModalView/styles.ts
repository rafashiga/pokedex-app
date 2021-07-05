import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 100,
		backgroundColor: '#fff',
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
	},
	overlay: {
		flex: 1,
		backgroundColor: theme.colors.overlay,
	},
	bar: {
		width: 39,
		height: 2,
		borderRadius: 2,
		alignSelf: 'center',
		marginTop: 13,
	},
});
