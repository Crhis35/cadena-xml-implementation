import moment from 'moment';

export const Invoice = {
  type: 'default',
  national: true,
  currency: 'COP',
  exchangeRate: 0,
  noteNumber: '',
  invoiceNumber: 'SETT20',
  seller: 'Vendedor de pruebas',
  date: moment().format('YYYY-MM-DD'),
  hour: moment().format('hh:mm:ssZ'),
  expiration: moment().add(2, 'days').format('YYYY-MM-DD'),
  paymentWay: 'Contado',
  subtotal: 2265000,
  totalVat: 430350,
  totalRetention: 38850,
  reteIVA: 15,
  reteICA: 0.006,
  total: 2695350,
  paymentLink: null,
  termsAndConditions: null,
  notes: [],
  comments: null,
  status: 'SENT',
  documents: null,
  tags: null,
  company: {
    name: 'CrhisCompany',
    TAXID: '901441896',
    contacts: null,
    locations: [
      {
        name: 'Miami',
        headquarters: false,
        branchCode: '',
        address: {
          country: 'Colombia',
          cityCode: '13001',
          city: 'Cartagena',
          stateCode: '13',
          state: 'BOLIVAR',
          address_line1: 'Las Gaviotas',
          address_zip_code: '130005',
        },
      },
    ],
    configuration: {
      id: '338cabfa-c012-4dc2-b135-67858bc82e01',
      decimals: true,
      decimalsQuantity: 2,
    },
    regimenType: { code: '48', name: 'Responsable de IVA' },
    fiscalResponsability: {
      code: 'R-99-PN',
      name: 'No responsable',
      country: 'Colombia',
    },
  },
  client: {
    personType: 'juridica',
    nationalID: '1001644556',
    verificationDigit: 0,
    name: 'FINPPI COLOMBIA SAS',
    lastname: '',
    businessName: '',
    locations: [
      {
        name: 'Miami',
        headquarters: false,
        branchCode: '',
        address: {
          country: 'Colombia',
          cityCode: '05001',
          city: 'MEDELLIN',
          stateCode: '05',
          state: 'ANTIOQUIA',
          address_line1: 'Las ESTRADA',
          address_zip_code: '05001',
        },
      },
    ],
    phoneNumber: [],
    contacts: [{ email: 'cristian2test@gmail.com' }],
    idType: { code: '41', name: 'Pasaporte', country: 'Colombia' },
    regimenType: { code: '48', name: 'Responsable de IVA' },
    fiscalResponsability: {
      code: 'R-99-PN',
      name: 'No responsable',
      country: 'Colombia',
    },
  },
  noteConcept: null,
  productsServices: {
    items: [
      {
        productServiceID: 'ebee8b34-2f95-4fc6-8ee8-91dd675abe6e',
        productService: {
          name: 'Xiaomi Mi A2 Lite',
          unit: { code: '94' },
        },
        unitPrice: 750000,
        retentionPercentage: 7,
        retention: 49875,
        discounted: true,
        discountPercentage: 5,
        discount: 37500,
        quantity: 1,
        taxed: true,
        vatPercentage: 19,
        vat: 135375,
        subtotal: 712500,
        total: 847875,
        extra: '{"nationalID":"901441896","incomeType":"0","idType":"31"}',
      },
      {
        productServiceID: 'ebee8b34-2f95-4fc6-8ee8-91dd675abe6e',
        productService: {
          name: 'Xiaomi Mi A2 Lite',
          unit: { code: '94' },
        },
        unitPrice: 575000,
        retentionPercentage: 7,
        retention: 108675,
        discounted: true,
        discountPercentage: 10,
        discount: 172500,
        quantity: 3,
        taxed: true,
        vatPercentage: 19,
        vat: 294975,
        subtotal: 1552500,
        total: 1847475,
        extra: '{"nationalID":"901441896","incomeType":"0","idType":"31"}',
      },
    ],
  },
  operationType: { code: '0', name: 'Estándar', country: 'Colombia' },
  paymentMethod: {
    code: '2',
    name: 'Crédito ACH',
    country: 'Colombia',
  },
  purchaseOrder: {
    orderID: 'b1407180-1a7a-4952-ad5e-9df5ac9787c9',
    date: '2021-07-02',
  },
};

