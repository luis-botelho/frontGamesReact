import { JwtHandler } from "../jwt-handler/JwtHandler";

export const Api = {
  devUrl: "http://localhost:3000",
  productionUrl: "https://mod4backend.herokuapp.com",
  dev: false,

  url: (path, param) => {
    const dev = Api.dev ? Api.devUrl : Api.productionUrl;
    const id = param ? param : "/";
    return dev + path + id;
  },
  

  authHeader: () => ({
    Authorization: "Bearer " + JwtHandler.getJwt(),
  }),

  getRequest: (url, auth) =>
    fetch(url, {
      method: "GET",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),
  postRequest: (url, body, auth) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),
  patchRequest: (url, body, auth) =>
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),
  deleteRequest: (url, auth) =>
    fetch(url, {
      method: "DELETE",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),
};
