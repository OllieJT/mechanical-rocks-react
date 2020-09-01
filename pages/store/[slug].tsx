import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { StoreAttributes } from "../../@types";
import { slugify } from "../../utility";

export default function Post({ content, attributes }) {
	return (
		<div>
			{JSON.stringify(attributes)}
			<article>{content}</article>
		</div>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(`${process.cwd()}/data/stores`);

	const paths = files.map((filename) => ({
		params: {
			slug: slugify(filename.toString())
		}
	}));

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMetadata = fs
		.readFileSync(path.join(`${process.cwd()}/data/stores`, slug + ".md"))
		.toString();

	const { data, content } = matter(markdownWithMetadata);

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

	return {
		props: {
			content: `# ${data.title}\n${content}`,
			attributes
		}
	};
}
