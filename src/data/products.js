import IPhone13Pro from '../assets/media/iphone13proImage.png';
import IPhone13 from '../assets/media/iPhone13Image.png';
import IPhoneSE from '../assets/media/iPhoneSeImage.png';
import IPhone12 from '../assets/media/iphone12image.png';
import IPhone11 from '../assets/media/iphone11image.png';

import iPhone13ProCase from '../assets/media/iPhone13-12.svg';
import iPhoneSeCase from '../assets/media/iPhoneSE.svg';
import iPhone11Case from '../assets/media/iPhone11.svg';

import IPadAirCase from '../assets/media/iPadAir.svg';
import IPadProCase from '../assets/media/iPadPro.svg';
import IPad2021Case from '../assets/media/iPad.svg';
import IPadMiniCase from '../assets/media/iPadMini.svg';

import iPadAir from '../assets/media/iPadAir-bkg.jpg';
import IPadPro from '../assets/media/iPadpro-bkg.gif';
import IPad2021 from '../assets/media/iPad.png';
import IPadMini from '../assets/media/iPadMini.jpg';

import Xiaomi12ProImg from '../assets/media/Xiaomi12Pro.png';
import Xiaomi12Img from '../assets/media/Xiaomi12.png';
import Xiaomi11LiteImg from '../assets/media/Xiaomi11LiteNE.png';
import Redmi10Img from '../assets/media/Redmi10.png';

import GalaxyFold3Img from '../assets/media/GalaxyFold.png';
import GalaxyS22UltraImg from '../assets/media/GalaxyS22Ultra.png';
import GalaxyS21Img from '../assets/media/GalaxyS21.png';

import HuaweiP50PocketImg from '../assets/media/HuaweiP50.png';
import HuaweiNova9Img from '../assets/media/HuaweiNova9.png';
import HuaweiP30ProImg from '../assets/media/HuaweiP30.png';

import GalaxyTabS8UltraImg from '../assets/media/GlaxyTabS8Ultra.png';
import GalaxyTabA7LiteImg from '../assets/media/GalaxyTabA7Lite.png';
import GalaxyTabS6LiteImg from '../assets/media/GalaxyTabS6Lite.png';

import HuaweiMatePadProImg from '../assets/media/HuaweiMatePadPro.png';
import HuaweiMatePad11Img from '../assets/media/HuaweiMatePad11.png';
import HuaweiMatePadPaperImg from '../assets/media/HuaweiMatePadPaper.png';

export const iPhoneCases = {
  'iphone13-pro': { id: 'iphone13-pro', name: 'iPhone 13 Pro', src: iPhone13ProCase },
  'iphone13': { id: 'iphone13', name: 'iPhone 13', src: iPhone13ProCase },
  'iphone-se': { id: 'iphone-se', name: 'iPhone SE', src: iPhoneSeCase },
  'iphone12': { id: 'iphone12', name: 'iPhone 12', src: iPhone13ProCase },
  'iphone11': { id: 'iphone11', name: 'iPhone 11', src: iPhone11Case },
};

export const iPadCases = {
  'ipad-air': { id: 'ipad-air', name: 'iPad Air', src: IPadAirCase },
  'ipad-pro': { id: 'ipad-pro', name: 'iPad Pro', src: IPadProCase },
  'ipad': { id: 'ipad', name: 'iPad', src: IPad2021Case },
  'ipad-mini': { id: 'ipad-mini', name: 'iPad Mini',src: IPadMiniCase },
};

