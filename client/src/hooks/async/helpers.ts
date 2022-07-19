import noop from 'lodash/noop';

export class Validity {
  stale: boolean;

  constructor() {
    this.stale = false;
  }

  dismiss = () => new Promise(noop);

  expire = () => {
    this.stale = true;
  };

  succeed = (response: any) => {
    const { dismiss, stale } = this;

    return !stale ? Promise.resolve(response) : dismiss();
  };

  fail = (response: Error) => {
    const { dismiss, stale } = this;

    return !stale ? Promise.reject(response) : dismiss();
  };

  check = (promise: Promise<any>) => {
    const { succeed, fail } = this;

    return promise.then(succeed).catch(fail);
  };
}
