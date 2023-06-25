import styled, { css } from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.Text<{ insideDiet: boolean }>`
	${({ theme, insideDiet }) => css`
		margin-bottom: 16px;

		font-size: ${theme.fontSize.xl1};
		font-family: ${theme.fontFamily.bold};
		text-align: center;

		color: ${theme.colors[insideDiet ? 'green_700' : 'red_700']};
	`}
`;

export const Subtitle = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md2};
		font-family: ${theme.fontFamily.regular};
		text-align: center;

		color: ${theme.colors.gray_700};
	`}
`;

export const Strong = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.md2};
		font-family: ${theme.fontFamily.bold};

		color: ${theme.colors.gray_700};
	`}
`;

export const Ilustration = styled.Image`
	width: 230px;
	height: 300px;
	margin: 60px 0;
`;
