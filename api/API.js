import { repositories } from "./get/repositories";

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
  };
}
