import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { InternalHeader } from '@components/index';

import * as Styles from './styles';

import Form from './components/Form';

const MealForm: React.FC = () => {
	const route = useRoute();
	const { navigate } = useNavigation();

	const editInfos = route.params as IMealInfos;

	const goBack = () => {
		if (editInfos) return navigate('mealDetails', editInfos);

		navigate('home');
	};

	return (
		<Styles.Container>
			<InternalHeader
				title={editInfos ? 'Editar refeição' : 'Nova refeição'}
				onPress={goBack}
			/>

			<Styles.ContentBottom>
				<Form />
			</Styles.ContentBottom>
		</Styles.Container>
	);
};

export default MealForm;
