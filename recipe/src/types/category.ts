export interface Category {
  code: string;
  charge: boolean;
  msg: string;
  result: Result2;
  requestId: string;
}

interface Result2 {
  status: number;
  msg: string;
  result: Result[];
}

export interface Result {
  classid: number;
  name: string;
  parentid: number;
  list: List2[];
}

export interface List2 {
  classid: number;
  name: string;
  parentid: number;
}
