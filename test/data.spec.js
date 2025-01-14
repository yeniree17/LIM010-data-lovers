global.window = global;
require('../src/data');
require('./data.spec.js');

const input1 = {
  'PER': {
    'indicators': [
      {
        'data': {
          '1960': '',
          '1961': '',
          '1962': '',
          '1963': '',
          '1964': '',
          '1965': '',
          '1966': '',
          '1967': '',
          '1968': '',
          '1969': '',
          '1970': '',
          '1971': '',
          '1972': '',
          '1973': '',
          '1974': '',
          '1975': '',
          '1976': '',
          '1977': '',
          '1978': '',
          '1979': '',
          '1980': '',
          '1981': '',
          '1982': '',
          '1983': '',
          '1984': '',
          '1985': '',
          '1986': '',
          '1987': '',
          '1988': '',
          '1989': '',
          '1990': '',
          '1991': '',
          '1992': '',
          '1993': '',
          '1994': '',
          '1995': '',
          '1996': '',
          '1997': '',
          '1998': '',
          '1999': '',
          '2000': '',
          '2001': '',
          '2002': 31.4799995422363,
          '2003': 29.6299991607666,
          '2004': 27.6299991607666,
          '2005': 27.2099990844727,
          '2006': 26.9699993133545,
          '2007': 27.6700000762939,
          '2008': 26.9599990844727,
          '2009': 27.3600006103516,
          '2010': 25.3400001525879,
          '2011': 24.7999992370605,
          '2012': 25.0400009155273,
          '2013': 24.0900001525879,
          '2014': 24.2099990844727,
          '2015': 21.6800003051758,
          '2016': 23.7399997711182,
          '2017': 23.7600002288818
        },
        'countryName': 'Perú',
        'countryCode': 'PER',
        'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
        'indicatorCode': 'SL.TLF.PART.FE.ZS'
      },
      {
        'data': {
          '1960': '',
          '1961': '',
          '1962': '',
          '1963': '',
          '1964': '',
          '1965': '',
          '1966': '',
          '1967': '',
          '1968': '',
          '1969': '',
          '1970': '',
          '1971': '',
          '1972': '',
          '1973': '',
          '1974': '',
          '1975': '',
          '1976': '',
          '1977': '',
          '1978': '',
          '1979': '',
          '1980': '',
          '1981': '',
          '1982': '',
          '1983': '',
          '1984': '',
          '1985': '',
          '1986': '',
          '1987': '',
          '1988': '',
          '1989': '',
          '1990': '',
          '1991': '',
          '1992': '',
          '1993': '',
          '1994': '',
          '1995': '',
          '1996': '',
          '1997': '',
          '1998': '',
          '1999': '',
          '2000': '',
          '2001': '',
          '2002': 57.3788986206055,
          '2003': 59.2597007751465,
          '2004': 60.5155982971191,
          '2005': 58.567699432373,
          '2006': 59.5596008300781,
          '2007': 62.5275993347168,
          '2008': 61.5718002319336,
          '2009': 63.0060997009277,
          '2010': 64.4614028930664,
          '2011': 64.3878021240234,
          '2012': 63.0351982116699,
          '2013': 62.2015991210938,
          '2014': 61.209400177002,
          '2015': 62.2141990661621,
          '2016': 61.5542984008789,
          '2017': 61.4822998046875
        },
        'countryName': 'Perú',
        'countryCode': 'PER',
        'indicatorName': 'Fuerza laboral con educación intermedia (% del total)',
        'indicatorCode': 'SL.TLF.INTM.ZS'
      },
      {
        'data': {
          '1960': '',
          '1961': '',
          '1962': '',
          '1963': '',
          '1964': '',
          '1965': '',
          '1966': '',
          '1967': '',
          '1968': '',
          '1969': '',
          '1970': '',
          '1971': '',
          '1972': '',
          '1973': '',
          '1974': '',
          '1975': '',
          '1976': '',
          '1977': '',
          '1978': '',
          '1979': '',
          '1980': '',
          '1981': '',
          '1982': '',
          '1983': '',
          '1984': '',
          '1985': '',
          '1986': '',
          '1987': '',
          '1988': '',
          '1989': '',
          '1990': '',
          '1991': '',
          '1992': '',
          '1993': '',
          '1994': '',
          '1995': '',
          '1996': '',
          '1997': '',
          '1998': '',
          '1999': '',
          '2000': '',
          '2001': '',
          '2002': 70.0301971435547,
          '2003': 69.0485000610352,
          '2004': 70.3840026855469,
          '2005': 68.869499206543,
          '2006': 69.7163009643555,
          '2007': 72.8778991699219,
          '2008': 72.2699966430664,
          '2009': 72.4912033081055,
          '2010': 74.2916030883789,
          '2011': 73.6003036499023,
          '2012': 72.7871017456055,
          '2013': 72.2193984985352,
          '2014': 71.2494964599609,
          '2015': 71.3886032104492,
          '2016': 71.5625991821289,
          '2017': 71.3718032836914
        },
        'countryName': 'Perú',
        'countryCode': 'PER',
        'indicatorName': 'Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)',
        'indicatorCode': 'SL.TLF.INTM.MA.ZS'
      },
    ]
  }
};
const output1 = [
  {
    'data': {
      '1960': '',
      '1961': '',
      '1962': '',
      '1963': '',
      '1964': '',
      '1965': '',
      '1966': '',
      '1967': '',
      '1968': '',
      '1969': '',
      '1970': '',
      '1971': '',
      '1972': '',
      '1973': '',
      '1974': '',
      '1975': '',
      '1976': '',
      '1977': '',
      '1978': '',
      '1979': '',
      '1980': '',
      '1981': '',
      '1982': '',
      '1983': '',
      '1984': '',
      '1985': '',
      '1986': '',
      '1987': '',
      '1988': '',
      '1989': '',
      '1990': '',
      '1991': '',
      '1992': '',
      '1993': '',
      '1994': '',
      '1995': '',
      '1996': '',
      '1997': '',
      '1998': '',
      '1999': '',
      '2000': '',
      '2001': '',
      '2002': 31.4799995422363,
      '2003': 29.6299991607666,
      '2004': 27.6299991607666,
      '2005': 27.2099990844727,
      '2006': 26.9699993133545,
      '2007': 27.6700000762939,
      '2008': 26.9599990844727,
      '2009': 27.3600006103516,
      '2010': 25.3400001525879,
      '2011': 24.7999992370605,
      '2012': 25.0400009155273,
      '2013': 24.0900001525879,
      '2014': 24.2099990844727,
      '2015': 21.6800003051758,
      '2016': 23.7399997711182,
      '2017': 23.7600002288818
    },
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
    'indicatorCode': 'SL.TLF.PART.FE.ZS'
  },
  {
    'data': {
      '1960': '',
      '1961': '',
      '1962': '',
      '1963': '',
      '1964': '',
      '1965': '',
      '1966': '',
      '1967': '',
      '1968': '',
      '1969': '',
      '1970': '',
      '1971': '',
      '1972': '',
      '1973': '',
      '1974': '',
      '1975': '',
      '1976': '',
      '1977': '',
      '1978': '',
      '1979': '',
      '1980': '',
      '1981': '',
      '1982': '',
      '1983': '',
      '1984': '',
      '1985': '',
      '1986': '',
      '1987': '',
      '1988': '',
      '1989': '',
      '1990': '',
      '1991': '',
      '1992': '',
      '1993': '',
      '1994': '',
      '1995': '',
      '1996': '',
      '1997': '',
      '1998': '',
      '1999': '',
      '2000': '',
      '2001': '',
      '2002': 57.3788986206055,
      '2003': 59.2597007751465,
      '2004': 60.5155982971191,
      '2005': 58.567699432373,
      '2006': 59.5596008300781,
      '2007': 62.5275993347168,
      '2008': 61.5718002319336,
      '2009': 63.0060997009277,
      '2010': 64.4614028930664,
      '2011': 64.3878021240234,
      '2012': 63.0351982116699,
      '2013': 62.2015991210938,
      '2014': 61.209400177002,
      '2015': 62.2141990661621,
      '2016': 61.5542984008789,
      '2017': 61.4822998046875
    },
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Fuerza laboral con educación intermedia (% del total)',
    'indicatorCode': 'SL.TLF.INTM.ZS'
  },
  {
    'data': {
      '1960': '',
      '1961': '',
      '1962': '',
      '1963': '',
      '1964': '',
      '1965': '',
      '1966': '',
      '1967': '',
      '1968': '',
      '1969': '',
      '1970': '',
      '1971': '',
      '1972': '',
      '1973': '',
      '1974': '',
      '1975': '',
      '1976': '',
      '1977': '',
      '1978': '',
      '1979': '',
      '1980': '',
      '1981': '',
      '1982': '',
      '1983': '',
      '1984': '',
      '1985': '',
      '1986': '',
      '1987': '',
      '1988': '',
      '1989': '',
      '1990': '',
      '1991': '',
      '1992': '',
      '1993': '',
      '1994': '',
      '1995': '',
      '1996': '',
      '1997': '',
      '1998': '',
      '1999': '',
      '2000': '',
      '2001': '',
      '2002': 70.0301971435547,
      '2003': 69.0485000610352,
      '2004': 70.3840026855469,
      '2005': 68.869499206543,
      '2006': 69.7163009643555,
      '2007': 72.8778991699219,
      '2008': 72.2699966430664,
      '2009': 72.4912033081055,
      '2010': 74.2916030883789,
      '2011': 73.6003036499023,
      '2012': 72.7871017456055,
      '2013': 72.2193984985352,
      '2014': 71.2494964599609,
      '2015': 71.3886032104492,
      '2016': 71.5625991821289,
      '2017': 71.3718032836914
    },
    'countryName': 'Perú',
    'countryCode': 'PER',
    'indicatorName': 'Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)',
    'indicatorCode': 'SL.TLF.INTM.MA.ZS'
  },
];

