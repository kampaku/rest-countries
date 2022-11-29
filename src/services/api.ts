class Api {
  static baseUrl: string = 'https://restcountries.com/v3.1';

  static getCountries = async (region: string) => {
    let req;
    if (region === 'all') {
      req = await fetch(`${Api.baseUrl}/all`);
    } else {
      req = await fetch(`${Api.baseUrl}/region/${region}`);
    }
    if (!req.ok) {
      throw Error(req.statusText);
    }
    return req.json();
  }

  static getCountry = async (name: string) => {
    const req = await fetch(`${Api.baseUrl}/name/${name}?fullText=true`);
    if (!req.ok) {
      throw Error(req.statusText);
    }
    return req.json();
  }

  static getNeighbors = async (codes: string[]) => {
    const req = await fetch(`${Api.baseUrl}/alpha?codes=${codes.join(',')}`);
    if (!req.ok) {
      throw Error(req.statusText);
    }
    return req.json();
  }
}

export { Api };
