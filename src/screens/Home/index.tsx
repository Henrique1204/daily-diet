import React from 'react';

import { Header, MainContainer, StatisticCard } from '@components/index';

const Home: React.FC = () => {
	return (
		<MainContainer>
			<Header />

			<StatisticCard
				title='90,86%'
				description='das refeições dentro da dieta'
				showIconIn='right'
				margin='32px 0px 0px'
			/>
		</MainContainer>
	);
};

export default Home;
