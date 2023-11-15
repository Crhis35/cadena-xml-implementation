import axios from 'axios';
import xml2js from 'xml2js';
import fs from 'fs';
import { XML, searchKeys, deepSearchItems } from './xml.js';
import {
  convertXmlToJson,
  transformJsonFlat,
  extractJsonDotNotation,
  extractXmlDotNotation,
} from '@blakepro/xml-query-find';
import { Base64 } from 'js-base64';
// const {
//   convertXmlToJson,
//   transformJsonFlat,
//   extractJsonDotNotation,
//   extractXmlDotNotation,
// } = require('@blakepro/xml-query-find');

const start = async () => {
  try {
    const req = await axios.get(
      `https://apivp.efacturacadena.com/v1/vp/consulta/documentos?nit_emisor=43871094&id_documento=FVE786&codigo_tipo_documento=01`,
      {
        headers: {
          'Content-Type': 'text/plain',
          'Partnership-Id': 901441896,
          efacturaAuthorizationToken: '371a2deb-9457-4c33-b8c6-ed79409df33b',
        },
      }
    );
    const doc = Base64.decode(req.data.document);
    const data = fs.readFileSync('./doc.json', {
      encoding: 'utf8',
    });
    const extracted = JSON.parse(data);

    console.log(doc);
    // const extractList = {
    //   to: {
    //     query: ['ext:ublextensions._find._attr'],
    //     type: 'string',
    //   },
    // };
    // let extracted = extractXmlDotNotation(doc, extractList);
    // let extracted = convertXmlToJson(doc);
    // console.log({ extracted });
    const results = searchKeys(extracted, '_cdata');
    const payload = convertXmlToJson(results[0]);
    console.log(payload);
    // const results2 = deepSearchItems(
    //   extracted,
    //   'ds:transforms',
    //   (k, v) => true
    // );

    // console.log({ results });
    // console.log(results2);
    // xml2js.parseString(doc, (err, result) => {
    //   const a = deepSearchItems(
    //     result,
    //     'cbc:CompanyID', //cbc:ID
    //     (key, value) => key === 'cbc:CompanyID'
    //   );
    //   objectScan(['cbc:CompanyID'])(result);

    //   console.log(a[0]);
    //   console.log(objectScan(['*:CompanyID'], { joined: true })(result));
    // });

    // const xm = new XML(doc);
    // console.log(xm);
    // fs.writeFileSync('test.xml', doc);
    // fs.writeFileSync('data.txt', JSON.stringify(results));
    // fs.writeFileSync('doc.txt', req.data.document);
    // fs.writeFileSync('doc.json', JSON.stringify(extracted));
  } catch (error) {
    // console.log(error);
    console.log(error.response?.data);
  }
};
start();
