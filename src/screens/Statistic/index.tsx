import React from 'react';
import { Text } from 'react-native';

import { IColorsEnum } from '@types_/core/assets/theme';

import * as Styles from './styles';
import { StatisticCard } from '@components/index';

type IVariatnEnum = 'primary' | 'secondary';

const backgroudEnum: Record<IVariatnEnum, IColorsEnum> = {
	primary: 'green_400',
	secondary: 'red_400',
};

const Statistic: IComponent = () => {
	return (
		<Styles.Container color={backgroudEnum.primary}>
			<StatisticCard
				margin='8px'
				title='90,86%'
				description='das refeições dentro da dieta'
				showIconIn='left'
			/>

			<Styles.ContentBottom></Styles.ContentBottom>
		</Styles.Container>
	);
};

export default Statistic;
