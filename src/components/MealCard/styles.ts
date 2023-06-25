import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	padding: 16px;
	border: 1px solid ${({ theme }) => theme.colors.gray_400};
	border-radius: 6px;
	margin-top: 8px;

	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 8px;
`;

export const Hour = styled.Text``;

export const Separator = styled.View`
	width: 1px;
	height: 14px;
	background-color: ${({ theme }) => theme.colors.gray_400};
`;

export const Title = styled.Text`
	flex: 1;
`;

export interface ICircleProps {
	variant: 'primary' | 'secondary';
}

export const Circle = styled.View<ICircleProps>`
	width: 14px;
	height: 14px;
	border-radius: 50%;

	background-color: ${({ theme, variant }) =>
		theme.colors[variant === 'primary' ? 'green_500' : 'red_500']};
`;
