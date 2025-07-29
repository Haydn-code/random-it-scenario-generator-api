import ScenariosService from './scenarios';

class TestScenariosService extends ScenariosService {
	public randomScenario(technology: string, role: string, environment: string): string {
		return super.randomScenario(technology, role, environment);
	}
}
