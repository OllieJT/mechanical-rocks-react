export type Continent =
	| "North America"
	| "South America"
	| "Africa"
	| "Europe"
	| "Oceania"
	| "Asia";

export type StoreAttributes = {
	name: string;
	store: string;
	country: string;
	region: Continent;
	tags?: string[];
	is_solo: boolean;
	has_groupbuy: boolean;
	has_merch: boolean;
	has_premade: boolean;
	has_kits: boolean;
	has_pcb: boolean;
	has_plate: boolean;
	has_case: boolean;
	has_switches: boolean;
	has_keycaps: boolean;
	has_stabs: boolean;
	has_foam: boolean;
	has_o_rings: boolean;
	has_films: boolean;
	has_tools: boolean;
	has_lube: boolean;
	has_solder: boolean;
	has_cable: boolean;
	has_mat: boolean;
};

export type Store = {
	slug: string;
	key: string;
	attributes: StoreAttributes;
};
