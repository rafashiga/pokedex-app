import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import TypeSvg from '../../assets/types/bug.svg';

import { styles } from './styles';

interface IFilter {
	id: string;
	name: string;
	icon: any;
	color: string;
}

interface FiltersOptionsProps {
	title: string;
	data?: IFilter[];
	itemsSelected?: string[];
	setFilters: (name: string) => void;
}

export const FiltersOptions = ({
	title,
	data,
	itemsSelected,
	setFilters,
}: FiltersOptionsProps) => {
	const handleItemSelected = (name: string) => {
		return !!itemsSelected?.find((item) => item === name);
	};

	return (
		<>
			<Text style={styles.filterTitle}>{title}</Text>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingRight: 10 }}
				style={styles.filterButtonWrapper}
			>
				{data &&
					data.map(({ id, name, icon: Icon, color }) => (
						<RectButton
							key={id}
							style={[
								styles.filterButton,
								{
									backgroundColor: handleItemSelected(name) ? color : '#fff',
								},
							]}
							onPress={() => setFilters(name)}
						>
							<Icon fill={handleItemSelected(name) ? '#fff' : color} />
						</RectButton>
					))}
			</ScrollView>
		</>
	);
};
