import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

export const Loading = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size='large' color={theme.colors.red} />
		</View>
	);
};
