import { IMealEntity } from '@types_/core/storage/meal';
import { G } from 'react-native-svg';

export type IGroupMealsByDate = {
	date: string;
	data: IMealEntity[];
};

const groupMealsByDate = (meals: IMealEntity[]): IGroupMealsByDate[] => {
	return meals.reduce((acc: IGroupMealsByDate[], meal) => {
		const dateString = meal.date.replace(/\//g, '.');

		const isDateExist = acc.some(({ date }) => date === dateString);

		if (isDateExist) {
			return acc.map((item) => {
				if (item.date !== dateString) return item;

				return { date: item.date, data: [...item.data, meal] };
			});
		}

		return [...acc, { date: dateString, data: [meal] }];
	}, []);
};

export default groupMealsByDate;
