import ScenariosRouter from './scenarios';

describe('Scenarios Router', () => {
	it('Fails on invalid method', () => {
		const testScenariosRouter = new ScenariosRouter();
		const mockedRes: { setHeader: any; writeHead: any; end: any } = {
			setHeader: jest.fn(),
			writeHead: jest.fn(),
			end: jest.fn(),
		};
		testScenariosRouter.route(
			'POST',
			{ technology: 'tech test', role: 'role test', environment: 'environment test' },
			mockedRes,
		);
		expect(mockedRes.writeHead).toHaveBeenCalledWith(405);
		expect(mockedRes.end).toHaveBeenCalledWith(
			JSON.stringify({
				data: {},
				errors: [
					{
						name: '405 error',
						description: 'This endpoint only supports GET requests',
					},
				],
			}),
		);
	});
	it('Succeeds on GET request', () => {
		const testScenariosRouter = new ScenariosRouter();
		const mockedRes: { setHeader: any; writeHead: any; end: any } = {
			setHeader: jest.fn(),
			writeHead: jest.fn(),
			end: jest.fn(),
		};
		testScenariosRouter.route(
			'GET',
			{ technology: 'tech test', role: 'role test', environment: 'environment test' },
			mockedRes,
		);
		expect(mockedRes.writeHead).toHaveBeenCalledWith(200);
	});
});
