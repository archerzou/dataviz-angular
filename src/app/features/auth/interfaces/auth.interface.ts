// import { IUser } from "../../../shared/interfaces/user.interface";

export interface IReduxAuthPayload {
  authInfo?: any;
}

export interface IReduxAddAuthUser {
  type: string;
  payload: IReduxAuthPayload;
}
