import ScenariosService from './scenarios';
import Scenarios from '../fixtures/scenarios.json';

class TestScenariosService extends ScenariosService {
	public randomScenario(technology: string, role: string, environment: string) {
		return super.randomScenario(technology, role, environment);
	}
}

describe('Scenarios Service', () => {
	const testScenariosService = new TestScenariosService();

	it('Returns challenges, incidents and troubleshooting steps', () => {
		expect(testScenariosService.randomScenario('', '', '')).toBeInstanceOf({
			challenges: [],
			incidents: [],
			'troubleshooting steps': [],
		});
	});
	it('Returns an object with the specified parameters', () => {
		expect(Scenarios['Cloud Computing']['Software Engineer']['On-Prem Data Center']).toContain(
			testScenariosService.randomScenario(
				'Cloud Computing',
				'Software Engineer',
				'On-Prem Data Center',
			),
		);
	});
});
