import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { IMealEntity } from '@types_/core/storage/meal';

import * as Styles from './styles';

const MealCard: IComponent<IMealEntity> = ({
	id,
	hour,
	name,
	description,
	date,
	insideInDiet,
}) => {
	const { navigate } = useNavigation();

	const goToMealDetails = () => {
		navigate('mealDetails', {
			id,
			name,
			date,
			description,
			hour,
			insideInDiet,
		});
	};

	return (
		<Styles.Container activeOpacity={0.5} onPress={goToMealDetails}>
			<Styles.Hour>{hour}</Styles.Hour>

			<Styles.Separator />

			<Styles.Title>{name}</Styles.Title>

			<Styles.Circle variant={insideInDiet ? 'primary' : 'secondary'} />
		</Styles.Container>
	);
};

export default MealCard;
