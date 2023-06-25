import { Dimensions } from 'react-native';

import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
	background-color: ${({ theme }) => theme.colors.gray_300};

	flex: 1;

	position: relative;
`;

export const ContentBottom = styled.View`
	width: 100%;
	height: ${Dimensions.get('screen').height - 120}px;
	padding: 32px 24px 60px;
	border-radius: 20px 20px 0px 0px;

	background: ${({ theme }) => theme.colors.gray_200};

	position: absolute;
	bottom: 0;
`;

export const Form = styled.View`
	width: 100%;

	display: flex;
	gap: 24px;

	flex: 1;
`;

export const TimeGroup = styled.View`
	width: 100%;

	flex-direction: row;
	gap: 24px;
`;

export const InsideDietGroup = styled.View`
	gap: 4px;
`;

export const InsideDietLabel = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md1};
		font-family: ${theme.fontFamily.bold};

		color: ${theme.colors.gray_600};
	`}
`;

export const InsideDietSelects = styled.View`
	flex-direction: row;
	gap: 8px;
	flex: 1;
`;
