import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, NewMeal, Statistic } from '@screens/index';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
	return (
		<Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
			<Screen name='home' component={Home} />
			<Screen name='statistic' component={Statistic} />
			<Screen name='newMeal' component={NewMeal} />
		</Navigator>
	);
};

export default AppRoutes;
