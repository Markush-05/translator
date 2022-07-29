//const res = await fetch("https://fasttranslator.herokuapp.com/api/v1/text/to/text?source=Hello%20World&lang=%20en-uk ")  ///  GET Переклад

export default class translatorService {

    _urlGettTest = 'https://jsonplaceholder.typicode.com/posts';
  
    _urlGet = "https://fasttranslator.herokuapp.com/api/v1/text/to/text"
  
  
    getTranslation = async (primaryLeng,secondaryLeng,text) => {
  
      const res = await fetch(`${this._urlGet}?source=${text}&lang=${primaryLeng}-${secondaryLeng}  `).then((response) => response.json())
      .then((responseData) => {
        return responseData;
      })
  
      if (!res.message) {
        throw new Error(`Could not fetch ${this._urlGet}` +
          `, received ${res.status}`)
      }
      
      return  res
  
    };
  
  
  
    postResource = async () => {
      const LANG = "ru-en"
      const TEXT = "привет"
  
      const DATA = {
        Method: 'POST',
        headers: {
          hccept: 'application.json',
          'Content-Type': 'application/json'
        },
        body: "body",
        cache: 'default'
        
      }
  
      const res = await fetch(this._urlPost,{
        method: 'POST',
        Headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        Body: "body",
        Cache: 'default'
        
      })
  
  
  
  
      return await res;
    };
  
  
  }
  
  