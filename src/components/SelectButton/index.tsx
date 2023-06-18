import React from 'react';

import * as Styles from './styles';

interface ISelectButtonProps extends Partial<Styles.IVariant> {
	title: string;
	active: boolean;
	value: string;
	onChange: (value: string) => void;
}

const SelectButton: IComponent<ISelectButtonProps> = ({
	variant = 'primary',
	active,
	title,
	value,
	onChange,
}) => {
	return (
		<Styles.Container
			active={active}
			activeOpacity={1}
			variant={variant}
			onPress={() => onChange(value)}
		>
			<Styles.Circle variant={variant} />

			<Styles.Title>{title}</Styles.Title>
		</Styles.Container>
	);
};

export default SelectButton;
