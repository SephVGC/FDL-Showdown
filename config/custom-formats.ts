// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: import('../sim/dex-formats').FormatList = [
	{
		section: "FDL Nuzlocke",
	},
	{
		name: "[Gen 9] FDL Nuzlocke",
		desc: `VGC-style doubles (Lv. 50, bring 4 pick 2). All Pok&eacute;mon can use any move or ability, with no learnset restrictions.`,
		mod: 'freemoves',
		gameType: 'doubles',
		ruleset: [
			'Team Preview', 'Species Clause', 'Nickname Clause', 'Item Clause = 1',
			'Adjust Level Down = 50', 'Picked Team Size = Auto',
			'HP Percentage Mod', 'Cancel Mod', 'VGC Timer',
		],
	},
];
