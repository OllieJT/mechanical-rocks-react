import fs from "fs";
import matter from "gray-matter";
import { Store, StoreAttributes } from "../types";
import { slugify } from "../utility";

const files = fs.readdirSync(`${process.cwd()}/data/stores`);

export const getStores: Store[] = files.map((filename) => {
	const markdownWithMetadata = fs.readFileSync(`data/stores/${filename}`).toString();
	const { data } = matter(markdownWithMetadata);

	const attributes: StoreAttributes = {
		name: data.name,
		store: data.store,
		country: data.country,
		region: data.region,
		tags: data.tags,
		is_solo: data.is_solo,
		has_groupbuy: data.has_groupbuy,
		has_merch: data.has_merch,
		has_premade: data.has_premade,
		has_kits: data.has_kits,
		has_pcb: data.has_pcb,
		has_plate: data.has_plate,
		has_case: data.has_case,
		has_switches: data.has_switches,
		has_keycaps: data.has_keycaps,
		has_stabs: data.has_stabs,
		has_foam: data.has_foam,
		has_o_rings: data.has_o_rings,
		has_films: data.has_films,
		has_tools: data.has_tools,
		has_lube: data.has_lube,
		has_solder: data.has_solder,
		has_cable: data.has_cable,
		has_mat: data.has_mat
	};

	const slug = slugify(filename.toString());
	const key = (data.region + data.country + data.name).replace(" ", "");

	return {
		slug,
		key,
		attributes
	};
});
