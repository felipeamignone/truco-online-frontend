export default class HttpClient {
  #baseUrl: string;

  constructor(baseUrl?: string) {
    this.#baseUrl = baseUrl || (process.env.NEXT_PUBLIC_BASE_API_URL as string);
  }

  get = (path: string, query?: string) =>
    fetch(`${this.#baseUrl}/${path}${query ? "/" + query : ""}`, {
      method: "GET",
      credentials: "include",
    });

  post = (path: string, body: unknown, query?: string) =>
    fetch(`${this.#baseUrl}/${path}${query ? "/" + query : ""}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

  put = (path: string, body: unknown, query?: string) =>
    fetch(`${this.#baseUrl}/${path}${query ? "/" + query : ""}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

  patch = (path: string, body: unknown, query?: string) =>
    fetch(`${this.#baseUrl}/${path}${query ? "/" + query : ""}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

  delete = (path: string, query?: string) =>
    fetch(`${this.#baseUrl}/${path}${query ? "/" + query : ""}`, {
      method: "DELETE",
      credentials: "include",
    });
}
