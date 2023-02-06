import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import vi from './translations/vi';

const resources = {
  vi: { translation: vi },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  keySeparator: '.',
});

export default i18n;
