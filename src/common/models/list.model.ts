export enum Direction {
  ASC = 'ASC',
  DESC = 'DESC',
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
