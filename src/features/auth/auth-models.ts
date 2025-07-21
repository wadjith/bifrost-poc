export interface User {
  id?: number;
  name: string;
  email: string;
  roles: Array<string>;
}

export interface Options {
  name: string;
  value: string;
}
export interface AuthLogin {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  options: Array<Options>;
  apps?: Array<string>;
}
