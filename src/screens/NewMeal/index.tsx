import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as Styles from './styles';
import { Button, Input, InternalHeader, SelectButton } from '@components/index';

const NewMeal: React.FC = () => {
	const [selectOption, setSelectOption] = React.useState<string>('');

	const { navigate } = useNavigation();

	const goToHome = () => navigate('home');

	return (
		<Styles.Container>
			<InternalHeader title='Nova refeição' onPress={goToHome} />

			<Styles.ContentBottom>
				<Styles.Form>
					<Input label='Nome' />

					<Input label='Descrição' textArea />

					<Styles.TimeGroup>
						<Input label='Data' customFlex='1' />

						<Input label='Hora' customFlex='1' />
					</Styles.TimeGroup>

					<Styles.InsideDietGroup>
						<Styles.InsideDietLabel>
							Está dentro da dieta?
						</Styles.InsideDietLabel>

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

				<Button title='Cadastrar refeição' />
			</Styles.ContentBottom>
		</Styles.Container>
	);
};

export default NewMeal;
