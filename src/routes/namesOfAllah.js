import express from 'express';

const router = express.Router();

// Static Data: 99 Names of Allah
const namesOfAllah = [
                       {
                         "name": "الرَّحْمَنُ",
                         "englishTranslation": "Ar Rahmaan",
                         "tamilTranslation": "அர் ரஹ்மான்",
                         "englishMeaning": "The Beneficent",
                         "tamilMeaning": "அளவற்ற அருளாளன்"
                       },
                       {
                         "name": "الرَّحِيمُ",
                         "englishTranslation": "Ar Raheem",
                         "tamilTranslation": "அர் ரஹீம்",
                         "englishMeaning": "The Merciful",
                         "tamilMeaning": "நிகரற்ற அன்புடையோன்"
                       },
                       {
                         "name": "الْمَلِكُ",
                         "englishTranslation": "Al Malik",
                         "tamilTranslation": "அல் மலிக்",
                         "englishMeaning": "The King / Eternal Lord",
                         "tamilMeaning": "பேரரசன்"
                       },
                       {
                         "name": "الْقُدُّوسُ",
                         "englishTranslation": "Al Quddus",
                         "tamilTranslation": "அல் குத்தூஸ்",
                         "englishMeaning": "The Purest",
                         "tamilMeaning": "மிகப் பரிசுத்தமானவன்"
                       },
                       {
                         "name": "السَّلاَمُ",
                         "englishTranslation": "As Salaam",
                         "tamilTranslation": "அஸ்ஸலாம்",
                         "englishMeaning": "The Source of Peace",
                         "tamilMeaning": "சாந்தி மயமானவன்"
                       },
                       {
                         "name": "الْمُؤْمِنُ",
                         "englishTranslation": "Al Mu'min",
                         "tamilTranslation": "அல் முஃமின்",
                         "englishMeaning": "The inspirer of faith",
                         "tamilMeaning": "அபயமளிக்கிறவன்"
                       },
                       {
                         "name": "الْمُهَيْمِنُ",
                         "englishTranslation": "Al Muhaymin",
                         "tamilTranslation": "அல் முஹைமின்",
                         "englishMeaning": "The Guardian",
                         "tamilMeaning": "கண்காணிப்பவன்"
                       },
                       {
                         "name": "الْعَزِيزُ",
                         "englishTranslation": "Al Azeez",
                         "tamilTranslation": "அல் அஜீஜ்",
                         "englishMeaning": "The Precious / The Most Mighty",
                         "tamilMeaning": "மிகைத்தவன்"
                       },
                       {
                         "name": "الْجَبَّارُ",
                         "englishTranslation": "Al Jabbaar",
                         "tamilTranslation": "அல் ஜப்பார்",
                         "englishMeaning": "The Compeller",
                         "tamilMeaning": "அடக்கியாள்கிறவன்"
                       },
                       {
                         "name": "الْمُتَكَبِّرُ",
                         "englishTranslation": "Al Mutakabbir",
                         "tamilTranslation": "அல் முதகப்பிர்",
                         "englishMeaning": "The Greatest",
                         "tamilMeaning": "பெருமைக்குரியவன்"
                       },
                       {
                         "name": "الْخَالِقُ",
                         "englishTranslation": "Al Khaaliq",
                         "tamilTranslation": "அல் காலிக்",
                         "englishMeaning": "The Creator",
                         "tamilMeaning": "படைப்பவன்"
                       },
                       {
                         "name": "الْبَارِئُ",
                         "englishTranslation": "Al Baari",
                         "tamilTranslation": "அல் பாரிஉ",
                         "englishMeaning": "The Maker of Order",
                         "tamilMeaning": "படைப்பை ஒழுங்கு  படுத்துபவன்"
                       },
                       {
                         "name": "الْمُصَوِّرُ",
                         "englishTranslation": "Al Musawwir",
                         "tamilTranslation": "அல் முஸவ்விர்",
                         "englishMeaning": "The Shaper of Beauty",
                         "tamilMeaning": "உருவமளிப்பவன்"
                       },
                       {
                         "name": "الْغَفَّارُ",
                         "englishTranslation": "Al Ghaffaar",
                         "tamilTranslation": "அல் கஃப்ஃபார்",
                         "englishMeaning": "The Forgiving",
                         "tamilMeaning": "மிக்க  மன்னிப்பவன்"
                       },
                       {
                         "name": "الْقَهَّارُ",
                         "englishTranslation": "Al Qahhaar",
                         "tamilTranslation": "அல் கஹ்ஹார் ",
                         "englishMeaning": "The Subduer",
                         "tamilMeaning": "அடக்கி ஆள்பவன்"
                       },
                       {
                         "name": "الْوَهَّابُ",
                         "englishTranslation": "Al Wahhaab",
                         "tamilTranslation": "அல் வஹ்ஹாப்",
                         "englishMeaning": "The Giver of All",
                         "tamilMeaning": "கொடையாளன்"
                       },
                       {
                         "name": "الرَّزَّاقُ",
                         "englishTranslation": "Ar Razzaaq",
                         "tamilTranslation": "அர் ரஜ்ஜாக்",
                         "englishMeaning": "The Sustainer",
                         "tamilMeaning": "உணவளிப்பவன்"
                       },
                       {
                         "name": "الْفَتَّاحُ",
                         "englishTranslation": "Al Fattaah",
                         "tamilTranslation": "அல்ஃபத்தாஹ்",
                         "englishMeaning": "The Opener",
                         "tamilMeaning": "தீர்ப்பு வழங்குகிறவன்"
                       },
                       {
                         "name": "اَلْعَلِيْمُ",
                         "englishTranslation": "Al 'Aleem",
                         "tamilTranslation": "அல் அலீம்",
                         "englishMeaning": "The Knower of all",
                         "tamilMeaning": "மிக அறிபவன்"
                       },
                       {
                         "name": "الْقَابِضُ",
                         "englishTranslation": "Al Qaabid",
                         "tamilTranslation": "அல் காபிள்",
                         "englishMeaning": "The Constrictor",
                         "tamilMeaning": "கைப்பற்றுவோன்"
                       },
                       {
                         "name": "الْبَاسِطُ",
                         "englishTranslation": "Al Baasit",
                         "tamilTranslation": "அல் பாஸித்",
                         "englishMeaning": "The Reliever",
                         "tamilMeaning": "விரிவாக்குபவன்"
                       },
                       {
                         "name": "الْخَافِضُ",
                         "englishTranslation": "Al Khaafid",
                         "tamilTranslation": "அல் காஃபிள்",
                         "englishMeaning": "The Abaser",
                         "tamilMeaning": "தாழ்த்துவோன்"
                       },
                       {
                         "name": "الرَّافِعُ",
                         "englishTranslation": "Ar Raafi",
                         "tamilTranslation": "Aஅர் ராஃபிஃ",
                         "englishMeaning": "The Exalter",
                         "tamilMeaning": " உயர்த்துவோன்"
                       },
                       {
                         "name": "الْمُعِزُّ",
                         "englishTranslation": "Al Mu'iz",
                         "tamilTranslation": "அல் முஇஜ்ஜு ",
                         "englishMeaning": "The Bestower of Honour",
                         "tamilMeaning": "கண்ணியப்படுத்துவோன்"
                       },
                       {
                         "name": "المُذِلُّ",
                         "englishTranslation": "Al Mudhil",
                         "tamilTranslation": "அல் முதில்லு",
                         "englishMeaning": "The Humiliator",
                         "tamilMeaning": "இழிவடையச்செய்பவன்"
                       },
                       {
                         "name": "السَّمِيعُ",
                         "englishTranslation": "As Samee'",
                         "tamilTranslation": "அஸ்ஸமீஉ",
                         "englishMeaning": "The Hearer of all",
                         "tamilMeaning": "செவியேற்பவன்"
                       },
                       {
                         "name": "الْبَصِيرُ",
                         "englishTranslation": "Al Baseer",
                         "tamilTranslation": "அல் பஸீர்",
                         "englishMeaning": "The Seer of all",
                         "tamilMeaning": "பார்ப்பவன்"
                       },
                       {
                         "name": "الْحَكَمُ",
                         "englishTranslation": "Al Hakam",
                         "tamilTranslation": "அல் ஹகம்",
                         "englishMeaning": "The Judge",
                         "tamilMeaning": "தீர்ப்பளிப்பவன்"
                       },
                       {
                         "name": "الْعَدْلُ",
                         "englishTranslation": "Al 'Adl",
                         "tamilTranslation": "அல் அத்லு",
                         "englishMeaning": "The Just",
                         "tamilMeaning": "நீதியுள்ளவன்"
                       },
                       {
                         "name": "اللَّطِيفُ",
                         "englishTranslation": "Al Lateef",
                         "tamilTranslation": "அல் லதீஃப்",
                         "englishMeaning": "The Subtle One",
                         "tamilMeaning": "நுட்பமாகச் செய்கிறவன்"
                       },
                       {
                         "name": "الْخَبِيرُ",
                         "englishTranslation": "Al Khabeer",
                         "tamilTranslation": "அல் ஃகபீர்",
                         "englishMeaning": "The All Aware",
                         "tamilMeaning": "நன்கறிகிறவன்"
                       },
                       {
                         "name": "الْحَلِيمُ",
                         "englishTranslation": "Al Haleem",
                         "tamilTranslation": "அல் ஹலீம்",
                         "englishMeaning": "The Forebearing",
                         "tamilMeaning": "சகிப்புத் தன்மையுடையவன்"
                       },
                       {
                         "name": "الْعَظِيمُ",
                         "englishTranslation": "Al 'Azeem",
                         "tamilTranslation": "அல் அழீம்",
                         "englishMeaning": "The Maginificent",
                         "tamilMeaning": "மகத்துவமிக்கவன்"
                       },
                       {
                         "name": "الْغَفُورُ",
                         "englishTranslation": "Al Ghafoor",
                         "tamilTranslation": "அல் கஃபூர்",
                         "englishMeaning": "The Great Forgiver",
                         "tamilMeaning": "மிகவும் மன்னிப்பவன்"
                       },
                       {
                         "name": "الشَّكُورُ",
                         "englishTranslation": "Ash Shakoor",
                         "tamilTranslation": "அஷ் ஷகூர்",
                         "englishMeaning": "The Rewarder of Thankfulness",
                         "tamilMeaning": "நன்றி பாராட்டுபவன்"
                       },
                       {
                         "name": "الْعَلِيُّ",
                         "englishTranslation": "Al 'Aliyy",
                         "tamilTranslation": "அல் அலிய்யு",
                         "englishMeaning": "The Highest",
                         "tamilMeaning": "மிக உயர்ந்தவன்"
                       },
                       {
                         "name": "الْكَبِيرُ",
                         "englishTranslation": "Al Kabeer",
                         "tamilTranslation": "அல் கபீர்",
                         "englishMeaning": "The Greatest",
                         "tamilMeaning": "மிகப்பெரியவன்"
                       },
                       {
                         "name": "الْحَفِيظُ",
                         "englishTranslation": "Al Hafeez",
                         "tamilTranslation": "அல் ஹஃபீழ்",
                         "englishMeaning": "The Preserver",
                         "tamilMeaning": " பாதுகாவலன்"
                       },
                       {
                         "name": "المُقيِت",
                         "englishTranslation": "Al Muqeet",
                         "tamilTranslation": "அல் முகீத்",
                         "englishMeaning": "The Nourisher",
                         "tamilMeaning": "ஆற்றல் உள்ளவன்"
                       },
                       {
                         "name": "الْحسِيبُ",
                         "englishTranslation": "Al Haseeb",
                         "tamilTranslation": "அல் ஹஸீப்",
                         "englishMeaning": "The Reckoner",
                         "tamilMeaning": "கணக்கெடுப்பவன்"
                       },
                       {
                         "name": "الْجَلِيلُ",
                         "englishTranslation": "Al Jaleel",
                         "tamilTranslation": "அல் ஜலீல்",
                         "englishMeaning": "The Majestic",
                         "tamilMeaning": "கண்ணியமானவன்"
                       },
                       {
                         "name": "الْكَرِيمُ",
                         "englishTranslation": "Al Kareem",
                         "tamilTranslation": "அல் கரீம்",
                         "englishMeaning": "The Generous",
                         "tamilMeaning": "தயாளன்"
                       },
                       {
                         "name": "الرَّقِيبُ",
                         "englishTranslation": "Ar Raqeeb",
                         "tamilTranslation": "அர் ரகீப்",
                         "englishMeaning": "The Watchful One",
                         "tamilMeaning": "கண்காணிப்பவன்"
                       },
                       {
                         "name": "الْمُجِيبُ",
                         "englishTranslation": "Al Mujeeb ",
                         "tamilTranslation": "அல் முஜீப்",
                         "englishMeaning": "The Responder to Prayer",
                         "tamilMeaning": "பதிலளிப்பவன்"
                       },
                       {
                         "name": "الْوَاسِعُ",
                         "englishTranslation": "Al Waasi'",
                         "tamilTranslation": "அல் வாஸிஃ",
                         "englishMeaning": "The All Comprehending",
                         "tamilMeaning": "விசாலமானவன்"
                       },
                       {
                         "name": "الْحَكِيمُ",
                         "englishTranslation": "Al Hakeem",
                         "tamilTranslation": "அல் ஹகீம்",
                         "englishMeaning": "The Perfectly Wise",
                         "tamilMeaning": "ஞானமுடையோன்"
                       },
                       {
                         "name": "الْوَدُودُ",
                         "englishTranslation": "Al Wudood",
                         "tamilTranslation": "அல் வதூத்",
                         "englishMeaning": "The Loving One",
                         "tamilMeaning": "பிரியமுடையவன்"
                       },
                       {
                         "name": "الْمَجِيدُ",
                         "englishTranslation": "Al Majeed",
                         "tamilTranslation": "அல் மஜீத்",
                         "englishMeaning": "The Most Glorious One",
                         "tamilMeaning": "மகிமை வாய்ந்தவன்"
                       },
                       {
                         "name": "الْبَاعِثُ",
                         "englishTranslation": "Al Baa'ith",
                         "tamilTranslation": "அல் பாஇத்",
                         "englishMeaning": "The Resurrector",
                         "tamilMeaning": "உயிர்த்தெழச் செய்பவன்"
                       },
                       {
                         "name": "الشَّهِيدُ",
                         "englishTranslation": "Ash Shaheed",
                         "tamilTranslation": "அஷ் ஷஹீத்",
                         "englishMeaning": "The Witness",
                         "tamilMeaning": "சாட்சியாளன்"
                       },
                       {"name": "الْحَقُّ",
                         "englishTranslation": "Al Haqq",
                         "tamilTranslation": "அல் ஹக்",
                         "englishMeaning": "The Truth",
                         "tamilMeaning": "உண்மையானவன்"
                       },
                       {
                         "name": "الْوَكِيلُ",
                         "englishTranslation": "Al Wakeel",
                         "tamilTranslation": "அல் வகீல்",
                         "englishMeaning": "The Trustee",
                         "tamilMeaning": "பொறுப்பேற்பவன்"
                       },
                       {
                         "name": "الْقَوِيُّ",
                         "englishTranslation": "Al Qawiyy",
                         "tamilTranslation": "அல் கவிய்யு",
                         "englishMeaning": "The Possessor of all strength",
                         "tamilMeaning": "வலிமை மிக்கவன்"
                       },
                       {
                         "name": "الْمَتِينُ",
                         "englishTranslation": "Al Mateen",
                         "tamilTranslation": "அல் ம(த்)தீன்",
                         "englishMeaning": "The Forceful",
                         "tamilMeaning": "உறுதியானவன்"
                       },
                       {
                         "name": "الْوَلِيُّ",
                         "englishTranslation": "Al Waliyy",
                         "tamilTranslation": "அல் வலிய்யு",
                         "englishMeaning": "The Protector",
                         "tamilMeaning": "பாதுகாவலன்"
                       },
                       {
                         "name": "الْحَمِيدُ",
                         "englishTranslation": "Al Hameed",
                         "tamilTranslation": "அல் ஹமீத்",
                         "englishMeaning": "The Praised",
                         "tamilMeaning": "புகழுக்குரியவன்"
                       },
                       {
                         "name": "الْمُحْصِي",
                         "englishTranslation": "Al Muhsi",
                         "tamilTranslation": "அல் முஹ்ஸி",
                         "englishMeaning": "The Appraiser",
                         "tamilMeaning": "கணக்கிட்டு வைப்பவன்"
                       },
                       {
                         "name": "الْمُبْدِئُ",
                         "englishTranslation": "Al Mubdi",
                         "tamilTranslation": "அல் முப்திஉ",
                         "englishMeaning": "The Originator",
                         "tamilMeaning": "துவங்குவோன்"
                       },
                       {
                         "name": "الْمُعِيدُ",
                         "englishTranslation": "Al Mu'eed",
                         "tamilTranslation": "அல் மூஈத்",
                         "englishMeaning": "The Restorer",
                         "tamilMeaning": "மீளச்செய்பவன்"
                       },
                       {
                         "name": "الْمُحْيِي",
                         "englishTranslation": "Al Muhiy",
                         "tamilTranslation": "அல் முஹ்யீ",
                         "englishMeaning": "The Giver of life",
                         "tamilMeaning": "உயிர்ப்பிக்கிறவன்"
                       },
                       {
                         "name": "اَلْمُمِيتُ",
                         "englishTranslation": "Al Mumeet",
                         "tamilTranslation": "அல் முமீத்",
                         "englishMeaning": "The Taker of life",
                         "tamilMeaning": "மரணிக்கச் செய்பவன்"
                       },
                       {
                         "name": "الْحَيُّ",
                         "englishTranslation": "Al Haiyy",
                         "tamilTranslation": "அல் ஹய்யு",
                         "englishMeaning": "The Ever Living",
                         "tamilMeaning": "நித்திய ஜீவன்"
                       },
                       {
                         "name": "الْقَيُّومُ",
                         "englishTranslation": "Al Qayyoom",
                         "tamilTranslation": "அல் கய்யூம்",
                         "englishMeaning": "The Self Existing",
                         "tamilMeaning": "நிலைத்திருப்பவன்"
                       },
                       {
                         "name": "الْوَاجِدُ",
                         "englishTranslation": "Al Waajid",
                         "tamilTranslation": "அல் வாஜித்",
                         "englishMeaning": "The Finder",
                         "tamilMeaning": "என்றும் இருப்பவன்"
                       },
                       {
                         "name": "الْمَاجِدُ",
                         "englishTranslation": "Al Maajid",
                         "tamilTranslation": "அல் மாஜித்",
                         "englishMeaning": "The Glorious",
                         "tamilMeaning": "மகிமை வாய்ந்தவன்"
                       },
                       {
                         "name": "الْواحِدُ",
                         "englishTranslation": "Al Waahid",
                         "tamilTranslation": "அல் வாஹித்",
                         "englishMeaning": "The Only One",
                         "tamilMeaning": "ஏகன்"
                       },
                       {"name": "اَلاَحَدُ",
                         "englishTranslation": "Al Ahad",
                         "tamilTranslation": "அல் அஹத்",
                         "englishMeaning": "The One",
                         "tamilMeaning": "ஒருவன்"
                       },
                       {
                         "name": "الصَّمَدُ",
                         "englishTranslation": "As Samad",
                         "tamilTranslation": "அஸ் ஸமத்",
                         "englishMeaning": "The Supreme Provider",
                         "tamilMeaning": "தேவையற்றவன்"
                       },
                       {
                         "name": "الْقَادِرُ",
                         "englishTranslation": "Al Qaadir",
                         "tamilTranslation": "அல் காதிர்",
                         "englishMeaning": "The Powerful",
                         "tamilMeaning": "சக்தியுள்ளவன்"
                       },
                       {
                         "name": "الْمُقْتَدِرُ",
                         "englishTranslation": "Al Muqtadir",
                         "tamilTranslation": "அல் முக்ததிர்",
                         "englishMeaning": "The Creator of all power",
                         "tamilMeaning": "ஆற்றலுடையவன்"
                       },
                       {
                         "name": "الْمُقَدِّمُ",
                         "englishTranslation": "Al Muqaddim",
                         "tamilTranslation": "அல் முகத்திம்",
                         "englishMeaning": "The Expediter",
                         "tamilMeaning": "முற்படுத்துவோன்"
                       },
                       {
                         "name": "الْمُؤَخِّرُ",
                         "englishTranslation": "Al Mu’akhir",
                         "tamilTranslation": "அல் முஅக்ஃகிர்",
                         "englishMeaning": "The Delayer",
                         "tamilMeaning": "பிற்படுத்துவோன்"
                       },
                       {"name": "الأوَّلُ",
                         "englishTranslation": "Al Awwal",
                         "tamilTranslation": "அல் அவ்வல்",
                         "englishMeaning": "The First",
                         "tamilMeaning": "முதலாமவன்"
                       },
                       {"name": "الآخِرُ",
                         "englishTranslation": "Al Aakhir",
                         "tamilTranslation": "அல் ஆகிர்",
                         "englishMeaning": "The Last",
                         "tamilMeaning": "கடைசியானவன்"
                       },
                       {
                         "name": "الظَّاهِرُ",
                         "englishTranslation": "Az Zaahir",
                         "tamilTranslation": "அழ் ழாஹிர்",
                         "englishMeaning": "The Manifest",
                         "tamilMeaning": "மேலானவன்"
                       },
                       {
                         "name": "الْبَاطِنُ",
                         "englishTranslation": "Al Baatin",
                         "tamilTranslation": "அல் பா(த்)தின்",
                         "englishMeaning": "The Hidden",
                         "tamilMeaning": "அந்தரங்கமானவன்"
                       },
                       {
                         "name": "الْوَالِي",
                         "englishTranslation": "Al Waali",
                         "tamilTranslation": "அவ்வாலீ",
                         "englishMeaning": "The Governor",
                         "tamilMeaning": "உதவியாளன்"
                       },
                       {
                         "name": "الْمُتَعَالِي",
                         "englishTranslation": "Al Muta’ali",
                         "tamilTranslation": "அல் முதஆலீ",
                         "englishMeaning": "The Supreme One",
                         "tamilMeaning": "மிக உயர்ந்தவன்"
                       },
                       {
                         "name": "الْبَرُّ",
                         "englishTranslation": "Al Barr",
                         "tamilTranslation": "அல் பர்ரு",
                         "englishMeaning": "The Doer of Good",
                         "tamilMeaning": "நன்மை செய்கிறவன்"
                       },
                       {
                         "name": "التَّوَابُ",
                         "englishTranslation": "At Tawwaab",
                         "tamilTranslation": "அத் தவ்வாப்",
                         "englishMeaning": "The Guide to Repentence",
                         "tamilMeaning": "பாவ மன்னிப்பை ஏற்பவன்"
                       },
                       {
                         "name": "الْمُنْتَقِمُ",
                         "englishTranslation": "Al Muntaqim",
                         "tamilTranslation": "அல் முன்தகிம்",
                         "englishMeaning": "The Avenger",
                         "tamilMeaning": "தண்டிப்பவன்"
                       },
                       {
                         "name": "العَفُوُّ",
                         "englishTranslation": "Al Afuww",
                         "tamilTranslation": "அல் அஃபுவ்வு",
                         "englishMeaning": "The Forgiver",
                         "tamilMeaning": "மன்னிப்பவன்"
                       },
                       {
                         "name": "الرَّؤُوفُ",
                         "englishTranslation": "Ar Ra’oof",
                         "tamilTranslation": "அர் ரஊஃப்",
                         "englishMeaning": "The Clement",
                         "tamilMeaning": "இரக்கமுடையவன்"
                       },
                       {
                         "name": "مَالِكُ الْمُلْكِ",
                         "englishTranslation": "Maalik Ul Mulk",
                         "tamilTranslation": "மாலிகுல் முல்க்",
                         "englishMeaning": "The Owner / Soverign of All",
                         "tamilMeaning": "ஆட்சிக்கு அதிபதி"
                       },
                       {
                         "name": "ذُوالْجَلاَلِ وَالإكْرَامِ",
                         "englishTranslation": "Dhu Al Jalaali Wa Al Ikraam",
                         "tamilTranslation": "துல்ஜலாலிவல் இக்ராம்",
                         "englishMeaning": "Possessor of Majesty and Bounty",
                         "tamilMeaning": "கண்ணியமும் சங்கையும் உள்ளவன்"
                       },
                       {
                         "name": "الْمُقْسِطُ",
                         "englishTranslation": "Al Muqsit",
                         "tamilTranslation": "அல் முக்ஸித்",
                         "englishMeaning": "The Equitable One",
                         "tamilMeaning": "நீதியானவன்"
                       },
                       {
                         "name": "الْجَامِعُ",
                         "englishTranslation": "Al Jaami'",
                         "tamilTranslation": "அல் ஜாமிஃ",
                         "englishMeaning": "The Gatherer",
                         "tamilMeaning": "ஒன்று சேர்ப்பவன்"
                       },
                       {
                         "name": "الْغَنِيُّ",
                         "englishTranslation": "Al Ghaniyy",
                         "tamilTranslation": "அல் கனிய்யு",
                         "englishMeaning": "The Rich One",
                         "tamilMeaning": "தேவையற்றவன்"
                       },
                       {
                         "name": "الْمُغْنِي",
                         "englishTranslation": "Al Mughi",
                         "tamilTranslation": "அல் முக்னீ",
                         "englishMeaning": "The Enricher",
                         "tamilMeaning": "தேவையற்றவனாக்குவோன்"
                       },
                       {
                         "name": "اَلْمَانِعُ",
                         "englishTranslation": "Al Maani'",
                         "tamilTranslation": "அல் மானிஃ",
                         "englishMeaning": "The Preventer of harm",
                         "tamilMeaning": "தடுப்பவன்"
                       },
                       {
                         "name": "الضَّارَّ",
                         "englishTranslation": "Ad Daaarr",
                         "tamilTranslation": "அள் ளார்ரு",
                         "englishMeaning": "The Creator of the harmful",
                         "tamilMeaning": "இடரளிப்பவன்"
                       },
                       {
                         "name": "النَّافِعُ",
                         "englishTranslation": "An Naafi’",
                         "tamilTranslation": "அன் நாஃபிஃ",
                         "englishMeaning": "The Bestower of Benefits",
                         "tamilMeaning": "நற் பயனளிப்பவன்"
                       },
                       {"name": "النُّورُ",
                         "englishTranslation": "An Noor",
                         "tamilTranslation": "அன் நூர்",
                         "englishMeaning": "The Light",
                         "tamilMeaning": "ஒளியானவன்"
                       },
                       {
                         "name": "الْهَادِي",
                         "englishTranslation": "Al Haadi",
                         "tamilTranslation": "அல் ஹாதி",
                         "englishMeaning": "The Guider",
                         "tamilMeaning": "நேர்வழி காட்டுபவன்"
                       },
                       {
                         "name": "الْبَدِيعُ",
                         "englishTranslation": "Al Badi'",
                         "tamilTranslation": "அல் பதீஉ",
                         "englishMeaning": "The Originator",
                         "tamilMeaning": "முன்மாதிரியின்றி படைப்பவன்r"
                       },
                       {
                         "name": "اَلْبَاقِي",
                         "englishTranslation": "Al Baaqi",
                         "tamilTranslation": "அல் பாகீ",
                         "englishMeaning": "The Everlasting One",
                         "tamilMeaning": "நிலையானவன்"
                       },
                       {
                         "name": "الْوَارِثُ",
                         "englishTranslation": "Al Waarith",
                         "tamilTranslation": "அல் வாரித்",
                         "englishMeaning": "The Inhertior",
                         "tamilMeaning": "அனந்தரம் பெறுவோன்"
                       },
                       {
                         "name": "الرَّشِيدُ",
                         "englishTranslation": "Ar Rasheed",
                         "tamilTranslation": "அர் ரஷீத்",
                         "englishMeaning": "The Most Righteous Guide",
                         "tamilMeaning": "நேர்வழி காட்டுவோன்"
                       },
                       {
                         "name": "الصَّبُورُ",
                         "englishTranslation": "As Saboor",
                         "tamilTranslation": "அஸ் ஸபூர்",
                         "englishMeaning": "The Patient One",
                         "tamilMeaning": "பொறுமையுள்ளவன்"
                       }
                     ]
// API to Get All Names of Allah
router.get('/names-of-allah', (req, res) => {
 try {
    // Return the list of symptoms
     return res.status(200).json({
       status: 'success',
       data: namesOfAllah,
       message: '99 Names of Allah fetched successfully',
     });
  } catch (err) {
    // If an error occurs, return a server error
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

export default router;