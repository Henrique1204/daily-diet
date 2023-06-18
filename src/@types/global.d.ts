import { AccessibilityProps } from 'react-native';

import { ITheme } from './assets/theme';

declare global {
	export interface IDefaultProps extends Partial<AccessibilityProps> {
		testID?: string;
	}

	export interface IDefaultPropsWithChildren extends IDefaultProps {
		children?: React.ReactNode;
	}

	export interface IComponent<T = {}> extends React.FC<IDefaultProps & T> {}

	export interface IComponentWithChildren<T = {}>
		extends React.FC<IDefaultPropsWithChildren & T> {}

	export interface IPlayersRouteParams {
		group: string;
	}

	export type IThemeProps<T extends {}> = T & {
		theme: ITheme;
	};

	namespace ReactNavigation {
		interface RootParamList {
			home: undefined;
		}
	}
}
