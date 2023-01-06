const client = require('drip-nodejs')({
	token: process.env.API_KEY,
	accountId: 4187499,
});
export function handleFormData() {
	const form = document.querySelector('form');
	const formData = new FormData(form);
	client
		.listWebhooks()
		.then((response) => {
			const data = response.json;
			// console.log(response, data);
		})
		.catch((error) => {
			// Handle errors
			console.error(error);
		});
}

async function makeRequest(
	endpoint,
	method = 'GET',
	theData = false,
	returnAll = true,
) {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				api_key: process.env.API_KEY,
			},
			method: `${method}`,
			timeout: 5000,
		};
		if (theData) {
			config.body = JSON.stringify(theData);
		}

		const res = await fetch('https://api.getdrip.com/' + `${endpoint}`, config);
		const data = await res.json();
		if (!res.ok) throw new Error(`${data.message} (${res.status})`);
		return returnAll ? [res, data, method] : data;
	} catch (error) {}
}
