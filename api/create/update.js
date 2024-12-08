/**
 * @param {
 * state: "open" | "closed",
 * } body
 */
export async function updateIssue(body, options) {
  const { baseURL, defaultHeaders } = this;

  const { owner, repo, issue } = options;

  const url = `${baseURL}/repos/${owner}/${repo}/issues/${issue}`;

  const response = await fetch(url, {
    method: "PATCH",
    headers: defaultHeaders,
    body: JSON.stringify(body),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    return Promise.reject({ body: responseBody, response });
  }

  return Promise.resolve({ body: responseBody, response });
}
