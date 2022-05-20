// interface realizada con https://app.quicktype.io/
export interface Countries {
  name: Name;
  cca3: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: NativeName;
}

export interface NativeName {
  bel: Bel;
  rus: Bel;
}

export interface Bel {
  official: string;
  common:   string;
}
