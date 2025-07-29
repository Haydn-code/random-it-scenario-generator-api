import ScenariosService from '../services/scenarios';

export default class ScenariosController extends ScenariosService {
	protected show(
		technology: string,
		role: string,
		environment: string,
	): {
		data: {
			inputs: { technology: string; role: string; environment: string };
			scenario: { challenge: string; incident: string; 'troubleshooting step': string };
		};
		errors: { name: string; description: string }[];
	} {
		return {
			data: {
				inputs: { technology, role, environment },
				scenario: this.randomScenario(technology, role, environment),
			},
			errors: [],
		};
	}
}
