import {IErrorHandle} from '../interface/IErrorHandle';
import {ErrorMessage} from '../interface/ErrorMessage';
import {ErrorDetail} from '../interface/ErrorDetail';

export abstract class ErrorHandle implements IErrorHandle {
  errorLine: string[];

  constructor(errorStack: string) {
    this.errorLine = this.getLineError(errorStack);
  }

  abstract getMessage(errorDetailStr: string): string;

  abstract handle(): ErrorMessage;

  getLineError(errorStack: string): string[] {
    return errorStack
      .split('\n')
      .map(item => item.trim())
      .filter(item => item !== '');
  }

  getErrorDetail(errorDetailStr: string): ErrorDetail {
    const arr = errorDetailStr.split(':');
    const column = Number(arr.pop());
    const line = Number(arr.pop());
    const message = arr.join(':');
    return {
      message,
      line: Number(line),
      column: Number(column),
    };
  }
}
