import ScenariosController from './scenarios';

class TestScenariosController extends ScenariosController {
	public show(technology: string, role: string, environment: string) {
		return super.show(technology, role, environment);
	}
}

describe('Scenarios Controller', () => {
	const testScenariosController = new TestScenariosController();
	const response = testScenariosController.show('technology', 'role', 'environment');

	it('return original outputs', () => {
		expect(response.data.inputs.technology).toBe('technology');
		expect(response.data.inputs.role).toBe('role');
		expect(response.data.inputs.environment).toBe('environment');
	});

	it('returns a scenario', () => {
		expect(response.data.scenario.challenge).toBeTruthy;
		expect(response.data.scenario.incident).toBeTruthy;
		expect(response.data.scenario['troubleshooting step']).toBeTruthy;
	});
});
