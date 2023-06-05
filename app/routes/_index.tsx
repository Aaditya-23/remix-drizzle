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

export async function loader() {
	const user = (await db.select().from(users))[0];
	if (!user) return json({ user: null });
	return json({ user });
}

export default function Index() {
	const { user } = useLoaderData<typeof loader>();

	return (
		<div>
			<div>hello</div>
			{user?.name}
		</div>
	);
}
