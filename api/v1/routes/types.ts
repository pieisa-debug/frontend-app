// types.ts
import { User } from './models/User';

export type LoginResponse = {
  token: string;
  user: User;
};

export type ErrorResponse = {
  message: string;
  error: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
  name: string;
  nickname: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type UserSummary = {
  id: number;
  nickname: string;
  name: string;
};

export type ProjectSummary = {
  id: number;
  title: string;
  description: string;
  userId: number;
};

export type TaskSummary = {
  id: number;
  title: string;
  description: string;
  projectId: number;
};