import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { IMealEntity } from '@types_/core/storage/meal';

import isEmptyString from '@helpers/isEmptyString';

import { Button, Input, SelectButton } from '@components/index';

import * as Styles from './styles';

const OPTIONS_ENUM = {
	YES: 'yes',
	NO: 'no',
};

const Form: IComponent = () => {
	const route = useRoute();

	const editInfos = route.params as IMealEntity;

	const selectOptionEditValue = editInfos?.insideInDiet
		? OPTIONS_ENUM.YES
		: OPTIONS_ENUM.NO;

	const [name, setName] = React.useState<string>(editInfos?.name || '');

	const [description, setDescription] = React.useState<string>(
		editInfos?.description || ''
	);

	const [date, setDate] = React.useState<string>(editInfos?.date || '');
	const [hour, setHour] = React.useState<string>(editInfos?.hour || '');

	const [selectOption, setSelectOption] = React.useState<string>(
		editInfos?.insideInDiet ? selectOptionEditValue : ''
	);

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
							value={OPTIONS_ENUM.YES}
							active={selectOption === 'yes'}
							onChange={setSelectOption}
						/>

						<SelectButton
							title='Não'
							value={OPTIONS_ENUM.NO}
							variant='secondary'
							active={selectOption === 'no'}
							onChange={setSelectOption}
						/>
					</Styles.InsideDietSelects>
				</Styles.InsideDietGroup>
			</Styles.Form>

			<Button
				title={editInfos ? 'Salvar alterações' : 'Cadastrar refeição'}
				disabled={!isFormFilled}
				onPress={handleOnAdd}
			/>
		</>
	);
};

export default Form;
