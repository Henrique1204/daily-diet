import styled, { css } from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	padding: 12px 24px 24px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 16px;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.fontSize.lg};
		font-family: ${theme.fontFamily.bold};
		text-align: center;

		color: ${theme.colors.gray_700};
	`}
`;

export const AbsoluteContainer = styled.View`
	position: absolute;
	left: 24px;
	top: 12px;
`;
