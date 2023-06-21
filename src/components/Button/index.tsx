import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import useActiveClick from '@hooks/useActiveClick';

import * as Styles from './styles';

interface IButtonProps extends Partial<Styles.IVariant>, TouchableOpacityProps {
	icon?: IIconEnum;
	title: string;
}

const Button: IComponent<IButtonProps> = ({
	variant = 'primary',
	icon,
	title,
	...props
}) => {
	const activeClickProps = useActiveClick(200);

	const Icons: Record<IIconEnum, JSX.Element> = {
		arrowUpRight: <Styles.TashIcon variant={variant} />,
		arrowLeft: <Styles.ArrowUpRightIcon variant={variant} />,
		pencil: <Styles.PencilIcon variant={variant} />,
		plus: <Styles.PlusIcon variant={variant} />,
		trash: <Styles.TashIcon variant={variant} />,
	};

	return (
		<Styles.Container
			accessible
			accessibilityRole='button'
			role='button'
			accessibilityState={{
				disabled: props?.disabled,
			}}
			activeOpacity={1}
			variant={variant}
			{...activeClickProps}
			{...props}
		>
			{icon && Icons[icon]}

			<Styles.Title variant={variant}>{title}</Styles.Title>
		</Styles.Container>
	);
};

export default Button;
