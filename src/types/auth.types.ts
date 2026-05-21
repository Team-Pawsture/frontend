export type SignupRequest = {
  username: string;
  password: string;
};

export type SignupResult = {
  userId: number;
  username: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginUser = {
  userId: number;
  username: string;
};

export type LoginResult = {
  accessToken: string;
  user: LoginUser;
};
