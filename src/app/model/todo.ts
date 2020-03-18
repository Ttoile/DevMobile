import {Observable} from 'rxjs';

export interface Todo {
  id?: string;
  title: string;
  isDone: boolean;
}

export enum uid {
  user,
  admin,
}

export interface List{
  id?: string;
  title: string;
  ownerID: string;
}
