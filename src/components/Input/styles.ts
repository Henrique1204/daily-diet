import styled, { css } from 'styled-components/native';

import { TextInput } from 'react-native';

export const Container = styled.View`
	gap: 4px;
`;

export const Label = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md1};
		font-family: ${theme.fontFamily.bold};

		color: ${theme.colors.gray_600};
	`}
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
	placeholderTextColor: theme.colors.gray_500,
}))<{ active: boolean }>`
	min-height: 48px;
	max-height: 48px;
	padding: 12px 16px;
	border-radius: 6px;

	flex: 1;

	${({ theme, active }) => css`
		border: 1px solid ${theme.colors[active ? 'gray_500' : 'gray_300']};
		font-size: ${theme.fontSize.md1};
		font-family: ${theme.fontFamily.regular};

		color: ${theme.colors.gray_700};
		background-color: ${theme.colors.gray_200};
	`}
`;