const output2 = ['PER-Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)', 'PER-Fuerza laboral con educación intermedia (% del total)', 'PER-Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)'];
const input2 = 0;
const output3 = {
  'data': {
    '1960': '',
    '1961': '',
    '1962': '',
    '1963': '',
    '1964': '',
    '1965': '',
    '1966': '',
    '1967': '',
    '1968': '',
    '1969': '',
    '1970': '',
    '1971': '',
    '1972': '',
    '1973': '',
    '1974': '',
    '1975': '',
    '1976': '',
    '1977': '',
    '1978': '',
    '1979': '',
    '1980': '',
    '1981': '',
    '1982': '',
    '1983': '',
    '1984': '',
    '1985': '',
    '1986': '',
    '1987': '',
    '1988': '',
    '1989': '',
    '1990': '',
    '1991': '',
    '1992': '',
    '1993': '',
    '1994': '',
    '1995': '',
    '1996': '',
    '1997': '',
    '1998': '',
    '1999': '',
    '2000': '',
    '2001': '',
    '2002': 31.4799995422363,
    '2003': 29.6299991607666,
    '2004': 27.6299991607666,
    '2005': 27.2099990844727,
    '2006': 26.9699993133545,
    '2007': 27.6700000762939,
    '2008': 26.9599990844727,
    '2009': 27.3600006103516,
    '2010': 25.3400001525879,
    '2011': 24.7999992370605,
    '2012': 25.0400009155273,
    '2013': 24.0900001525879,
    '2014': 24.2099990844727,
    '2015': 21.6800003051758,
    '2016': 23.7399997711182,
    '2017': 23.7600002288818
  },
  'countryName': 'Perú',
  'countryCode': 'PER',
  'indicatorName': 'Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)',
  'indicatorCode': 'SL.TLF.PART.FE.ZS'
};
const input3 = [{key: '2002',
  value: 57.3788986206055}, {key: '2003',
  value: 59.2597007751465}, {key: '2004',
  value: 60.5155982971191}, {key: '2005',
  value: 58.567699432373}, {key: '2006',
  value: 59.5596008300781}, {key: '2007',
  value: 62.5275993347168}];

