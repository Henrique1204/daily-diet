import { Dimensions } from 'react-native';

import styled, { css } from 'styled-components/native';

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
