import {ErrorHandle} from './ErrorHandle';
import {ErrorMessage} from '../interface/ErrorMessage';
import {ErrorDetail} from '../interface/ErrorDetail';

export class FirefoxErrorHandle extends ErrorHandle {
  constructor(errorStack: string) {
    super(errorStack);
  }

  getMessage(): string {
    return 'Error';
  }

  handle(): ErrorMessage {
    const message: string = this.getMessage();
    const errorDetails: ErrorDetail[] = this.errorLine.map(item => this.getErrorDetail(item));
    const stack: Array<{
      line: number;
      column: number;
      filename: string;
    }> = errorDetails.map(item => {
      const arr = item.message.split(' ').reverse()[0].split('@').reverse();
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
