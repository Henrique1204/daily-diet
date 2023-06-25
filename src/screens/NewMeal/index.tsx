import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { InternalHeader } from '@components/index';

import * as Styles from './styles';

import Form from './components/Form';

const NewMeal: React.FC = () => {
	const { navigate } = useNavigation();

	const goToHome = () => navigate('home');

	return (
		<Styles.Container>
			<InternalHeader title='Nova refeição' onPress={goToHome} />

			<Styles.ContentBottom>
				<Form />
			</Styles.ContentBottom>
		</Styles.Container>
	);
};

export default NewMeal;
