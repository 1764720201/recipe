export type UserInfo = {
  id?: number;
  phone: string;
  name?: string;
  password: string;
  avatarUrl?: string;
};

export type GetReply = {
  id: number;
  reply: string;
  replyId?: number;
  user: Author;
};
export interface CommentList {
  id: number;
  content: string;
  createTime: string;
  author: Author;
  replyCount?: number;
}

export interface Author {
  id: number;
  name: string;
  avatarUrl?: string;
}
export type Collect = {
  foodId: string;
  foodName: string;
  imgUrl: string;
};
export type CollectList = {
  createAt: string;
  food_id: string;
  food_name: string;
  img_url: string;
  updateAt: string;
  user_id: number;
};

export interface ReplyList {
  id: number;
  content: string;
  createTime?: string;
  author: Author;
  replys: Reply[];
}
export type PersonReply = {
  content: string;
  createAt: string;
  id: number;
  replys: Reply[];
  user_id: number;
};

interface User {
  id: number;
  name: string;
  avatarUrl?: string;
}

export type PersonComment = {
  id: number;
  user_id: number;
  content: string;
  createAt: string;
  avatarUrl?: string;
};
export interface Reply {
  id: number;
  user: User;
  reply: string;
  replyId?: any;
}
export type MyReply = {
  comment_id: number;
  id: number;
  reply: string;
  reply_id?: number;
  user_id: number;
};
export type RevertInfo = {
  commentId: number;
  reply: string;
};
