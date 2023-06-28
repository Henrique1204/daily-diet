import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
	Home,
	MealDetails,
	MealForm,
	Statistic,
	Success,
} from '@screens/index';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
	return (
		<Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
			<Screen name='home' component={Home} />
			<Screen name='mealDetails' component={MealDetails} />
			<Screen name='mealForm' component={MealForm} />
			<Screen name='statistic' component={Statistic} />
			<Screen name='success' component={Success} />
		</Navigator>
	);
};

export default AppRoutes;
