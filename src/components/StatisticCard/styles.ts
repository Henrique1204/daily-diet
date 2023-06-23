import styled, { css } from 'styled-components/native';

import { IColorsEnum } from '@types_/core/assets/theme';

export interface IStyleProps {
	color: IColorsEnum;
	position: 'left' | 'right';

	margin?: string;
	small?: boolean;
}

export const Container = styled.View<Pick<IStyleProps, 'color' | 'margin'>>`
	min-height: 110px;
	padding: 16px;
	border-radius: 8px;
	margin: ${({ margin }) => `${margin || '0px'}`};

	background: ${({ theme, color }) => theme.colors[color]};

	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	gap: 8px;

	position: relative;
`;

export const IconWrapper = styled.View<Pick<IStyleProps, 'position'>>`
	position: absolute;
	top: 12px;

	${({ position }) => {
		if (position === 'right') {
			return css`
				right: 12px;
			`;
		}

		return css`
			left: 12px;
		`;
	}}
`;

export const Title = styled.Text<Pick<IStyleProps, 'small'>>`
	${({ theme, small }) => css`
		font-size: ${theme.fontSize[small ? 'xl1' : 'xl2']};
		font-family: ${theme.fontFamily.bold};

		color: ${theme.colors.gray_700};
	`}
`;

export const Description = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md1};
		font-family: ${theme.fontFamily.regular};

		color: ${theme.colors.gray_600};
	`}
`;
