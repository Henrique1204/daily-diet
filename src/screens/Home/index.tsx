import React from 'react';

import { SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
	Button,
	Header,
	MainContainer,
	MealCard,
	StatisticCard,
} from '@components/index';

import * as Styles from './styles';

const mockData = [
	{
		date: '13.06.2023',
		data: [
			{
				title: 'X-tudo',
				date: '13/06/2023',
				hour: '20:00',
				description: 'Alguma coisa',
				insideDiet: false,
			},
			{
				title: 'Lasanha',
				date: '13/06/2023',
				hour: '20:00',
				description: 'Alguma coisa',
				insideDiet: true,
			},
		],
	},
];

const Home: React.FC = () => {
	const { navigate } = useNavigation();

	const goToStatistic = (params: IStatisticRouteParams) => {
		navigate('statistic', params);
	};

	const goToNewMeal = () => navigate('mealForm');

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
				sections={mockData}
				keyExtractor={({ title }, index) => title + index}
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
