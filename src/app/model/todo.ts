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
  readerIDS: Array<string>;
  writerIDS: Array<string>;
}

export interface User{
  id?: string;
  email: string;
  uid: string;
}

export interface ContributorRights{
  contributorName: string;
  permission: boolean; // false = read only et true = Read and write
}
