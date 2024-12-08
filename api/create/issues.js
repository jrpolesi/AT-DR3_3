/**
 *
 * @param {
 * title: string,
 * body: string,
 * } body
 */
export async function createIssue(body, options) {
  const { baseURL, defaultHeaders } = this;

  const { owner, repo } = options;

  const url = `${baseURL}/repos/${owner}/${repo}/issues`;

  const response = await fetch(url, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(body),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    return Promise.reject({ body: responseBody, response });
  }

  return Promise.resolve({ body: responseBody, response });
}
