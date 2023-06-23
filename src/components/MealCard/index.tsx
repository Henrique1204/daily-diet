import React from 'react';

import * as Styles from './styles';

interface IMealCardProps extends Partial<Styles.ICircleProps> {
	hour: string;
	title: string;
}

const MealCard: IComponent<IMealCardProps> = ({
	variant = 'primary',
	hour,
	title,
}) => {
	return (
		<Styles.Container>
			<Styles.Hour>{hour}</Styles.Hour>

			<Styles.Separator />

			<Styles.Title>{title}</Styles.Title>

			<Styles.Circle variant={variant} />
		</Styles.Container>
	);
};

export default MealCard;
