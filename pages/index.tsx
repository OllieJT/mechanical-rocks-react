import Head from "next/head";
import { getStores } from "./api/hooks/stores";
import { Store } from "./api/types";
import Link from "next/link";

interface Homepage {
	stores: Store[];
}

export default function Home({ stores }: Homepage) {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{stores.map(({ attributes: { name }, key, slug }) => (
				<article key={key}>
					<h3>
						<Link href="/store/[slug]" as={`/store/${slug}`}>
							{name}
						</Link>
					</h3>
				</article>
			))}
		</div>
	);
}

export async function getStaticProps() {
	const stores: Store[] = getStores;

	return {
		props: {
			stores
		}
	};
}
