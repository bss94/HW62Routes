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

export interface ORDER {
  name: string;
  phone: string;
  email: string;
  id: string;
  order: string;
}

export interface Movie {
  name: string;
  id: string;
}

export interface jokeState {
  id: string,
  joke: string
}

export interface singleJoke {
  category: string
  flags: {
    nsfw: boolean,
    religious: boolean,
    political: boolean,
    racist: boolean,
    explicit: boolean
    sexist: boolean
  },
  id: number
  joke: string
  lang: string
  safe: boolean
  type: string
}

export interface JokesJson {
  amount: number;
  error: boolean;
  jokes: singleJoke[];
}