const output4 = [{key: '2002',
  value: 57.3788986206055}, {key: '2005',
  value: 58.567699432373}, {key: '2003',
  value: 59.2597007751465}, {key: '2006',
  value: 59.5596008300781}, {key: '2004',
  value: 60.5155982971191}, {key: '2007',
  value: 62.5275993347168}];

const output5 = [{key: '2007',
  value: 62.5275993347168}, {key: '2004',
  value: 60.5155982971191}, {key: '2006',
  value: 59.5596008300781}, {key: '2003',
  value: 59.2597007751465}, {key: '2005',
  value: 58.567699432373}, {key: '2002',
  value: 57.3788986206055}];

const output6 = '59.63';
  
// test variable global
describe('bancoMundial', () => {
  it('deberia ser un objeto', () => {
    expect(typeof bancoMundial).toBe('object');
  });
  // test 1era funcion
  describe('bancoMundial.indicadorPorPais debería ser una función', () => {
    it('deberia ser una funcion', () => {
      expect(typeof bancoMundial.indicadorPorPais).toBe('function');
    });
    it('bancoMundial.indicadorPorPais deberia retornar un array de objetos', () => {
      expect(bancoMundial.indicadorPorPais(input1, 'PER')).toStrictEqual(output1);
    });
  });
  // test 2da funcion
  describe('bancoMundial.nombreIndicadorPorPais', () => {
    it('deberia ser una funcion', () => {
      expect(typeof bancoMundial.nombreIndicadorPorPais).toEqual('function');
    });
  
    it('bancoMundial.nombreIndicadorPorPais deberia retornar un array de strings, donde cada string representa el nombre del indicador', () => {
      expect(bancoMundial.nombreIndicadorPorPais(output1)).toStrictEqual(output2);
    });
  });
  // test 3ra funcion 
  describe('bancoMundial.indicadorData', () => {
    it('deberia ser una funcion', () => {
      expect(typeof bancoMundial.indicadorData).toEqual('function');
    });
    it('bancoMundial.indicadorData deberia retornar un objeto, donde contiene las propiedades de cada  indicador', () => {
      expect(bancoMundial.indicadorData(input1, 'PER', input2)).toEqual(output3);
    });
  });
  // test 4ta funcion
  describe('asdValor', () => {
    it('deberia ser una funcion', () => {
      expect(typeof bancoMundial.asdValor).toBe('function');
    });
    it('bancoMundial.asdValor deberia retornar un array de objetos, donde los valores son ordenados de menor a mayor', () => {
      expect(bancoMundial.asdValor(input3)).toStrictEqual(output4);
    });
  });
  // test 5ta funcion
  describe('desValor', () => {
    it('deberia ser una funcion', () => {
      expect(typeof bancoMundial.desValor).toBe('function');
    });
    it('bancoMundial.desValor deberia retornar un array de objetos, donde los valores son ordenados de mayor a menor', () => {
      expect(bancoMundial.desValor(input3)).toStrictEqual(output5);
    });
    it('bancoMundial.desValor deberia retornar un array de objetos, donde los valores son ordenados de mayor a menor', () => {
      expect(bancoMundial.desValor(output5)[0].value).toStrictEqual(62.5275993347168);
    });
  });
  // test 6ta funcion
  describe('calcularProm', () => {
    it('deberia ser una funcion', () => {
      expect(typeof bancoMundial.calcularProm).toBe('function');
    });
    it('bancoMundial.calcularProm deberia retornar un promedio de los valores contenidos en el array del intervalo seleccionado', () => {
      expect(bancoMundial.calcularProm(input3)).toBe(output6);
    });
  });
});
