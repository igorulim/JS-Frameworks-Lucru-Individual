'use strict';

export const validateCustomerForm = (fields, customers) => {
  const name = validateCustomerName(fields.name);
  const personalAccount = validateAccount(fields.personalAccount, customers);

  let hasErrors = name || personalAccount ? true : false;

  return { hasErrors, name, personalAccount };
};

const validateCustomerName = (name) => {
  if (name.length < 3 || name.length >= 45) {
    return 'Trebuie să conțină de la 3 până la 45 charactere';
  }

  return '';
};

const validateAccount = (personalAccount, customers) => {
  if (customers.some((c) => c.personalAccount === personalAccount)) {
    return 'Acest cont deja există';
  }

  return '';
};
