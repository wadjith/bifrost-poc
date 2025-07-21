import { ApiRoute } from "../../app/api-routes";
import type { AuthLogin, AuthResponse } from "./auth-models";

export async function login(body: AuthLogin): Promise<AuthResponse> {
  try {
    const response = await fetch(ApiRoute.login, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error(response.status.toString());
    }

    const data = await response.json();
    const userData: AuthResponse = data;

    console.log("data", userData);

    return userData;
  } catch (e) {
    console.log("Une erreur c'est produite.", e);

    throw new Error(JSON.stringify(e));
  }
}

export async function logout(): Promise<boolean> {
  try {
    const response = await fetch(ApiRoute.logout, {
      method: "POST",
      headers: {},
    });

    if (response.status !== 200) {
      throw new Error(response.status.toString());
    }
    return true;
  } catch (e) {
    console.log("Une erreur c'est produite.", e);

    return false;
  }
}
