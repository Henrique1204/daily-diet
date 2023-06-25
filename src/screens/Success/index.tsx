import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button, MainContainer } from '@components/index';

import * as Styles from './styles';

import IlustrarionInsideDiet from '@images/Illustration-inside-diet.png';
import IllustrationOutDiet from '@images/Illustration-out-diet.png';

const Success: React.FC = () => {
	const route = useRoute();
	const { insideDiet } = route.params as ISuccessRouteParams;

	const { navigate } = useNavigation();

	const goToHome = () => navigate('home');

	return (
		<MainContainer>
			<Styles.Container>
				<Styles.Title insideDiet={insideDiet}>
					{insideDiet ? 'Continue assim!' : 'Que pena!'}
				</Styles.Title>

				{insideDiet ? (
					<Styles.Subtitle>
						Você continua <Styles.Strong>dentro da dieta</Styles.Strong>. Muito
						bem!
					</Styles.Subtitle>
				) : (
					<Styles.Subtitle>
						Você <Styles.Strong>saiu da dieta</Styles.Strong> dessa vez, mas
						continue se esforçando e não desista!
					</Styles.Subtitle>
				)}

				<Styles.Ilustration
					source={insideDiet ? IlustrarionInsideDiet : IllustrationOutDiet}
				/>

				<Button title='Ir para a página inicial' onPress={goToHome} />
			</Styles.Container>
		</MainContainer>
	);
};

export default Success;
