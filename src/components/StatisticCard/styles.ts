import styled, { css } from 'styled-components/native';

import { IColorsEnum } from '@types_/core/assets/theme';

export interface IStyleProps {
	color: IColorsEnum;
	position: 'left' | 'right';

	customMargin?: string;
	height?: string;
	small?: boolean;
}

export const Container = styled.View<Omit<IStyleProps, 'position' | 'small'>>`
	padding: 16px;
	border-radius: 8px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	gap: 8px;

	position: relative;

	${({ theme, height, customMargin, color }) => {
		return css`
			min-height: ${height || '110px'};
			max-height: ${height || '110px'};
			margin: ${customMargin || '0px'};

			background: ${theme.colors[color]};
		`;
	}}
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
		text-align: center;

		color: ${theme.colors.gray_700};
	`}
`;

export const Description = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md1};
		font-family: ${theme.fontFamily.regular};
		text-align: center;

		color: ${theme.colors.gray_600};
	`}
`;
