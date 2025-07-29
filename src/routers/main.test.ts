import MainRouter from './main';

describe('Main Router', () => {
	it('Parses Query Params', () => {
		const testMainRouter = new MainRouter();
		const queries = 'technology=testtech&role=testrole&environment=testenvironment';
		expect(JSON.stringify(testMainRouter.parseQueries(queries))).toBe(
			JSON.stringify({
				technology: 'testtech',
				role: 'testrole',
				environment: 'testenvironment',
			}),
		);
	});
	it('Handles unknown pages', () => {
		const testMainRouter = new MainRouter();
		const mockedRes: { setHeader: any; writeHead: any; end: any } = {
			setHeader: jest.fn(),
			writeHead: jest.fn(),
			end: jest.fn(),
		};
		const mockedReq: { url: string; method: string } = {
			url: 'http://localhost:8080/unknownendpoint',
			method: 'GET',
		};
		testMainRouter.route(mockedReq, mockedRes);
		expect(mockedRes.writeHead).toHaveBeenCalledWith(404);
		expect(mockedRes.end).toHaveBeenCalledWith({
			data: {},
			errors: [
				{
					name: '404 error',
					description: "This page doesn't exist",
				},
			],
		});
	});
});
