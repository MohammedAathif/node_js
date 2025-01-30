import express from 'express';

const router = express.Router();

const surahNames = [
                       {
                         "name": "ٱلْفَاتِحَةِ",
                         "englishName": "Al-Faatiha",
                         "tamilName": "அல்ஃபாத்திஹா",
                         "urduName": "அல்ஃபாத்திஹா",
                         "englishNameTranslation": "The Opening",
                         "tamilNameTranslation": "தோற்றுவாய்",
                         "urduNameTranslation": "தோற்றுவாய்",
                         "revelationType": "Meccan","totalAyah" : 7
                       },
                       {
                         "name": "البَقَرَةِ",
                         "englishName": "Al-Baqara",
                         "tamilName": "ஸூரத்துல் பகரா",
                         "urduName": "ஸூரத்துல் பகரா",
                         "englishNameTranslation": "The Cow",
                         "tamilNameTranslation": "பசு மாடு",
                         "urduNameTranslation": "பசு மாடு",
                         "revelationType": "Medinan","totalAyah" : 286
                       },
                       {
                         "name": "آلِ عِمۡرَانَ",
                         "englishName": "Aal-i-Imraan",
                         "tamilName": "ஸூரத்துல்ஆல இம்ரான்",
                         "urduName": "ஸூரத்துல்ஆல இம்ரான்",
                         "englishNameTranslation": "The Family of Imraan",
                         "tamilNameTranslation": "இம்ரானின் சந்ததிகள்",
                         "urduNameTranslation": "இம்ரானின் சந்ததிகள்",
                         "revelationType": "Medinan","totalAyah" : 200
                       },
                       {
                         "name": "النِّسَاءِ",
                         "englishName": "An-Nisaa",
                         "tamilName": "ஸூரத்துன்னிஸாவு",
                         "urduName": "ஸூரத்துன்னிஸாவு",
                         "englishNameTranslation": "The Women",
                         "tamilNameTranslation": "பெண்கள்",
                         "urduNameTranslation": "பெண்கள்",
                         "revelationType": "Medinan","totalAyah" : 176
                       },
                       {
                         "name": "المَائـِدَةِ",
                         "englishName": "Al-Maaida",
                         "tamilName": "ஸூரத்துல் மாயிதா",
                         "urduName": "ஸூரத்துல் மாயிதா",
                         "englishNameTranslation": "The Table",
                         "tamilNameTranslation": "(ஆகாரம்) (உணவு மரவை)",
                         "urduNameTranslation": "(ஆகாரம்) (உணவு மரவை)",
                         "revelationType": "Medinan","totalAyah" : 120
                       },
                       {
                         "name": "الأَنۡعَامِ",
                         "englishName": "Al-An'aam",
                         "tamilName": "ஸூரத்துல் அன்ஆம்",
                         "urduName": "ஸூரத்துல் அன்ஆம்",
                         "englishNameTranslation": "The Cattle",
                         "tamilNameTranslation": "(ஆடு, மாடு, ஒட்டகம்)",
                         "urduNameTranslation": "(ஆடு, மாடு, ஒட்டகம்)",
                         "revelationType": "Meccan","totalAyah" : 165
                       },
                       {
                         "name": "الأَعۡرَافِ",
                         "englishName": "Al-A'raaf",
                         "tamilName": "ஸூரத்துல் அஃராஃப்",
                         "urduName": "ஸூரத்துல் அஃராஃப்",
                         "englishNameTranslation": "The Heights",
                         "tamilNameTranslation": "சிகரங்கள்",
                         "urduNameTranslation": "சிகரங்கள்",
                         "revelationType": "Meccan","totalAyah" : 206
                       },
                       {
                         "name": "الأَنفَالِ",
                         "englishName": "Al-Anfaal",
                         "tamilName": "ஸூரத்துல் அன்ஃபால்",
                         "urduName": "ஸூரத்துல் அன்ஃபால்",
                         "englishNameTranslation": "The Spoils of War",
                         "tamilNameTranslation": "போரில் கிடைத்த வெற்றிப்பொருள்கள்",
                         "urduNameTranslation": "போரில் கிடைத்த வெற்றிப்பொருள்கள்",
                         "revelationType": "Medinan","totalAyah" : 75
                       },
                       {
                         "name": "التَّوۡبَةِ",
                         "englishName": "At-Tawba",
                         "tamilName": "ஸூரத்துத் தவ்பா",
                         "urduName": "ஸூரத்துத் தவ்பா",
                         "englishNameTranslation": "The Repentance",
                         "tamilNameTranslation": "மனவருந்தி மன்னிப்பு தேடுதல்",
                         "urduNameTranslation": "மனவருந்தி மன்னிப்பு தேடுதல்",
                         "revelationType": "Medinan","totalAyah" : 129
                       },
                       {
                         "name": "يُونُسَ",
                         "englishName": "Yunus",
                         "tamilName": "ஸூரத்து யூனுஸ்",
                         "urduName": "ஸூரத்து யூனுஸ்",
                         "englishNameTranslation": "Jonas",
                         "tamilNameTranslation": "நபி",
                         "urduNameTranslation": "நபி",
                         "revelationType": "Meccan","totalAyah" : 109
                       },
                       {
                         "name": "هُودٍ",
                         "englishName": "Hud",
                         "tamilName": "ஸூரத்து ஹூது",
                         "urduName": "ஸூரத்து ஹூது",
                         "englishNameTranslation": "Hud",
                         "tamilNameTranslation": "Hud",
                         "urduNameTranslation": "Hud",
                         "revelationType": "Meccan","totalAyah" : 123
                       },
                       {
                         "name": "يُوسُفَ",
                         "englishName": "Yusuf",
                         "tamilName": "ஸூரத்து யூஸுஃப்",
                         "urduName": "ஸூரத்து யூஸுஃப்",
                         "englishNameTranslation": "Joseph",
                         "tamilNameTranslation": "Joseph",
                         "urduNameTranslation": "Joseph",
                         "revelationType": "Meccan","totalAyah" : 111
                       },
                       {
                         "name": "الرَّعۡدِ",
                         "englishName": "Ar-Ra'd",
                         "tamilName": "ஸூரத்துர் ரஃது ",
                         "urduName": "ஸூரத்துர் ரஃது ",
                         "englishNameTranslation": "The Thunder",
                         "tamilNameTranslation": "இடி",
                         "urduNameTranslation": "இடி",
                         "revelationType": "Medinan","totalAyah" : 43
                       },
                       {
                         "name": "إِبۡرَاهِيمَ",
                         "englishName": "Ibrahim",
                         "tamilName": "ஸூரத்து இப்ராஹீம்",
                         "urduName": "ஸூரத்து இப்ராஹீம்",
                         "englishNameTranslation": "Abraham",
                         "tamilNameTranslation": "Abraham",
                         "urduNameTranslation": "Abraham",
                         "revelationType": "Meccan","totalAyah" : 52
                       },
                       {
                         "name": "الحِجۡرِ",
                         "englishName": "Al-Hijr",
                         "tamilName": "ஸூரத்துல் ஹிஜ்ர்",
                         "urduName": "ஸூரத்துல் ஹிஜ்ர்",
                         "englishNameTranslation": "The Rock",
                         "tamilNameTranslation": "மலைப்பாறை",
                         "urduNameTranslation": "மலைப்பாறை",
                         "revelationType": "Meccan","totalAyah" : 99
                       },
                       {
                         "name": "النَّحۡلِ",
                         "englishName": "An-Nahl",
                         "tamilName": "ஸூரத்துந் நஹ்ல்",
                         "urduName": "ஸூரத்துந் நஹ்ல்",
                         "englishNameTranslation": "The Bee",
                         "tamilNameTranslation": "தேனி",
                         "urduNameTranslation": "தேனி",
                         "revelationType": "Meccan","totalAyah" : 128
                       },
                       {
                         "name": "الإِسۡرَاءِ",
                         "englishName": "Al-Israa",
                         "tamilName": "பனீ இஸ்ராயீல்",
                         "urduName": "பனீ இஸ்ராயீல்",
                         "englishNameTranslation": "The Night Journey",
                         "tamilNameTranslation": "இஸ்ராயீலின் சந்ததிகள்",
                         "urduNameTranslation": "இஸ்ராயீலின் சந்ததிகள்",
                         "revelationType": "Meccan","totalAyah" : 111
                       },
                       {
                         "name": "الكَهۡفِ",
                         "englishName": "Al-Kahf",
                         "tamilName": "ஸூரத்துல் கஹ்ஃபு",
                         "urduName": "ஸூரத்துல் கஹ்ஃபு",
                         "englishNameTranslation": "The Cave",
                         "tamilNameTranslation": "குகை",
                         "urduNameTranslation": "குகை",
                         "revelationType": "Meccan","totalAyah" : 110
                       },
                       {
                         "name": "مَرۡيَمَ",
                         "englishName": "Maryam",
                         "tamilName": "ஸூரத்து மர்யம்",
                         "urduName": "ஸூரத்து மர்யம்",
                         "englishNameTranslation": "Mary",
                         "tamilNameTranslation": "Mary",
                         "urduNameTranslation": "Mary",
                         "revelationType": "Meccan","totalAyah" : 98
                       },
                       {
                         "name": "طه",
                         "englishName": "Taa-Haa",
                         "tamilName": "ஸூரத்து தாஹா",
                         "urduName": "ஸூரத்து தாஹா",
                         "englishNameTranslation": "Taa-Haa",
                         "tamilNameTranslation": "Taa-Haa",
                         "urduNameTranslation": "Taa-Haa",
                         "revelationType": "Meccan","totalAyah" : 135
                       },
                       {
                         "name": "الأَنبِيَاءِ",
                         "englishName": "Al-Anbiyaa",
                         "tamilName": "ஸூரத்துல் அன்பியா",
                         "urduName": "ஸூரத்துல் அன்பியா",
                         "englishNameTranslation": "The Prophets",
                         "tamilNameTranslation": "நபிமார்கள்",
                         "urduNameTranslation": "நபிமார்கள்",
                         "revelationType": "Meccan","totalAyah" : 112
                       },
                       {
                         "name": "الحَجِّ",
                         "englishName": "Al-Hajj",
                         "tamilName": "ஸூரத்துல் ஹஜ்",
                         "urduName": "ஸூரத்துல் ஹஜ்",
                         "englishNameTranslation": "The Pilgrimage",
                         "tamilNameTranslation": "The Pilgrimage",
                         "urduNameTranslation": "The Pilgrimage",
                         "revelationType": "Medinan","totalAyah" : 78
                       },
                       {
                         "name": "المُؤۡمِنُونَ",
                         "englishName": "Al-Muminoon",
                         "tamilName": "ஸூரத்துல் முஃமினூன்",
                         "urduName": "ஸூரத்துல் முஃமினூன்",
                         "englishNameTranslation": "The Believers",
                         "tamilNameTranslation": "விசுவாசிகள்",
                         "urduNameTranslation": "விசுவாசிகள்",
                         "revelationType": "Meccan","totalAyah" : 118
                       },
                       {
                         "name": "النُّورِ",
                         "englishName": "An-Noor",
                         "tamilName": "ஸூரத்துந் நூர்",
                         "urduName": "ஸூரத்துந் நூர்",
                         "englishNameTranslation": "The Light",
                         "tamilNameTranslation": "பேரொளி",
                         "urduNameTranslation": "பேரொளி",
                         "revelationType": "Medinan","totalAyah" : 64
                       },
                       {
                         "name": "الفُرۡقَانِ",
                         "englishName": "Al-Furqaan",
                         "tamilName": "ஸூரத்துல் ஃபுர்ஃகான்",
                         "urduName": "ஸூரத்துல் ஃபுர்ஃகான்",
                         "englishNameTranslation": "The Criterion",
                         "tamilNameTranslation": "பிரித்தறிவித்தல்",
                         "urduNameTranslation": "பிரித்தறிவித்தல்",
                         "revelationType": "Meccan","totalAyah" : 77
                       },
                       {
                         "name": "الشُّعَرَاءِ",
                         "englishName": "Ash-Shu'araa",
                         "tamilName": "ஸூரத்துஷ்ஷுஃரா",
                         "urduName": "ஸூரத்துஷ்ஷுஃரா",
                         "englishNameTranslation": "The Poets",
                         "tamilNameTranslation": "கவிஞர்கள்",
                         "urduNameTranslation": "கவிஞர்கள்",
                         "revelationType": "Meccan","totalAyah" : 227
                       },
                       {
                         "name": "النَّمۡلِ",
                         "englishName": "An-Naml",
                         "tamilName": "ஸூரத்துந் நம்லி",
                         "urduName": "ஸூரத்துந் நம்லி",
                         "englishNameTranslation": "The Ant",
                         "tamilNameTranslation": "எறும்புகள்",
                         "urduNameTranslation": "எறும்புகள்",
                         "revelationType": "Meccan","totalAyah" : 93
                       },
                       {
                         "name": "القَصَصِ",
                         "englishName": "Al-Qasas",
                         "tamilName": "ஸூரத்துல் கஸஸ்",
                         "urduName": "ஸூரத்துல் கஸஸ்",
                         "englishNameTranslation": "The Stories",
                         "tamilNameTranslation": "வரலாறுகள்",
                         "urduNameTranslation": "வரலாறுகள்",
                         "revelationType": "Meccan","totalAyah" : 88
                       },
                       {
                         "name": "العَنكَبُوتِ",
                         "englishName": "Al-Ankaboot",
                         "tamilName": "ஸூரத்துல் அன்கபூத்",
                         "urduName": "ஸூரத்துல் அன்கபூத்",
                         "englishNameTranslation": "The Spider",
                         "tamilNameTranslation": "சிலந்திப் பூச்சி",
                         "urduNameTranslation": "சிலந்திப் பூச்சி",
                         "revelationType": "Meccan","totalAyah" : 69
                       },
                       {
                         "name": "الرُّومِ",
                         "englishName": "Ar-Room",
                         "tamilName": "ஸூரத்துர் ரூம்",
                         "urduName": "ஸூரத்துர் ரூம்",
                         "englishNameTranslation": "The Romans",
                         "tamilNameTranslation": "ரோமானியப் பேரரசு",
                         "urduNameTranslation": "ரோமானியப் பேரரசு",
                         "revelationType": "Meccan","totalAyah" : 60
                       },
                       {
                         "name": "لُقۡمَانَ",
                         "englishName": "Luqman",
                         "tamilName": "ஸூரத்து லுக்மான்",
                         "urduName": "ஸூரத்து லுக்மான்",
                         "englishNameTranslation": "Luqman",
                         "tamilNameTranslation": "Luqman",
                         "urduNameTranslation": "Luqman",
                         "revelationType": "Meccan","totalAyah" : 34
                       },
                       {
                         "name": "السَّجۡدَةِ",
                         "englishName": "As-Sajda",
                         "tamilName": "ஸூரத்துஸ் ஸஜ்தா",
                         "urduName": "ஸூரத்துஸ் ஸஜ்தா",
                         "englishNameTranslation": "The Prostration",
                         "tamilNameTranslation": "சிரம் பணிதல்",
                         "urduNameTranslation": "சிரம் பணிதல்",
                         "revelationType": "Meccan","totalAyah" : 30
                       },
                       {
                         "name": "الأَحۡزَابِ",
                         "englishName": "Al-Ahzaab",
                         "tamilName": "ஸூரத்துல் அஹ்ஜாப",
                         "urduName": "ஸூரத்துல் அஹ்ஜாப",
                         "englishNameTranslation": "The Clans",
                         "tamilNameTranslation": "சதிகார அணியினர்",
                         "urduNameTranslation": "சதிகார அணியினர்",
                         "revelationType": "Medinan","totalAyah" : 73
                       },
                       {
                         "name": "سَبَإٍ",
                         "englishName": "Saba",
                         "tamilName": "ஸூரத்துஸ் ஸபா",
                         "urduName": "ஸூரத்துஸ் ஸபா",
                         "englishNameTranslation": "Sheba",
                         "tamilNameTranslation": "Sheba",
                         "urduNameTranslation": "Sheba",
                         "revelationType": "Meccan","totalAyah" : 54
                       },
                       {
                         "name": "فَاطِرٍ",
                         "englishName": "Faatir",
                         "tamilName": "ஸூரத்து ஃபாத்திர்",
                         "urduName": "ஸூரத்து ஃபாத்திர்",
                         "englishNameTranslation": "The Originator",
                         "tamilNameTranslation": "படைப்பவன்",
                         "urduNameTranslation": "படைப்பவன்",
                         "revelationType": "Meccan","totalAyah" : 45
                       },
                       {
                         "name": "يسٓ",
                         "englishName": "Yaseen",
                         "tamilName": "ஸூரத்து யாஸீன்",
                         "urduName": "ஸூரத்து யாஸீன்",
                         "englishNameTranslation": "Yaseen",
                         "tamilNameTranslation": "Yaseen",
                         "urduNameTranslation": "Yaseen",
                         "revelationType": "Meccan","totalAyah" : 83
                       },
                       {
                         "name": "الصَّافَّاتِ",
                         "englishName": "As-Saaffaat",
                         "tamilName": "ஸூரத்துஸ் ஸாஃப்ஃபாத்",
                         "urduName": "ஸூரத்துஸ் ஸாஃப்ஃபாத்",
                         "englishNameTranslation": "Those drawn up in Ranks",
                         "tamilNameTranslation": "அணிவகுப்புகள்",
                         "urduNameTranslation": "அணிவகுப்புகள்",
                         "revelationType": "Meccan","totalAyah" : 182
                       },
                       {
                         "name": "صٓ",
                         "englishName": "Saad",
                         "tamilName": "ஸூரத்து ஸாத்",
                         "urduName": "ஸூரத்து ஸாத்",
                         "englishNameTranslation": "The letter Saad",
                         "tamilNameTranslation": "The letter Saad",
                         "urduNameTranslation": "The letter Saad",
                         "revelationType": "Meccan","totalAyah" : 88
                       },
                       {
                         "name": "الزُّمَرِ",
                         "englishName": "Az-Zumar",
                         "tamilName": "ஸூரத்துஜ்ஜுமர்",
                         "urduName": "ஸூரத்துஜ்ஜுமர்",
                         "englishNameTranslation": "The Groups",
                         "tamilNameTranslation": "கூட்டங்கள்",
                         "urduNameTranslation": "கூட்டங்கள்",
                         "revelationType": "Meccan","totalAyah" : 75
                       },
                       {
                         "name": "غَافِرٍ",
                         "englishName": "Ghafir",
                         "tamilName": "Ghafir",
                         "urduName": "Ghafir",
                         "englishNameTranslation": "The Forgiver",
                         "tamilNameTranslation": "The Forgiver",
                         "urduNameTranslation": "The Forgiver",
                         "revelationType": "Meccan","totalAyah" : 85
                       },
                       {
                         "name": "فُصِّلَتۡ",
                         "englishName": "Fussilat",
                         "tamilName": "Fussilat",
                         "urduName": "Fussilat",
                         "englishNameTranslation": "Explained in detail",
                         "tamilNameTranslation": "Explained in detail",
                         "urduNameTranslation": "Explained in detail",
                         "revelationType": "Meccan","totalAyah" : 54
                       },
                       {
                         "name": "الشُّورَىٰ",
                         "englishName": "Ash-Shura",
                         "tamilName": "ஸூரத்துஷ் ஷூறா",
                         "urduName": "ஸூரத்துஷ் ஷூறா",
                         "englishNameTranslation": "Consultation",
                         "tamilNameTranslation": "கலந்தாலோசித்தல",
                         "urduNameTranslation": "கலந்தாலோசித்தல",
                         "revelationType": "Meccan","totalAyah" : 53
                       },
                       {
                         "name": "الزُّخۡرُفِ",
                         "englishName": "Az-Zukhruf",
                         "tamilName": "ஸூரத்துஜ் ஜுக்ருஃப்",
                         "urduName": "ஸூரத்துஜ் ஜுக்ருஃப்",
                         "englishNameTranslation": "Ornaments of gold",
                         "tamilNameTranslation": "பொன் அலங்காரம்",
                         "urduNameTranslation": "பொன் அலங்காரம்",
                         "revelationType": "Meccan","totalAyah" : 89
                       },
                       {
                         "name": "الدُّخَانِ",
                         "englishName": "Ad-Dukhaan",
                         "tamilName": "ஸூரத்துத் துகான்",
                         "urduName": "ஸூரத்துத் துகான்",
                         "englishNameTranslation": "The Smoke",
                         "tamilNameTranslation": "புகை",
                         "urduNameTranslation": "புகை",
                         "revelationType": "Meccan","totalAyah" : 59
                       },
                       {
                         "name": "الجَاثِيَةِ",
                         "englishName": "Al-Jaathiya",
                         "tamilName": "ஸூரத்துல் ஜாஸியா",
                         "urduName": "ஸூரத்துல் ஜாஸியா",
                         "englishNameTranslation": "Crouching",
                         "tamilNameTranslation": "முழந்தாளிடுதல்",
                         "urduNameTranslation": "முழந்தாளிடுதல்",
                         "revelationType": "Meccan","totalAyah" : 37
                       },
                       {
                         "name": "الأَحۡقَافِ",
                         "englishName": "Al-Ahqaf",
                         "tamilName": "ஸூரத்துல் அஹ்காஃப்",
                         "urduName": "ஸூரத்துல் அஹ்காஃப்",
                         "englishNameTranslation": "The Dunes",
                         "tamilNameTranslation": "மணல் திட்டுகள்",
                         "urduNameTranslation": "மணல் திட்டுகள்",
                         "revelationType": "Meccan","totalAyah" : 35
                       },
                       {
                         "name": "مُحَمَّدٍ",
                         "englishName": "Muhammad",
                         "tamilName": "ஸூரத்து முஹம்மது",
                         "urduName": "ஸூரத்து முஹம்மது",
                         "englishNameTranslation": "Muhammad",
                         "tamilNameTranslation": "ஸல்",
                         "urduNameTranslation": "ஸல்",
                         "revelationType": "Medinan","totalAyah" : 38
                       },
                       {
                         "name": "الفَتۡحِ",
                         "englishName": "Al-Fath",
                         "tamilName": "ஸூரத்துல் ஃபத்ஹ்",
                         "urduName": "ஸூரத்துல் ஃபத்ஹ்",
                         "englishNameTranslation": "The Victory",
                         "tamilNameTranslation": "வெற்றி",
                         "urduNameTranslation": "வெற்றி",
                         "revelationType": "Medinan","totalAyah" : 29
                       },
                       {
                         "name": "الحُجُرَاتِ",
                         "englishName": "Al-Hujuraat",
                         "tamilName": "ஸூரத்துல் ஹுஜுராத்",
                         "urduName": "ஸூரத்துல் ஹுஜுராத்",
                         "englishNameTranslation": "The Inner Apartments",
                         "tamilNameTranslation": "அறைகள்",
                         "urduNameTranslation": "அறைகள்",
                         "revelationType": "Medinan","totalAyah" : 18
                       },
                       {
                         "name": "قٓ",
                         "englishName": "Qaaf",
                         "tamilName": "ஸூரத்து ஃகாஃப்",
                         "urduName": "ஸூரத்து ஃகாஃப்",
                         "englishNameTranslation": "The letter Qaaf",
                         "tamilNameTranslation": "The letter Qaaf",
                         "urduNameTranslation": "The letter Qaaf",
                         "revelationType": "Meccan","totalAyah" : 45
                       },
                       {
                         "name": "الذَّارِيَاتِ",
                         "englishName": "Adh-Dhaariyat",
                         "tamilName": "ஸூரத்துத் தாரியாத்",
                         "urduName": "ஸூரத்துத் தாரியாத்",
                         "englishNameTranslation": "The Winnowing Winds",
                         "tamilNameTranslation": "புழுதியைக் கிளப்பும் காற்றுகள்",
                         "urduNameTranslation": "புழுதியைக் கிளப்பும் காற்றுகள்",
                         "revelationType": "Meccan","totalAyah" : 60
                       },
                       {
                         "name": "الطُّورِ",
                         "englishName": "At-Tur",
                         "tamilName": "ஸூரத்துத் தூர்",
                         "urduName": "ஸூரத்துத் தூர்",
                         "englishNameTranslation": "The Mount",
                         "tamilNameTranslation": "மலை",
                         "urduNameTranslation": "மலை",
                         "revelationType": "Meccan","totalAyah" : 49
                       },
                       {
                         "name": "النَّجۡمِ",
                         "englishName": "An-Najm",
                         "tamilName": "ஸூரத்துந்நஜ்ம்",
                         "urduName": "ஸூரத்துந்நஜ்ம்",
                         "englishNameTranslation": "The Star",
                         "tamilNameTranslation": "நட்சத்திரம்",
                         "urduNameTranslation": "நட்சத்திரம்",
                         "revelationType": "Meccan","totalAyah" : 62
                       },
                       {
                         "name": "القَمَرِ",
                         "englishName": "Al-Qamar",
                         "tamilName": "ஸூரத்துல் கமர்",
                         "urduName": "ஸூரத்துல் கமர்",
                         "englishNameTranslation": "The Moon",
                         "tamilNameTranslation": "சந்திரன்",
                         "urduNameTranslation": "சந்திரன்",
                         "revelationType": "Meccan","totalAyah" : 55
                       },
                       {
                         "name": "الرَّحۡمَٰن",
                         "englishName": "Ar-Rahmaan",
                         "tamilName": "ஸூரத்துர் ரஹ்மான்",
                         "urduName": "ஸூரத்துர் ரஹ்மான்",
                         "englishNameTranslation": "The Beneficent",
                         "tamilNameTranslation": "அளவற்ற அருளாளன்",
                         "urduNameTranslation": "அளவற்ற அருளாளன்",
                         "revelationType": "Medinan","totalAyah" : 78
                       },
                       {
                         "name": "الوَاقِعَةِ",
                         "englishName": "Al-Waaqia",
                         "tamilName": "ஸூரத்துல் வாகிஆ",
                         "urduName": "ஸூரத்துல் வாகிஆ",
                         "englishNameTranslation": "The Inevitable",
                         "tamilNameTranslation": "மாபெரும் நிகழ்ச்சி",
                         "urduNameTranslation": "மாபெரும் நிகழ்ச்சி",
                         "revelationType": "Meccan","totalAyah" : 96
                       },
                       {
                         "name": "الحَدِيدِ",
                         "englishName": "Al-Hadid",
                         "tamilName": "ஸூரத்துல் ஹதீத்",
                         "urduName": "ஸூரத்துல் ஹதீத்",
                         "englishNameTranslation": "The Iron",
                         "tamilNameTranslation": "இரும்பு",
                         "urduNameTranslation": "இரும்பு",
                         "revelationType": "Medinan","totalAyah" : 29
                       },
                       {
                         "name": "المُجَادلَةِ",
                         "englishName": "Al-Mujaadila",
                         "tamilName": "ஸூரத்துல் முஜாதலா",
                         "urduName": "ஸூரத்துல் முஜாதலா",
                         "englishNameTranslation": "The Pleading Woman",
                         "tamilNameTranslation": "தர்க்கித்தல்",
                         "urduNameTranslation": "தர்க்கித்தல்",
                         "revelationType": "Medinan","totalAyah" : 22
                       },
                       {
                         "name": "الحَشۡرِ",
                         "englishName": "Al-Hashr",
                         "tamilName": "ஸூரத்துல் ஹஷ்ர்",
                         "urduName": "ஸூரத்துல் ஹஷ்ர்",
                         "englishNameTranslation": "The Exile",
                         "tamilNameTranslation": "ஒன்று கூட்டுதல்",
                         "urduNameTranslation": "ஒன்று கூட்டுதல்",
                         "revelationType": "Medinan","totalAyah" : 24
                       },
                       {
                         "name": "المُمۡتَحنَةِ",
                         "englishName": "Al-Mumtahana",
                         "tamilName": "ஸூரத்துல் மும்தஹினா",
                         "urduName": "ஸூரத்துல் மும்தஹினா",
                         "englishNameTranslation": "She that is to be examined",
                         "tamilNameTranslation": "பரிசோதித்தல்",
                         "urduNameTranslation": "பரிசோதித்தல்",
                         "revelationType": "Medinan","totalAyah" : 13
                       },
                       {
                         "name": "الصَّفِّ",
                         "englishName": "As-Saff",
                         "tamilName": "ஸூரத்துஸ் ஸஃப்ஃபு",
                         "urduName": "ஸூரத்துஸ் ஸஃப்ஃபு",
                         "englishNameTranslation": "The Ranks",
                         "tamilNameTranslation": "அணிவகுப்பு",
                         "urduNameTranslation": "அணிவகுப்பு",
                         "revelationType": "Medinan","totalAyah" : 14
                       },
                       {
                         "name": "الجُمُعَةِ",
                         "englishName": "Al-Jumu'a",
                         "tamilName": "ஸூரத்துல் ஜுமுஆ",
                         "urduName": "ஸூரத்துல் ஜுமுஆ",
                         "englishNameTranslation": "Friday",
                         "tamilNameTranslation": "வெள்ளிக் கிழமை",
                         "urduNameTranslation": "வெள்ளிக் கிழமை",
                         "revelationType": "Medinan","totalAyah" : 11
                       },
                       {
                         "name": "المُنَافِقُونَ",
                         "englishName": "Al-Munaafiqoon",
                         "tamilName": "ஸூரத்துல் முனாஃபிஃகூன்",
                         "urduName": "ஸூரத்துல் முனாஃபிஃகூன்",
                         "englishNameTranslation": "The Hypocrites",
                         "tamilNameTranslation": "நயவஞ்சகர்கள்",
                         "urduNameTranslation": "நயவஞ்சகர்கள்",
                         "revelationType": "Medinan","totalAyah" : 11
                       },
                       {
                         "name": "التَّغَابُنِ",
                         "englishName": "At-Taghaabun",
                         "tamilName": "ஸூரத்துத் தஃகாபுன்",
                         "urduName": "ஸூரத்துத் தஃகாபுன்",
                         "englishNameTranslation": "Mutual Disillusion",
                         "tamilNameTranslation": "நஷ்டம்",
                         "urduNameTranslation": "நஷ்டம்",
                         "revelationType": "Medinan","totalAyah" : 18
                       },
                       {
                         "name": "الطَّلَاقِ",
                         "englishName": "At-Talaaq",
                         "tamilName": "ஸூரத்துத் தலாஃக்",
                         "urduName": "ஸூரத்துத் தலாஃக்",
                         "englishNameTranslation": "Divorce",
                         "tamilNameTranslation": "விவாகரத்து",
                         "urduNameTranslation": "விவாகரத்து",
                         "revelationType": "Medinan","totalAyah" : 12
                       },
                       {
                         "name": "التَّحۡرِيمِ",
                         "englishName": "At-Tahrim",
                         "tamilName": "ஸூரத்துத் தஹ்ரீம்",
                         "urduName": "ஸூரத்துத் தஹ்ரீம்",
                         "englishNameTranslation": "The Prohibition",
                         "tamilNameTranslation": "விலக்குதல்",
                         "urduNameTranslation": "விலக்குதல்",
                         "revelationType": "Medinan","totalAyah" : 12
                       },
                       {
                         "name": "المُلۡكِ",
                         "englishName": "Al-Mulk",
                         "tamilName": "ஸூரத்துல் முல்க்",
                         "urduName": "ஸூரத்துல் முல்க்",
                         "englishNameTranslation": "The Sovereignty",
                         "tamilNameTranslation": "ஆட்சி",
                         "urduNameTranslation": "ஆட்சி",
                         "revelationType": "Meccan","totalAyah" : 30
                       },
                       {
                         "name": "القَلَمِ",
                         "englishName": "Al-Qalam",
                         "tamilName": "ஸூரத்துல் கலம்",
                         "urduName": "ஸூரத்துல் கலம்",
                         "englishNameTranslation": "The Pen",
                         "tamilNameTranslation": "எழுதுகோல்",
                         "urduNameTranslation": "எழுதுகோல்",
                         "revelationType": "Meccan","totalAyah" : 52
                       },
                       {
                         "name": "الحَاقَّةِ",
                         "englishName": "Al-Haaqqa",
                         "tamilName": "ஸூரத்துல் ஹாஃக்ஃகா",
                         "urduName": "ஸூரத்துல் ஹாஃக்ஃகா",
                         "englishNameTranslation": "The Reality",
                         "tamilNameTranslation": "நிச்சயமானது",
                         "urduNameTranslation": "நிச்சயமானது",
                         "revelationType": "Meccan","totalAyah" : 52
                       },
                       {
                         "name": "المَعَارِجِ",
                         "englishName": "Al-Ma'aarij",
                         "tamilName": "ஸூரத்துல் மஆரிஜ்",
                         "urduName": "ஸூரத்துல் மஆரிஜ்",
                         "englishNameTranslation": "The Ascending Stairways",
                         "tamilNameTranslation": "உயர்வழிகள்",
                         "urduNameTranslation": "உயர்வழிகள்",
                         "revelationType": "Meccan","totalAyah" : 44
                       },
                       {
                         "name": "نُوحٍ",
                         "englishName": "Nooh",
                         "tamilName": "ஸூரத்து நூஹ்",
                         "urduName": "ஸூரத்து நூஹ்",
                         "englishNameTranslation": "Noah",
                         "tamilNameTranslation": "Noah",
                         "urduNameTranslation": "Noah",
                         "revelationType": "Meccan","totalAyah" : 28
                       },
                       {
                         "name": "الجِنِّ",
                         "englishName": "Al-Jinn",
                         "tamilName": "ஸூரத்துல் ஜின்னு",
                         "urduName": "ஸூரத்துல் ஜின்னு",
                         "englishNameTranslation": "The Jinn",
                         "tamilNameTranslation": "ஜின்கள்",
                         "urduNameTranslation": "ஜின்கள்",
                         "revelationType": "Meccan","totalAyah" : 28
                       },
                       {
                         "name": "المُزَّمِّلِ",
                         "englishName": "Al-Muzzammil",
                         "tamilName": "ஸூரத்துல் முஸ்ஸம்மில்",
                         "urduName": "ஸூரத்துல் முஸ்ஸம்மில்",
                         "englishNameTranslation": "The Enshrouded One",
                         "tamilNameTranslation": "போர்வை போர்த்தியவர்",
                         "urduNameTranslation": "போர்வை போர்த்தியவர்",
                         "revelationType": "Meccan","totalAyah" : 20
                       },
                       {
                         "name": "المُدَّثِّرِ",
                         "englishName": "Al-Muddaththir",
                         "tamilName": "ஸூரத்துல் முத்தஸ்ஸிர்",
                         "urduName": "ஸூரத்துல் முத்தஸ்ஸிர்",
                         "englishNameTranslation": "The Cloaked One",
                         "tamilNameTranslation": "போர்த்திக்கொண்டிருப்பவர்",
                         "urduNameTranslation": "போர்த்திக்கொண்டிருப்பவர்",
                         "revelationType": "Meccan","totalAyah" : 56
                       },
                       {
                         "name": "القِيَامَةِ",
                         "englishName": "Al-Qiyaama",
                         "tamilName": "ஸூரத்துல் கியாமா",
                         "urduName": "ஸூரத்துல் கியாமா",
                         "englishNameTranslation": "The Resurrection",
                         "tamilNameTranslation": "மறுமை நாள்",
                         "urduNameTranslation": "மறுமை நாள்",
                         "revelationType": "Meccan","totalAyah" : 40
                       },
                       {
                         "name": "الإِنسَانِ",
                         "englishName": "Al-Insaan",
                         "tamilName": "Al-Insaan",
                         "urduName": "Al-Insaan",
                         "englishNameTranslation": "Man",
                         "tamilNameTranslation": "Man",
                         "urduNameTranslation": "Man",
                         "revelationType": "Medinan","totalAyah" : 31
                       },
                       {
                         "name": "المُرۡسَلَاتِ",
                         "englishName": "Al-Mursalaat",
                         "tamilName": "ஸூரத்துல் முர்ஸலாத்",
                         "urduName": "ஸூரத்துல் முர்ஸலாத்",
                         "englishNameTranslation": "The Emissaries",
                         "tamilNameTranslation": "அனுப்பப்படுபவை",
                         "urduNameTranslation": "அனுப்பப்படுபவை",
                         "revelationType": "Meccan","totalAyah" : 50
                       },
                       {
                         "name": "النَّبَإِ",
                         "englishName": "An-Naba",
                         "tamilName": "ஸூரத்துந் நபா",
                         "urduName": "ஸூரத்துந் நபா",
                         "englishNameTranslation": "The Announcement",
                         "tamilNameTranslation": "ெரும் செய்தி",
                         "urduNameTranslation": "ெரும் செய்தி",
                         "revelationType": "Meccan","totalAyah" : 40
                       },
                       {
                         "name": "النَّازِعَاتِ",
                         "englishName": "An-Naazi'aat",
                         "tamilName": "ஸூரத்துந் நாஜிஆத்",
                         "urduName": "ஸூரத்துந் நாஜிஆத்",
                         "englishNameTranslation": "Those who drag forth",
                         "tamilNameTranslation": "பறிப்பவர்கள்",
                         "urduNameTranslation": "பறிப்பவர்கள்",
                         "revelationType": "Meccan","totalAyah" : 46
                       },
                       {
                         "name": "عَبَسَ",
                         "englishName": "Abasa",
                         "tamilName": "ஸூரத்து அபஸ",
                         "urduName": "ஸூரத்து அபஸ",
                         "englishNameTranslation": "He frowned",
                         "tamilNameTranslation": "கடு கடுத்தார்",
                         "urduNameTranslation": "கடு கடுத்தார்",
                         "revelationType": "Meccan","totalAyah" : 42
                       },
                       {
                         "name": "التَّكۡوِيرِ",
                         "englishName": "At-Takwir",
                         "tamilName": "ஸூரத்துத் தக்வீர்",
                         "urduName": "ஸூரத்துத் தக்வீர்",
                         "englishNameTranslation": "The Overthrowing",
                         "tamilNameTranslation": "சுருட்டுதல்",
                         "urduNameTranslation": "சுருட்டுதல்",
                         "revelationType": "Meccan","totalAyah" : 29
                       },
                       {
                         "name": "الانفِطَارِ",
                         "englishName": "Al-Infitaar",
                         "tamilName": "ஸூரத்துல் இன்ஃபிதார்",
                         "urduName": "ஸூரத்துல் இன்ஃபிதார்",
                         "englishNameTranslation": "The Cleaving",
                         "tamilNameTranslation": "வெடித்துப் போதல்",
                         "urduNameTranslation": "வெடித்துப் போதல்",
                         "revelationType": "Meccan","totalAyah" : 19
                       },
                       {
                         "name": "المُطَفِّفِينَ",
                         "englishName": "Al-Mutaffifin",
                         "tamilName": "ஸூரத்துல் முதஃப்ஃபிஃபீன்",
                         "urduName": "ஸூரத்துல் முதஃப்ஃபிஃபீன்",
                         "englishNameTranslation": "Defrauding",
                         "tamilNameTranslation": "அளவு நிறுவையில் மோசம் செய்தல்",
                         "urduNameTranslation": "அளவு நிறுவையில் மோசம் செய்தல்",
                         "revelationType": "Meccan","totalAyah" : 36
                       },
                       {
                         "name": "الانشِقَاقِ",
                         "englishName": "Al-Inshiqaaq",
                         "tamilName": "ஸூரத்துல் இன்ஷிகாக்",
                         "urduName": "ஸூரத்துல் இன்ஷிகாக்",
                         "englishNameTranslation": "The Splitting Open",
                         "tamilNameTranslation": "பிளந்து போதல்",
                         "urduNameTranslation": "பிளந்து போதல்",
                         "revelationType": "Meccan","totalAyah" : 25
                       },
                       {
                         "name": "البُرُوجِ",
                         "englishName": "Al-Burooj",
                         "tamilName": "ஸூரத்துல் புரூஜ்",
                         "urduName": "ஸூரத்துல் புரூஜ்",
                         "englishNameTranslation": "The Constellations",
                         "tamilNameTranslation": "கிரகங்கள்",
                         "urduNameTranslation": "கிரகங்கள்",
                         "revelationType": "Meccan","totalAyah" : 22
                       },
                       {
                         "name": "الطَّارِقِ",
                         "englishName": "At-Taariq",
                         "tamilName": "ஸூரத்துத் தாரிஃக்",
                         "urduName": "ஸூரத்துத் தாரிஃக்",
                         "englishNameTranslation": "The Morning Star",
                         "tamilNameTranslation": "விடிவெள்ளி",
                         "urduNameTranslation": "விடிவெள்ளி",
                         "revelationType": "Meccan","totalAyah" : 17
                       },
                       {
                         "name": "الأَعۡلَىٰ",
                         "englishName": "Al-A'laa",
                         "tamilName": "ஸூரத்துல் அஃலா",
                         "urduName": "ஸூரத்துல் அஃலா",
                         "englishNameTranslation": "The Most High",
                         "tamilNameTranslation": "மிக்க மேலானவன்",
                         "urduNameTranslation": "மிக்க மேலானவன்",
                         "revelationType": "Meccan","totalAyah" : 19
                       },
                       {
                         "name": "الغَاشِيَةِ",
                         "englishName": "Al-Ghaashiya",
                         "tamilName": "ஸூரத்துல் காஷியா",
                         "urduName": "ஸூரத்துல் காஷியா",
                         "englishNameTranslation": "The Overwhelming",
                         "tamilNameTranslation": "மூடிக் கொள்ளுதல்",
                         "urduNameTranslation": "மூடிக் கொள்ளுதல்",
                         "revelationType": "Meccan","totalAyah" : 26
                       },
                       {
                         "name": "الفَجۡرِ",
                         "englishName": "Al-Fajr",
                         "tamilName": "ஸூரத்துல் ஃபஜ்ரி",
                         "urduName": "ஸூரத்துல் ஃபஜ்ரி",
                         "englishNameTranslation": "The Dawn",
                         "tamilNameTranslation": "விடியற்காலை",
                         "urduNameTranslation": "விடியற்காலை",
                         "revelationType": "Meccan","totalAyah" : 30
                       },
                       {
                         "name": "البَلَدِ",
                         "englishName": "Al-Balad",
                         "tamilName": "ஸூரத்துல் பலத்",
                         "urduName": "ஸூரத்துல் பலத்",
                         "englishNameTranslation": "The City",
                         "tamilNameTranslation": "நகரம்",
                         "urduNameTranslation": "நகரம்",
                         "revelationType": "Meccan","totalAyah" : 20
                       },
                       {
                         "name": "الشَّمۡسِ",
                         "englishName": "Ash-Shams",
                         "tamilName": "ஸூரத்துஷ் ஷம்ஸ்",
                         "urduName": "ஸூரத்துஷ் ஷம்ஸ்",
                         "englishNameTranslation": "The Sun",
                         "tamilNameTranslation": "சூரியன்",
                         "urduNameTranslation": "சூரியன்",
                         "revelationType": "Meccan","totalAyah" : 15
                       },
                       {
                         "name": "اللَّيۡلِ",
                         "englishName": "Al-Lail",
                         "tamilName": "ஸூரத்துல் லைல்",
                         "urduName": "ஸூரத்துல் லைல்",
                         "englishNameTranslation": "The Night",
                         "tamilNameTranslation": "இரவு",
                         "urduNameTranslation": "இரவு",
                         "revelationType": "Meccan","totalAyah" : 21
                       },
                       {
                         "name": "الضُّحَىٰ",
                         "englishName": "Ad-Dhuhaa",
                         "tamilName": "ஸூரத்துள் ளுஹா",
                         "urduName": "ஸூரத்துள் ளுஹா",
                         "englishNameTranslation": "The Morning Hours",
                         "tamilNameTranslation": "முற்பகல்",
                         "urduNameTranslation": "முற்பகல்",
                         "revelationType": "Meccan","totalAyah" : 11
                       },
                       {
                         "name": "الشَّرۡحِ",
                         "englishName": "Ash-Sharh",
                         "tamilName": "ஸூரத்து அலம் நஷ்ரஹ்",
                         "urduName": "ஸூரத்து அலம் நஷ்ரஹ்",
                         "englishNameTranslation": "The Consolation",
                         "tamilNameTranslation": "விரிவாக்கல்",
                         "urduNameTranslation": "விரிவாக்கல்",
                         "revelationType": "Meccan","totalAyah" : 8
                       },
                       {
                         "name": "التِّينِ",
                         "englishName": "At-Tin",
                         "tamilName": "ஸூரத்துத் தீன்",
                         "urduName": "ஸூரத்துத் தீன்",
                         "englishNameTranslation": "The Fig",
                         "tamilNameTranslation": "அத்தி",
                         "urduNameTranslation": "அத்தி",
                         "revelationType": "Meccan","totalAyah" : 8
                       },
                       {
                         "name": "العَلَقِ",
                         "englishName": "Al-Alaq",
                         "tamilName": "ஸூரத்துல் அலஃக்",
                         "urduName": "ஸூரத்துல் அலஃக்",
                         "englishNameTranslation": "The Clot",
                         "tamilNameTranslation": "இரத்தக்கட்டி",
                         "urduNameTranslation": "இரத்தக்கட்டி",
                         "revelationType": "Meccan","totalAyah" : 19
                       },
                       {
                         "name": "القَدۡرِ",
                         "englishName": "Al-Qadr",
                         "tamilName": "ஸூரத்துல் கத்ர",
                         "urduName": "ஸூரத்துல் கத்ர",
                         "englishNameTranslation": "The Power, Fate",
                         "tamilNameTranslation": "கண்ணியமிக்க இரவு",
                         "urduNameTranslation": "கண்ணியமிக்க இரவு",
                         "revelationType": "Meccan","totalAyah" : 5
                       },
                       {
                         "name": "البَيِّنَةِ",
                         "englishName": "Al-Bayyina",
                         "tamilName": "ஸூரத்துல் பய்யினா",
                         "urduName": "ஸூரத்துல் பய்யினா",
                         "englishNameTranslation": "The Evidence",
                         "tamilNameTranslation": "தெளிவான ஆதாரம்",
                         "urduNameTranslation": "தெளிவான ஆதாரம்",
                         "revelationType": "Medinan","totalAyah" : 8
                       },
                       {
                         "name": "الزَّلۡزَلَةِ",
                         "englishName": "Az-Zalzala",
                         "tamilName": "ஸூரத்துஜ் ஜில்ஜால",
                         "urduName": "ஸூரத்துஜ் ஜில்ஜால",
                         "englishNameTranslation": "The Earthquake",
                         "tamilNameTranslation": "அதிர்ச்ச",
                         "urduNameTranslation": "அதிர்ச்ச",
                         "revelationType": "Medinan","totalAyah" : 8
                       },
                       {
                         "name": "العَادِيَاتِ",
                         "englishName": "Al-Aadiyaat",
                         "tamilName": "ஸூரத்துல் ஆதியாத்தி",
                         "urduName": "ஸூரத்துல் ஆதியாத்தி",
                         "englishNameTranslation": "The Chargers",
                         "tamilNameTranslation": "வேகமாகச் செல்லுபவை",
                         "urduNameTranslation": "வேகமாகச் செல்லுபவை",
                         "revelationType": "Meccan","totalAyah" : 11
                       },
                       {
                         "name": "القَارِعَةِ",
                         "englishName": "Al-Qaari'a",
                         "tamilName": "ஸூரத்து அல்காரிஆ",
                         "urduName": "ஸூரத்து அல்காரிஆ",
                         "englishNameTranslation": "The Calamity",
                         "tamilNameTranslation": "திடுக்கிடச் செய்யும் நிகழ்ச்சி",
                         "urduNameTranslation": "திடுக்கிடச் செய்யும் நிகழ்ச்சி",
                         "revelationType": "Meccan","totalAyah" : 11
                       },
                       {
                         "name": "التَّكَاثُرِ",
                         "englishName": "At-Takaathur",
                         "tamilName": "ஸூரத்துத் தகாஸுர்",
                         "urduName": "ஸூரத்துத் தகாஸுர்",
                         "englishNameTranslation": "Competition",
                         "tamilNameTranslation": "பேராசை",
                         "urduNameTranslation": "பேராசை",
                         "revelationType": "Meccan","totalAyah" : 8
                       },
                       {
                         "name": "العَصۡرِ",
                         "englishName": "Al-Asr",
                         "tamilName": "ஸூரத்துல் அஸ்ரி",
                         "urduName": "ஸூரத்துல் அஸ்ரி",
                         "englishNameTranslation": "The Declining Day, Epoch",
                         "tamilNameTranslation": "காலம்",
                         "urduNameTranslation": "காலம்",
                         "revelationType": "Meccan","totalAyah" : 3
                       },
                       {
                         "name": "الهُمَزَةِ",
                         "englishName": "Al-Humaza",
                         "tamilName": "ஹுமஜா",
                         "urduName": "ஹுமஜா",
                         "englishNameTranslation": "The Traducer",
                         "tamilNameTranslation": "புறங்கூறல்",
                         "urduNameTranslation": "புறங்கூறல்",
                         "revelationType": "Meccan","totalAyah" : 9
                       },
                       {
                         "name": "الفِيلِ",
                         "englishName": "Al-Fil",
                         "tamilName": "ஸூரத்துல் ஃபீல்",
                         "urduName": "ஸூரத்துல் ஃபீல்",
                         "englishNameTranslation": "The Elephant",
                         "tamilNameTranslation": "யானை",
                         "urduNameTranslation": "யானை",
                         "revelationType": "Meccan","totalAyah" : 5
                       },
                       {
                         "name": "قُرَيۡشٍ",
                         "englishName": "Quraish",
                         "tamilName": "ஸூரத்து குறைஷின்",
                         "urduName": "ஸூரத்து குறைஷின்",
                         "englishNameTranslation": "Quraysh",
                         "tamilNameTranslation": "குறைஷிகள்",
                         "urduNameTranslation": "குறைஷிகள்",
                         "revelationType": "Meccan","totalAyah" : 4
                       },
                       {
                         "name": "المَاعُونِ",
                         "englishName": "Al-Maa'un",
                         "tamilName": "ஸூரத்துல் மாஊன்",
                         "urduName": "ஸூரத்துல் மாஊன்",
                         "englishNameTranslation": "Almsgiving",
                         "tamilNameTranslation": "அற்பப் பொருட்கள்",
                         "urduNameTranslation": "அற்பப் பொருட்கள்",
                         "revelationType": "Meccan","totalAyah" : 7
                       },
                       {
                         "name": "الكَوۡثَرِ",
                         "englishName": "Al-Kawthar",
                         "tamilName": "ஸூரத்துல் கவ்ஸர்",
                         "urduName": "ஸூரத்துல் கவ்ஸர்",
                         "englishNameTranslation": "Abundance",
                         "tamilNameTranslation": "மிகுந்த நன்மைகள்",
                         "urduNameTranslation": "மிகுந்த நன்மைகள்",
                         "revelationType": "Meccan","totalAyah" : 3
                       },
                       {
                         "name": "الكَافِرُونَ",
                         "englishName": "Al-Kaafiroon",
                         "tamilName": "ஸூரத்துல் காஃபிரூன்",
                         "urduName": "ஸூரத்துல் காஃபிரூன்",
                         "englishNameTranslation": "The Disbelievers",
                         "tamilNameTranslation": "காஃபிர்கள்",
                         "urduNameTranslation": "காஃபிர்கள்",
                         "revelationType": "Meccan","totalAyah" : 6
                       },
                       {
                         "name": "النَّصۡرِ",
                         "englishName": "An-Nasr",
                         "tamilName": "ஸூரத்துந் நஸ்ர்",
                         "urduName": "ஸூரத்துந் நஸ்ர்",
                         "englishNameTranslation": "Divine Support",
                         "tamilNameTranslation": "உதவி",
                         "urduNameTranslation": "உதவி",
                         "revelationType": "Medinan","totalAyah" : 3
                       },
                       {
                         "name": "المَسَدِ",
                         "englishName": "Al-Masad",
                         "tamilName": "Al-Masad",
                         "urduName": "Al-Masad",
                         "englishNameTranslation": "The Palm Fibre",
                         "tamilNameTranslation": "The Palm Fibre",
                         "urduNameTranslation": "The Palm Fibre",
                         "revelationType": "Meccan","totalAyah" : 5
                       },
                       {
                         "name": "الإِخۡلَاصِ",
                         "englishName": "Al-Ikhlaas",
                         "tamilName": "ஸூரத்துல் இஃக்லாஸ்",
                         "urduName": "ஸூரத்துல் இஃக்லாஸ்",
                         "englishNameTranslation": "Sincerity",
                         "tamilNameTranslation": "ஏகத்துவம்",
                         "urduNameTranslation": "ஏகத்துவம்",
                         "revelationType": "Meccan","totalAyah" : 4
                       },
                       {
                         "name": "الفَلَقِ",
                         "englishName": "Al-Falaq",
                         "tamilName": "ஸூரத்துல் ஃபலக்",
                         "urduName": "ஸூரத்துல் ஃபலக்",
                         "englishNameTranslation": "The Dawn",
                         "tamilNameTranslation": "அதிகாலை",
                         "urduNameTranslation": "அதிகாலை",
                         "revelationType": "Meccan","totalAyah" : 5
                       },
                       {
                         "name": "النَّاسِ",
                         "englishName": "An-Naas",
                         "tamilName": "ஸூரத்துந் நாஸ்",
                         "urduName": "ஸூரத்துந் நாஸ்",
                         "englishNameTranslation": "Mankind",
                         "tamilNameTranslation": "மனிதர்கள்",
                         "urduNameTranslation": "மனிதர்கள்",
                         "revelationType": "Meccan","totalAyah" : 6
                       }
                     ]

router.get('/surahNames', (req, res) => {
 try {
    return res.status(200).json({
      status: 'Success',
      data: surahNames,
      message: "Surah Names fetched successfully"
    })

 } catch (err) {
   console.error(err);
   return res.status(500).json({message: "Server error"});
 }

});