const products = {
  'iphone13-pro': { id: 'iphone13-pro', name: 'iPhone 13 Pro', price: 899, src: IPhone13Pro },
  'iphone13': { id: 'iphone13', name: 'iPhone 13', price: 629, src: IPhone13 },
  'iphone-se': { id: 'iphone-se', name: 'iPhone SE', price: 386, src: IPhoneSE },
  'iphone12': { id: 'iphone12', name: 'iPhone 12', price: 539, src: IPhone12 },
  'iphone11': { id: 'iphone11', name: 'iPhone 11', price: 449, src: IPhone11 },

  'ipad-air': { id: 'ipad-air', name: 'iPad Air', price: 539, src: iPadAir },
  'ipad-pro': { id: 'ipad-pro', name: 'iPad Pro', price: 719, src: IPadPro },
  'ipad': { id: 'ipad', name: 'iPad', price: 296, src: IPad2021 },
  'ipad-mini': { id: 'ipad-mini', name: 'iPad Mini', price: 449, src: IPadMini },

  'xiaomi12-pro': { id: 'xiaomi12-pro', name: 'Xiaomi 12 Pro', price: 945, src: Xiaomi12ProImg },
  'xiaomi12': { id: 'xiaomi12', name: 'Xiaomi 12', price: 783, src: Xiaomi12Img },
  'xiaomi11-lite': { id: 'xiaomi11-lite', name: 'Xiaomi 11 lite NE', price: 333, src: Xiaomi11LiteImg },
  'redmi10': { id: 'redmi10', name: 'Redmi 10', price: 180, src: Redmi10Img },

  'galaxy-fold3': { id: 'galaxy-fold3', name: 'Galaxy Fold 3', price: 1980, src: GalaxyFold3Img },
  'galaxy-s22ultra': { id: 'galaxy-s22ultra', name: 'Galaxy S22 Ultra', price: 1260, src: GalaxyS22UltraImg },
  'galaxy-s21': { id: 'galaxy-s21', name: 'Galaxy S21', price: 900, src: GalaxyS21Img },

  'huawei-p50-pocket': { id: 'huawei-p50-pocket', name: 'Huawei P50 Pocket', price: 1395, src: HuaweiP50PocketImg },
  'huawei-nova9': { id: 'huawei-nova9', name: 'Huawei Nova 9', price: 585, src: HuaweiNova9Img },
  'huawei-p30-pro': { id: 'huawei-p30-pro', name: 'Huawei P30 Pro', price: 720, src: HuaweiP30ProImg },

  'galaxy-tab-s8-ultra': { id: 'galaxy-tab-s8-ultra', name: 'Galaxy Tab S8 Ultra', price: 1440, src: GalaxyTabS8UltraImg },
  'galaxy-tab-a7-lite': { id: 'galaxy-tab-a7-lite', name: 'Galaxy Tab A7 Lite', price: 225, src: GalaxyTabA7LiteImg },
  'galaxy-tab-s6-lite': { id: 'galaxy-tab-s6-lite', name: 'Galaxy Tab S6 Lite', price: 360, src: GalaxyTabS6LiteImg },

  'huawei-matepad-pro': { id: 'huawei-matepad-pro', name: 'Huawei MatePad Pro', price: 540, src: HuaweiMatePadProImg },
  'huawei-matepad-11': { id: 'huawei-matepad-11', name: 'Huawei MatePad 11', price: 423, src: HuaweiMatePad11Img },
  'huawei-matepad-paper': { id: 'huawei-matepad-paper', name: 'Huawei MatePad Paper', price: 720, src: HuaweiMatePadPaperImg },
};

export default products;


export const countries = [
    "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola",
    "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia",
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
    "Bonaire", "Bosnia & Herzegovina", "Botswana", "Brazil",
    "British Indian Ocean Ter", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cambodia", "Cameroon", "Canada", "Canary Islands", "Cape Verde",
    "Cayman Islands", "Central African Republic", "Chad", "Channel Islands",
    "Chile", "China", "Christmas Island", "Cocos Island", "Colombia", "Comoros",
    "Congo", "Cook Islands", "Costa Rica", "Cote DIvoire", "Croatia", "Cuba",
    "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands",
    "Faroe Islands", "Fiji", "Finland", "France", "French Guiana",
    "French Polynesia", "French Southern Ter", "Gabon", "Gambia", "Georgia",
    "Germany", "Ghana", "Gibraltar", "Great Britain", "Greece", "Greenland",
    "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guyana", "Haiti",
    "Hawaii", "Honduras", "Hong Kong", "Hungary", "Iceland", "Indonesia", "India",
    "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica",
    "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North",
    "Korea South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau",
    "Macedonia", "Madagascar", "Malaysia", "Malawi", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte",
    "Mexico", "Midway Islands", "Moldova", "Monaco", "Mongolia", "Montserrat",
    "Morocco", "Mozambique", "Myanmar", "Nambia", "Nauru", "Nepal",
    "Netherland Antilles", "Netherlands", "Nevis", "New Caledonia",
    "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island",
    "Norway", "Oman", "Pakistan", "Palau Island", "Palestine", "Panama",
    "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Island",
    "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of Montenegro",
    "Republic of Serbia", "Reunion", "Romania", "Russia", "Rwanda",
    "St Barthelemy", "St Eustatius", "St Helena", "St Kitts-Nevis", "St Lucia",
    "St Maarten", "St Pierre & Miquelon", "St Vincent & Grenadines", "Saipan",
    "Samoa", "Samoa American", "San Marino", "Sao Tome & Principe",
    "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
    "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland",
    "Syria", "Tahiti", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
    "Tokelau", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Turks & Caicos Is", "Tuvalu", "Uganda", "United Kingdom", "Ukraine",
    "United Arab Emirates", "United States of America", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City State", "Venezuela", "Vietnam",
    "Virgin Islands (Brit)", "Virgin Islands (USA)", "Wake Island",
    "Wallis & Futana Is", "Yemen", "Zaire", "Zambia", "Zimbabwe"
  ];