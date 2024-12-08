export async function user(options = {}) {
  const { baseURL, defaultHeaders } = this;

  const urlParams = new URLSearchParams({
    ...options,
  });

  const url = `${baseURL}/user?${urlParams}`;

  const response = await fetch(url, {
    method: "GET",
    headers: defaultHeaders,
  });

  const body = await response.json();

  if (!response.ok) {
    return Promise.reject({ body, response });
  }

  return Promise.resolve({ body, response });
}
