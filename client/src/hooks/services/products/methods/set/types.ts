export interface Default {
  (settings: Settings): Promise<any>;
}

export interface Settings {
  id: number;
  product: string;
}
