import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { IColorsEnum } from '@types_/core/assets/theme';

import * as Styles from './styles';

interface IButtonIconProps extends TouchableOpacityProps {
	icon: IIconEnum;
	color: IColorsEnum;
}

const ButtonIcon: IComponent<IButtonIconProps> = ({
	icon,
	color,
	...props
}) => {
	const Icons: Record<IIconEnum, JSX.Element> = {
		arrowUpRight: <Styles.ArrowUpRightIcon customColor={color} />,
		arrowLeft: <Styles.ArrowLeftIcon customColor={color} />,
		pencil: <Styles.PencilIcon customColor={color} />,
		plus: <Styles.PlusIcon customColor={color} />,
		trash: <Styles.TashIcon customColor={color} />,
	};

	return (
		<Styles.Container
			accessibilityRole='button'
			role='button'
			accessibilityState={{
				disabled: props?.disabled,
			}}
			{...props}
		>
			{Icons[icon]}
		</Styles.Container>
	);
};

export default ButtonIcon;
