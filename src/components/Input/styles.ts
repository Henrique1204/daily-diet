import styled, { css } from 'styled-components/native';

import { TextInput } from 'react-native';

export interface IContainerProps {
	customFlex?: string;
	textArea?: boolean;
}

export const Container = styled.View<IContainerProps>`
	min-height: ${({ textArea }) => (textArea ? '142px' : '70px')};

	gap: 4px;

	${({ customFlex }) => customFlex && `flex: ${customFlex};`}
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
}))<{ active: boolean; textArea?: boolean }>`
	padding: 12px 16px;
	border-radius: 6px;

	flex: 1;

	${({ theme, active, textArea }) => css`
		min-height: ${textArea ? '120px' : '48px'};
		max-height: ${textArea ? '120px' : '48px'};

		border: 1px solid ${theme.colors[active ? 'gray_500' : 'gray_300']};
		font-size: ${theme.fontSize.md1};
		font-family: ${theme.fontFamily.regular};

		color: ${theme.colors.gray_700};
		background-color: ${theme.colors.gray_200};
	`}
`;
