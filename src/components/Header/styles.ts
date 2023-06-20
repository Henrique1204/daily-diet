import styled from 'styled-components/native';

export const Container = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.Image`
	width: 82px;
	height: 37px;
`;

export const User = styled.View`
	width: 40px;
	height: 40px;
	border: 2px solid ${({ theme }) => theme.colors.gray_600};
	border-radius: 50%;

	overflow: hidden;
`;

export const UserPhoto = styled.Image`
	width: 100%;
	height: 100%;
`;