export const DebitNote = {
  type: 'debitNote',
  national: true,
  currency: 'COP',
  exchangeRate: 0,
  noteNumber: 'NDE2',
  invoiceNumber: 'SETT20',
  seller: 'Vendedor de pruebas',
  date: moment().format('YYYY-MM-DD'),
  hour: moment().format('hh:mm:ssZ'),
  expiration: moment().add(2, 'days').format('YYYY-MM-DD'),
  paymentWay: 'Contado',
  subtotal: 2265000,
  totalVat: 430350,
  totalRetention: 38850,
  reteIVA: 15,
  reteICA: 0.006,
  total: 2695350,
  paymentLink: null,
  termsAndConditions: null,
  notes: [],
  comments: null,
  status: 'SENT',
  documents: null,
  tags: null,
  company: {
    name: 'CrhisCompany',
    TAXID: '901441896',
    contacts: null,
    locations: [
      {
        name: 'Miami',
        headquarters: false,
        branchCode: '',
        address: {
          country: 'Colombia',
          cityCode: '13001',
          city: 'Cartagena',
          stateCode: '13',
          state: 'BOLIVAR',
          address_line1: 'Las Gaviotas',
          address_zip_code: '130005',
        },
      },
    ],
    configuration: {
      id: '338cabfa-c012-4dc2-b135-67858bc82e01',
      decimals: true,
      decimalsQuantity: 2,
    },
  },
  client: {
    personType: 'juridica',
    nationalID: '1001644556',
    verificationDigit: 0,
    name: 'FINPPI COLOMBIA SAS',
    lastname: '',
    businessName: '',
    locations: [
      {
        name: 'Miami',
        headquarters: false,
        branchCode: '',
        address: {
          country: 'Colombia',
          cityCode: '05001',
          city: 'MEDELLIN',
          stateCode: '05',
          state: 'ANTIOQUIA',
          address_line1: 'Las ESTRADA',
          address_zip_code: '05001',
        },
      },
    ],
    phoneNumber: [],
    contacts: [{ email: 'cristian2test@gmail.com' }],
    idType: { code: '41', name: 'Pasaporte', country: 'Colombia' },
    regimenType: { code: '48', name: 'Responsable de IVA' },
    fiscalResponsability: {
      code: 'R-99-PN',
      name: 'No responsable',
      country: 'Colombia',
    },
  },
  noteConcept: { type: 'credito', name: 'Rebaja total aplicada' },
  productsServices: {
    items: [
      {
        productServiceID: 'ebee8b34-2f95-4fc6-8ee8-91dd675abe6e',
        productService: {
          name: 'Xiaomi Mi A2 Lite',
          unit: { code: '94' },
        },
        unitPrice: 575000,
        retentionPercentage: 7,
        retention: 108675,
        discounted: true,
        discountPercentage: 10,
        discount: 172500,
        quantity: 3,
        taxed: true,
        vatPercentage: 19,
        vat: 294975,
        subtotal: 1552500,
        total: 1847475,
        extra: '{"nationalID":"901441896","incomeType":"0","idType":"31"}',
      },
      {
        productServiceID: 'ebee8b34-2f95-4fc6-8ee8-91dd675abe6e',
        productService: {
          name: 'Xiaomi Mi A2 Lite',
          unit: { code: '94' },
        },
        unitPrice: 750000,
        retentionPercentage: 7,
        retention: 49875,
        discounted: true,
        discountPercentage: 5,
        discount: 37500,
        quantity: 1,
        taxed: true,
        vatPercentage: 19,
        vat: 135375,
        subtotal: 712500,
        total: 847875,
        extra: '{"nationalID":"901441896","incomeType":"0","idType":"31"}',
      },
    ],
  },
  operationType: { code: '0', name: 'Estándar', country: 'Colombia' },
  paymentMethod: {
    code: '2',
    name: 'Crédito ACH',
    country: 'Colombia',
  },
  purchaseOrder: {
    orderID: '61246555-6291-4870-8aea-056e18ecc679',
    date: '2021-07-02',
  },
};

