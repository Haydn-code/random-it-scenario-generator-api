import IndexController from './index';

class TestIndexController extends IndexController {
	public show() {
		return super.show();
	}
}

describe('Index Controller', () => {
	const testIndexController = new TestIndexController();
	const response = testIndexController.show();

	it('has correct title', () => {
		expect(response.data.title).toBe('Random It Scenario Generator');
	});
	it('has correct descripton', () => {
		expect(response.data.description).toBe(
			'Generates a random It-related scenario. Simply make a GET request to the /scenarios endpoint with the following optional query parameters',
		);
	});
	it('has correct options', () => {
		expect(JSON.stringify(response.data.options)).toBe(
			JSON.stringify({
				technology: ['Cloud Computing', 'Cybersecurity', 'DevOps'],
				role: ['System Administrator', 'Software Engineer', 'Security Analyst'],
				environment: ['Enterprise Network', 'Cloud Infrastructure', 'On-Prem Data Center'],
			}),
		);
	});
});
