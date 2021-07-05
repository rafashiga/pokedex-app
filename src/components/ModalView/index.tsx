import React, { useRef } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Modalize, ModalizeProps } from 'react-native-modalize';

import { styles } from './styles';

interface ModalViewProps extends ModalizeProps {
	children: React.ReactNode;
	closeModal: () => void;
	ref: any;
}

export const ModalView = ({
	children,
	closeModal,
	ref,
	...rest
}: ModalViewProps) => {
	return (
		<Modalize snapPoint={500} ref={ref} {...rest}>
			{/* <TouchableWithoutFeedback onPress={closeModal}> */}
			{/* <View style={styles.overlay}> */}
			<View style={styles.container}>{children}</View>
			{/* </View> */}
			{/* </TouchableWithoutFeedback> */}
		</Modalize>
	);
};
