import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button, Input, SelectButton } from '@components/index';

import * as Styles from './styles';
import isEmptyString from '@helpers/isEmptyString';

const Form: IComponent = () => {
	const [name, setName] = React.useState<string>('');
	const [description, setDescription] = React.useState<string>('');

	const [date, setDate] = React.useState<string>('');
	const [hour, setHour] = React.useState<string>('');

	const [selectOption, setSelectOption] = React.useState<string>('');

	const { navigate } = useNavigation();

	const isFormFilled =
		!isEmptyString(name) &&
		!isEmptyString(description) &&
		!isEmptyString(date) &&
		!isEmptyString(hour) &&
		!isEmptyString(selectOption);

	const handleOnAdd = () => {
		navigate('success', {
			insideDiet: selectOption === 'yes',
		});
	};

	return (
		<>
			<Styles.Form>
				<Input label='Nome' value={name} onChangeText={setName} />

				<Input
					label='Descrição'
					textArea
					value={description}
					onChangeText={setDescription}
				/>

				<Styles.TimeGroup>
					<Input
						label='Data'
						customFlex='1'
						value={date}
						onChangeText={setDate}
					/>

					<Input
						label='Hora'
						customFlex='1'
						value={hour}
						onChangeText={setHour}
					/>
				</Styles.TimeGroup>

				<Styles.InsideDietGroup>
					<Styles.InsideDietLabel>Está dentro da dieta?</Styles.InsideDietLabel>

					<Styles.InsideDietSelects>
						<SelectButton
							title='Sim'
							value='yes'
							active={selectOption === 'yes'}
							onChange={setSelectOption}
						/>

						<SelectButton
							title='Não'
							value='no'
							variant='secondary'
							active={selectOption === 'no'}
							onChange={setSelectOption}
						/>
					</Styles.InsideDietSelects>
				</Styles.InsideDietGroup>
			</Styles.Form>

			<Button
				title='Cadastrar refeição'
				disabled={!isFormFilled}
				onPress={handleOnAdd}
			/>
		</>
	);
};

export default Form;
