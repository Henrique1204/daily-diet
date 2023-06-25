import React from 'react';
import { TextInputProps, TouchableOpacity } from 'react-native';

import { TextInput } from 'react-native/types';

import isEmptyString from '@helpers/isEmptyString';

import * as Styles from './styles';

interface IInputProps
	extends IDefaultProps,
		TextInputProps,
		Styles.IContainerProps {
	label: string;
	placeholderTextColor?: string;
}

const Input = React.forwardRef<TextInput, IInputProps>(
	({ label, customFlex, ...props }, ref) => {
		const inputRef = React.useRef<TextInput>(null);

		const [focus, setFocus] = React.useState<boolean>(false);

		const filled = !isEmptyString(props.value);

		const handleOnClickLabel = () => {
			// @ts-ignore
			if (ref) return ref?.current?.focus?.();

			inputRef.current?.focus();
		};

		return (
			<Styles.Container customFlex={customFlex} textArea={props.textArea}>
				<TouchableOpacity activeOpacity={1} onPress={handleOnClickLabel}>
					<Styles.Label>{label}</Styles.Label>
				</TouchableOpacity>

				<Styles.Input
					ref={ref || inputRef}
					active={filled || focus}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					{...props}
				/>
			</Styles.Container>
		);
	}
);

export default Input;
