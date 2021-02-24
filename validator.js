'use strict';

export const validateCustomerForm = (fields, customers, updater) => {
  const name = validateCustomerName(fields.name);
  const personalAccount = validateAccount(
    fields.personalAccount,
    customers,
    updater
  );

  let hasErrors = name || personalAccount ? true : false;

  return { hasErrors, name, personalAccount };
};

export const validateInvoiceForm = (fields, customers, services) => {
  const payment = validatePayment(fields.payment);
  const customerId = validateCustomer(fields.customerId, customers);
  const serviceId = validateService(fields.serviceId, services);

  let hasErrors = payment || customerId || serviceId ? true : false;

  return { hasErrors, payment, customerId, serviceId };
};

const validateService = (serviceId, services) =>
  services.find((s) => s.id === serviceId) ? '' : 'Serviciu nu există';

const validateCustomer = (customerId, customers) =>
  customers.find((c) => c.id === customerId) ? '' : 'Cunsumătorul nu există';

const validatePayment = (payment) => (payment < 0 ? 'Plata este negativă' : '');

const validateCustomerName = (name) => {
  if (name.length < 3 || name.length >= 45) {
    return 'Trebuie să conțină de la 3 până la 45 charactere';
  }

  return '';
};

const validateAccount = (personalAccount, customers, updater) => {
  if (
    updater?.customer &&
    updater.customer.personalAccount === personalAccount
  ) {
    return '';
  }

  if (customers.some((c) => c.personalAccount === personalAccount)) {
    return 'Acest cont deja există';
  }

  return '';
};
