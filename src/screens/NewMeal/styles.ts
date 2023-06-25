import { Dimensions } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	background-color: ${({ theme }) => theme.colors.gray_300};

	flex: 1;

	position: relative;
`;

export const ContentBottom = styled.View`
	width: 100%;
	height: ${Dimensions.get('screen').height - 120}px;
	padding: 32px 24px 40px;
	border-radius: 20px 20px 0px 0px;

	background: ${({ theme }) => theme.colors.gray_200};

	position: absolute;
	bottom: 0;
`;
