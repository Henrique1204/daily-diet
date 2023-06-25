import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import { IColorsEnum } from '@types_/core/assets/theme';

import { StatisticCard } from '@components/index';

import * as Styles from './styles';

type IVariatnEnum = 'primary' | 'secondary';

const backgroudEnum: Record<IVariatnEnum, IColorsEnum> = {
	primary: 'green_400',
	secondary: 'red_400',
};

const Statistic: IComponent = () => {
	const route = useRoute();
	const statisticData = route.params as IStatisticRouteParams;

	const { navigate } = useNavigation();

	const goToHome = () => navigate('home');

	return (
		<Styles.Container color={backgroudEnum.primary}>
			<StatisticCard
				customMargin='8px'
				showIconIn='left'
				onPress={goToHome}
				{...statisticData}
			/>

			<Styles.ContentBottom>
				<Styles.Title>Estatísticas gerais</Styles.Title>

				<StatisticCard
					title='4'
					description='melhor sequência de pratos dentro da dieta'
					variant='neutral'
				/>

				<StatisticCard
					title='109'
					description='refeições registradas'
					variant='neutral'
					customMargin='16px 0 0'
				/>

				<Styles.StatisticRow>
					<StatisticCard
						title='32'
						description='refeições dentro da dieta'
						small
					/>

					<StatisticCard
						title='77'
						description='refeições fora da dieta'
						variant='secondary'
						small
					/>
				</Styles.StatisticRow>
			</Styles.ContentBottom>
		</Styles.Container>
	);
};

export default Statistic;
