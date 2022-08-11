export interface Resposne {
  code: string;
  charge: boolean;
  msg: string;
  result: Result2;
  requestId: string;
}

interface Result2 {
  status: number;
  msg: string;
  result: Result;
}

interface Result {
  total: number;
  num: number;
  list: List[];
}

export interface List {
  id: number;
  classid: number;
  name: string;
  peoplenum: string;
  preparetime: string;
  cookingtime: string;
  content: string;
  pic: string;
  tag: string;
  material: Material[];
  process: Process[];
}

interface Process {
  pcontent: string;
  pic: string;
}

interface Material {
  mname: string;
  type: number;
  amount: string;
}
