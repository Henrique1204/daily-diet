import styled, { css } from 'styled-components/native';

import {
	ArrowLeft,
	ArrowUpRight,
	PencilSimpleLine,
	Plus,
	Trash,
} from 'phosphor-react-native';

export interface IVariant {
	variant: 'primary' | 'secondary';
}

export interface IActive {
	active: boolean;
}

export const Container = styled.TouchableOpacity<IVariant & IActive>`
	width: 100%;
	height: 50px;
	border-radius: 6px;
	border: 1px solid;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 12px;

	${({ theme, variant, active }) => {
		const color = variant === 'primary' ? 'white' : 'gray_700';

		const background = variant === 'primary' ? 'gray_600' : 'white';
		const backgroundActive = variant === 'primary' ? 'gray_700' : 'gray_300';

		return css`
			color: ${theme.colors[color]};
			background-color: ${theme.colors[background]};

			${active &&
			css`
				color: ${theme.colors.gray_700};
				background-color: ${theme.colors[backgroundActive]};
			`}
		`;
	}}
`;

export const Title = styled.Text<IVariant>`
	${({ theme, variant }) => css`
		font-size: ${theme.fontSize.md1};
		font-family: ${theme.fontFamily.bold};

		color: ${theme.colors[variant === 'primary' ? 'white' : 'gray_700']};
	`}
`;

export const ArrowLeftIcon = styled(ArrowLeft).attrs(
	({ theme, variant }: IThemeProps<IVariant>) => ({
		color: theme.colors[variant === 'primary' ? 'white' : 'gray_700'],
		size: 18,
	})
)<IVariant>``;

export const ArrowUpRightIcon = styled(ArrowUpRight).attrs(
	({ theme, variant }: IThemeProps<IVariant>) => ({
		color: theme.colors[variant === 'primary' ? 'white' : 'gray_700'],
		size: 18,
	})
)<IVariant>``;

export const PencilIcon = styled(PencilSimpleLine).attrs(
	({ theme, variant }: IThemeProps<IVariant>) => ({
		color: theme.colors[variant === 'primary' ? 'white' : 'gray_700'],
		size: 18,
	})
)<IVariant>``;

export const PlusIcon = styled(Plus).attrs(
	({ theme, variant }: IThemeProps<IVariant>) => ({
		color: theme.colors[variant === 'primary' ? 'white' : 'gray_700'],
		size: 18,
	})
)<IVariant>``;

export const TashIcon = styled(Trash).attrs(
	({ theme, variant }: IThemeProps<IVariant>) => ({
		color: theme.colors[variant === 'primary' ? 'white' : 'gray_700'],
		size: 18,
	})
)<IVariant>``;
