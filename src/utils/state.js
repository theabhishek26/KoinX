import { atom } from 'recoil';

export const dataAtom = atom({
  key: 'dataAtom',
  default: null,
});

export const trendingDataAtom = atom({
  key: 'trendingDataAtom',
  default: null,
});