import React from 'react';
import { Alert } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { IMealEntity } from '@types_/core/storage/meal';

import { Button, InternalHeader } from '@components/index';

import * as Styles from './styles';

const MealDetails: React.FC = () => {
	const route = useRoute();
	const { navigate } = useNavigation();

	const { insideInDiet, date, description, hour, name, id } =
		route.params as IMealEntity;

	const goToHome = () => navigate('home');

	const goToEditMeal = () => {
		navigate('mealForm', { id, insideInDiet, date, description, hour, name });
	};

	const handleOnRemove = () => {
		const _onRemove = async () => {
			try {
			} catch (error) {
				console.error(error);
			}
		};

		Alert.alert('', 'Deseja realmente excluir o registro da refeição?', [
			{ text: 'Cancelar' },
			{ text: 'Sim, exluir', onPress: _onRemove },
		]);
	};

	return (
		<Styles.Container variant={insideInDiet ? 'primary' : 'secondary'}>
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
					<Styles.Circle variant={insideInDiet ? 'primary' : 'secondary'} />

					<Styles.TagLabel>
						{insideInDiet ? 'dentro da dieta' : 'fora da dieta'}
					</Styles.TagLabel>
				</Styles.TagContainer>

				<Styles.GroupButtons>
					<Button
						title='Editar refeição'
						icon='pencil'
						onPress={goToEditMeal}
					/>

					<Button
						title='Excluir refeição'
						icon='trash'
						variant='secondary'
						onPress={handleOnRemove}
					/>
				</Styles.GroupButtons>
			</Styles.ContentBottom>
		</Styles.Container>
	);
};

export default MealDetails;
