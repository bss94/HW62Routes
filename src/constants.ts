import {CONTACT, POST, PRODUCT} from './types';

export const OURPOSTS: POST[] = [
  {
    title: 'Новый объект',
    subTitle: 'Бизнес-центр Aurora',
    image: 'https://24.kg/files/media/147/147891.png',
    body: 'Сегодня начаты работы над изготовлением нового ИТП для бизнес-центра Aurora, ждите новостей с работой на данном объекте в ближайшее время',
    id: 'doc-1',
  },
  {
    title: 'Прогресс работ',
    subTitle: 'Бизнес-центр Aurora',
    image: 'https://24.kg/files/media/147/147891.png',
    body: 'На сегодняшний день завершены работы над изготовлением нового ИТП для бизнес-центра Aurora, завершены работы над сопутствующей документацией. Объект переходит на этап монтеж и сдачи в эксплуатацию.',
    id: 'doc-2',
  },
  {
    title: 'Завершен объект',
    subTitle: 'Бизнес-центр Aurora',
    image: 'https://24.kg/files/media/147/147891.png',
    body: 'Завершен монтаж ИТП в бизнес-центре Aurora, ИТП сдан в эксплуатацию на баланс ОАО БишкекТеплосеть, желаем нашим дорогим клиентам счастливой эксплуатации ИТП',
    id: 'doc-3',
  },
  {
    title: 'Новый объект',
    subTitle: 'Бизнес-центр Виктори',
    image: 'https://skd.kg/wp-content/uploads/2021/10/s_post_cam_02-01.jpg',
    body: 'Сегодня начаты работы над изготовлением нового ИТП для бизнес-центра Виктори, ждите новостей с работой на данном объекте в ближайшее время',
    id: 'doc-4',
  },
];

export const OURCONTACTS: CONTACT[] = [
  {
    firstName: 'Иванов',
    secondName: 'Иван',
    position: 'Директор',
    email: 'director@basiko.kg',
    phone: '+996-89-**-**',
  },
  {
    firstName: 'Сидоров',
    secondName: 'Сидор',
    position: 'Отдел продаж',
    email: 'saller@basiko.kg',
    phone: '+996-89-**-**',
  },
  {
    firstName: 'Аман у.',
    secondName: 'Аман',
    position: 'Поддержка',
    email: 'helper@basiko.kg',
    phone: '+996-89-**-**',
  },
  {
    firstName: 'Abrams',
    secondName: 'James',
    position: 'Консультант',
    email: 'consultation@basiko.kg',
    phone: '+996-89-**-**',
  }
];

export const OURPRODUCTS: PRODUCT[] = [
  {
    name: 'ИТП коммерческий',
    price: '150000 сом',
    properties: 'Диаметр 40',
    id: 'ITPComm40'
  },
  {
    name: 'ИТП коммерческий',
    price: '250000 сом',
    properties: 'Диаметр 50',
    id: 'ITPComm50'
  },
  {
    name: 'ИТП жилой',
    price: '750000 сом',
    properties: 'Диаметр 80',
    id: 'ITPLiv80'
  },
  {
    name: 'ИТП жилой',
    price: '950000 сом',
    properties: 'Диаметр 100',
    id: 'ITPLiv100'
  },
];