export type Direction = 'ASC' | 'DESC';

export interface UserBrief {
  id: number;
  username: string;
  name: string;
  sex: string;
  age: number;
  city: string;
}

export interface ListQueryParams {
  page: number;
  size: number;
  field?: string;
  direction?: Direction;
}

export interface List<DataType> {
  content: DataType[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

export interface UserList {
  token: string;
}
