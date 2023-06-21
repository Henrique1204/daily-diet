import React from 'react';

import { IColorsEnum } from '@types_/core/assets/theme';

import * as Styles from './styles';

import ButtonIcon from '../ButtonIcon';

type IVariatnEnum = 'primary' | 'secondary' | 'neutral';

interface IStatisticCardProps
	extends Partial<Omit<Styles.IStyleProps, 'position' | 'color'>> {
	title: string;
	description: string;

	variant?: IVariatnEnum;
	showIconIn?: 'left' | 'right';
}

const backgroudEnum: Record<IVariatnEnum, IColorsEnum> = {
	primary: 'green_400',
	secondary: 'red_400',
	neutral: 'gray_300',
};

const iconColorEnum: Record<IVariatnEnum, IColorsEnum> = {
	primary: 'green_700',
	secondary: 'red_700',
	neutral: 'gray_600',
};

const StatisticCard: IComponent<IStatisticCardProps> = ({
	variant = 'primary',
	title,
	description,
	showIconIn,
	small,
	...props
}) => {
	return (
		<Styles.Container color={backgroudEnum[variant]} {...props}>
			{showIconIn && (
				<Styles.IconWrapper position={showIconIn}>
					<ButtonIcon
						color={iconColorEnum[variant]}
						icon={showIconIn === 'left' ? 'arrowLeft' : 'arrowUpRight'}
					/>
				</Styles.IconWrapper>
			)}

			<Styles.Title small={small}>{title}</Styles.Title>

			<Styles.Description>{description}</Styles.Description>
		</Styles.Container>
	);
};

export default StatisticCard;
