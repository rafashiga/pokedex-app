import React from 'react';
import {
	Modal,
	ModalProps,
	View,
	TouchableWithoutFeedback,
} from 'react-native';

import { styles } from './styles';

interface ModalViewProps extends ModalProps {
	children: React.ReactNode;
	closeModal: () => void;
}

export const ModalView = ({
	children,
	closeModal,
	...rest
}: ModalViewProps) => {
	return (
		<Modal transparent statusBarTranslucent animationType='slide' {...rest}>
			<TouchableWithoutFeedback onPress={closeModal}>
				<View style={styles.overlay}>
					<View style={styles.container}>
						<View style={styles.bar} />
						{children}
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};
