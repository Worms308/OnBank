import * as Yup from 'yup';
import { getIBANDataApi } from 'API/jakitobankAPI';

export const newTransferSchema = () => {
  const requiredMessage = 'Wymagane';
  const patt = /[a-zA-Z]{2}[0-9]{26}/g;
  return Yup.object().shape({
    receiver: Yup.string()
      .min(2, 'Nazwa odbiorcy jest za krótka')
      .max(200, 'Nazwa odbiorcy jest za długa')
      .required(requiredMessage),
    accountNumber: Yup.string()
      .required(requiredMessage)
      .test(
        'accountValidate',
        'Błędny numer ',
        value =>
          new Promise((resolve, reject) => {
            if (patt.test(value)) {
              getIBANDataApi(value).then(response => console.log(response.data));
              resolve(true);
            } else {
              resolve(false);
            }
          }),
      ),
    description: Yup.string()
      .min(2, 'Opis jest za krótki')
      .max(4000, 'Opis jest za długi')
      .required(requiredMessage),
    ammount: Yup.number()
      .min(0.1, 'Za mała kwota')
      .typeError('Nie można wprowadzić ujemnej kwoty')
      .required(requiredMessage),
    typeTransfer: Yup.string().required('Proszę wybrać rodzaj operacji'),
  });
};
