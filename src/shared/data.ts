export interface Data {
  category: string;
  score: number;
  icon: string;
}

export type CardProps = {
  readonly data: ReadonlyArray<Data>;
};
