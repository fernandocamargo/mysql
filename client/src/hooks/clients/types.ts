import type { Default as Clients } from 'types/clients';

export type Default = {
  (): {
    consumer: Clients;
    provider: Clients;
  };
};
