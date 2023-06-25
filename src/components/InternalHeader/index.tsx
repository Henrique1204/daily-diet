import ButtonIcon from '@components/ButtonIcon';
import React from 'react';

import * as Styles from './styles';

interface IInternalHeaderProps {
	title: string;
	onPress?: () => void;
}

const InternalHeader: IComponent<IInternalHeaderProps> = ({
	title,
	onPress,
}) => {
	return (
		<Styles.Container>
			<Styles.AbsoluteContainer>
				<ButtonIcon icon='arrowLeft' color='gray_600' onPress={onPress} />
			</Styles.AbsoluteContainer>

			<Styles.Title>{title}</Styles.Title>
		</Styles.Container>
	);
};

export default InternalHeader;
