import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

import config from "./slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 *
 * @type {prismic.ClientConfig["routes"]}
 */
// TODO: Update the routes array to match your project's route structure.
const routes = [
	{
		type: "homepage",
		path: "/",
	},
	{
		type: "walks_page",
		path: "/walks",
	},
	{
		type: "podcast_page",
		path: "/podcast",
	},
	{
		type: "articles_page",
		path: "/articles",
	},
	{
		type: "international_tours_page",
		path: "/international-tours",
	},
	{
		type: "about_page",
		path: "/about",
	},
	{
		type: "contact_page",
		path: "/contact",
	},
	{
		type: "donate_page",
		path: "/donate",
	},
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
	const client = prismic.createClient(repositoryName, {
		routes,
		fetchOptions:
			process.env.NODE_ENV === "production"
				? { next: { tags: ["prismic"] }, cache: "force-cache" }
				: { next: { revalidate: 5 } },
		...config,
	});

	prismicNext.enableAutoPreviews({
		client,
		previewData: config.previewData,
		req: config.req,
	});

	return client;
};
