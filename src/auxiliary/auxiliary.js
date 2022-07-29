function switchLeng(props) {


    function testReal () {
        const idx = lengsJson.findIndex((el) => el.name === props);
        if (idx === -1){
            return 'виберіть мову'
        }
        return  lengsJson[idx].value

    }

    switch (true){
        case (props.length === 0) :
            return lengsJson

        case (props.length > 1) :
            return testReal()
        case 'en':
            return 'English'   

         default:
            return 'виберіть мову'
        break;
    }    

}


export default switchLeng ;



/*
////////////////////////////////////////////
    const keyID = ()=> {
        let i = 0
        let list = []
        for(var key in LANGS){

           const obje = {id: i, name: Object.keys(LANGS)[i] , value: Object.values(LANGS)[i] }
          
      
           list = [
            ... list,obje
            ];
      
            i++  
        }

        return list
        
    }

    const or = keyID()
    
    const listIt = ( ) => {
        //console.log(or)
        let string = ''
        for( var roo in or){
            string +=  JSON.stringify(or[roo]) 
            string += ','
        }
        console.log(string)
    }

    console.log(listIt())
//////////////////////////////////////////////////////



    const key = ()=> {
        let i = 0
        for(var key in lengsJson){
            if(key === props){
              return [i];
              
             }
            i++  
        }
        
    }
   

    //console.log( Object.keys(LANGS)[2], Object.values(LANGS)[2] )



    switch (true){
        case (props.length === 0) :
            return  [Object.keys(LANGS), Object.values(LANGS)]  

        case (props.length > 1) :
            return Object.values(LANGS)[key()]
        case 'en':
            return 'English'   
        case 'de':
            return 'Deutsch'       

         default:
            return 'виберіть мову'
        break;
    }    

}

/////////////////////////////////////////////////////////
var LANGS = {
    "uk": "Украинский",
    "az": "Азербайджанский",
    "sq": "Албанский",
    "am": "Амхарский",
    "en": "Английский",
    "ar": "Арабский",
    "hy": "Армянский",
    "af": "Африкаанс",
    "eu": "Баскский",
    "ba": "Башкирский",
    "be": "Белорусский",
    "bn": "Бенгальский",
    "my": "Бирманский",
    "bg": "Болгарский",
    "bs": "Боснийский",
    "cy": "Валлийский",
    "hu": "Венгерский",
    "vi": "Вьетнамский",
    "ht": "Гаитянский",
    "gl": "Галисийский",
    "mrj": "Горномарийский",
    "el": "Греческий",
    "ka": "Грузинский",
    "gu": "Гуджарати",
    "da": "Датский",
    "he": "Иврит",
    "yi": "Идиш",
    "id": "Индонезийский",
    "ga": "Ирландский",
    "is": "Исландский",
    "es": "Испанский",
    "it": "Итальянский",
    "kk": "Казахский",
    "kazlat": "Казахский (латиница)",
    "kn": "Каннада",
    "ca": "Каталанский",
    "ky": "Киргизский",
    "zh": "Китайский",
    "ko": "Корейский",
    "xh": "Коса",
    "km": "Кхмерский",
    "lo": "Лаосский",
    "la": "Латынь",
    "lv": "Латышский",
    "lt": "Литовский",
    "lb": "Люксембургский",
    "mk": "Македонский",
    "mg": "Малагасийский",
    "ms": "Малайский",
    "ml": "Малаялам",
    "mt": "Мальтийский",
    "mi": "Маори",
    "mr": "Маратхи",
    "mhr": "Марийский",
    "mn": "Монгольский",
    "de": "Немецкий",
    "ne": "Непальский",
    "nl": "Нидерландский",
    "no": "Норвежский",
    "pa": "Панджаби",
    "pap": "Папьяменто",
    "fa": "Персидский",
    "pl": "Польский",
    "pt": "Португальский",
    "ro": "Румынский",
    "ru": "Русский",
    "ceb": "Себуанский",
    "sr": "Сербский",
    "si": "Сингальский",
    "sk": "Словацкий",
    "sl": "Словенский",
    "sw": "Суахили",
    "su": "Сунданский",
    "tl": "Тагальский",
    "tg": "Таджикский",
    "th": "Тайский",
    "ta": "Тамильский",
    "tt": "Татарский",
    "te": "Телугу",
    "tr": "Турецкий",
    "udm": "Удмуртский",
    "uz": "Узбекский",
    "uzbcyr": "Узбекский (кириллица)",
    "ur": "Урду",
    "fi": "Финский",
    "fr": "Французский",
    "hi": "Хинди",
    "hr": "Хорватский",
    "cs": "Чешский",
    "cv": "Чувашский",
    "sv": "Шведский",
    "gd": "Шотландский (гэльский)",
    "sjn": "Эльфийский (синдарин)",
    "emj": "Эмодзи",
    "eo": "Эсперанто",
    "et": "Эстонский",
    "jv": "Яванский",
    "sah": "Якутский",
    "ja": "Японский"
    }
 */   

    var lengsJson = [
        {"id":0,"name":"uk","value":"Украинский"},
        {"id":1,"name":"az","value":"Азербайджанский"},
        {"id":2,"name":"sq","value":"Албанский"},
        {"id":3,"name":"am","value":"Амхарский"},
        {"id":4,"name":"en","value":"Английский"},
        {"id":5,"name":"ar","value":"Арабский"},
        {"id":6,"name":"hy","value":"Армянский"},
        {"id":7,"name":"af","value":"Африкаанс"},
        {"id":8,"name":"eu","value":"Баскский"},
        {"id":9,"name":"ba","value":"Башкирский"},
        {"id":10,"name":"be","value":"Белорусский"},
        {"id":11,"name":"bn","value":"Бенгальский"},
        {"id":12,"name":"my","value":"Бирманский"},
        {"id":13,"name":"bg","value":"Болгарский"},
        {"id":14,"name":"bs","value":"Боснийский"},
        {"id":15,"name":"cy","value":"Валлийский"},
        {"id":16,"name":"hu","value":"Венгерский"},
        {"id":17,"name":"vi","value":"Вьетнамский"},
        {"id":18,"name":"ht","value":"Гаитянский"},
        {"id":19,"name":"gl","value":"Галисийский"},
        {"id":20,"name":"mrj","value":"Горномарийский"},
        {"id":21,"name":"el","value":"Греческий"},
        {"id":22,"name":"ka","value":"Грузинский"},
        {"id":23,"name":"gu","value":"Гуджарати"},
        {"id":24,"name":"da","value":"Датский"},
        {"id":25,"name":"he","value":"Иврит"},
        {"id":26,"name":"yi","value":"Идиш"},
        {"id":27,"name":"id","value":"Индонезийский"},
        {"id":28,"name":"ga","value":"Ирландский"},
        {"id":29,"name":"is","value":"Исландский"},
        {"id":30,"name":"es","value":"Испанский"},
        {"id":31,"name":"it","value":"Итальянский"},
        {"id":32,"name":"kk","value":"Казахский"},
        {"id":33,"name":"kazlat","value":"Казахский (латиница)"},
        {"id":34,"name":"kn","value":"Каннада"},
        {"id":35,"name":"ca","value":"Каталанский"},
        {"id":36,"name":"ky","value":"Киргизский"},
        {"id":37,"name":"zh","value":"Китайский"},
        {"id":38,"name":"ko","value":"Корейский"},
        {"id":39,"name":"xh","value":"Коса"},
        {"id":40,"name":"km","value":"Кхмерский"},
        {"id":41,"name":"lo","value":"Лаосский"},
        {"id":42,"name":"la","value":"Латынь"},
        {"id":43,"name":"lv","value":"Латышский"},
        {"id":44,"name":"lt","value":"Литовский"},
        {"id":45,"name":"lb","value":"Люксембургский"},
        {"id":46,"name":"mk","value":"Македонский"},
        {"id":47,"name":"mg","value":"Малагасийский"},
        {"id":48,"name":"ms","value":"Малайский"},
        {"id":49,"name":"ml","value":"Малаялам"},
        {"id":50,"name":"mt","value":"Мальтийский"},
        {"id":51,"name":"mi","value":"Маори"},
        {"id":52,"name":"mr","value":"Маратхи"},
        {"id":53,"name":"mhr","value":"Марийский"},
        {"id":54,"name":"mn","value":"Монгольский"},
        {"id":55,"name":"de","value":"Немецкий"},
        {"id":56,"name":"ne","value":"Непальский"},
        {"id":57,"name":"nl","value":"Нидерландский"},
        {"id":58,"name":"no","value":"Норвежский"},
        {"id":59,"name":"pa","value":"Панджаби"},
        {"id":60,"name":"pap","value":"Папьяменто"},
        {"id":61,"name":"fa","value":"Персидский"},
        {"id":62,"name":"pl","value":"Польский"},
        {"id":63,"name":"pt","value":"Португальский"},
        {"id":64,"name":"ro","value":"Румынский"},
        {"id":65,"name":"ru","value":"Русский"},
        {"id":66,"name":"ceb","value":"Себуанский"},
        {"id":67,"name":"sr","value":"Сербский"},
        {"id":68,"name":"si","value":"Сингальский"},
        {"id":69,"name":"sk","value":"Словацкий"},
        {"id":70,"name":"sl","value":"Словенский"},
        {"id":71,"name":"sw","value":"Суахили"},
        {"id":72,"name":"su","value":"Сунданский"},
        {"id":73,"name":"tl","value":"Тагальский"},
        {"id":74,"name":"tg","value":"Таджикский"},
        {"id":75,"name":"th","value":"Тайский"},
        {"id":76,"name":"ta","value":"Тамильский"},
        {"id":77,"name":"tt","value":"Татарский"},
        {"id":78,"name":"te","value":"Телугу"},
        {"id":79,"name":"tr","value":"Турецкий"},
        {"id":80,"name":"udm","value":"Удмуртский"},
        {"id":81,"name":"uz","value":"Узбекский"},
        {"id":82,"name":"uzbcyr","value":"Узбекский (кириллица)"},
        {"id":83,"name":"ur","value":"Урду"},
        {"id":84,"name":"fi","value":"Финский"},
        {"id":85,"name":"fr","value":"Французский"},
        {"id":86,"name":"hi","value":"Хинди"},
        {"id":87,"name":"hr","value":"Хорватский"},
        {"id":88,"name":"cs","value":"Чешский"},
        {"id":89,"name":"cv","value":"Чувашский"},
        {"id":90,"name":"sv","value":"Шведский"},
        {"id":91,"name":"gd","value":"Шотландский (гэльский)"},
        {"id":92,"name":"sjn","value":"Эльфийский (синдарин)"},
        {"id":93,"name":"emj","value":"Эмодзи"},
        {"id":94,"name":"eo","value":"Эсперанто"},
        {"id":95,"name":"et","value":"Эстонский"},
        {"id":96,"name":"jv","value":"Яванский"},
        {"id":97,"name":"sah","value":"Якутский"},
        {"id":98,"name":"ja","value":"Японский"},
    ]