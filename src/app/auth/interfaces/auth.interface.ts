export interface User {
  uid: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  ok: boolean;
  uid?: string;
  name?: string;
  email?: string;
  token?: string;
  newToken?: string;
  msg?: string;
}
