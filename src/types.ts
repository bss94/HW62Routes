export interface POST {
  title: string;
  subTitle: string;
  image: string;
  body: string;
  id: string;
}

export interface CONTACT {
  firstName: string;
  secondName: string;
  position: string;
  email: string;
  phone: string;
}

export interface PRODUCT {
  name: string;
  price: string;
  id: string;
  properties: string;
}
export interface ORDER{
  name:string;
  phone:string;
  email:string;
  id:string;
  order:string;
}