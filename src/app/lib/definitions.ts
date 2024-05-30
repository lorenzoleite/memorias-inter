export type Athletic = {
  id: string;
  name: string;
  foundationYear: string;
  active: boolean;
  inters: {
    [chave: string]: { rank: number; points?: number; division?: number };
  };
};

export type FoundationYear = {
  year: string;
  athletics: Omit<Athletic, 'inters'>[];
};

export type Standing = {
  rank: number;
  points?: number;
  division?: number;
  athletic: Omit<Athletic, 'inters'>;
};

export type Inter = {
  year: string;
  standings: Standing[];
  committees: Omit<Athletic, 'inters'>[];
};

export type Modality = {
  id: string;
  name: string;
  suits: string[];
  events?: string[];
};
