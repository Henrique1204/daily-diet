import styled, { css } from 'styled-components/native';

export const NewMeal = styled.View`
	margin-top: 40px;

	gap: 8px;
`;

export const NewMealLabel = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md2};
		font-family: ${theme.fontFamily.regular};

		color: ${theme.colors.gray_700};
	`}
`;

export const SectionTitle = styled.Text`
	${({ theme }) => css`
		margin-top: 32px;

		font-size: ${theme.fontSize.lg};
		font-family: ${theme.fontFamily.bold};

		color: ${theme.colors.gray_700};
	`}
`;
