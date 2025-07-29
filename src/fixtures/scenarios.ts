export const scenarios: {
	[key: string]: {
		[key: string]: {
			[key: string]: {
				challenges: string[];
				incidents: string[];
				'troubleshooting steps': string[];
			}[];
		};
	};
} = {
	'Cloud Computing': {
		'System Administrator': {
			'Enterprise Network': [
				{
					challenges: ['cloud administrator enterprise challenge 1', 'challenge 2'],
					incidents: ['cloud administrator enterprise incident 1'],
					'troubleshooting steps': [
						'cloud administrator enterprise troubleshooting steps',
						'troubleshooting step 2',
						'troubleshooting step 3',
					],
				},
			],
			'Cloud Infastructure': [
				{
					challenges: ['cloud administrator infrastructure challenges'],
					incidents: ['cloud administrator infrastructure incidents'],
					'troubleshooting steps': ['cloud administrator infrastructure troubleshooting steps'],
				},
			],
			'On-Prem Data Center': [
				{
					challenges: ['cloud administrator on-prem challenges'],
					incidents: ['cloud administrator on-prem incidents'],
					'troubleshooting steps': ['cloud administrator on-prem troubleshooting steps'],
				},
			],
		},
		'Software Engineer': {
			'Enterprise Network': [
				{
					challenges: ['cloud engineer enterprise challenges'],
					incidents: ['cloud engineer enterprise incidents'],
					'troubleshooting steps': ['cloud engineer enterprise troubleshooting steps'],
				},
			],
			'Cloud Infastructure': [
				{
					challenges: ['cloud engineer infrastructure challenges'],
					incidents: ['cloud engineer infrastructure incidents'],
					'troubleshooting steps': ['cloud engineer infrastructure troubleshooting steps'],
				},
			],
			'On-Prem Data Center': [
				{
					challenges: ['cloud engineer on-prem challenges'],
					incidents: ['cloud engineer on-prem incidents'],
					'troubleshooting steps': ['cloud engineer on-prem troubleshooting steps'],
				},
			],
		},
		'Security Analyst': {
			'Enterprise Network': [
				{
					challenges: ['cloud analyst enterprise challenges'],
					incidents: ['cloud analyst enterprise incidents'],
					'troubleshooting steps': ['cloud analyst enterprise troubleshooting steps'],
				},
			],
			'Cloud Infastructure': [
				{
					challenges: ['cloud analyst infrastructure challenges'],
					incidents: ['cloud analyst infrastructure incidents'],
					'troubleshooting steps': ['cloud analyst infrastructure troubleshooting steps'],
				},
			],
			'On-Prem Data Center': [
				{
					challenges: ['cloud analyst on-prem challenges'],
					incidents: ['cloud analyst on-prem incidents'],
					'troubleshooting steps': ['cloud analyst on-prem troubleshooting steps'],
				},
			],
		},
	},
	Cybersecurity: {
		'System Administrator': {
			'Enterprise Network': [
				{
					challenges: ['cybersecurity administrator enterprise challenge 1', 'challenge 2'],
					incidents: ['cybersecurity administrator enterprise incident 1', 'incident 2'],
					'troubleshooting steps': [
						'cybersecurity administrator enterprise troubleshooting step 1',
						'troubleshooting step 2',
					],
				},
			],
			'Cloud Infastructure': [
				{
					challenges: ['cybersecurity administrator infrastructure challenges'],
					incidents: ['cybersecurity administrator infrastructure incidents'],
					'troubleshooting steps': [
						'cybersecurity administrator infrastructure troubleshooting steps',
					],
				},
			],
			'On-Prem Data Center': [
				{
					challenges: ['cybersecurity administrator on-prem challenges'],
					incidents: ['cybersecurity administrator on-prem incidents'],
					'troubleshooting steps': ['cybersecurity administrator on-prem troubleshooting steps'],
				},
			],
		},
		'Software Engineer': {
			'Enterprise Network': [
				{
					challenges: ['cybersecurity engineer enterprise challenges'],
					incidents: ['cybersecurity engineer enterprise incidents'],
					'troubleshooting steps': ['cybersecurity engineer enterprise troubleshooting steps'],
				},
			],
			'Cloud Infastructure': [
				{
					challenges: ['cybersecurity engineer infrastructure challenges'],
					incidents: ['cybersecurity engineer infrastructure incidents'],
					'troubleshooting steps': ['cybersecurity engineer infrastructure troubleshooting steps'],
				},
			],
			'On-Prem Data Center': [
				{
					challenges: ['cybersecurity engineer on-prem challenges'],
					incidents: ['cybersecurity engineer on-prem incidents'],
					'troubleshooting steps': ['cybersecurity engineer on-prem troubleshooting steps'],
				},
			],
		},
		'Security Analyst': {
			'Enterprise Network': [
				{
					challenges: ['cybersecurity analyst enterprise challenges'],
					incidents: ['cybersecurity analyst enterprise incidents'],
					'troubleshooting steps': ['cybersecurity analyst enterprise troubleshooting steps'],
				},
			],
			'Cloud Infastructure': [
				{
					challenges: ['cybersecurity analyst infrastructure challenges'],
					incidents: ['cybersecurity analyst infrastructure incidents'],
					'troubleshooting steps': ['cybersecurity analyst infrastructure troubleshooting steps'],
				},
			],
			'On-Prem Data Center': [
				{
					challenges: ['cybersecurity analyst on-prem challenges'],
					incidents: ['cybersecurity analyst on-prem incidents'],
					'troubleshooting steps': ['cybersecurity analyst on-prem troubleshooting steps'],
				},
			],
		},
	},
	DevOps: {
		'System Administrator': {
			'Enterprise Network': [
				{
					challenges: ['DevOps administrator enterprise challenge 1', 'challenge 2'],
					incidents: ['DevOps administrator enterprise incident 1', 'incident 2'],
					'troubleshooting steps': [
						'DevOps administrator enterprise troubleshooting step 1',
						'troubleshooting step 2',
					],
				},
			],
			'Cloud Infastructure': [
				{
					challenges: ['DevOps administrator infrastructure challenges'],
					incidents: ['DevOps administrator infrastructure incidents'],
					'troubleshooting steps': ['DevOps administrator infrastructure troubleshooting steps'],
				},
			],
			'On-Prem Data Center': [
				{
					challenges: ['DevOps administrator on-prem challenges'],
					incidents: ['DevOps administrator on-prem incidents'],
					'troubleshooting steps': ['DevOps administrator on-prem troubleshooting steps'],
				},
			],
		},
		'Software Engineer': {
			'Enterprise Network': [
				{
					challenges: ['DevOps engineer enterprise challenges'],
					incidents: ['DevOps engineer enterprise incidents'],
					'troubleshooting steps': ['DevOps engineer enterprise troubleshooting steps'],
				},
			],
			'Cloud Infastructure': [
				{
					challenges: ['DevOps engineer infrastructure challenges'],
					incidents: ['DevOps engineer infrastructure incidents'],
					'troubleshooting steps': ['DevOps engineer infrastructure troubleshooting steps'],
				},
			],
			'On-Prem Data Center': [
				{
					challenges: ['DevOps engineer on-prem challenges'],
					incidents: ['DevOps engineer on-prem incidents'],
					'troubleshooting steps': ['DevOps engineer on-prem troubleshooting steps'],
				},
			],
		},
		'Security Analyst': {
			'Enterprise Network': [
				{
					challenges: ['DevOps analyst enterprise challenges'],
					incidents: ['DevOps analyst enterprise incidents'],
					'troubleshooting steps': ['DevOps analyst enterprise troubleshooting steps'],
				},
			],
			'Cloud Infastructure': [
				{
					challenges: ['DevOps analyst infrastructure challenges'],
					incidents: ['DevOps analyst infrastructure incidents'],
					'troubleshooting steps': ['DevOps analyst infrastructure troubleshooting steps'],
				},
			],
			'On-Prem Data Center': [
				{
					challenges: ['DevOps analyst on-prem challenges'],
					incidents: ['DevOps analyst on-prem incidents'],
					'troubleshooting steps': ['DevOps analyst on-prem troubleshooting steps'],
				},
			],
		},
	},
};
