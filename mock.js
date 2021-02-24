let customerId = 3;
let invoiceId = 9;

export const getCustomerId = () => {
  customerId += 1;
  return 'c' + customerId;
};

export const getInvoiceId = () => {
  invoiceId += 1;
  return 's' + invoiceId;
};

export const services = [
  {
    id: 's1',
    name: 'MOLDOVAGAZ',
    tel: '(373 11) 111-111'
  },
  {
    id: 's2',
    name: 'GASNATURALFENOSA',
    tel: '(373 22) 222-222'
  },
  {
    id: 's3',
    name: 'MoldTeleCom S.A.',
    tel: '(373 33) 333-333'
  }
];

export const customers = [
  {
    id: 'c1',
    name: 'Perju Aurel',
    personalAccount: '222/111111',
    address: {
      postalCode: 'MD-2001 Chisinau',
      street: 'Stefan cel Mare',
      nr: '1'
    },
    invoices: [
      {
        id: 'f1',
        payment: 3270,
        service: {
          id: 's1',
          name: 'MOLDOVAGAZ',
          tel: '(373 11) 111-111'
        },
        issuedAt: '8/31/2020',
        dispatchedAt: '9/8/2020',
        dueDate: '9/20/2020'
      },
      {
        id: 'f2',
        payment: 768,
        service: {
          id: 's2',
          name: 'GASNATURALFENOSA',
          tel: '(373 22) 222-222'
        },
        issuedAt: '08/31/2020',
        dispatchedAt: '09/08/2020',
        dueDate: '09/20/2020'
      },
      {
        id: 'f3',
        payment: 400,
        service: {
          id: 's3',
          name: 'MoldTeleCom S.A.',
          tel: '(373 33) 333-333'
        },
        issuedAt: '08/31/2020',
        dispatchedAt: '09/08/2020',
        dueDate: '09/20/2020'
      }
    ]
  },
  {
    id: 'c2',
    name: 'Mosneagu Petru',
    personalAccount: '222/111122',
    address: {
      postalCode: 'MD-2000 Chisinau',
      street: 'Ion Creanga',
      nr: '69'
    },
    invoices: [
      {
        id: 'f4',
        payment: 2871.45,
        service: {
          id: 's1',
          name: 'MOLDOVAGAZ',
          tel: '(373 11) 111-111'
        },
        issuedAt: '8/31/2020',
        dispatchedAt: '9/8/2020',
        dueDate: '9/20/2020'
      },
      {
        id: 'f5',
        payment: 643.25,
        service: {
          id: 's2',
          name: 'GASNATURALFENOSA',
          tel: '(373 22) 222-222'
        },
        issuedAt: '08/31/2020',
        dispatchedAt: '09/08/2020',
        dueDate: '09/20/2020'
      },
      {
        id: 'f6',
        payment: 400,
        service: {
          id: 's3',
          name: 'MoldTeleCom S.A.',
          tel: '(373 33) 333-333'
        },
        issuedAt: '08/31/2020',
        dispatchedAt: '09/08/2020',
        dueDate: '09/20/2020'
      }
    ]
  },
  {
    id: 'c3',
    name: 'Bucurosu Mihai',
    personalAccount: '222/221111',
    address: {
      postalCode: 'MD-2001 Chisinau',
      street: 'Iurie Gagarin',
      nr: '20'
    },
    invoices: [
      {
        id: 'f7',
        payment: 3213.67,
        service: {
          id: 's1',
          name: 'MOLDOVAGAZ',
          tel: '(373 11) 111-111'
        },
        issuedAt: '8/31/2020',
        dispatchedAt: '9/8/2020',
        dueDate: '9/20/2020'
      },
      {
        id: 'f8',
        payment: 345.87,
        service: {
          id: 's2',
          name: 'GASNATURALFENOSA',
          tel: '(373 22) 222-222'
        },
        issuedAt: '08/31/2020',
        dispatchedAt: '09/08/2020',
        dueDate: '09/20/2020'
      },
      {
        id: 'f9',
        payment: 250,
        service: {
          id: 's3',
          name: 'MoldTeleCom S.A.',
          tel: '(373 33) 333-333'
        },
        issuedAt: '08/31/2020',
        dispatchedAt: '09/08/2020',
        dueDate: '09/20/2020'
      }
    ]
  }
];
