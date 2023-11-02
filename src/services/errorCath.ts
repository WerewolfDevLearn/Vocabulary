async function errorCatch(response: Response) {
	const data = await response.json();
	if (!response.ok) {
		throw new Error(data.message);
	}
	return data;
}

export default errorCatch;
