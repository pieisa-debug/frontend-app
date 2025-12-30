// types.ts
export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  profilePicture: string;
};

export type Post = {
  id: number;
  userId: number;
  title: string;
  content: string;
  created_at: string;
  likes: number;
  comments: number;
};

export type Comment = {
  id: number;
  postId: number;
  userId: number;
  content: string;
  created_at: string;
};

export type Like = {
  id: number;
  postId: number;
  userId: number;
  created_at: string;
};

export type Follow = {
  id: number;
  followerId: number;
  followeeId: number;
  created_at: string;
};

export type AuthData = {
  token: string;
  refreshToken: string;
  user: User;
};

export type PostUpdate = {
  title?: string;
  content?: string;
};

export type CommentUpdate = {
  content?: string;
};