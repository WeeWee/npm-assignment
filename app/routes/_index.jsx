import { Form, useActionData } from "@remix-run/react";
import Slugify from "adamkindberg-slugify";
export const meta = () => {
	return [
		{ title: "Netlify" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};
export const action = async ({ request }) => {
	const formData = await request.formData();
	const { text } = Object.fromEntries(formData);

	return Slugify(text);
};
export default function Index() {
	const text = useActionData();
	return (
		<div>
			<Form method="POST">
				<label>Slugify your text!!</label>
				<input name="text" placeholder="enter text here..." />
				<button>Slugify</button>
			</Form>
			<p>{text}</p>
		</div>
	);
}
