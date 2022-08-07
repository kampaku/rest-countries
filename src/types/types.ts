interface Names {
  official: string;
  common: string;
}

interface NativeName {
  [key: string]: Names;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName | undefined;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Currencies {
  [key: string]: Currency;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Languages {
  [key: string]: string;
}

interface Ara {
  official: string;
  common: string;
}

interface Ces {
  official: string;
  common: string;
}

interface Cym {
  official: string;
  common: string;
}

interface Deu {
  official: string;
  common: string;
}

interface Est {
  official: string;
  common: string;
}

interface Fin {
  official: string;
  common: string;
}

interface Fra {
  official: string;
  common: string;
}

interface Hrv {
  official: string;
  common: string;
}

interface Hun {
  official: string;
  common: string;
}

interface Ita {
  official: string;
  common: string;
}

interface Jpn {
  official: string;
  common: string;
}

interface Kor {
  official: string;
  common: string;
}

interface Nld {
  official: string;
  common: string;
}

interface Per {
  official: string;
  common: string;
}

interface Pol {
  official: string;
  common: string;
}

interface Por {
  official: string;
  common: string;
}

interface Rus {
  official: string;
  common: string;
}

interface Slk {
  official: string;
  common: string;
}

interface Spa2 {
  official: string;
  common: string;
}

interface Swe {
  official: string;
  common: string;
}

interface Urd {
  official: string;
  common: string;
}

interface Zho {
  official: string;
  common: string;
}

export interface Translations {
  ara: Ara;
  ces: Ces;
  cym: Cym;
  deu: Deu;
  est: Est;
  fin: Fin;
  fra: Fra;
  hrv: Hrv;
  hun: Hun;
  ita: Ita;
  jpn: Jpn;
  kor: Kor;
  nld: Nld;
  per: Per;
  pol: Pol;
  por: Por;
  rus: Rus;
  slk: Slk;
  spa: Spa2;
  swe: Swe;
  urd: Urd;
  zho: Zho;
}

interface Eng {
  f: string;
  m: string;
}

interface Fra2 {
  f: string;
  m: string;
}

interface Demonyms {
  eng: Eng;
  fra: Fra2;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Gini {
  2019: number;
}

interface Car {
  signs: string[];
  side: string;
}

interface Flags {
  png: string;
  svg: string;
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface PostalCode {
  format: string;
  regex: string;
}

export interface Country {
  name: Name;
  tld: string[] | undefined;
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies | undefined;
  idd: Idd;
  capital: string[] | undefined;
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages | undefined;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[] | undefined;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export type Region =
  | 'all'
  | 'africa'
  | 'america'
  | 'asia'
  | 'europe'
  | 'oceania';
