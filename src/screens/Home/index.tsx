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
				hour: '20:00',
				title: 'X-tudo',
				isOutDiet: true,
			},
			{
				hour: '20:00',
				title: 'Lasanha',
				isOutDiet: true,
			},
		],
	},
	{
		date: '12.06.2023',
		data: [
			{
				hour: '20:00',
				title: 'Arroz e batata doce',
				isOutDiet: false,
			},
		],
	},
	{
		date: '13.06.2023',
		data: [
			{
				hour: '20:00',
				title: 'X-tudo',
				isOutDiet: true,
			},
			{
				hour: '20:00',
				title: 'Lasanha',
				isOutDiet: true,
			},
		],
	},
	{
		date: '12.06.2023',
		data: [
			{
				hour: '20:00',
				title: 'Arroz e batata doce',
				isOutDiet: false,
			},
		],
	},
];

const Home: React.FC = () => {
	const { navigate } = useNavigation();

	const goToStatistic = (params: IStatisticRouteParams) => {
		navigate('statistic', params);
	};

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

				<Button title='Nova refeição' icon='plus' />
			</Styles.NewMeal>

			<SectionList
				sections={mockData}
				keyExtractor={({ title }, index) => title + index}
				renderItem={({ item }) => (
					<MealCard
						hour={item.hour}
						title={item.title}
						variant={item.isOutDiet ? 'secondary' : 'primary'}
					/>
				)}
				renderSectionHeader={({ section: { date } }) => (
					<Styles.SectionTitle>{date}</Styles.SectionTitle>
				)}
				stickySectionHeadersEnabled={false}
			/>
		</MainContainer>
	);
};

export default Home;
