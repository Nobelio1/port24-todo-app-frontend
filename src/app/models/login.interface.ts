export interface Login{
  email: string;
  password: string;
}

export interface LoginReponse {
  user:  User;
  token: string;
}

export interface User {
  id:    string;
  name:  string;
  email: string;
  role:  string[];
  state: boolean;
}

