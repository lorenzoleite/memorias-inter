import {
  Athletic,
  FoundationYear,
  Inter,
  Modality
} from '@/app/lib/definitions';

export const athletics: Athletic[] = [
  {
    id: 'madrasta',
    name: 'Madrasta',
    foundationYear: '2001',
    active: true,
    inters: {
      '2007': { rank: 1 },
      '2008': { rank: 1 },
      '2009': { rank: 1, points: 277 },
      '2010': { rank: 1, points: 282 },
      '2011': { rank: 1, points: 271 },
      '2012': { rank: 1, points: 296 },
      '2013': { rank: 1, points: 252 },
      '2014': { rank: 3, points: 222 },
      '2015': { rank: 2, points: 226 },
      '2016': { rank: 1, points: 264 },
      '2017': { rank: 1, points: 306 },
      '2018': { rank: 1, points: 251 },
      '2019': { rank: 2, points: 243 },
      '2022': { rank: 2, points: 243, division: 1 },
      '2023': { rank: 2, points: 284, division: 1 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'agronomia',
    name: 'Agronomia',
    foundationYear: '2007',
    active: true,
    inters: {
      '2007': { rank: 4 },
      '2008': { rank: 4 },
      '2009': { rank: 3, points: 197 },
      '2010': { rank: 2, points: 242 },
      '2011': { rank: 3, points: 116 },
      '2012': { rank: 8, points: 67 },
      '2013': { rank: 7, points: 69 },
      '2014': { rank: 12, points: 43 },
      '2015': { rank: 26, points: -2 },
      '2016': { rank: 12, points: 38 },
      '2017': { rank: 6, points: 77 },
      '2018': { rank: 6, points: 60 },
      '2019': { rank: 6, points: 92 },
      '2022': { rank: 6, points: 102, division: 1 },
      '2023': { rank: 7, points: 123.8, division: 1 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'enigma',
    name: 'Enigma',
    foundationYear: '2007',
    active: true,
    inters: {
      '2009': { rank: 8, points: 83 },
      '2010': { rank: 6, points: 86 },
      '2011': { rank: 13, points: 50 },
      '2012': { rank: 9, points: 54 },
      '2013': { rank: 12, points: 34 },
      '2014': { rank: 24, points: 7 },
      '2015': { rank: 21, points: 9 },
      '2016': { rank: 16, points: 32 },
      '2017': { rank: 12, points: 38 },
      '2018': { rank: 10, points: 49 },
      '2019': { rank: 12, points: 37 },
      '2022': { rank: 10, points: 54, division: 1 },
      '2023': { rank: 10, points: 81.6, division: 1 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'gambiarra',
    name: 'Gambiarra',
    foundationYear: '2007',
    active: true,
    inters: {
      '2007': { rank: 3 },
      '2008': { rank: 2 },
      '2009': { rank: 2, points: 212 },
      '2010': { rank: 3, points: 150 },
      '2011': { rank: 4, points: 116 },
      '2012': { rank: 7, points: 69 },
      '2013': { rank: 5, points: 83 },
      '2014': { rank: 13, points: 43 },
      '2015': { rank: 5, points: 101 },
      '2016': { rank: 8, points: 71 },
      '2017': { rank: 5, points: 95 },
      '2018': { rank: 4, points: 139 },
      '2019': { rank: 5, points: 118 },
      '2022': { rank: 5, points: 104, division: 1 },
      '2023': { rank: 6, points: 147.8, division: 1 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'mafiosa',
    name: 'Mafiosa',
    foundationYear: '2007',
    active: true,
    inters: {
      '2007': { rank: 6 },
      '2008': { rank: 8 },
      '2009': { rank: 7, points: 106 },
      '2010': { rank: 9, points: 66 },
      '2011': { rank: 6, points: 96 },
      '2012': { rank: 15, points: 38 },
      '2013': { rank: 9, points: 53 },
      '2014': { rank: 6, points: 66 },
      '2015': { rank: 7, points: 68 },
      '2016': { rank: 5, points: 100 },
      '2017': { rank: 9, points: 52 },
      '2018': { rank: 5, points: 119 },
      '2019': { rank: 4, points: 126 },
      '2022': { rank: 4, points: 135, division: 1 },
      '2023': { rank: 5, points: 169.2, division: 1 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'venenosa',
    name: 'Venenosa',
    foundationYear: '2007',
    active: true,
    inters: {
      '2007': { rank: 7 },
      '2008': { rank: 9 },
      '2009': { rank: 10, points: 73 },
      '2010': { rank: 17, points: 22 },
      '2011': { rank: 25, points: 6 },
      '2012': { rank: 23, points: 9 },
      '2013': { rank: 20, points: 13 },
      '2014': { rank: 25, points: 6 },
      '2015': { rank: 19, points: 12 },
      '2016': { rank: 24, points: 8 },
      '2017': { rank: 18, points: 16 },
      '2018': { rank: 18, points: 21 },
      '2019': { rank: 19, points: 17 },
      '2022': { rank: 7, points: 98, division: 2 },
      '2023': { rank: 13, points: 68.8, division: 2 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'overdose',
    name: 'Overdose',
    foundationYear: '2007',
    active: true,
    inters: {
      '2007': { rank: 2 },
      '2008': { rank: 7 },
      '2009': { rank: 4, points: 135 },
      '2010': { rank: 10, points: 64 },
      '2011': { rank: 10, points: 68 },
      '2012': { rank: 16, points: 30 },
      '2013': { rank: 10, points: 36 },
      '2014': { rank: 11, points: 45 },
      '2015': { rank: 14, points: 25 },
      '2016': { rank: 25, points: 5 },
      '2017': { rank: 13, points: 35 },
      '2018': { rank: 26, points: 8 },
      '2019': { rank: 30, points: 3 },
      '2022': { rank: 10, points: 79, division: 2 },
      '2023': { rank: 8, points: 122, division: 2 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'banguela',
    name: 'Banguela',
    foundationYear: '2007',
    active: true,
    inters: {
      '2007': { rank: 9 },
      '2008': { rank: 10 },
      '2009': { rank: 11, points: 64 },
      '2010': { rank: 14, points: 41 },
      '2011': { rank: 12, points: 51 },
      '2012': { rank: 13, points: 50 },
      '2013': { rank: 16, points: 23 },
      '2014': { rank: 28, points: -4 },
      '2015': { rank: 29, points: -30 },
      '2016': { rank: 33, points: -10 },
      '2017': { rank: 27, points: 4 },
      '2018': { rank: 21, points: 15 },
      '2019': { rank: 17, points: 28 },
      '2022': { rank: 1, points: 222, division: 2 },
      '2023': { rank: 14, points: 44.4, division: 1 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'picareta',
    name: 'Picareta',
    foundationYear: '2008',
    active: true,
    inters: {
      '2007': { rank: 8 },
      '2008': { rank: 3 },
      '2009': { rank: 6, points: 106 },
      '2010': { rank: 8, points: 75 },
      '2011': { rank: 8, points: 80 },
      '2012': { rank: 4, points: 86 },
      '2013': { rank: 6, points: 82 },
      '2014': { rank: 7, points: 60 },
      '2015': { rank: 3, points: 164 },
      '2016': { rank: 3, points: 179 },
      '2017': { rank: 3, points: 195 },
      '2018': { rank: 3, points: 218 },
      '2019': { rank: 3, points: 200 },
      '2022': { rank: 3, points: 198, division: 1 },
      '2023': { rank: 4, points: 170.4, division: 1 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'vira-lata',
    name: 'Vira Lata',
    foundationYear: '2008',
    active: true,
    inters: {
      '2007': { rank: 10 },
      '2008': { rank: 5 },
      '2009': { rank: 5, points: 127 },
      '2010': { rank: 4, points: 117 },
      '2011': { rank: 5, points: 105 },
      '2012': { rank: 3, points: 166 },
      '2013': { rank: 3, points: 199 },
      '2014': { rank: 2, points: 226 },
      '2015': { rank: 4, points: 124 },
      '2016': { rank: 4, points: 109 },
      '2017': { rank: 4, points: 97 },
      '2018': { rank: 8, points: 53 },
      '2019': { rank: 7, points: 74 },
      '2022': { rank: 12, points: 50, division: 1 },
      '2023': { rank: 9, points: 89.4, division: 1 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'malagueta',
    name: 'Malagueta',
    foundationYear: '2009',
    active: true,
    inters: {
      '2011': { rank: 20, points: 16 },
      '2012': { rank: 22, points: 9 },
      '2013': { rank: 23, points: 0 },
      '2014': { rank: 27, points: -2 },
      '2015': { rank: 18, points: 14 },
      '2016': { rank: 11, points: 43 },
      '2017': { rank: 15, points: 23 },
      '2018': { rank: 16, points: 27 },
      '2019': { rank: 20, points: 16 },
      '2022': { rank: 2, points: 180, division: 2 },
      '2023': { rank: 11, points: 77.2, division: 1 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'chefia',
    name: 'Chefia',
    foundationYear: '2009',
    active: true,
    inters: {
      '2009': { rank: 15, points: 10 },
      '2010': { rank: 13, points: 42 },
      '2011': { rank: 23, points: 10 },
      '2012': { rank: 10, points: 53 },
      '2013': { rank: 13, points: 30 },
      '2014': { rank: 8, points: 57 },
      '2015': { rank: 17, points: 19 },
      '2016': { rank: 9, points: 67 },
      '2017': { rank: 16, points: 18 },
      '2018': { rank: 9, points: 51 },
      '2019': { rank: 10, points: 53 },
      '2022': { rank: 10, points: 54, division: 1 },
      '2023': { rank: 12, points: 72.6, division: 1 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'unificada',
    name: 'Unificada',
    foundationYear: '2009',
    active: true,
    inters: {
      '2010': { rank: 11, points: 51 },
      '2011': { rank: 11, points: 57 },
      '2012': { rank: 6, points: 71 },
      '2013': { rank: 8, points: 68 },
      '2014': { rank: 4, points: 105 },
      '2015': { rank: 6, points: 96 },
      '2016': { rank: 6, points: 87 },
      '2017': { rank: 7, points: 55 },
      '2018': { rank: 12, points: 40 },
      '2019': { rank: 8, points: 65 },
      '2022': { rank: 7, points: 94, division: 1 },
      '2023': { rank: 3, points: 171.6, division: 1 }
    }
  },
  {
    id: 'devasta',
    name: 'Devasta',
    foundationYear: '2009',
    active: true,
    inters: {
      '2013': { rank: 23, points: 0 },
      '2014': { rank: 20, points: 10 },
      '2015': { rank: 25, points: 3 },
      '2016': { rank: 22, points: 9 },
      '2017': { rank: 35, points: -23 },
      '2018': { rank: 15, points: 32 },
      '2019': { rank: 35, points: 0 },
      '2022': { rank: 2, points: 245, division: 3 },
      '2023': { rank: 10, points: 112.6, division: 2 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'predadora',
    name: 'Predadora',
    foundationYear: '2009',
    active: true,
    inters: {
      '2007': { rank: 5 },
      '2009': { rank: 9, points: 78 },
      '2010': { rank: 5, points: 89 },
      '2011': { rank: 7, points: 84 },
      '2012': { rank: 11, points: 53 },
      '2013': { rank: 14, points: 29 },
      '2014': { rank: 15, points: 28 },
      '2015': { rank: 27, points: -3 },
      '2016': { rank: 13, points: 39 },
      '2017': { rank: 10, points: 42 },
      '2018': { rank: 22, points: 15 },
      '2019': { rank: 39, points: -10 },
      '2022': { rank: 4, points: 203, division: 3 },
      '2023': { rank: 4, points: 229.8, division: 3 },
      '2024': { rank: 0, points: 0, division: 3 }
    }
  },
  {
    id: 'sulfurosa',
    name: 'Sulfurosa',
    foundationYear: '2010',
    active: true,
    inters: {
      '2010': { rank: 7, points: 79 },
      '2011': { rank: 14, points: 47 },
      '2012': { rank: 5, points: 79 },
      '2013': { rank: 4, points: 111 },
      '2014': { rank: 10, points: 50 },
      '2015': { rank: 9, points: 55 },
      '2016': { rank: 7, points: 75 },
      '2017': { rank: 8, points: 56 },
      '2018': { rank: 7, points: 55 },
      '2019': { rank: 13, points: 33 },
      '2022': { rank: 8, points: 84, division: 1 },
      '2023': { rank: 13, points: 68, division: 1 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'sedentaria',
    name: 'Sedentária',
    foundationYear: '2010',
    active: true,
    inters: {
      '2011': { rank: 2, points: 244 },
      '2012': { rank: 2, points: 278 },
      '2013': { rank: 2, points: 243 },
      '2014': { rank: 1, points: 277 },
      '2015': { rank: 1, points: 266 },
      '2016': { rank: 2, points: 235 },
      '2017': { rank: 2, points: 231 },
      '2018': { rank: 2, points: 241 },
      '2019': { rank: 1, points: 265 },
      '2022': { rank: 1, points: 301, division: 1 },
      '2023': { rank: 1, points: 344.2, division: 1 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'tagarela',
    name: 'Tagarela',
    foundationYear: '2010',
    active: true,
    inters: {
      '2010': { rank: 15, points: 33 },
      '2011': { rank: 9, points: 73 },
      '2012': { rank: 12, points: 50 },
      '2013': { rank: 18, points: 18 },
      '2014': { rank: 29, points: -13 },
      '2015': { rank: 12, points: 41 },
      '2016': { rank: 21, points: 10 },
      '2017': { rank: 25, points: 7 },
      '2018': { rank: 11, points: 41 },
      '2019': { rank: 16, points: 28 },
      '2022': { rank: 9, points: 83, division: 1 },
      '2023': { rank: 8, points: 96.2, division: 1 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'mercenaria',
    name: 'Mercenária',
    foundationYear: '2010',
    active: true,
    inters: {
      '2011': { rank: 15, points: 23 },
      '2012': { rank: 17, points: 23 },
      '2013': { rank: 17, points: 20 },
      '2014': { rank: 5, points: 67 },
      '2015': { rank: 8, points: 57 },
      '2016': { rank: 10, points: 49 },
      '2017': { rank: 26, points: 4 },
      '2018': { rank: 38, points: -46 },
      '2019': { rank: 34, points: 0 },
      '2022': { rank: 3, points: 224, division: 3 },
      '2023': { rank: 2, points: 304, division: 3 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'trepadeira',
    name: 'Trepadeira',
    foundationYear: '2010',
    active: true,
    inters: {
      '2014': { rank: 18, points: 16 },
      '2015': { rank: 24, points: 4 },
      '2016': { rank: 32, points: -10 },
      '2017': { rank: 24, points: 8 },
      '2018': { rank: 23, points: 13 },
      '2019': { rank: 27, points: 4 },
      '2022': { rank: 8, points: 95, division: 2 },
      '2023': { rank: 14, points: 54.4, division: 2 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'faminta',
    name: 'Faminta',
    foundationYear: '2010',
    active: true,
    inters: {
      '2009': { rank: 14, points: 11 },
      '2010': { rank: 18, points: 18 },
      '2012': { rank: 19, points: 19 },
      '2013': { rank: 19, points: 15 },
      '2014': { rank: 21, points: 9 },
      '2015': { rank: 13, points: 28 },
      '2016': { rank: 17, points: 31 },
      '2017': { rank: 17, points: 16 },
      '2018': { rank: 20, points: 18 },
      '2019': { rank: 15, points: 30 },
      '2022': { rank: 14, points: 35, division: 1 },
      '2023': { rank: 11, points: 103.8, division: 2 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'quimera',
    name: 'Quimera',
    foundationYear: '2010',
    active: true,
    inters: {
      '2011': { rank: 26, points: 3 },
      '2012': { rank: 24, points: 7 },
      '2013': { rank: 23, points: 0 },
      '2014': { rank: 16, points: 20 },
      '2015': { rank: 20, points: 9 },
      '2016': { rank: 29, points: 0 },
      '2017': { rank: 31, points: -4 },
      '2018': { rank: 28, points: 4 },
      '2019': { rank: 37, points: -1 },
      '2022': { rank: 9, points: 16, division: 3 },
      '2023': { rank: 6, points: 135.6, division: 3 },
      '2024': { rank: 0, points: 0, division: 3 }
    }
  },
  {
    id: 'magnata',
    name: 'Magnata',
    foundationYear: '2011',
    active: true,
    inters: {
      '2011': { rank: 17, points: 22 },
      '2012': { rank: 14, points: 46 },
      '2013': { rank: 10, points: 36 },
      '2014': { rank: 9, points: 54 },
      '2015': { rank: 11, points: 42 },
      '2016': { rank: 14, points: 36 },
      '2017': { rank: 23, points: 10 },
      '2018': { rank: 17, points: 26 },
      '2019': { rank: 18, points: 22 },
      '2022': { rank: 5, points: 157, division: 2 },
      '2023': { rank: 3, points: 185.6, division: 2 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'tectonica',
    name: 'Tectônica',
    foundationYear: '2011',
    active: true,
    inters: {
      '2011': { rank: 27, points: 1 },
      '2012': { rank: 25, points: 2 },
      '2013': { rank: 23, points: 0 },
      '2014': { rank: 26, points: 0 },
      '2015': { rank: 22, points: 8 },
      '2017': { rank: 21, points: 12 },
      '2018': { rank: 32, points: -10 },
      '2019': { rank: 31, points: 2 },
      '2022': { rank: 12, points: 39, division: 2 },
      '2023': { rank: 9, points: 120, division: 2 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'mecanica',
    name: 'Mecânica',
    foundationYear: '2010',
    active: true,
    inters: {
      '2011': { rank: 18, points: 22 },
      '2012': { rank: 18, points: 20 },
      '2013': { rank: 15, points: 27 },
      '2014': { rank: 14, points: 30 },
      '2015': { rank: 10, points: 48 },
      '2016': { rank: 15, points: 36 },
      '2017': { rank: 22, points: 11 },
      '2018': { rank: 34, points: -21 },
      '2019': { rank: 26, points: 5 },
      '2022': { rank: 4, points: 161, division: 2 },
      '2023': { rank: 2, points: 186.6, division: 2 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'sanguinaria',
    name: 'Sanguinária',
    foundationYear: '2012',
    active: true,
    inters: {
      '2008': { rank: 6 },
      '2009': { rank: 13, points: 28 },
      '2010': { rank: 12, points: 48 },
      '2011': { rank: 19, points: 20 },
      '2012': { rank: 26, points: -5 },
      '2013': { rank: 24, points: -6 },
      '2014': { rank: 22, points: 9 },
      '2015': { rank: 23, points: 6 },
      '2016': { rank: 26, points: 5 },
      '2017': { rank: 20, points: 15 },
      '2018': { rank: 14, points: 37 },
      '2019': { rank: 9, points: 54 },
      '2022': { rank: 15, points: 35, division: 1 },
      '2023': { rank: 7, points: 141.6, division: 2 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'soberana',
    name: 'Soberana',
    foundationYear: '2013',
    active: true,
    inters: {
      '2018': { rank: 36, points: -29 },
      '2019': { rank: 23, points: 8 },
      '2022': { rank: 11, points: 48, division: 2 },
      '2023': { rank: 12, points: 80.2, division: 2 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'hamiltoniana',
    name: 'Hamiltoniana',
    foundationYear: '2013',
    active: true,
    inters: {
      '2011': { rank: 24, points: 10 },
      '2012': { rank: 20, points: 16 },
      '2013': { rank: 21, points: 8 },
      '2014': { rank: 19, points: 14 },
      '2015': { rank: 30, points: -41 },
      '2016': { rank: 18, points: 23 },
      '2017': { rank: 11, points: 38 },
      '2018': { rank: 13, points: 39 },
      '2019': { rank: 11, points: 42 },
      '2022': { rank: 13, points: 39, division: 1 },
      '2023': { rank: 16, points: 11, division: 1 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'berranteira',
    name: 'Berranteira',
    foundationYear: '2013',
    active: true,
    inters: {
      '2014': { rank: 23, points: 7 },
      '2015': { rank: 15, points: 24 },
      '2016': { rank: 27, points: 4 },
      '2017': { rank: 19, points: 16 },
      '2018': { rank: 35, points: -27 },
      '2019': { rank: 25, points: 6 },
      '2022': { rank: 3, points: 170, division: 2 },
      '2023': { rank: 15, points: 24.8, division: 1 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'simbiotica',
    name: 'Simbiótica',
    foundationYear: '2013',
    active: true,
    inters: {
      '2019': { rank: 32, points: 1 },
      '2022': { rank: 14, points: 8, division: 2 },
      '2023': { rank: 16, points: 29.4, division: 2 },
      '2024': { rank: 0, points: 0, division: 3 }
    }
  },
  {
    id: 'subversiva',
    name: 'Subversiva',
    foundationYear: '2013',
    active: true,
    inters: {
      '2019': { rank: 29, points: 4 },
      '2022': { rank: 16, points: 2, division: 2 },
      '2023': { rank: 3, points: 291.6, division: 3 },
      '2024': { rank: 0, points: 0, division: 3 }
    }
  },
  {
    id: 'problematica',
    name: 'Problemática',
    foundationYear: '2015',
    active: true,
    inters: {
      '2011': { rank: 22, points: 13 },
      '2012': { rank: 21, points: 10 },
      '2013': { rank: 22, points: 4 },
      '2014': { rank: 17, points: 16 },
      '2015': { rank: 16, points: 21 },
      '2016': { rank: 19, points: 22 },
      '2017': { rank: 34, points: -22 },
      '2018': { rank: 24, points: 8 },
      '2019': { rank: 38, points: -1 },
      '2022': { rank: 1, points: 286, division: 3 },
      '2023': { rank: 1, points: 218.2, division: 2 },
      '2024': { rank: 0, points: 0, division: 1 }
    }
  },
  {
    id: 'analfabeta',
    name: 'Analfabeta',
    foundationYear: '2015',
    active: true,
    inters: {
      '2016': { rank: 31, points: 0 },
      '2017': { rank: 32, points: -6 },
      '2018': { rank: 33, points: -20 },
      '2019': { rank: 21, points: 12 },
      '2022': { rank: 6, points: 111, division: 2 },
      '2023': { rank: 4, points: 173.8, division: 2 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'improdutiva',
    name: 'Improdutiva',
    foundationYear: '2015',
    active: true,
    inters: {
      '2015': { rank: 28, points: -10 },
      '2016': { rank: 28, points: 2 },
      '2017': { rank: 33, points: -8 },
      '2018': { rank: 19, points: 20 },
      '2019': { rank: 14, points: 32 },
      '2022': { rank: 16, points: 30, division: 1 },
      '2023': { rank: 5, points: 164.6, division: 2 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'desastrosa',
    name: 'Desastrosa',
    foundationYear: '2015',
    active: true,
    inters: {
      '2016': { rank: 23, points: 8 },
      '2017': { rank: 28, points: 0 },
      '2018': { rank: 27, points: 6 },
      '2019': { rank: 33, points: 0 },
      '2022': { rank: 5, points: 111, division: 3 },
      '2023': { rank: 1, points: 314.8, division: 3 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'pintada',
    name: 'Pintada',
    foundationYear: '2015',
    active: true,
    inters: {
      '2016': { rank: 20, points: 10 },
      '2017': { rank: 30, points: 0 },
      '2018': { rank: 29, points: -8 },
      '2019': { rank: 28, points: 4 },
      '2022': { rank: 9, points: 89, division: 2 },
      '2023': { rank: 6, points: 161.4, division: 2 },
      '2024': { rank: 0, points: 0, division: 2 }
    }
  },
  {
    id: 'desgovernada',
    name: 'Desgovernada',
    foundationYear: '2015',
    active: false,
    inters: {
      '2017': { rank: 29, points: 0 },
      '2018': { rank: 25, points: 8 },
      '2019': { rank: 22, points: 9 },
      '2022': { rank: 15, points: 5, division: 2 },
      '2023': { rank: 7, points: 108.2, division: 3 }
    }
  },
  {
    id: 'intrusiva',
    name: 'Intrusiva',
    foundationYear: '2017',
    active: false,
    inters: {
      '2018': { rank: 30, points: -9 },
      '2019': { rank: 40, points: -30 },
      '2022': { rank: 7, points: 81, division: 3 },
      '2023': { rank: 8, points: 85.8, division: 3 }
    }
  },
  {
    id: 'dramatica',
    name: 'Dramática',
    foundationYear: '2017',
    active: true,
    inters: {
      '2019': { rank: 41, points: -60 },
      '2023': { rank: 10, points: 52, division: 3 },
      '2024': { rank: 0, points: 0, division: 3 }
    }
  },
  {
    id: 'neurotica',
    name: 'Neurótica',
    foundationYear: '2018',
    active: true,
    inters: {
      '2009': { rank: 12, points: 39 },
      '2010': { rank: 16, points: 29 },
      '2011': { rank: 16, points: 22 },
      '2012': { rank: 27, points: -10 },
      '2019': { rank: 36, points: 0 },
      '2022': { rank: 6, points: 104, division: 3 },
      '2023': { rank: 5, points: 212.2, division: 3 },
      '2024': { rank: 0, points: 0, division: 3 }
    }
  },
  {
    id: 'malcriada',
    name: 'Malcriada',
    foundationYear: '2018',
    active: true,
    inters: {
      '2019': { rank: 24, points: 6 },
      '2022': { rank: 13, points: 11, division: 2 },
      '2023': { rank: 15, points: 32.8, division: 2 },
      '2024': { rank: 0, points: 0, division: 3 }
    }
  },
  {
    id: 'arregacada',
    name: 'Arregaçada',
    foundationYear: '2022',
    active: true,
    inters: {
      '2022': { rank: 10, points: 12, division: 3 },
      '2023': { rank: 11, points: 19.8, division: 3 },
      '2024': { rank: 0, points: 0, division: 3 }
    }
  },
  {
    id: 'dolorosa',
    name: 'Dolorosa',
    foundationYear: '2022',
    active: true,
    inters: {
      '2022': { rank: 8, points: 58, division: 3 },
      '2023': { rank: 9, points: 55.2, division: 3 },
      '2024': { rank: 0, points: 0, division: 3 }
    }
  },
  {
    id: 'fundida',
    name: 'Fundida',
    foundationYear: '2023',
    active: false,
    inters: {
      '2023': { rank: 12, points: 0, division: 3 }
    }
  },
  {
    id: 'kraken',
    name: 'Kraken',
    foundationYear: '2024',
    active: true,
    inters: {
      '2024': { rank: 0, points: 0, division: 3 }
    }
  },
  {
    id: 'tenebrosa',
    name: 'Tenebrosa',
    foundationYear: '2015',
    active: false,
    inters: {
      '2011': { rank: 21, points: 16 },
      '2016': { rank: 30, points: 0 },
      '2017': { rank: 14, points: 29 },
      '2018': { rank: 37, points: -30 }
    }
  },
  {
    id: 'anabolica',
    name: 'Anabólica',
    foundationYear: '2017',
    active: false,
    inters: {
      '2018': { rank: 31, points: -10 }
    }
  }
];

export const foundationYears: FoundationYear[] = [
  {
    year: '2001',
    athletics: [
      {
        id: 'madrasta',
        name: 'Madrasta',
        foundationYear: '2001',
        active: true
      }
    ]
  },
  {
    year: '2007',
    athletics: [
      {
        id: 'banguela',
        name: 'Banguela',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'agronomia',
        name: 'Agronomia',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'gambiarra',
        name: 'Gambiarra',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'enigma',
        name: 'Enigma',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'mafiosa',
        name: 'Mafiosa',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'overdose',
        name: 'Overdose',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'venenosa',
        name: 'Venenosa',
        foundationYear: '2007',
        active: true
      }
    ]
  },
  {
    year: '2008',
    athletics: [
      {
        id: 'picareta',
        name: 'Picareta',
        foundationYear: '2008',
        active: true
      },
      {
        id: 'vira-lata',
        name: 'Vira Lata',
        foundationYear: '2008',
        active: true
      }
    ]
  },
  {
    year: '2009',
    athletics: [
      {
        id: 'malagueta',
        name: 'Malagueta',
        foundationYear: '2009',
        active: true
      },
      {
        id: 'chefia',
        name: 'Chefia',
        foundationYear: '2009',
        active: true
      },
      {
        id: 'unificada',
        name: 'Unificada',
        foundationYear: '2009',
        active: true
      },
      {
        id: 'devasta',
        name: 'Devasta',
        foundationYear: '2009',
        active: true
      },
      {
        id: 'predadora',
        name: 'Predadora',
        foundationYear: '2009',
        active: true
      }
    ]
  },
  {
    year: '2010',
    athletics: [
      {
        id: 'trepadeira',
        name: 'Trepadeira',
        foundationYear: '2010',
        active: true
      },

      {
        id: 'tagarela',
        name: 'Tagarela',
        foundationYear: '2010',
        active: true
      },
      {
        id: 'sulfurosa',
        name: 'Sulfurosa',
        foundationYear: '2010',
        active: true
      },
      {
        id: 'mecanica',
        name: 'Mecânica',
        foundationYear: '2010',
        active: true
      },
      {
        id: 'sedentaria',
        name: 'Sedentária',
        foundationYear: '2010',
        active: true
      },
      {
        id: 'faminta',
        name: 'Faminta',
        foundationYear: '2010',
        active: true
      },
      {
        id: 'quimera',
        name: 'Quimera',
        foundationYear: '2010',
        active: true
      },
      {
        id: 'mercenaria',
        name: 'Mercenária',
        foundationYear: '2010',
        active: true
      }
    ]
  },
  {
    year: '2011',
    athletics: [
      {
        id: 'magnata',
        name: 'Magnata',
        foundationYear: '2011',
        active: true
      },
      {
        id: 'tectonica',
        name: 'Tectônica',
        foundationYear: '2011',
        active: true
      }
    ]
  },
  {
    year: '2012',
    athletics: [
      {
        id: 'sanguinaria',
        name: 'Sanguinária',
        foundationYear: '2012',
        active: true
      }
    ]
  },
  {
    year: '2013',
    athletics: [
      {
        id: 'soberana',
        name: 'Soberana',
        foundationYear: '2013',
        active: true
      },
      {
        id: 'berranteira',
        name: 'Berranteira',
        foundationYear: '2013',
        active: true
      },
      {
        id: 'hamiltoniana',
        name: 'Hamiltoniana',
        foundationYear: '2013',
        active: true
      },
      {
        id: 'subversiva',
        name: 'Subversiva',
        foundationYear: '2013',
        active: true
      },
      {
        id: 'simbiotica',
        name: 'Simbiótica',
        foundationYear: '2013',
        active: true
      }
    ]
  },
  {
    year: '2015',
    athletics: [
      {
        id: 'pintada',
        name: 'Pintada',
        foundationYear: '2015',
        active: true
      },
      {
        id: 'desastrosa',
        name: 'Desastrosa',
        foundationYear: '2015',
        active: true
      },
      {
        id: 'problematica',
        name: 'Problemática',
        foundationYear: '2015',
        active: true
      },
      {
        id: 'improdutiva',
        name: 'Improdutiva',
        foundationYear: '2015',
        active: true
      },
      {
        id: 'analfabeta',
        name: 'Analfabeta',
        foundationYear: '2015',
        active: true
      },
      {
        id: 'desgovernada',
        name: 'Desgovernada',
        foundationYear: '2015',
        active: false
      },
      {
        id: 'tenebrosa',
        name: 'Tenebrosa',
        foundationYear: '2015',
        active: false
      }
    ]
  },
  {
    year: '2017',
    athletics: [
      {
        id: 'intrusiva',
        name: 'Intrusiva',
        foundationYear: '2017',
        active: false
      },
      {
        id: 'dramatica',
        name: 'Dramática',
        foundationYear: '2017',
        active: true
      },
      {
        id: 'anabolica',
        name: 'Anabólica',
        foundationYear: '2017',
        active: false
      }
    ]
  },
  {
    year: '2018',
    athletics: [
      {
        id: 'neurotica',
        name: 'Neurótica',
        foundationYear: '2018',
        active: true
      },
      {
        id: 'malcriada',
        name: 'Malcriada',
        foundationYear: '2018',
        active: true
      }
    ]
  },
  {
    year: '2022',
    athletics: [
      {
        id: 'arregacada',
        name: 'Arregaçada',
        foundationYear: '2022',
        active: true
      },
      {
        id: 'dolorosa',
        name: 'Dolorosa',
        foundationYear: '2022',
        active: true
      }
    ]
  },
  {
    year: '2023',
    athletics: [
      {
        id: 'fundida',
        name: 'Fundida',
        foundationYear: '2023',
        active: false
      }
    ]
  },
  {
    year: '2024',
    athletics: [
      {
        id: 'kraken',
        name: 'Kraken',
        foundationYear: '2024',
        active: true
      }
    ]
  }
];

export const inters: Inter[] = [
  {
    year: '2007',
    standings: [
      {
        rank: 1,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 2,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 3,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 4,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 5,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 6,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 7,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 8,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 9,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 10,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'madrasta',
        name: 'Madrasta',
        foundationYear: '2001',
        active: true
      }
    ]
  },
  {
    year: '2008',
    standings: [
      {
        rank: 1,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 2,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 3,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 4,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 5,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 6,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      },
      {
        rank: 7,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 8,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 9,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 10,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'banguela',
        name: 'Banguela',
        foundationYear: '2007',
        active: true
      }
    ]
  },
  {
    year: '2009',
    standings: [
      {
        rank: 1,
        points: 277,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 2,
        points: 212,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 3,
        points: 197,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 4,
        points: 135,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 5,
        points: 127,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 6,
        points: 106,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 7,
        points: 106,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 8,
        points: 83,
        athletic: {
          id: 'enigma',
          name: 'Enigma',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 9,
        points: 78,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 10,
        points: 73,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 11,
        points: 64,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 12,
        points: 39,
        athletic: {
          id: 'neurotica',
          name: 'Neurótica',
          foundationYear: '2018',
          active: true
        }
      },
      {
        rank: 13,
        points: 28,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      },
      {
        rank: 14,
        points: 11,
        athletic: {
          id: 'faminta',
          name: 'Faminta',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 15,
        points: 10,
        athletic: {
          id: 'chefia',
          name: 'Chefia',
          foundationYear: '2009',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'mafiosa',
        name: 'Mafiosa',
        foundationYear: '2007',
        active: true
      }
    ]
  },
  {
    year: '2010',
    standings: [
      {
        rank: 1,
        points: 282,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 2,
        points: 242,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 3,
        points: 150,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 4,
        points: 117,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 5,
        points: 89,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 6,
        points: 86,
        athletic: {
          id: 'enigma',
          name: 'Enigma',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 7,
        points: 79,
        athletic: {
          id: 'sulfurosa',
          name: 'Sulfurosa',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 8,
        points: 75,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 9,
        points: 66,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 10,
        points: 64,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 11,
        points: 51,
        athletic: {
          id: 'unificada',
          name: 'Unificada',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 12,
        points: 48,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      },
      {
        rank: 13,
        points: 42,
        athletic: {
          id: 'chefia',
          name: 'Chefia',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 14,
        points: 41,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 15,
        points: 33,
        athletic: {
          id: 'tagarela',
          name: 'Tagarela',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 16,
        points: 29,
        athletic: {
          id: 'neurotica',
          name: 'Neurótica',
          foundationYear: '2018',
          active: true
        }
      },
      {
        rank: 17,
        points: 22,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 18,
        points: 18,
        athletic: {
          id: 'faminta',
          name: 'Faminta',
          foundationYear: '2010',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'gambiarra',
        name: 'Gambiarra',
        foundationYear: '2007',
        active: true
      }
    ]
  },
  {
    year: '2011',
    standings: [
      {
        rank: 1,
        points: 271,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 2,
        points: 244,
        athletic: {
          id: 'sedentaria',
          name: 'Sedentária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 3,
        points: 116,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 4,
        points: 116,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 5,
        points: 105,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 6,
        points: 96,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 7,
        points: 84,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 8,
        points: 80,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 9,
        points: 73,
        athletic: {
          id: 'tagarela',
          name: 'Tagarela',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 10,
        points: 68,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 11,
        points: 57,
        athletic: {
          id: 'unificada',
          name: 'Unificada',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 12,
        points: 51,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 13,
        points: 50,
        athletic: {
          id: 'enigma',
          name: 'Enigma',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 14,
        points: 47,
        athletic: {
          id: 'sulfurosa',
          name: 'Sulfurosa',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 15,
        points: 23,
        athletic: {
          id: 'mercenaria',
          name: 'Mercenária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 16,
        points: 22,
        athletic: {
          id: 'neurotica',
          name: 'Neurótica',
          foundationYear: '2018',
          active: true
        }
      },
      {
        rank: 17,
        points: 22,
        athletic: {
          id: 'magnata',
          name: 'Magnata',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 18,
        points: 22,
        athletic: {
          id: 'mecanica',
          name: 'Mecânica',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 19,
        points: 20,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      },
      {
        rank: 20,
        points: 16,
        athletic: {
          id: 'malagueta',
          name: 'Malagueta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 21,
        points: 16,
        athletic: {
          id: 'tenebrosa',
          name: 'Tenebrosa',
          foundationYear: '?',
          active: false
        }
      },
      {
        rank: 22,
        points: 13,
        athletic: {
          id: 'problematica',
          name: 'Problemática',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 23,
        points: 10,
        athletic: {
          id: 'chefia',
          name: 'Chefia',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 24,
        points: 10,
        athletic: {
          id: 'hamiltoniana',
          name: 'Hamiltoniana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 25,
        points: 6,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 26,
        points: 3,
        athletic: {
          id: 'quimera',
          name: 'Quimera',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 27,
        points: 1,
        athletic: {
          id: 'tectonica',
          name: 'Tectônica',
          foundationYear: '2011',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'madrasta',
        name: 'Madrasta',
        foundationYear: '2001',
        active: true
      },
      {
        id: 'picareta',
        name: 'Picareta',
        foundationYear: '2008',
        active: true
      },
      {
        id: 'gambiarra',
        name: 'Gambiarra',
        foundationYear: '2007',
        active: true
      }
    ]
  },
  {
    year: '2012',
    standings: [
      {
        rank: 1,
        points: 296,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 2,
        points: 278,
        athletic: {
          id: 'sedentaria',
          name: 'Sedentária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 3,
        points: 166,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 4,
        points: 86,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 5,
        points: 79,
        athletic: {
          id: 'sulfurosa',
          name: 'Sulfurosa',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 6,
        points: 71,
        athletic: {
          id: 'unificada',
          name: 'Unificada',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 7,
        points: 69,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 8,
        points: 67,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 9,
        points: 54,
        athletic: {
          id: 'enigma',
          name: 'Enigma',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 10,
        points: 53,
        athletic: {
          id: 'chefia',
          name: 'Chefia',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 11,
        points: 53,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 12,
        points: 50,
        athletic: {
          id: 'tagarela',
          name: 'Tagarela',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 13,
        points: 50,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 14,
        points: 46,
        athletic: {
          id: 'magnata',
          name: 'Magnata',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 15,
        points: 38,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 16,
        points: 30,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 17,
        points: 23,
        athletic: {
          id: 'mercenaria',
          name: 'Mercenária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 18,
        points: 20,
        athletic: {
          id: 'mecanica',
          name: 'Mecânica',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 19,
        points: 19,
        athletic: {
          id: 'faminta',
          name: 'Faminta',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 20,
        points: 16,
        athletic: {
          id: 'hamiltoniana',
          name: 'Hamiltoniana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 21,
        points: 10,
        athletic: {
          id: 'problematica',
          name: 'Problemática',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 22,
        points: 9,
        athletic: {
          id: 'malagueta',
          name: 'Malagueta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 23,
        points: 9,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 24,
        points: 7,
        athletic: {
          id: 'quimera',
          name: 'Quimera',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 25,
        points: 2,
        athletic: {
          id: 'tectonica',
          name: 'Tectônica',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 26,
        points: -5,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      },
      {
        rank: 27,
        points: -10,
        athletic: {
          id: 'neurotica',
          name: 'Neurótica',
          foundationYear: '2018',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'picareta',
        name: 'Picareta',
        foundationYear: '2008',
        active: true
      },
      {
        id: 'enigma',
        name: 'Enigma',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'madrasta',
        name: 'Madrasta',
        foundationYear: '2001',
        active: true
      }
    ]
  },
  {
    year: '2013',
    standings: [
      {
        rank: 1,
        points: 252,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 2,
        points: 243,
        athletic: {
          id: 'sedentaria',
          name: 'Sedentária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 3,
        points: 199,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 4,
        points: 111,
        athletic: {
          id: 'sulfurosa',
          name: 'Sulfurosa',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 5,
        points: 83,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 6,
        points: 82,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 7,
        points: 69,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 8,
        points: 68,
        athletic: {
          id: 'unificada',
          name: 'Unificada',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 9,
        points: 53,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 10,
        points: 36,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 10,
        points: 36,
        athletic: {
          id: 'magnata',
          name: 'Magnata',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 12,
        points: 34,
        athletic: {
          id: 'enigma',
          name: 'Enigma',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 13,
        points: 30,
        athletic: {
          id: 'chefia',
          name: 'Chefia',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 14,
        points: 29,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 15,
        points: 27,
        athletic: {
          id: 'mecanica',
          name: 'Mecânica',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 16,
        points: 23,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 17,
        points: 20,
        athletic: {
          id: 'mercenaria',
          name: 'Mercenária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 18,
        points: 18,
        athletic: {
          id: 'tagarela',
          name: 'Tagarela',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 19,
        points: 15,
        athletic: {
          id: 'faminta',
          name: 'Faminta',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 20,
        points: 13,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 21,
        points: 8,
        athletic: {
          id: 'hamiltoniana',
          name: 'Hamiltoniana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 22,
        points: 4,
        athletic: {
          id: 'problematica',
          name: 'Problemática',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 23,
        points: 0,
        athletic: {
          id: 'malagueta',
          name: 'Malagueta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 23,
        points: 0,
        athletic: {
          id: 'devasta',
          name: 'Devasta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 23,
        points: 0,
        athletic: {
          id: 'quimera',
          name: 'Quimera',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 23,
        points: 0,
        athletic: {
          id: 'tectonica',
          name: 'Tectônica',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 24,
        points: -6,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'gambiarra',
        name: 'Gambiarra',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'picareta',
        name: 'Picareta',
        foundationYear: '2008',
        active: true
      },
      {
        id: 'agronomia',
        name: 'Agronomia',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'enigma',
        name: 'Enigma',
        foundationYear: '2007',
        active: true
      }
    ]
  },
  {
    year: '2014',
    standings: [
      {
        rank: 1,
        points: 277,
        athletic: {
          id: 'sedentaria',
          name: 'Sedentária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 2,
        points: 226,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 3,
        points: 222,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 4,
        points: 105,
        athletic: {
          id: 'unificada',
          name: 'Unificada',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 5,
        points: 67,
        athletic: {
          id: 'mercenaria',
          name: 'Mercenária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 6,
        points: 66,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 7,
        points: 60,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 8,
        points: 57,
        athletic: {
          id: 'chefia',
          name: 'Chefia',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 9,
        points: 54,
        athletic: {
          id: 'magnata',
          name: 'Magnata',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 10,
        points: 50,
        athletic: {
          id: 'sulfurosa',
          name: 'Sulfurosa',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 11,
        points: 45,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 12,
        points: 43,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 13,
        points: 43,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 14,
        points: 30,
        athletic: {
          id: 'mecanica',
          name: 'Mecânica',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 15,
        points: 28,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 16,
        points: 20,
        athletic: {
          id: 'quimera',
          name: 'Quimera',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 17,
        points: 16,
        athletic: {
          id: 'problematica',
          name: 'Problemática',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 18,
        points: 16,
        athletic: {
          id: 'trepadeira',
          name: 'Trepadeira',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 19,
        points: 14,
        athletic: {
          id: 'hamiltoniana',
          name: 'Hamiltoniana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 20,
        points: 10,
        athletic: {
          id: 'devasta',
          name: 'Devasta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 21,
        points: 9,
        athletic: {
          id: 'faminta',
          name: 'Faminta',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 22,
        points: 9,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      },
      {
        rank: 23,
        points: 7,
        athletic: {
          id: 'berranteira',
          name: 'Berranteira',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 24,
        points: 7,
        athletic: {
          id: 'enigma',
          name: 'Enigma',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 25,
        points: 6,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 26,
        points: 0,
        athletic: {
          id: 'tectonica',
          name: 'Tectônica',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 27,
        points: -2,
        athletic: {
          id: 'malagueta',
          name: 'Malagueta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 28,
        points: -4,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 29,
        points: -13,
        athletic: {
          id: 'tagarela',
          name: 'Tagarela',
          foundationYear: '2010',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'mafiosa',
        name: 'Mafiosa',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'vira-lata',
        name: 'Vira Lata',
        foundationYear: '2008',
        active: true
      },
      {
        id: 'madrasta',
        name: 'Madrasta',
        foundationYear: '2001',
        active: true
      }
    ]
  },
  {
    year: '2015',
    standings: [
      {
        rank: 1,
        points: 266,
        athletic: {
          id: 'sedentaria',
          name: 'Sedentária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 2,
        points: 226,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 3,
        points: 164,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 4,
        points: 124,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 5,
        points: 101,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 6,
        points: 96,
        athletic: {
          id: 'unificada',
          name: 'Unificada',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 7,
        points: 68,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 8,
        points: 57,
        athletic: {
          id: 'mercenaria',
          name: 'Mercenária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 9,
        points: 55,
        athletic: {
          id: 'sulfurosa',
          name: 'Sulfurosa',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 10,
        points: 48,
        athletic: {
          id: 'mecanica',
          name: 'Mecânica',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 11,
        points: 42,
        athletic: {
          id: 'magnata',
          name: 'Magnata',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 12,
        points: 41,
        athletic: {
          id: 'tagarela',
          name: 'Tagarela',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 13,
        points: 28,
        athletic: {
          id: 'faminta',
          name: 'Faminta',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 14,
        points: 25,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 15,
        points: 24,
        athletic: {
          id: 'berranteira',
          name: 'Berranteira',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 16,
        points: 21,
        athletic: {
          id: 'problematica',
          name: 'Problemática',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 17,
        points: 19,
        athletic: {
          id: 'chefia',
          name: 'Chefia',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 18,
        points: 14,
        athletic: {
          id: 'malagueta',
          name: 'Malagueta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 19,
        points: 12,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 20,
        points: 9,
        athletic: {
          id: 'quimera',
          name: 'Quimera',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 21,
        points: 9,
        athletic: {
          id: 'enigma',
          name: 'Enigma',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 22,
        points: 8,
        athletic: {
          id: 'tectonica',
          name: 'Tectônica',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 23,
        points: 6,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      },
      {
        rank: 24,
        points: 4,
        athletic: {
          id: 'trepadeira',
          name: 'Trepadeira',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 25,
        points: 3,
        athletic: {
          id: 'devasta',
          name: 'Devasta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 26,
        points: -2,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 27,
        points: -3,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 28,
        points: -10,
        athletic: {
          id: 'improdutiva',
          name: 'Improdutiva',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 29,
        points: -30,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 30,
        points: -41,
        athletic: {
          id: 'hamiltoniana',
          name: 'Hamiltoniana',
          foundationYear: '2013',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'picareta',
        name: 'Picareta',
        foundationYear: '2008',
        active: true
      },
      {
        id: 'unificada',
        name: 'Unificada',
        foundationYear: '2009',
        active: true
      },
      {
        id: 'gambiarra',
        name: 'Gambiarra',
        foundationYear: '2007',
        active: true
      }
    ]
  },
  {
    year: '2016',
    standings: [
      {
        rank: 1,
        points: 264,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 2,
        points: 235,
        athletic: {
          id: 'sedentaria',
          name: 'Sedentária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 3,
        points: 179,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 4,
        points: 109,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 5,
        points: 100,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 6,
        points: 87,
        athletic: {
          id: 'unificada',
          name: 'Unificada',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 7,
        points: 75,
        athletic: {
          id: 'sulfurosa',
          name: 'Sulfurosa',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 8,
        points: 71,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 9,
        points: 67,
        athletic: {
          id: 'chefia',
          name: 'Chefia',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 10,
        points: 49,
        athletic: {
          id: 'mercenaria',
          name: 'Mercenária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 11,
        points: 43,
        athletic: {
          id: 'malagueta',
          name: 'Malagueta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 12,
        points: 38,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 13,
        points: 39,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 14,
        points: 36,
        athletic: {
          id: 'magnata',
          name: 'Magnata',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 15,
        points: 36,
        athletic: {
          id: 'mecanica',
          name: 'Mecânica',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 16,
        points: 32,
        athletic: {
          id: 'enigma',
          name: 'Enigma',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 17,
        points: 31,
        athletic: {
          id: 'faminta',
          name: 'Faminta',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 18,
        points: 23,
        athletic: {
          id: 'hamiltoniana',
          name: 'Hamiltoniana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 19,
        points: 22,
        athletic: {
          id: 'problematica',
          name: 'Problemática',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 20,
        points: 10,
        athletic: {
          id: 'pintada',
          name: 'Pintada',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 21,
        points: 10,
        athletic: {
          id: 'tagarela',
          name: 'Tagarela',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 22,
        points: 9,
        athletic: {
          id: 'devasta',
          name: 'Devasta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 23,
        points: 8,
        athletic: {
          id: 'desastrosa',
          name: 'Desastrosa',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 24,
        points: 8,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 25,
        points: 5,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 26,
        points: 5,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      },
      {
        rank: 27,
        points: 4,
        athletic: {
          id: 'berranteira',
          name: 'Berranteira',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 28,
        points: 2,
        athletic: {
          id: 'improdutiva',
          name: 'Improdutiva',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 29,
        points: 0,
        athletic: {
          id: 'quimera',
          name: 'Quimera',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 30,
        points: 0,
        athletic: {
          id: 'tenebrosa',
          name: 'Tenebrosa',
          foundationYear: '?',
          active: false
        }
      },
      {
        rank: 31,
        points: 0,
        athletic: {
          id: 'analfabeta',
          name: 'Analfabeta',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 32,
        points: -10,
        athletic: {
          id: 'trepadeira',
          name: 'Trepadeira',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 33,
        points: -10,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'sulfurosa',
        name: 'Sulfurosa',
        foundationYear: '2010',
        active: true
      },
      {
        id: 'agronomia',
        name: 'Agronomia',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'sedentaria',
        name: 'Sedentária',
        foundationYear: '2010',
        active: true
      }
    ]
  },
  {
    year: '2017',
    standings: [
      {
        rank: 1,
        points: 306,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 2,
        points: 231,
        athletic: {
          id: 'sedentaria',
          name: 'Sedentária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 3,
        points: 195,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 4,
        points: 97,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 5,
        points: 95,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 6,
        points: 77,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 7,
        points: 55,
        athletic: {
          id: 'unificada',
          name: 'Unificada',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 8,
        points: 56,
        athletic: {
          id: 'sulfurosa',
          name: 'Sulfurosa',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 9,
        points: 52,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 10,
        points: 42,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 11,
        points: 38,
        athletic: {
          id: 'hamiltoniana',
          name: 'Hamiltoniana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 12,
        points: 38,
        athletic: {
          id: 'enigma',
          name: 'Enigma',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 13,
        points: 35,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 14,
        points: 29,
        athletic: {
          id: 'tenebrosa',
          name: 'Tenebrosa',
          foundationYear: '?',
          active: false
        }
      },
      {
        rank: 15,
        points: 23,
        athletic: {
          id: 'malagueta',
          name: 'Malagueta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 16,
        points: 18,
        athletic: {
          id: 'chefia',
          name: 'Chefia',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 17,
        points: 16,
        athletic: {
          id: 'faminta',
          name: 'Faminta',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 18,
        points: 16,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 19,
        points: 16,
        athletic: {
          id: 'berranteira',
          name: 'Berranteira',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 20,
        points: 15,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      },
      {
        rank: 21,
        points: 12,
        athletic: {
          id: 'tectonica',
          name: 'Tectônica',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 22,
        points: 11,
        athletic: {
          id: 'mecanica',
          name: 'Mecânica',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 23,
        points: 10,
        athletic: {
          id: 'magnata',
          name: 'Magnata',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 24,
        points: 8,
        athletic: {
          id: 'trepadeira',
          name: 'Trepadeira',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 25,
        points: 7,
        athletic: {
          id: 'tagarela',
          name: 'Tagarela',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 26,
        points: 4,
        athletic: {
          id: 'mercenaria',
          name: 'Mercenária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 27,
        points: 4,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 28,
        points: 0,
        athletic: {
          id: 'desastrosa',
          name: 'Desastrosa',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 29,
        points: 0,
        athletic: {
          id: 'desgovernada',
          name: 'Desgovernada',
          foundationYear: '2015',
          active: false
        }
      },
      {
        rank: 30,
        points: 0,
        athletic: {
          id: 'pintada',
          name: 'Pintada',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 31,
        points: -4,
        athletic: {
          id: 'quimera',
          name: 'Quimera',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 32,
        points: -6,
        athletic: {
          id: 'analfabeta',
          name: 'Analfabeta',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 33,
        points: -8,
        athletic: {
          id: 'improdutiva',
          name: 'Improdutiva',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 34,
        points: -22,
        athletic: {
          id: 'problematica',
          name: 'Problemática',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 35,
        points: -23,
        athletic: {
          id: 'devasta',
          name: 'Devasta',
          foundationYear: '2009',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'gambiarra',
        name: 'Gambiarra',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'mecanica',
        name: 'Mecânica',
        foundationYear: '2010',
        active: true
      },
      {
        id: 'unificada',
        name: 'Unificada',
        foundationYear: '2009',
        active: true
      }
    ]
  },
  {
    year: '2018',
    standings: [
      {
        rank: 1,
        points: 251,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 2,
        points: 241,
        athletic: {
          id: 'sedentaria',
          name: 'Sedentária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 3,
        points: 218,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 4,
        points: 139,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 5,
        points: 119,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 6,
        points: 60,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 7,
        points: 55,
        athletic: {
          id: 'sulfurosa',
          name: 'Sulfurosa',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 8,
        points: 53,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 9,
        points: 51,
        athletic: {
          id: 'chefia',
          name: 'Chefia',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 10,
        points: 49,
        athletic: {
          id: 'enigma',
          name: 'Enigma',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 11,
        points: 41,
        athletic: {
          id: 'tagarela',
          name: 'Tagarela',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 12,
        points: 40,
        athletic: {
          id: 'unificada',
          name: 'Unificada',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 13,
        points: 39,
        athletic: {
          id: 'hamiltoniana',
          name: 'Hamiltoniana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 14,
        points: 37,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      },
      {
        rank: 15,
        points: 32,
        athletic: {
          id: 'devasta',
          name: 'Devasta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 16,
        points: 27,
        athletic: {
          id: 'malagueta',
          name: 'Malagueta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 17,
        points: 26,
        athletic: {
          id: 'magnata',
          name: 'Magnata',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 18,
        points: 21,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 19,
        points: 20,
        athletic: {
          id: 'improdutiva',
          name: 'Improdutiva',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 20,
        points: 18,
        athletic: {
          id: 'faminta',
          name: 'Faminta',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 21,
        points: 15,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 22,
        points: 15,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 23,
        points: 13,
        athletic: {
          id: 'trepadeira',
          name: 'Trepadeira',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 24,
        points: 8,
        athletic: {
          id: 'problematica',
          name: 'Problemática',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 25,
        points: 8,
        athletic: {
          id: 'desgovernada',
          name: 'Desgovernada',
          foundationYear: '2015',
          active: false
        }
      },
      {
        rank: 26,
        points: 8,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 27,
        points: 6,
        athletic: {
          id: 'desastrosa',
          name: 'Desastrosa',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 28,
        points: 4,
        athletic: {
          id: 'quimera',
          name: 'Quimera',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 29,
        points: -8,
        athletic: {
          id: 'pintada',
          name: 'Pintada',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 30,
        points: -9,
        athletic: {
          id: 'intrusiva',
          name: 'Intrusiva',
          foundationYear: '2017',
          active: false
        }
      },
      {
        rank: 31,
        points: -10,
        athletic: {
          id: 'anabolica',
          name: 'Anabólica',
          foundationYear: '?',
          active: false
        }
      },
      {
        rank: 32,
        points: -10,
        athletic: {
          id: 'tectonica',
          name: 'Tectônica',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 33,
        points: -20,
        athletic: {
          id: 'analfabeta',
          name: 'Analfabeta',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 34,
        points: -21,
        athletic: {
          id: 'mecanica',
          name: 'Mecânica',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 35,
        points: -27,
        athletic: {
          id: 'berranteira',
          name: 'Berranteira',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 36,
        points: -29,
        athletic: {
          id: 'soberana',
          name: 'Soberana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 37,
        points: -30,
        athletic: {
          id: 'tenebrosa',
          name: 'Tenebrosa',
          foundationYear: '?',
          active: false
        }
      },
      {
        rank: 38,
        points: -46,
        athletic: {
          id: 'mercenaria',
          name: 'Mercenária',
          foundationYear: '2010',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'mafiosa',
        name: 'Mafiosa',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'madrasta',
        name: 'Madrasta',
        foundationYear: '2001',
        active: true
      },
      {
        id: 'sedentaria',
        name: 'Sedentária',
        foundationYear: '2010',
        active: true
      }
    ]
  },
  {
    year: '2019',
    standings: [
      {
        rank: 1,
        points: 265,
        athletic: {
          id: 'sedentaria',
          name: 'Sedentária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 2,
        points: 243,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 3,
        points: 200,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 4,
        points: 126,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 5,
        points: 118,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 6,
        points: 92,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 7,
        points: 74,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 8,
        points: 65,
        athletic: {
          id: 'unificada',
          name: 'Unificada',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 9,
        points: 54,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      },
      {
        rank: 10,
        points: 53,
        athletic: {
          id: 'chefia',
          name: 'Chefia',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 11,
        points: 42,
        athletic: {
          id: 'hamiltoniana',
          name: 'Hamiltoniana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 12,
        points: 37,
        athletic: {
          id: 'enigma',
          name: 'Enigma',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 13,
        points: 33,
        athletic: {
          id: 'sulfurosa',
          name: 'Sulfurosa',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 14,
        points: 32,
        athletic: {
          id: 'improdutiva',
          name: 'Improdutiva',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 15,
        points: 30,
        athletic: {
          id: 'faminta',
          name: 'Faminta',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 16,
        points: 28,
        athletic: {
          id: 'tagarela',
          name: 'Tagarela',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 17,
        points: 28,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 18,
        points: 22,
        athletic: {
          id: 'magnata',
          name: 'Magnata',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 19,
        points: 17,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 20,
        points: 16,
        athletic: {
          id: 'malagueta',
          name: 'Malagueta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 21,
        points: 12,
        athletic: {
          id: 'analfabeta',
          name: 'Analfabeta',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 22,
        points: 9,
        athletic: {
          id: 'desgovernada',
          name: 'Desgovernada',
          foundationYear: '2015',
          active: false
        }
      },
      {
        rank: 23,
        points: 8,
        athletic: {
          id: 'soberana',
          name: 'Soberana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 24,
        points: 6,
        athletic: {
          id: 'malcriada',
          name: 'Malcriada',
          foundationYear: '2018',
          active: true
        }
      },
      {
        rank: 25,
        points: 6,
        athletic: {
          id: 'berranteira',
          name: 'Berranteira',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 26,
        points: 5,
        athletic: {
          id: 'mecanica',
          name: 'Mecânica',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 27,
        points: 4,
        athletic: {
          id: 'trepadeira',
          name: 'Trepadeira',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 28,
        points: 4,
        athletic: {
          id: 'pintada',
          name: 'Pintada',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 29,
        points: 4,
        athletic: {
          id: 'subversiva',
          name: 'Subversiva',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 30,
        points: 3,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 31,
        points: 2,
        athletic: {
          id: 'tectonica',
          name: 'Tectônica',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 32,
        points: 1,
        athletic: {
          id: 'simbiotica',
          name: 'Simbiótica',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 33,
        points: 0,
        athletic: {
          id: 'desastrosa',
          name: 'Desastrosa',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 34,
        points: 0,
        athletic: {
          id: 'mercenaria',
          name: 'Mercenária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 35,
        points: 0,
        athletic: {
          id: 'devasta',
          name: 'Devasta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 36,
        points: 0,
        athletic: {
          id: 'neurotica',
          name: 'Neurótica',
          foundationYear: '2018',
          active: true
        }
      },
      {
        rank: 37,
        points: -1,
        athletic: {
          id: 'quimera',
          name: 'Quimera',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 38,
        points: -1,
        athletic: {
          id: 'problematica',
          name: 'Problemática',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 39,
        points: -10,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 40,
        points: -30,
        athletic: {
          id: 'intrusiva',
          name: 'Intrusiva',
          foundationYear: '2017',
          active: false
        }
      },
      {
        rank: 41,
        points: -60,
        athletic: {
          id: 'dramatica',
          name: 'Dramática',
          foundationYear: '2017',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'picareta',
        name: 'Picareta',
        foundationYear: '2008',
        active: true
      },
      {
        id: 'chefia',
        name: 'Chefia',
        foundationYear: '2009',
        active: true
      },
      {
        id: 'agronomia',
        name: 'Agronomia',
        foundationYear: '2007',
        active: true
      }
    ]
  },
  {
    year: '2022',
    standings: [
      {
        rank: 1,
        points: 301,
        division: 1,
        athletic: {
          id: 'sedentaria',
          name: 'Sedentária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 2,
        points: 243,
        division: 1,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 3,
        points: 198,
        division: 1,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 4,
        points: 135,
        division: 1,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 5,
        points: 104,
        division: 1,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 6,
        points: 102,
        division: 1,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 7,
        points: 94,
        division: 1,
        athletic: {
          id: 'unificada',
          name: 'Unificada',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 8,
        points: 84,
        division: 1,
        athletic: {
          id: 'sulfurosa',
          name: 'Sulfurosa',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 9,
        points: 83,
        division: 1,
        athletic: {
          id: 'tagarela',
          name: 'Tagarela',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 10,
        points: 54,
        division: 1,
        athletic: {
          id: 'enigma',
          name: 'Enigma',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 10,
        points: 54,
        division: 1,
        athletic: {
          id: 'chefia',
          name: 'Chefia',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 12,
        points: 50,
        division: 1,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 13,
        points: 39,
        division: 1,
        athletic: {
          id: 'hamiltoniana',
          name: 'Hamiltoniana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 14,
        points: 35,
        division: 1,
        athletic: {
          id: 'faminta',
          name: 'Faminta',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 15,
        points: 35,
        division: 1,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      },
      {
        rank: 16,
        points: 30,
        division: 1,
        athletic: {
          id: 'improdutiva',
          name: 'Improdutiva',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 1,
        points: 222,
        division: 2,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 2,
        points: 180,
        division: 2,
        athletic: {
          id: 'malagueta',
          name: 'Malagueta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 3,
        points: 170,
        division: 2,
        athletic: {
          id: 'berranteira',
          name: 'Berranteira',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 4,
        points: 161,
        division: 2,
        athletic: {
          id: 'mecanica',
          name: 'Mecânica',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 5,
        points: 157,
        division: 2,
        athletic: {
          id: 'magnata',
          name: 'Magnata',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 6,
        points: 111,
        division: 2,
        athletic: {
          id: 'analfabeta',
          name: 'Analfabeta',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 7,
        points: 98,
        division: 2,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 8,
        points: 95,
        division: 2,
        athletic: {
          id: 'trepadeira',
          name: 'Trepadeira',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 9,
        points: 89,
        division: 2,
        athletic: {
          id: 'pintada',
          name: 'Pintada',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 10,
        points: 79,
        division: 2,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 11,
        points: 48,
        division: 2,
        athletic: {
          id: 'soberana',
          name: 'Soberana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 12,
        points: 39,
        division: 2,
        athletic: {
          id: 'tectonica',
          name: 'Tectônica',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 13,
        points: 11,
        division: 2,
        athletic: {
          id: 'malcriada',
          name: 'Malcriada',
          foundationYear: '2018',
          active: true
        }
      },
      {
        rank: 14,
        points: 8,
        division: 2,
        athletic: {
          id: 'simbiotica',
          name: 'Simbiótica',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 15,
        points: 5,
        division: 2,
        athletic: {
          id: 'desgovernada',
          name: 'Desgovernada',
          foundationYear: '2015',
          active: false
        }
      },
      {
        rank: 16,
        points: 2,
        division: 2,
        athletic: {
          id: 'subversiva',
          name: 'Subversiva',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 1,
        points: 286,
        division: 3,
        athletic: {
          id: 'problematica',
          name: 'Problemática',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 2,
        points: 245,
        division: 3,
        athletic: {
          id: 'devasta',
          name: 'Devasta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 3,
        points: 224,
        division: 3,
        athletic: {
          id: 'mercenaria',
          name: 'Mercenária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 4,
        points: 203,
        division: 3,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 5,
        points: 111,
        division: 3,
        athletic: {
          id: 'desastrosa',
          name: 'Desastrosa',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 6,
        points: 104,
        division: 3,
        athletic: {
          id: 'neurotica',
          name: 'Neurótica',
          foundationYear: '2018',
          active: true
        }
      },
      {
        rank: 7,
        points: 81,
        division: 3,
        athletic: {
          id: 'intrusiva',
          name: 'Intrusiva',
          foundationYear: '2017',
          active: false
        }
      },
      {
        rank: 8,
        points: 58,
        division: 3,
        athletic: {
          id: 'dolorosa',
          name: 'Dolorosa',
          foundationYear: '2022',
          active: true
        }
      },
      {
        rank: 9,
        points: 16,
        division: 3,
        athletic: {
          id: 'quimera',
          name: 'Quimera',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 10,
        points: 12,
        division: 3,
        athletic: {
          id: 'arregacada',
          name: 'Arregaçada',
          foundationYear: '2022',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'sulfurosa',
        name: 'Sulfurosa',
        foundationYear: '2010',
        active: true
      },
      {
        id: 'vira-lata',
        name: 'Vira Lata',
        foundationYear: '2008',
        active: true
      },
      {
        id: 'malagueta',
        name: 'Malagueta',
        foundationYear: '2009',
        active: true
      }
    ]
  },
  {
    year: '2023',
    standings: [
      {
        rank: 1,
        points: 344.2,
        division: 1,
        athletic: {
          id: 'sedentaria',
          name: 'Sedentária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 2,
        points: 284,
        division: 1,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 3,
        points: 171.6,
        division: 1,
        athletic: {
          id: 'unificada',
          name: 'Unificada',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 4,
        points: 170.4,
        division: 1,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 5,
        points: 169.2,
        division: 1,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 6,
        points: 147.8,
        division: 1,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 7,
        points: 123.8,
        division: 1,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 8,
        points: 96.2,
        division: 1,
        athletic: {
          id: 'tagarela',
          name: 'Tagarela',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 9,
        points: 89.4,
        division: 1,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 10,
        points: 81.6,
        division: 1,
        athletic: {
          id: 'enigma',
          name: 'Enigma',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 11,
        points: 77.2,
        division: 1,
        athletic: {
          id: 'malagueta',
          name: 'Malagueta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 12,
        points: 72.6,
        division: 1,
        athletic: {
          id: 'chefia',
          name: 'Chefia',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 13,
        points: 68,
        division: 1,
        athletic: {
          id: 'sulfurosa',
          name: 'Sulfurosa',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 14,
        points: 44.4,
        division: 1,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 15,
        points: 24.8,
        division: 1,
        athletic: {
          id: 'berranteira',
          name: 'Berranteira',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 16,
        points: 11,
        division: 1,
        athletic: {
          id: 'hamiltoniana',
          name: 'Hamiltoniana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 1,
        points: 218.2,
        division: 2,
        athletic: {
          id: 'problematica',
          name: 'Problemática',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 2,
        points: 186.6,
        division: 2,
        athletic: {
          id: 'mecanica',
          name: 'Mecânica',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 3,
        points: 185.6,
        division: 2,
        athletic: {
          id: 'magnata',
          name: 'Magnata',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 4,
        points: 173.8,
        division: 2,
        athletic: {
          id: 'analfabeta',
          name: 'Analfabeta',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 5,
        points: 164.6,
        division: 2,
        athletic: {
          id: 'improdutiva',
          name: 'Improdutiva',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 6,
        points: 161.4,
        division: 2,
        athletic: {
          id: 'pintada',
          name: 'Pintada',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 7,
        points: 141.6,
        division: 2,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      },
      {
        rank: 8,
        points: 122,
        division: 2,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 9,
        points: 120,
        division: 2,
        athletic: {
          id: 'tectonica',
          name: 'Tectônica',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 10,
        points: 112.6,
        division: 2,
        athletic: {
          id: 'devasta',
          name: 'Devasta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 11,
        points: 103.8,
        division: 2,
        athletic: {
          id: 'faminta',
          name: 'Faminta',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 12,
        points: 80.2,
        division: 2,
        athletic: {
          id: 'soberana',
          name: 'Soberana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 13,
        points: 68.8,
        division: 2,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 14,
        points: 54.4,
        division: 2,
        athletic: {
          id: 'trepadeira',
          name: 'Trepadeira',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 15,
        points: 32.8,
        division: 2,
        athletic: {
          id: 'malcriada',
          name: 'Malcriada',
          foundationYear: '2018',
          active: true
        }
      },
      {
        rank: 16,
        points: 29.4,
        division: 2,
        athletic: {
          id: 'simbiotica',
          name: 'Simbiótica',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 1,
        points: 314.8,
        division: 3,
        athletic: {
          id: 'desastrosa',
          name: 'Desastrosa',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 2,
        points: 304,
        division: 3,
        athletic: {
          id: 'mercenaria',
          name: 'Mercenária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 3,
        points: 291.6,
        division: 3,
        athletic: {
          id: 'subversiva',
          name: 'Subversiva',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 4,
        points: 229.8,
        division: 3,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 5,
        points: 212.2,
        division: 3,
        athletic: {
          id: 'neurotica',
          name: 'Neurótica',
          foundationYear: '2018',
          active: true
        }
      },
      {
        rank: 6,
        points: 135.6,
        division: 3,
        athletic: {
          id: 'quimera',
          name: 'Quimera',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 7,
        points: 108.2,
        division: 3,
        athletic: {
          id: 'desgovernada',
          name: 'Desgovernada',
          foundationYear: '2015',
          active: false
        }
      },
      {
        rank: 8,
        points: 85.8,
        division: 3,
        athletic: {
          id: 'intrusiva',
          name: 'Intrusiva',
          foundationYear: '2017',
          active: false
        }
      },
      {
        rank: 9,
        points: 55.2,
        division: 3,
        athletic: {
          id: 'dolorosa',
          name: 'Dolorosa',
          foundationYear: '2022',
          active: true
        }
      },
      {
        rank: 10,
        points: 52,
        division: 3,
        athletic: {
          id: 'dramatica',
          name: 'Dramática',
          foundationYear: '2017',
          active: true
        }
      },
      {
        rank: 11,
        points: 19.8,
        division: 3,
        athletic: {
          id: 'arregacada',
          name: 'Arregaçada',
          foundationYear: '2022',
          active: true
        }
      },
      {
        rank: 12,
        points: 0,
        division: 3,
        athletic: {
          id: 'fundida',
          name: 'Fundida',
          foundationYear: '2023',
          active: false
        }
      }
    ],
    committees: [
      {
        id: 'faminta',
        name: 'Faminta',
        foundationYear: '2010',
        active: true
      },
      {
        id: 'enigma',
        name: 'Enigma',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'sanguinaria',
        name: 'Sanguinária',
        foundationYear: '2012',
        active: true
      }
    ]
  },
  {
    year: '2024',
    standings: [
      {
        rank: 1,
        points: 340.6,
        division: 1,
        athletic: {
          id: 'sedentaria',
          name: 'Sedentária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 2,
        points: 279.8,
        division: 1,
        athletic: {
          id: 'madrasta',
          name: 'Madrasta',
          foundationYear: '2001',
          active: true
        }
      },
      {
        rank: 3,
        points: 201.4,
        division: 1,
        athletic: {
          id: 'unificada',
          name: 'Unificada',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 4,
        points: 152.6,
        division: 1,
        athletic: {
          id: 'mafiosa',
          name: 'Mafiosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 5,
        points: 143.4,
        division: 1,
        athletic: {
          id: 'gambiarra',
          name: 'Gambiarra',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 6,
        points: 141,
        division: 1,
        athletic: {
          id: 'picareta',
          name: 'Picareta',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 7,
        points: 107.8,
        division: 1,
        athletic: {
          id: 'sulfurosa',
          name: 'Sulfurosa',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 8,
        points: 103,
        division: 1,
        athletic: {
          id: 'tagarela',
          name: 'Tagarela',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 9,
        points: 85.2,
        division: 1,
        athletic: {
          id: 'enigma',
          name: 'Enigma',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 10,
        points: 83,
        division: 1,
        athletic: {
          id: 'agronomia',
          name: 'Agronomia',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 11,
        points: 75.4,
        division: 1,
        athletic: {
          id: 'chefia',
          name: 'Chefia',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 12,
        points: 62.2,
        division: 1,
        athletic: {
          id: 'mecanica',
          name: 'Mecânica',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 13,
        points: 60.6,
        division: 1,
        athletic: {
          id: 'magnata',
          name: 'Magnata',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 14,
        points: 39.2,
        division: 1,
        athletic: {
          id: 'problematica',
          name: 'Problemática',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 15,
        points: 23.8,
        division: 1,
        athletic: {
          id: 'malagueta',
          name: 'Malagueta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 16,
        points: 14,
        division: 1,
        athletic: {
          id: 'vira-lata',
          name: 'Vira Lata',
          foundationYear: '2008',
          active: true
        }
      },
      {
        rank: 1,
        points: 232.4,
        division: 2,
        athletic: {
          id: 'faminta',
          name: 'Faminta',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 2,
        points: 231.2,
        division: 2,
        athletic: {
          id: 'improdutiva',
          name: 'Improdutiva',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 3,
        points: 149.6,
        division: 2,
        athletic: {
          id: 'analfabeta',
          name: 'Analfabeta',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 4,
        points: 130.8,
        division: 2,
        athletic: {
          id: 'tectonica',
          name: 'Tectônica',
          foundationYear: '2011',
          active: true
        }
      },
      {
        rank: 5,
        points: 125.6,
        division: 2,
        athletic: {
          id: 'banguela',
          name: 'Banguela',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 6,
        points: 124.4,
        division: 2,
        athletic: {
          id: 'hamiltoniana',
          name: 'Hamiltoniana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 7,
        points: 120.8,
        division: 2,
        athletic: {
          id: 'sanguinaria',
          name: 'Sanguinária',
          foundationYear: '2012',
          active: true
        }
      },
      {
        rank: 8,
        points: 120.4,
        division: 2,
        athletic: {
          id: 'overdose',
          name: 'Overdose',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 9,
        points: 117.4,
        division: 2,
        athletic: {
          id: 'mercenaria',
          name: 'Mercenária',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 10,
        points: 109.2,
        division: 2,
        athletic: {
          id: 'devasta',
          name: 'Devasta',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 11,
        points: 108.6,
        division: 2,
        athletic: {
          id: 'pintada',
          name: 'Pintada',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 12,
        points: 90,
        division: 2,
        athletic: {
          id: 'desastrosa',
          name: 'Desastrosa',
          foundationYear: '2015',
          active: true
        }
      },
      {
        rank: 13,
        points: 90,
        division: 2,
        athletic: {
          id: 'berranteira',
          name: 'Berranteira',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 14,
        points: 64.6,
        division: 2,
        athletic: {
          id: 'venenosa',
          name: 'Venenosa',
          foundationYear: '2007',
          active: true
        }
      },
      {
        rank: 15,
        points: 54.2,
        division: 2,
        athletic: {
          id: 'soberana',
          name: 'Soberana',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 16,
        points: 6.2,
        division: 2,
        athletic: {
          id: 'trepadeira',
          name: 'Trepadeira',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 1,
        points: 326.8,
        division: 3,
        athletic: {
          id: 'subversiva',
          name: 'Subversiva',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 2,
        points: 258.4,
        division: 3,
        athletic: {
          id: 'kraken',
          name: 'Kraken',
          foundationYear: '2024',
          active: true
        }
      },
      {
        rank: 3,
        points: 195.8,
        division: 3,
        athletic: {
          id: 'malcriada',
          name: 'Malcriada',
          foundationYear: '2018',
          active: true
        }
      },
      {
        rank: 4,
        points: 185.6,
        division: 3,
        athletic: {
          id: 'quimera',
          name: 'Quimera',
          foundationYear: '2010',
          active: true
        }
      },
      {
        rank: 5,
        points: 165,
        division: 3,
        athletic: {
          id: 'neurotica',
          name: 'Neurótica',
          foundationYear: '2018',
          active: true
        }
      },
      {
        rank: 6,
        points: 146.2,
        division: 3,
        athletic: {
          id: 'predadora',
          name: 'Predadora',
          foundationYear: '2009',
          active: true
        }
      },
      {
        rank: 7,
        points: 142.6,
        division: 3,
        athletic: {
          id: 'simbiotica',
          name: 'Simbiótica',
          foundationYear: '2013',
          active: true
        }
      },
      {
        rank: 8,
        points: 130.8,
        division: 3,
        athletic: {
          id: 'dramatica',
          name: 'Dramática',
          foundationYear: '2017',
          active: true
        }
      },
      {
        rank: 9,
        points: 53.6,
        division: 3,
        athletic: {
          id: 'dolorosa',
          name: 'Dolorosa',
          foundationYear: '2022',
          active: true
        }
      },
      {
        rank: 10,
        points: 26.2,
        division: 3,
        athletic: {
          id: 'arregacada',
          name: 'Arregaçada',
          foundationYear: '2022',
          active: true
        }
      }
    ],
    committees: [
      {
        id: 'unificada',
        name: 'Unificada',
        foundationYear: '2009',
        active: true
      },
      {
        id: 'gambiarra',
        name: 'Gambiarra',
        foundationYear: '2007',
        active: true
      },
      {
        id: 'madrasta',
        name: 'Madrasta',
        foundationYear: '2001',
        active: true
      }
    ]
  }
];

export const modalities: Modality[] = [
  {
    id: 'atletismo',
    name: 'Atletismo',
    suits: ['masculino', 'feminino'],
    events: ['100m', '200m', '400m', '800m', '4x100m', '5.000m']
  },
  {
    id: 'basquete',
    name: 'Basquete',
    suits: ['masculino', 'feminino']
  },
  {
    id: 'csGo',
    name: 'CS GO',
    suits: ['misto']
  },
  {
    id: 'fifa',
    name: 'FIFA',
    suits: ['misto']
  },
  {
    id: 'society',
    name: 'Society',
    suits: ['masculino', 'feminino']
  },
  {
    id: 'futsal',
    name: 'Futsal',
    suits: ['masculino', 'feminino']
  },
  {
    id: 'futevolei',
    name: 'Futevôlei',
    suits: ['masculino', 'feminino']
  },
  {
    id: 'handebol',
    name: 'Handebol',
    suits: ['masculino', 'feminino']
  },
  {
    id: 'leagueOfLegends',
    name: 'League of Legends',
    suits: ['misto']
  },
  {
    id: 'natacao',
    name: 'Natação',
    suits: ['masculino', 'feminino'],
    events: [
      '50m livre',
      '50m peito',
      '50m costas',
      '50m borboleta',
      '4x50m livre',
      '4x50m medley'
    ]
  },
  {
    id: 'tenisQuadra',
    name: 'Tênis de Quadra',
    suits: ['masculino', 'feminino']
  },
  {
    id: 'tenisMesa',
    name: 'Tênis de Mesa',
    suits: ['masculino', 'feminino']
  },
  {
    id: 'voleiQuadra',
    name: 'Vôlei',
    suits: ['masculino', 'feminino']
  },
  {
    id: 'voleiPraia',
    name: 'Vôlei de Praia',
    suits: ['masculino', 'feminino']
  },
  {
    id: 'peteca',
    name: 'Peteca',
    suits: ['masculino', 'feminino']
  },
  {
    id: 'rugby',
    name: 'Rugby',
    suits: ['masculino']
  },
  {
    id: 'sinuca',
    name: 'Sinuca',
    suits: ['masculino', 'feminino']
  },
  {
    id: 'valorant',
    name: 'Valorant',
    suits: ['misto']
  },
  {
    id: 'xadrez',
    name: 'Xadrez',
    suits: ['masculino', 'feminino']
  }
];
