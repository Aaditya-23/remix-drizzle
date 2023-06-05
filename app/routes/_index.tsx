import { type V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/db/drizzle.server";
import { users } from "~/db/schema.server";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div>
			<div>hello</div>
		</div>
	);
}
