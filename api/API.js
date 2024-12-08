import { issues } from "./get/issues.js";
import { repositories } from "./get/repositories.js";
import { user } from "./get/user.js";

export class API {
  baseURL = "https://api.github.com";

  constructor(apiKey) {
    this.apiKey = apiKey;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    };
  }

  get = {
    repositories: (...args) => repositories.call(this, ...args),
    issues: (...args) => issues.call(this, ...args),
    user: (...args) => user.call(this, ...args),
  };
}
