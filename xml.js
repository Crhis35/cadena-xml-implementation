import xml2js from 'xml2js';

export const deepSearchItems = (object, key, predicate) => {
  let ret = [];
  if (object.hasOwnProperty(key) && predicate(key, object[key]) === true) {
    ret = [...ret, object];
  }

  if (Object.keys(object).length) {
    for (let i = 0; i < Object.keys(object).length; i++) {
      let value = object[Object.keys(object)[i]];

      if (typeof value === 'object' && value !== null) {
        let o = deepSearchItems(value, key, predicate);
        if (o !== null && o instanceof Array) {
          ret = [...ret, ...o];
        }
      }
    }
  }
  return ret;
};

const mapArrays = (array = [], key = '') => {
  let results = {};
  array.forEach((value) => {
    if (value) {
      if (Array.isArray(value) && value.length > 0) {
        const mapped = mapArrays(value, key);
        console.log({ mapped });
        results = {
          ...results,
          ...mapped,
        };
      }
      if (typeof value === 'object' && !Array.isArray(value)) {
        console.log('before', { results });
        const mapped = searchKeys(value, key);
        console.log('mapped', mapped);
        Object.assign(results, mapped);
        console.log('after', { results });
      }
    }
  });

  return results;
};

export const searchKeys = (object = {}, targetProp = '') => {
  let results = [];
  if (object.hasOwnProperty(targetProp)) {
    results.push(object[targetProp]);
  }

  if (Object.keys(object).length) {
    Object.keys(object).forEach((key) => {
      const value = object[key];
      if (value) {
        if (Array.isArray(value) && value.length > 0) {
          const mapped = [];
          value.forEach((item) => {
            if (typeof item === 'object' && !Array.isArray(item)) {
              mapped.push(...searchKeys(item, targetProp));
            }
          });
          results = [...results, ...mapped];
        }
        if (typeof value === 'object' && !Array.isArray(value)) {
          const res = searchKeys(value, targetProp);
          if (res.length > 0) {
            results = [...results, ...res];
          }
        }
      }
    });
  }

  return results;
};

export class XML {
  constructor(doc) {
    this.xml = '';
    xml2js.parseString(doc, (err, result) => {
      this.xml = deepSearchItems(
        result,
        'cbc:Description',
        (key, value) => key === 'cbc:Description'
      )[0]['cbc:Description'][0];
    });
    this.clientBuilder();
  }

  clientBuilder() {
    xml2js.parseString(this.xml, (err, result) => {
      const personType = deepSearchItems(
        result,
        'cbc:AdditionalAccountID',
        (key, value) => key === 'cbc:AdditionalAccountID'
      )[1]['cbc:AdditionalAccountID'][0];

      const name = deepSearchItems(
        result,
        'cbc:Name',
        (key, value) => Array.isArray(value) && typeof value[0] === 'string'
      )[2]['cbc:Name'][0];

      const cityCode = deepSearchItems(
        result,
        'cac:Address',
        (key, value) => true
      )[1]['cac:Address'][0]['cbc:ID'][0];

      const city = deepSearchItems(
        result,
        'cac:Address',
        (key, value) => true
      )[1]['cac:Address'][0]['cbc:CityName'][0];

      const state = deepSearchItems(
        result,
        'cac:Address',
        (key, value) => true
      )[1]['cac:Address'][0]['cbc:CountrySubentity'][0];

      const stateCode = deepSearchItems(
        result,
        'cac:Address',
        (key, value) => true
      )[1]['cac:Address'][0]['cbc:CountrySubentityCode'][0];

      const address_line1 = deepSearchItems(
        result,
        'cbc:Line',
        (key, value) => true
      )[0][2];

      const country = deepSearchItems(
        result,
        'cac:Country',
        (key, value) => true
      )[2]['cac:Country'][0]['cbc:Name'][0]['_'];

      console.log(
        deepSearchItems(result, 'cac:Country', (key, value) => true)[2][
          'cac:Country'
        ][0]['cbc:Name'][0]['_']
      );
    });
  }
}
