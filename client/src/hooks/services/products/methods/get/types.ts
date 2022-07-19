import type { Default as Results } from 'types/results';

export interface Default {
  (): Promise<Results>;
}
