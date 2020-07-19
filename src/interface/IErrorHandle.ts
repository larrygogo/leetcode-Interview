import {ErrorMessage} from './ErrorMessage';

export interface IErrorHandle {
  getLineError(errorStack: string): Array<string>;
  handle(errorStact: string): ErrorMessage;
}
