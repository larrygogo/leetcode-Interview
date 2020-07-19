import {ErrorHandle} from './ErrorHandle';
import {ErrorMessage} from '../interface/ErrorMessage';
import {ErrorDetail} from '../interface/ErrorDetail';

export class ChromeErrorHandle extends ErrorHandle {
  constructor(errorStack: string) {
    super(errorStack);
  }

  getMessage(errorDetailStr: string): string {
    const [, message]: string[] = errorDetailStr.split(':');
    return message.trim();
  }

  handle(): ErrorMessage {
    const messageStr = this.errorLine.shift();
    const message: string = this.getMessage(messageStr);
    const errorDetails: ErrorDetail[] = this.errorLine.map(item => this.getErrorDetail(item));
    const stack: Array<{
      line: number;
      column: number;
      filename: string;
    }> = errorDetails.map(item => {
      const arr = item.message.split(' ').reverse();
      return {
        line: item.line,
        column: item.column,
        filename: arr[0],
      };
    });
    const errorMessage: ErrorMessage = {
      message,
      stack,
    };

    return errorMessage;
  }
}
