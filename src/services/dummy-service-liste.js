import data  from './dummy-user.json'

export default class DummyListService {

  url = "https://jsonplaceholder.typicode.com/posts"


  getResource = async () => {
    const res = await fetch(`${this.url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this.url}` +
        `, received ${res.status}`)
    }

   return await res.json();
  };


  getAllList = async () => {
    return this.getResource();
  };

  getPseudoList = async (name,pasword) => {
    for(let roo in data){
      if(data[roo].name === name ){
        return data[roo]
      }
    }

  };

}




