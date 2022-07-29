import './choice-lang.scss';
import { ButtonSvg } from '../button/button'; 
import switchLeng from '../../auxiliary'

const ChoiceLang = ({changeLeng,ifOnClick})=> {

    const data = switchLeng('')
    const itemLeng = data.map((item) => {

        return (
            <li  className='lang-list__item' key={item.id }> 
                        <span onClick={(e)=> changeLeng(e.target.attributes.value.value)} 
                        value={item.name} >{item.value} </span>

                        
            </li>
        );  
    });
    
    

    return (
        <div className="choice-lang" onClick={()=> ifOnClick()}>
            <div className='choice-lang__container' 
                onClick={(e)=> e.stopPropagation()}>


                <ButtonSvg ifOnClick={ifOnClick}/>

                <ul className="lang-list">
                    {itemLeng}
                    
                </ul>

            </div>
           

             
        </div>
    )
}


const onClikTwoFactors = ()=>{

}

export default ChoiceLang;



/* 

<select className="select_lang" form="form1" name="to">
                                <option selected="selected" value="ru">Русский</option>
                                <option value="az">Азербайджанский</option>
                                <option value="sq">Албанский</option>
                                <option value="am">Амхарский</option>
                                <option value="en">Английский</option>
                                <option value="ar">Арабский</option>
                                <option value="hy">Армянский</option>
                                <option value="af">Африкаанс</option>
                                <option value="eu">Баскский</option>
                                <option value="ba">Башкирский</option>
                                <option value="be">Белорусский</option>
                                <option value="bn">Бенгальский</option>
                                <option value="my">Бирманский</option>
                                <option value="bg">Болгарский</option>
                                <option value="bs">Боснийский</option>
                                <option value="cy">Валлийский</option>
                                <option value="hu">Венгерский</option>
                                <option value="vi">Вьетнамский</option>
                                <option value="ht">Гаитянский</option>
                                <option value="gl">Галисийский</option>
                                <option value="mrj">Горномарийский</option>
                                <option value="el">Греческий</option>
                                <option value="ka">Грузинский</option>
                                <option value="gu">Гуджарати</option>
                                <option value="da">Датский</option>
                                <option value="he">Иврит</option>
                                <option value="yi">Идиш</option>
                                <option value="id">Индонезийский</option>
                                <option value="ga">Ирландский</option>
                                <option value="is">Исландский</option>
                                <option value="es">Испанский</option>
                                <option value="it">Итальянский</option>
                                <option value="kk">Казахский</option>
                                <option value="kazlat">Казахский (латиница)</option>
                                <option value="kn">Каннада</option>
                                <option value="ca">Каталанский</option>
                                <option value="ky">Киргизский</option>
                                <option value="zh">Китайский</option>
                                <option value="ko">Корейский</option>
                                <option value="xh">Коса</option>
                                <option value="km">Кхмерский</option>
                                <option value="lo">Лаосский</option>
                                <option value="la">Латынь</option>
                                <option value="lv">Латышский</option>
                                <option value="lt">Литовский</option>
                                <option value="lb">Люксембургский</option>
                                <option value="mk">Македонский</option>
                                <option value="mg">Малагасийский</option>
                                <option value="ms">Малайский</option>
                                <option value="ml">Малаялам</option>
                                <option value="mt">Мальтийский</option>
                                <option value="mi">Маори</option>
                                <option value="mr">Маратхи</option>
                                <option value="mhr">Марийский</option>
                                <option value="mn">Монгольский</option>
                                <option value="de">Немецкий</option>
                                <option value="ne">Непальский</option>
                                <option value="nl">Нидерландский</option>
                                <option value="no">Норвежский</option>
                                <option value="pa">Панджаби</option>
                                <option value="pap">Папьяменто</option>
                                <option value="fa">Персидский</option>
                                <option value="pl">Польский</option>
                                <option value="pt">Португальский</option>
                                <option value="ro">Румынский</option>
                                <option value="ru">Русский</option>
                                <option value="ceb">Себуанский</option>
                                <option value="sr">Сербский</option>
                                <option value="si">Сингальский</option>
                                <option value="sk">Словацкий</option>
                                <option value="sl">Словенский</option>
                                <option value="sw">Суахили</option>
                                <option value="su">Сунданский</option>
                                <option value="tl">Тагальский</option>
                                <option value="tg">Таджикский</option>
                                <option value="th">Тайский</option>
                                <option value="ta">Тамильский</option>
                                <option value="tt">Татарский</option>
                                <option value="te">Телугу</option>
                                <option value="tr">Турецкий</option>
                                <option value="udm">Удмуртский</option>
                                <option value="uz">Узбекский</option>
                                <option value="uzbcyr">Узбекский (кириллица)</option>
                                <option value="uk">Украинский</option>
                                <option value="ur">Урду</option>
                                <option value="fi">Финский</option>
                                <option value="fr">Французский</option>
                                <option value="hi">Хинди</option>
                                <option value="hr">Хорватский</option>
                                <option value="cs">Чешский</option>
                                <option value="cv">Чувашский</option>
                                <option value="sv">Шведский</option>
                                <option value="gd">Шотландский (гэльский)</option>
                                <option value="sjn">Эльфийский (синдарин)</option>
                                <option value="emj">Эмодзи</option>
                                <option value="eo">Эсперанто</option>
                                <option value="et">Эстонский</option>
                                <option value="jv">Яванский</option>
                                <option value="sah">Якутский</option>
                                <option value="ja">Японский</option>
                            </select>
                            
*/