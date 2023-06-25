import { Dimensions } from 'react-native';

import styled, { css } from 'styled-components/native';

import { IColorsEnum } from '@types_/core/assets/theme';

export const Container = styled.SafeAreaView<{ color: IColorsEnum }>`
	background-color: ${({ theme, color }) => theme.colors[color]};

	flex: 1;

	position: relative;
`;

export const ContentBottom = styled.View`
	width: 100%;
	height: ${Dimensions.get('screen').height - 178}px;
	padding: 32px 24px 40px;
	border-radius: 20px 20px 0px 0px;

	background: ${({ theme }) => theme.colors.gray_200};

	position: absolute;
	bottom: 0;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		margin-bottom: 24px;

		font-size: ${theme.fontSize.md1};
		font-family: ${theme.fontFamily.bold};
		text-align: center;

		color: ${theme.colors.gray_700};
	`}
`;

export const StatisticRow = styled.View`
	margin-top: 16px;

	display: flex;
	flex-direction: row;
	gap: 16px;
`;
