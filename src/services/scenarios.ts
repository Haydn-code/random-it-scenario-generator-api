import { scenarios } from '../fixtures/scenarios';

export default class ScenariosService {
	protected randomScenario(technology: string, role: string, environment: string) {
		// Gets technology
		if (!(technology in scenarios)) {
			const keys = Object.keys(scenarios);
			technology = keys[Math.floor(keys.length * Math.random())];
		}
		// Gets role
		if (!(role in scenarios[technology])) {
			const keys = Object.keys(scenarios[technology]);
			role = keys[Math.floor(keys.length * Math.random())];
		}
		// Gets environment
		if (!(environment in scenarios[technology][role])) {
			const keys = Object.keys(scenarios[technology][role]);
			environment = keys[Math.floor(keys.length * Math.random())];
		}
		return scenarios[technology][role][environment][
			Math.floor(scenarios[technology][role][environment].length * Math.random())
		];
	}
}
