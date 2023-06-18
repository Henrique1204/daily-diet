import React from 'react';

import useActiveClick from '@hooks/useActiveClick';

import * as Styles from './styles';

type IConEnum = 'arrowLeft' | 'arrowUpRight' | 'pencil' | 'plus' | 'trash';

interface IButtonProps extends Partial<Styles.IVariant> {
	icon?: IConEnum;
	title: string;
}

const Button: IComponent<IButtonProps> = ({
	variant = 'primary',
	icon,
	title,
}) => {
	const activeClickProps = useActiveClick(200);

	const Icons: Record<IConEnum, JSX.Element> = {
		arrowUpRight: <Styles.TashIcon variant={variant} />,
		arrowLeft: <Styles.ArrowUpRightIcon variant={variant} />,
		pencil: <Styles.PencilIcon variant={variant} />,
		plus: <Styles.PlusIcon variant={variant} />,
		trash: <Styles.TashIcon variant={variant} />,
	};

	return (
		<Styles.Container activeOpacity={1} variant={variant} {...activeClickProps}>
			{icon && Icons[icon]}

			<Styles.Title variant={variant}>{title}</Styles.Title>
		</Styles.Container>
	);
};

export default Button;
