import styled from 'styled-components/native';

import { IColorsEnum } from '@types_/core/assets/theme';

import {
	ArrowLeft,
	ArrowUpRight,
	PencilSimpleLine,
	Plus,
	Trash,
} from 'phosphor-react-native';

export const Container = styled.TouchableOpacity``;

interface ICustomColor {
	customColor: IColorsEnum;
}

export const ArrowLeftIcon = styled(ArrowLeft).attrs(
	({ theme, customColor }: IThemeProps<ICustomColor>) => ({
		color: theme.colors[customColor],
		size: 24,
	})
)<ICustomColor>``;

export const ArrowUpRightIcon = styled(ArrowUpRight).attrs(
	({ theme, customColor }: IThemeProps<ICustomColor>) => ({
		color: theme.colors[customColor],
		size: 24,
	})
)<ICustomColor>``;

export const PencilIcon = styled(PencilSimpleLine).attrs(
	({ theme, customColor }: IThemeProps<ICustomColor>) => ({
		color: theme.colors[customColor],
		size: 24,
	})
)<ICustomColor>``;

export const PlusIcon = styled(Plus).attrs(
	({ theme, customColor }: IThemeProps<ICustomColor>) => ({
		color: theme.colors[customColor],
		size: 24,
	})
)<ICustomColor>``;

export const TashIcon = styled(Trash).attrs(
	({ theme, customColor }: IThemeProps<ICustomColor>) => ({
		color: theme.colors[customColor],
		size: 24,
	})
)<ICustomColor>``;
