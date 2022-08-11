export type UserInfo = {
  id?: number;
  phone: string;
  name?: string;
  password: string;
  avatarUrl?: string;
};
export interface CommentList {
  id: number;
  content: string;
  createTime: string;
  author: Author;
}

interface Author {
  id: number;
  name: string;
  avatarUrl: string;
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
