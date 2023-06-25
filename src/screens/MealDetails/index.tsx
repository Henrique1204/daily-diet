import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Button, InternalHeader } from '@components/index';

import * as Styles from './styles';

const MealDetails: React.FC = () => {
	const route = useRoute();
	const { navigate } = useNavigation();

	const { insideDiet, date, description, hour, name } =
		route.params as IMealDetailsRouteParams;

	const goToHome = () => navigate('home');

	return (
		<Styles.Container variant={insideDiet ? 'primary' : 'secondary'}>
			<InternalHeader title='Refeição' onPress={goToHome} />

			<Styles.ContentBottom>
				<Styles.GroupInfo>
					<Styles.Title>{name}</Styles.Title>

					<Styles.Description>{description}</Styles.Description>
				</Styles.GroupInfo>

				<Styles.GroupInfo>
					<Styles.DateTitle>Data e hora</Styles.DateTitle>

					<Styles.DateText>
						{date} às {hour}
					</Styles.DateText>
				</Styles.GroupInfo>

				<Styles.TagContainer>
					<Styles.Circle variant={insideDiet ? 'primary' : 'secondary'} />

					<Styles.TagLabel>
						{insideDiet ? 'dentro da dieta' : 'fora da dieta'}
					</Styles.TagLabel>
				</Styles.TagContainer>

				<Styles.GroupButtons>
					<Button title='Editar refeição' icon='pencil' />
					<Button title='Excluir refeição' icon='trash' variant='secondary' />
				</Styles.GroupButtons>
			</Styles.ContentBottom>
		</Styles.Container>
	);
};

export default MealDetails;
