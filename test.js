const data = {
  attacheddocument: {
    _attr: {
      xmlns: 'urn:oasis:names:specification:ubl:schema:xsd:AttachedDocument-2',
      'xmlns:cac':
        'urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2',
      'xmlns:cbc':
        'urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2',
      'xmlns:ccts':
        'urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2',
      'xmlns:ds': 'http://www.w3.org/2000/09/xmldsig#',
      'xmlns:ext':
        'urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2',
      'xmlns:xades': 'http://uri.etsi.org/01903/v1.3.2#',
      'xmlns:xades141': 'http://uri.etsi.org/01903/v1.4.1#',
    },
    'ext:ublextensions': {
      'ext:ublextension': [
        {
          a: '3',
        },
      ],
    },
    'cbc:ublversionid': { _attr: 'UBL 2.1' },
    'cbc:customizationid': { _attr: 'Documentos adjuntos' },
    'cbc:profileid': { _attr: 'Factura Electrónica de Venta' },
    'cbc:profileexecutionid': { _attr: '1' },
    'cbc:id': { _attr: 'YP142' },
    'cbc:issuedate': { _attr: '2022-06-15' },
    'cbc:issuetime': { _attr: '15:19:45-05:00' },
    'cbc:documenttype': { _attr: 'Contenedor de Factura Electrónica' },
    'cbc:parentdocumentid': { _attr: 'YP142' },
    'cac:senderparty': {
      'cac:partytaxscheme': [
        {
          a: '4',
        },
      ],
    },
    'cac:receiverparty': {
      'cac:partytaxscheme': [
        {
          a: '3',
        },
      ],
    },
    'cac:attachment': {
      'cac:externalreference': [
        {
          a: '5',
        },
      ],
    },
    'cac:parentdocumentlinereference': {
      'cbc:lineid': [
        {
          a: '6',
        },
      ],
      'cac:documentreference': [
        {
          a: '7',
        },
      ],
    },
  },
};

const mapArrays = (array = [], key = '') => {
  const results = {};
  array.forEach((value) => {
    if (value) {
      if (Array.isArray(value) && value.length > 0) {
        mapArrays(value, key);
      }
      if (typeof value === 'object' && !Array.isArray(value)) {
        Object.assign(results, searchKeys(value, key));
      }
    }
  });

  return results;
};

export const searchKeys = (object = {}, targetProp = '') => {
  const results = [];
  if (object.hasOwnProperty(targetProp)) {
    results.push(object[targetProp]);
  }

  if (Object.keys(object).length) {
    Object.keys(object).forEach((key) => {
      const value = object[key];
      if (key === targetProp) {
        results.push(value);
      }
      if (value) {
        if (Array.isArray(value) && value.length > 0) {
          const newObject = mapArrays(value, targetProp);
          const res = searchKeys(newObject, targetProp);
          if (typeof res === 'object' && !Array.isArray(res) && res !== null) {
            results.push(res);
          }
        }
        if (typeof value === 'object') {
          console.log({ value });
          const res = searchKeys(value, targetProp);
          console.log({ res });
          if (typeof res === 'object' && res !== null) {
            results.push(res);
          }
          console.log({ results });
        }
      }
    });
  }

  return results;
};

function main() {
  console.log({
    final: searchKeys(data, 'ext:ublextensions'),
  });
}

main();
