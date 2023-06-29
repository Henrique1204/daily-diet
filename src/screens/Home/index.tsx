import React from 'react';

import { SectionList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import groupMealsByDate, { IGroupMealsByDate } from '@helpers/groupByDate';

import { mealsSelectAll } from '@storage/meal';

import {
	Button,
	Header,
	MainContainer,
	MealCard,
	StatisticCard,
} from '@components/index';

import * as Styles from './styles';

const Home: React.FC = () => {
	const [mealsList, setMealsList] = React.useState<IGroupMealsByDate[]>([]);

	const { navigate } = useNavigation();

	const goToStatistic = (params: IStatisticRouteParams) => {
		navigate('statistic', params);
	};

	const goToNewMeal = () => navigate('mealForm');

	const fetchMeals = async () => {
		const meals = await mealsSelectAll();

		setMealsList(groupMealsByDate(meals));
	};

	useFocusEffect(
		React.useCallback(() => {
			fetchMeals();
		}, [])
	);

	return (
		<MainContainer>
			<Header />

			<StatisticCard
				title='90,86%'
				description='das refeições dentro da dieta'
				showIconIn='right'
				customMargin='32px 0px 0px'
				onPress={() =>
					goToStatistic({
						title: '90,86%',
						description: 'das refeições dentro da dieta',
					})
				}
			/>

			<Styles.NewMeal>
				<Styles.NewMealLabel>Refeições</Styles.NewMealLabel>

				<Button title='Nova refeição' icon='plus' onPress={goToNewMeal} />
			</Styles.NewMeal>

			<SectionList
				sections={mealsList}
				keyExtractor={({ id }) => id.toString()}
				renderItem={({ item }) => <MealCard {...item} />}
				renderSectionHeader={({ section: { date } }) => (
					<Styles.SectionTitle>{date}</Styles.SectionTitle>
				)}
				stickySectionHeadersEnabled={false}
			/>
		</MainContainer>
	);
};

export default Home;
