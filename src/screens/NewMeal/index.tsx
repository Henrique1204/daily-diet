import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as Styles from './styles';
import { InternalHeader } from '@components/index';

const NewMeal: React.FC = () => {
	const { navigate } = useNavigation();

	const goToHome = () => navigate('home');

	return (
		<Styles.Container>
			<InternalHeader title='Nova refeição' onPress={goToHome} />

			<Styles.ContentBottom></Styles.ContentBottom>
		</Styles.Container>
	);
};

export default NewMeal;
