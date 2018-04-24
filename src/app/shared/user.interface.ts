import { IPlace } from './place.interface';

export interface IUser {
  name: string;
  email: string;
  places: IPlace[];
  created: Date;
}
