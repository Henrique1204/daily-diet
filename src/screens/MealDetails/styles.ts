import styled, { css } from 'styled-components/native';

import { Dimensions } from 'react-native';

interface IVariant {
	variant: 'primary' | 'secondary';
}

export const Container = styled.SafeAreaView<IVariant>`
	background-color: ${({ theme, variant }) =>
		theme.colors[variant === 'primary' ? 'green_400' : 'red_400']};

	flex: 1;

	position: relative;
`;

export const ContentBottom = styled.View`
	width: 100%;
	height: ${Dimensions.get('screen').height - 120}px;
	padding: 32px 24px 180px;
	border-radius: 20px 20px 0px 0px;

	background: ${({ theme }) => theme.colors.gray_200};

	position: absolute;
	bottom: 0;
`;

export const GroupInfo = styled.View`
	margin-bottom: 24px;

	gap: 4px;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.lg};
		font-family: ${theme.fontFamily.bold};

		color: ${theme.colors.gray_700};
	`}
`;

export const Description = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md2};
		font-family: ${theme.fontFamily.regular};

		color: ${theme.colors.gray_600};
	`}
`;

export const DateTitle = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md1};
		font-family: ${theme.fontFamily.bold};

		color: ${theme.colors.gray_700};
	`}
`;

export const DateText = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md2};
		font-family: ${theme.fontFamily.regular};

		color: ${theme.colors.gray_600};
	`}
`;

export const TagContainer = styled.View`
	height: 34px;
	padding: 0px 16px;
	border-radius: 50%;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-self: flex-start;
	gap: 8px;

	background-color: ${({ theme }) => theme.colors.gray_300};
`;

export const Circle = styled.View<IVariant>`
	width: 8px;
	height: 8px;
	border-radius: 50%;

	background-color: ${({ theme, variant }) =>
		theme.colors[variant === 'primary' ? 'green_700' : 'red_700']};
`;

export const TagLabel = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md1};
		font-family: ${theme.fontFamily.regular};

		color: ${theme.colors.gray_700};
	`}
`;

export const GroupButtons = styled.View`
	width: 100%;

	gap: 12px;

	position: absolute;
	left: 24px;
	bottom: 48px;
`;