export const CreditNote = {
  type: 'creditNote',
  national: true,
  currency: 'COP',
  exchangeRate: 0,
  noteNumber: 'NDE2',
  invoiceNumber: 'SETT20',
  seller: 'Vendedor de pruebas',
  date: moment().format('YYYY-MM-DD'),
  hour: moment().format('hh:mm:ssZ'),
  expiration: moment().add(2, 'days').format('YYYY-MM-DD'),
  paymentWay: 'Contado',
  subtotal: 2265000,
  totalVat: 430350,
  totalRetention: 38850,
  reteIVA: 15,
  reteICA: 0.006,
  total: 2695350,
  paymentLink: null,
  termsAndConditions: null,
  notes: [],
  comments: null,
  status: 'SENT',
  documents: null,
  tags: null,
  company: {
    name: 'CrhisCompany',
    TAXID: '901441896',
    contacts: null,
    locations: [
      {
        name: 'Miami',
        headquarters: false,
        branchCode: '',
        address: {
          country: 'Colombia',
          cityCode: '13001',
          city: 'Cartagena',
          stateCode: '13',
          state: 'BOLIVAR',
          address_line1: 'Las Gaviotas',
          address_zip_code: '130005',
        },
      },
    ],
    configuration: {
      id: '338cabfa-c012-4dc2-b135-67858bc82e01',
      decimals: true,
      decimalsQuantity: 2,
    },
  },
  client: {
    personType: 'juridica',
    nationalID: '1001644556',
    verificationDigit: 0,
    name: 'FINPPI COLOMBIA SAS',
    lastname: '',
    businessName: '',
    locations: [
      {
        name: 'Miami',
        headquarters: false,
        branchCode: '',
        address: {
          country: 'Colombia',
          cityCode: '05001',
          city: 'MEDELLIN',
          stateCode: '05',
          state: 'ANTIOQUIA',
          address_line1: 'Las ESTRADA',
          address_zip_code: '05001',
        },
      },
    ],
    phoneNumber: [],
    contacts: [{ email: 'cristian2test@gmail.com' }],
    idType: { code: '41', name: 'Pasaporte', country: 'Colombia' },
    regimenType: { code: '48', name: 'Responsable de IVA' },
    fiscalResponsability: {
      code: 'R-99-PN',
      name: 'No responsable',
      country: 'Colombia',
    },
  },
  noteConcept: { type: 'credito', name: 'Rebaja total aplicada' },
  productsServices: {
    items: [
      {
        productServiceID: 'ebee8b34-2f95-4fc6-8ee8-91dd675abe6e',
        productService: {
          name: 'Xiaomi Mi A2 Lite',
          unit: { code: '94' },
        },
        unitPrice: 575000,
        retentionPercentage: 7,
        retention: 108675,
        discounted: true,
        discountPercentage: 10,
        discount: 172500,
        quantity: 3,
        taxed: true,
        vatPercentage: 19,
        vat: 294975,
        subtotal: 1552500,
        total: 1847475,
        extra: '{"nationalID":"901441896","incomeType":"0","idType":"31"}',
      },
      {
        productServiceID: 'ebee8b34-2f95-4fc6-8ee8-91dd675abe6e',
        productService: {
          name: 'Xiaomi Mi A2 Lite',
          unit: { code: '94' },
        },
        unitPrice: 750000,
        retentionPercentage: 7,
        retention: 49875,
        discounted: true,
        discountPercentage: 5,
        discount: 37500,
        quantity: 1,
        taxed: true,
        vatPercentage: 19,
        vat: 135375,
        subtotal: 712500,
        total: 847875,
        extra: '{"nationalID":"901441896","incomeType":"0","idType":"31"}',
      },
    ],
  },
  operationType: { code: '0', name: 'Estándar', country: 'Colombia' },
  paymentMethod: {
    code: '2',
    name: 'Crédito ACH',
    country: 'Colombia',
  },
  purchaseOrder: {
    orderID: '61246555-6291-4870-8aea-056e18ecc679',
    date: '2021-07-02',
  },
};
