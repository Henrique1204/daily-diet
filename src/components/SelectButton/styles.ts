import styled, { css } from 'styled-components/native';

export interface IVariant {
	variant: 'primary' | 'secondary';
}

export interface IActive {
	active: boolean;
}

export const Container = styled.TouchableOpacity<IVariant & IActive>`
	height: 50px;
	border-radius: 6px;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 8px;
	flex: 1;

	${({ theme, variant, active }) => {
		const borderColorActive = variant === 'primary' ? 'green_700' : 'red_700';
		const backgroundActive = variant === 'primary' ? 'green_400' : 'red_400';

		return css`
			border: 1px solid ${theme.colors.gray_300};

			background-color: ${theme.colors.gray_300};

			${active &&
			css`
				border: 1px solid ${theme.colors[borderColorActive]};
				background-color: ${theme.colors[backgroundActive]};
			`}
		`;
	}}
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md1};
		font-family: ${theme.fontFamily.bold};

		color: ${theme.colors.gray_700};
	`}
`;

export const Circle = styled.View<IVariant>`
	width: 8px;
	height: 8px;
	border-radius: 50%;

	background-color: ${({ theme, variant }) =>
		theme.colors[variant === 'primary' ? 'green_700' : 'red_700']};
`;
