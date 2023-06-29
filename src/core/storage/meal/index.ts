import AsyncStorage from '@react-native-async-storage/async-storage';

import { IMealEntity } from '@types_/core/storage/meal';

import { MEAL_COLLECTION } from '../storeageConfig';

export const mealsSelectAll = async (): Promise<IMealEntity[]> => {
	try {
		const meals = await AsyncStorage.getItem(MEAL_COLLECTION);

		if (!meals) return [];

		return JSON.parse(meals);
	} catch (error) {
		throw error;
	}
};

const generateNewId = (meals: IMealEntity[]): number => {
	if (meals.length === 0) return 1;

	const mealsId = meals.map(({ id }) => id);

	return Math.max(...mealsId) + 1;
};

export const mealAdd = async (
	newMeal: Omit<IMealEntity, 'id'>
): Promise<void> => {
	try {
		const meals = await mealsSelectAll();

		const storageData = JSON.stringify([
			...meals,
			{ ...newMeal, id: generateNewId(meals) },
		]);

		await AsyncStorage.setItem(MEAL_COLLECTION, storageData);
	} catch (error) {
		throw error;
	}
};

export const mealUpdate = async (mealUpdated: IMealEntity): Promise<void> => {
	try {
		const meals = await mealsSelectAll();

		const mealsUpdated = meals.map((meal) => {
			if (meal.id === mealUpdated.id) return mealUpdated;

			return meal;
		});

		const storageData = JSON.stringify(mealsUpdated);

		await AsyncStorage.setItem(MEAL_COLLECTION, storageData);
	} catch (error) {
		throw error;
	}
};

export const mealRemvoe = async (id: number): Promise<void> => {
	try {
		const meals = await mealsSelectAll();

		const mealsFiltered = meals.filter((meal) => meal.id !== id);

		const storageData = JSON.stringify(mealsFiltered);

		await AsyncStorage.setItem(MEAL_COLLECTION, storageData);
	} catch (error) {
		throw error;
	}
};
