export interface IUser {
  name: string;
  email: string;
  password: string;
  created_at: Date;
}

export type ICustomAuthError = Partial<Record<keyof IUser, any>>;
