export type Payoff = 'resolve' | 'reject';

export interface State {
  error: null | Error;
  pending: boolean;
}

export interface Thenable {
  (response: Promise<any>): Promise<any>;
}
