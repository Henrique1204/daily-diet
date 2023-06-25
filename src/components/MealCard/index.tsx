import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as Styles from './styles';

interface IMealCardProps {
	hour: string;
	title: string;
	date: string;
	description: string;
	insideDiet: boolean;
}

const MealCard: IComponent<IMealCardProps> = ({
	hour,
	title,
	description,
	date,
	insideDiet,
}) => {
	const { navigate } = useNavigation();

	const goToMealDetails = () => {
		navigate('mealDetails', {
			name: title,
			date,
			description,
			hour,
			insideDiet,
		});
	};

	return (
		<Styles.Container activeOpacity={0.5} onPress={goToMealDetails}>
			<Styles.Hour>{hour}</Styles.Hour>

			<Styles.Separator />

			<Styles.Title>{title}</Styles.Title>

			<Styles.Circle variant={insideDiet ? 'primary' : 'secondary'} />
		</Styles.Container>
	);
};

export default MealCard;
