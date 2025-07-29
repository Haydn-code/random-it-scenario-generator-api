export default class IndexController {
	protected show(): {
		data: {
			title: string;
			description: string;
			options: { technology: string[]; role: string[]; environment: string[] };
		};
	} {
		return {
			data: {
				title: 'Random It Scenario Generator',
				description:
					'Generates a random It-related scenario. Simply make a GET request to the /scenarios endpoint with the following optional query parameters',
				options: {
					technology: ['Cloud Computing', 'Cybersecurity', 'DevOps'],
					role: ['System Administrator', 'Software Engineer', 'Security Analyst'],
					environment: ['Enterprise Network', 'Cloud Infrastructure', 'On-Prem Data Center'],
				},
			},
		};
	}
}
