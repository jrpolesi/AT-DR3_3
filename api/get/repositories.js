export async function repositories(options = {}) {
  const { baseURL, defaultHeaders } = this;

  const urlParams = new URLSearchParams({
    ...options,
    page: options.page || 1,
  });

  const url = `${baseURL}/user/repos?${urlParams}`;

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
