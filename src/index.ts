import {ErrorMessage} from './interface/ErrorMessage';
import {ChromeErrorHandle} from './implements/ChomeErrorHandle';
import {FirefoxErrorHandle} from './implements/FirefoxErrorHandle';

export function chromeErrorHandle(errorStack: string): ErrorMessage {
  const eHandle = new ChromeErrorHandle(errorStack);
  return eHandle.handle();
}

export function firefoxErrorHandle(errorStack: string): ErrorMessage {
  const eHandle = new FirefoxErrorHandle(errorStack);
  return eHandle.handle();
}
