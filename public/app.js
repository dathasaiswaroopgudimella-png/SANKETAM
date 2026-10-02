/**
 * SANKETAM (సంకేతం / संकेतम्) — PRIVACY-FIRST FAMILY CONNECTION PLATFORM
 * Production-Grade Interactive Dual-Perspective & Senior Portal Engine
 */

// Preset Real-Life Scenarios Database
const SCENARIOS = {
  bengaluru: {
    id: "bengaluru",
    name: "Bengaluru Techie",
    persona: "Ananya · 24 · Software Engineer @ Bellandur",
    icon: "💻",
    rawVoice: "Ugh, Bangalore traffic was insane today. Got stuck on ORR for almost 2 hours. Super tired, but I reached my PG safely, just had curd rice and potato fry. Going straight to bed. Will talk tomorrow.",
    audioDuration: "0:19",
    statusTags: { arrived: "PG Safe", dinner: "Curd Rice Done", health: "Resting Well" },
    translations: {
      telugu: {
        level1: {
          indic: "అమ్మా నాన్న, రూమ్ కి క్షేమంగా చేరుకున్నాను. రెస్ట్ తీసుకుంటున్నాను. మీరు భోజనం చేశారా? జాగ్రత్తగా ఉండండి! ❤️",
          englishSub: "Mom & Dad, reached my room safely and taking rest. Did you have dinner? Take care! ❤️"
        },
        level2: {
          indic: "అమ్మా, ఆఫీస్ నుంచి రూమ్ కి క్షేమంగా చేరుకున్నాను. ట్రాఫిక్ కొంచెం ఎక్కువగా ఉంది కానీ పెరుగు అన్నం తిన్నాను. మీరు సమయానికి మందులు వేసుకుని పడుకోండి. రేపు ఉదయం కాల్ చేస్తాను! 🙏",
          englishSub: "Mom, reached room safely from office. Traffic was heavy but had curd rice. Please take medicines on time and sleep. Calling tomorrow morning! 🙏"
        },
        level3: {
          indic: "అమ్మా నాన్న, ఈరోజు ఆఫీస్ లో స్ప్రింట్ డెలివరీ బాగా జరిగింది. కొద్దిగా అలసిపోయాను కానీ రూమ్ కి రాగానే భోజనం చేసి రెస్ట్ తీసుకుంటున్నాను. వీకెండ్ లో తీరికగా మాట్లాడతాను. మిమ్మల్ని చాలా మిస్ అవుతున్నాను! ❤️",
          englishSub: "Mom & Dad, project sprint went great today. A bit tired, but ate dinner and resting in my room. Will talk at leisure on the weekend. Missing you both! ❤️"
        }
      },
      hindi: {
        level1: {
          indic: "मम्मी-पापा, मैं कमरे पर सुरक्षित पहुँच गई हूँ और आराम कर रही हूँ। आप लोग खाना खा लीजियेगा, कल बात करती हूँ! ❤️",
          englishSub: "Mom & Dad, reached room safely and resting. Please have dinner, talk tomorrow! ❤️"
        },
        level2: {
          indic: "मम्मी, आज ट्रैफिक ज्यादा था लेकिन मैं सुरक्षित पीजी पहुँच गई। मैंने हल्का खाना खा लिया है और सोने जा रही हूँ। आप दवाइयां समय पर ले लीजियेगा! कल सुबह फोन करूँगी। 🙏",
          englishSub: "Mom, heavy traffic today but reached PG safely. Had light dinner and sleeping. Please take medicines on time! Will call tomorrow morning. 🙏"
        },
        level3: {
          indic: "मम्मी-पापा, आज का ऑफिस प्रोजेक्ट समय पर पूरा हो गया। थोड़ी थकावट है इसलिए आराम कर रही हूँ। वीकेंड पर तसल्ली से बात करूँगी, अपना ख्याल रखियेगा! ❤️",
          englishSub: "Mom & Dad, office project got delivered on time. A bit tired so taking rest. Will speak at leisure this weekend, take care! ❤️"
        }
      },
      tamil: {
        level1: {
          indic: "அம்மா அப்பா, அறைக்கு பாதுகாப்பாக வந்துவிட்டேன். ஓய்வெடுக்கிறேன். நீங்கள் சாப்பிட்டீர்களா? உடம்பை பார்த்துக்கொள்ளுங்கள்! ❤️",
          englishSub: "Mom & Dad, reached room safely. Taking rest. Did you eat? Take care! ❤️"
        },
        level2: {
          indic: "அம்மா, டிராஃபிக் அதிகம் இருந்தாலும் அறைக்கு பத்திரமாக வந்துவிட்டேன். தயிர் சாதம் சாப்பிட்டுவிட்டேன். மருந்துகளை நேரத்திற்கு சாப்பிட்டுவிட்டு தூங்குங்கள். நாளை பேசுகிறேன்! 🙏",
          englishSub: "Mom, despite traffic reached safely. Had curd rice. Take meds on time and sleep. Talking tomorrow! 🙏"
        },
        level3: {
          indic: "அம்மா அப்பா, இன்று அலுவலகத்தில் வேலைகள் நன்றாக முடிந்தது. உணவருந்தி ஓய்வெடுக்கிறேன். வார இறுதியில் விரிவாக பேசுகிறேன், கவலை வேண்டாம்! ❤️",
          englishSub: "Mom & Dad, office work went smoothly today. Ate dinner and resting. Will talk in detail over the weekend! ❤️"
        }
      },
      kannada: {
        level1: {
          indic: "ಅಮ್ಮಾ ಅಪ್ಪಾ, ಸುರಕ್ಷಿತವಾಗಿ ರೂಮಿಗೆ ತಲುಪಿದೆ. ವಿಶ್ರಾಂತಿ ಪಡೆಯುತ್ತಿದ್ದೇನೆ. ನೀವು ಊಟ ಮಾಡಿದ್ರಾ? ಕಾಳಜಿ ವಹಿಸಿ! ❤️",
          englishSub: "Mom & Dad, reached room safely. Resting. Had dinner? Take care! ❤️"
        },
        level2: {
          indic: "ಅಮ್ಮಾ, ಟ್ರಾಫಿಕ್ ಹೆಚ್ಚಿತ್ತು ಆದರೂ ಸುರಕ್ಷಿತವಾಗಿ ಬಂದೆ. ಊಟ ಮುಗಿಸಿ ಮಲಗುತ್ತಿದ್ದೇನೆ. ಮಾತ್ರೆಗಳನ್ನು ಸರಿಯಾದ ಸಮಯಕ್ಕೆ ತಗೊಳ್ಳಿ, ನಾಳೆ ಬೆಳಗ್ಗೆ ಕಾಲ್ ಮಾಡುತ್ತೇನೆ! 🙏",
          englishSub: "Mom, traffic was high but arrived safely. Had food and sleeping. Take meds on time, calling tomorrow! 🙏"
        },
        level3: {
          indic: "ಅಮ್ಮಾ ಅಪ್ಪಾ, ಆಫೀಸ್ ಕೆಲಸ ಯಶಸ್ವಿಯಾಗಿ ಮುಗಿಯಿತು. ಊಟ ಮಾಡಿ ವಿಶ್ರಾಂತಿ ಪಡೆಯುತ್ತಿದ್ದೇನೆ. ವೀಕೆಂಡ್‌ನಲ್ಲಿ ಸುದೀರ್ಘವಾಗಿ ಮಾತನಾಡುತ್ತೇನೆ! ❤️",
          englishSub: "Mom & Dad, office work was a success. Resting after dinner. Will have a long chat this weekend! ❤️"
        }
      },
      marathi: {
        level1: {
          indic: "आई-बाबा, मी सुरक्षितपणे खोलीवर पोहोचले आहे आणि आराम करत आहे. काळजी घ्या! ❤️",
          englishSub: "Aai-Baba, safely reached room and resting. Take care! ❤️"
        },
        level2: {
          indic: "आई, ट्रॅफिक जास्त होतं पण मी सुखरूप पोहोचले. जेवण करून झोपायला जात आहे. औषधं वेळेवर घे, उद्या सकाळी फोन करेन! 🙏",
          englishSub: "Aai, heavy traffic but reached safely. Sleeping after food. Take medicines on time, calling tomorrow! 🙏"
        },
        level3: {
          indic: "आई-बाबा, आज ऑफिसचं काम छान पूर्ण झालं. जेवण करून आराम करत आहे. वीकेंडला सविस्तर बोलेन! ❤️",
          englishSub: "Aai-Baba, today's project was completed nicely. Resting now, weekend long call planned! ❤️"
        }
      },
      bengali: {
        level1: {
          indic: "মা-বাবা, আমি সুরক্ষিতভাবে হোস্টেলে পৌঁছে গেছি। বিশ্রাম নিচ্ছি। সাবধানে থেকো! ❤️",
          englishSub: "Ma-Baba, safely reached hostel. Resting. Take care! ❤️"
        },
        level2: {
          indic: "মা, আজ খুব জ্যাম ছিল কিন্তু ঠিকঠাক পৌঁছে গেছি। খাবার খেয়ে শুতে যাচ্ছি। ওষুধ সময়মতো নিও, কাল সকালে ফোন করব! 🙏",
          englishSub: "Ma, reached safely despite jam. Had dinner and sleeping. Take medicines on time, will call tomorrow! 🙏"
        },
        level3: {
          indic: "মা-বাবা, অফিসের কাজ ভালোভাবেই শেষ হলো। ডিনার করে বিশ্রাম নিচ্ছি। উইকএন্ডে লম্বা কথা হবে! ❤️",
          englishSub: "Ma-Baba, office work ended on a good note. Resting now, talk on weekend! ❤️"
        }
      },
      english: {
        level1: {
          indic: "Mom & Dad, reached my room safely and getting some rest. Hope you had dinner. Talk tomorrow! ❤️",
          englishSub: "Direct & reassuring check-in."
        },
        level2: {
          indic: "Mom, despite crazy ORR traffic I reached safely. Had curd rice and turning in early. Please take your medicines on time, calling you in the morning! 🙏",
          englishSub: "Warm day & routine update with health reminder."
        },
        level3: {
          indic: "Mom & Dad, our sprint deliverable launched smoothly today! Reached room, ate dinner, and resting up. Missing home, let's catch up properly this weekend! ❤️",
          englishSub: "Comprehensive positive reflection and weekend call plan."
        }
      }
    }
  },

  hyderabad: {
    id: "hyderabad",
    name: "Hostel Student",
    persona: "Rahul · 19 · 1st Year B.Tech @ Gachibowli Hostel",
    icon: "📚",
    rawVoice: "Hey mom, hostel mess food was okay today. Studied at the library with Karthik till 9:30 PM. Don't worry about my physics midterm, professor explained the concepts well. Roommates are here, going to sleep.",
    audioDuration: "0:17",
    statusTags: { arrived: "Hostel In", dinner: "Mess Food Eaten", health: "Studying Well" },
    translations: {
      telugu: {
        level1: {
          indic: "అమ్మా, హాస్టల్ రూమ్ లోనే ఉన్నాను, అంతా బాగుంది. ఏం కంగారు పడకండి, రేపు మాట్లాడతాను! ❤️",
          englishSub: "Mom, in hostel room, everything is good. Don't worry at all, will talk tomorrow! ❤️"
        },
        level2: {
          indic: "అమ్మా నాన్న, లైబ్రరీలో చదువుకుని హాస్టల్ కి వచ్చాను. మెస్ లో భోజనం చేశాను, ఎగ్జామ్స్ కి బాగా ప్రిపేర్ అవుతున్నాను. మీరు ప్రశాంతంగా నిద్రపోండి! 🙏",
          englishSub: "Mom & Dad, back from library. Had mess food, exam prep going well. Sleep peacefully! 🙏"
        },
        level3: {
          indic: "అమ్మా, ఈరోజు క్లాసులు మరియు ల్యాబ్ చాలా బాగా జరిగాయి. రూమ్మేట్స్ తో కలిసి చదువుకుంటున్నాను, ఆరోగ్యం బాగుంది. ఆదివారం ఇంటికి కాల్ చేస్తాను, జాగ్రత్త! ❤️",
          englishSub: "Mom, classes and lab went great today. Studying with roommates, health is good. Calling Sunday, take care! ❤️"
        }
      },
      hindi: {
        level1: {
          indic: "मम्मी, हॉस्टल के कमरे में हूँ, सब एकदम ठीक है। बिल्कुल चिंता मत कीजियेगा! ❤️",
          englishSub: "Mom, in hostel room, everything fine. Don't worry at all! ❤️"
        },
        level2: {
          indic: "मम्मी-पापा, लाइब्रेरी से पढ़ाई करके रूम पहुँच गया हूँ। मेस में खाना खा लिया है, परीक्षा की तैयारी अच्छी चल रही है। आप लोग आराम से सो जाइयेगा! 🙏",
          englishSub: "Mom & Dad, back in room from library. Had mess dinner, prep going well. Sleep well! 🙏"
        },
        level3: {
          indic: "मम्मी, आज कॉलेज में प्रोफेसर ने डाउट्स बहुत अच्छे से क्लियर किये। रूममेट्स के साथ हूँ, तबीयत बिल्कुल ठीक है। संडे को वीडियो कॉल करूँगा! ❤️",
          englishSub: "Mom, prof cleared doubts nicely today. With roommates, health is great. Video call this Sunday! ❤️"
        }
      },
      tamil: {
        level1: {
          indic: "அம்மா, விடுதி அறைக்கு வந்துவிட்டேன், எல்லாம் நலமே. கவலைப்பட வேண்டாம்! ❤️",
          englishSub: "Mom, in hostel room, all is well. Don't worry! ❤️"
        },
        level2: {
          indic: "அம்மா அப்பா, நூலகத்தில் படித்துவிட்டு அறைக்கு வந்துவிட்டேன். உணவும் சாப்பிட்டேன், தேர்விற்கு நன்றாக படிக்கிறேன். நிம்மதியாக தூங்குங்கள்! 🙏",
          englishSub: "Mom & Dad, back from library, had dinner, studying well for exams. Sleep peacefully! 🙏"
        },
        level3: {
          indic: "அம்மா, வகுப்புகள் சிறப்பாக சென்றது. நண்பர்களுடன் சேர்ந்து படிக்கிறேன், உடல் நலம் நன்று. ஞாயிறு அன்று அழைக்கிறேன்! ❤️",
          englishSub: "Mom, classes were great. Group studying, health is fine. Calling Sunday! ❤️"
        }
      },
      kannada: {
        level1: {
          indic: "ಅಮ್ಮಾ, ಹಾಸ್ಟೆಲ್ ರೂಮಿನಲ್ಲಿ ಇದ್ದೇನೆ, ಎಲ್ಲವೂ ಚೆನ್ನಾಗಿದೆ. ಚಿಂತೆ ಮಾಡಬೇಡಿ! ❤️",
          englishSub: "Mom, in hostel room, all fine. Don't worry! ❤️"
        },
        level2: {
          indic: "ಅಮ್ಮಾ ಅಪ್ಪಾ, ಲೈಬ್ರರಿಯಿಂದ ಓದಿ ರೂಮಿಗೆ ಬಂದಿದ್ದೇನೆ. ಊಟ ಆಯಿತು, ಪರೀಕ್ಷೆಗೆ ತಯಾರಿ ಚೆನ್ನಾಗಿ ನಡೀತಿದೆ. ನೆಮ್ಮದಿಯಾಗಿ ಮಲಗಿ! 🙏",
          englishSub: "Mom & Dad, back from library. Had food, exam prep going strong. Sleep peacefully! 🙏"
        },
        level3: {
          indic: "ಅಮ್ಮಾ, ತರಗತಿಗಳು ತುಂಬಾ ಚೆನ್ನಾಗಿ ನಡೆದವು. ರೂಮ್‌ಮೇಟ್‌ಗಳ ಜೊತೆ ಓದುತ್ತಿದ್ದೇನೆ, ಆರೋಗ್ಯ ಚೆನ್ನಾಗಿದೆ. ಭಾನುವಾರ ಕಾಲ್ ಮಾಡ್ತೀನಿ! ❤️",
          englishSub: "Mom, classes were good. Studying with friends, health is good. Sunday call! ❤️"
        }
      },
      marathi: {
        level1: {
          indic: "आई, हॉस्टेलवर आहे, सर्व काही छान आहे. काळजी करू नकोस! ❤️",
          englishSub: "Aai, in hostel, all good. Don't worry! ❤️"
        },
        level2: {
          indic: "आई-बाबा, लायब्ररीमधून अभ्यास करून आलो. जेवण केलं आहे, परीक्षेची तयारी छान सुरू आहे. शांत झोपा! 🙏",
          englishSub: "Aai-Baba, back from library, had dinner, prep going well. Sleep calmly! 🙏"
        },
        level3: {
          indic: "आई, आज कॉलेजमध्ये लेक्चर्स खूप छान झाले. मित्रांसोबत अभ्यास करतोय. रविवारी फोन करतो! ❤️",
          englishSub: "Aai, lectures were great today. Studying with friends. Will call Sunday! ❤️"
        }
      },
      bengali: {
        level1: {
          indic: "মা, হোস্টেল রুমে আছি, সব একদম ঠিক আছে। চিন্তা কোরো না! ❤️",
          englishSub: "Ma, in hostel room, all fine. Don't worry! ❤️"
        },
        level2: {
          indic: "মা-বাবা, লাইব্রেরিতে পড়ে রুমে ফিরলাম। মেসে খাওয়া হয়েছে, পরীক্ষার প্রস্তুতি ভালো চলছে। তোমরা নিশ্চিন্তে ঘুমাও! 🙏",
          englishSub: "Ma-Baba, back from library. Ate at mess, exam prep going well. Sleep peacefully! 🙏"
        },
        level3: {
          indic: "মা, আজকের ক্লাসগুলো খুব ভালো লেগেছে। রুমমেটদের সাথে আছি, শরীর একদম ভালো। রবিবারে ভিডিও কল করব! ❤️",
          englishSub: "Ma, classes were great. With roommates, health is good. Video call on Sunday! ❤️"
        }
      },
      english: {
        level1: {
          indic: "Mom, safe in my hostel room, all good here. Don't worry, talk tomorrow! ❤️",
          englishSub: "Short reassuring student ping."
        },
        level2: {
          indic: "Mom & Dad, wrapped up library study and back in my room. Ate dinner, exam prep is on track. Please sleep peacefully! 🙏",
          englishSub: "Academics & dinner reassurance."
        },
        level3: {
          indic: "Mom, classes were great today and doubts got cleared. Group studying with roommates, health is solid. Let's do our Sunday video call! ❤️",
          englishSub: "Warm student update with family plan."
        }
      }
    }
  },

  mumbai: {
    id: "mumbai",
    name: "Mumbai Finance",
    persona: "Vikram · 26 · Investment Analyst @ BKC",
    icon: "📊",
    rawVoice: "Late night deal pitch just concluded. Board presentation tomorrow morning at 8:30 AM so I really can't talk on phone tonight. Reached flat in Dadar, had soup, alarm is set for 6:30.",
    audioDuration: "0:16",
    statusTags: { arrived: "Dadar Home", dinner: "Soup Taken", health: "Alarm Set 6:30" },
    translations: {
      telugu: {
        level1: {
          indic: "అమ్మా నాన్న, రూమ్ కి క్షేమంగా చేరుకున్నాను. రేపు ఉదయం ముఖ్యమైన మీటింగ్ ఉంది, అందుకే నిద్రపోతున్నాను. జాగ్రత్తగా ఉండండి! ❤️",
          englishSub: "Mom & Dad, reached room safely. Important morning meeting tomorrow, going to sleep. Take care! ❤️"
        },
        level2: {
          indic: "అమ్మా, ఈరోజు పని కొంచెం ఆలస్యమైంది కానీ క్షేమంగా దాదర్ ఫ్లాట్ కి చేరుకున్నాను. లైట్ గా సూప్ తాగాను. రేపు మధ్యాహ్నం ఫ్రీ అయ్యాక కాల్ చేస్తాను! 🙏",
          englishSub: "Mom, work ended late but reached Dadar flat safely. Had soup. Calling tomorrow afternoon once free! 🙏"
        },
        level3: {
          indic: "అమ్మా నాన్న, రేపటి బోర్డ్ ప్రెజెంటేషన్ ప్రిపరేషన్ విజయవంతంగా పూర్తయింది. అలసట లేకుండా ప్రశాంతంగా నిద్రపోతున్నాను. మీరు కూడా నిశ్చింతగా ఉండండి! ❤️",
          englishSub: "Mom & Dad, board prep finished successfully. Going to sleep calmly. Be at ease! ❤️"
        }
      },
      hindi: {
        level1: {
          indic: "मम्मी-पापा, दादर फ्लैट पर सुरक्षित पहुँच गया हूँ। कल सुबह ज़रूरी मीटिंग है इसलिए अभी सो रहा हूँ। ख्याल रखियेगा! ❤️",
          englishSub: "Mom & Dad, reached Dadar flat safely. Important morning meeting, sleeping now. Take care! ❤️"
        },
        level2: {
          indic: "मम्मी, आज ऑफिस में देर हो गई लेकिन मैं सकुशल फ्लैट पहुँच गया हूँ। हल्का सूप पी लिया है। कल दोपहर फ्री होकर बात करूँगा! 🙏",
          englishSub: "Mom, got late at office but reached flat safely. Had soup. Calling tomorrow afternoon! 🙏"
        },
        level3: {
          indic: "मम्मी-पापा, कल की बोर्ड प्रेजेंटेशन की तैयारी बहुत बढ़िया हो गई है। खाना खा लिया है और समय पर सो रहा हूँ। आप दोनों निश्चिंत रहियेगा! ❤️",
          englishSub: "Mom & Dad, board prep went great. Had dinner and sleeping on time. Be peaceful! ❤️"
        }
      },
      tamil: {
        level1: {
          indic: "அம்மா, அறைக்கு பத்திரமாக வந்துவிட்டேன். நாளை காலை முக்கிய கூட்டம் இருப்பதால் உறங்கச் செல்கிறேன்! ❤️",
          englishSub: "Mom, reached room safely. Important morning meet tomorrow, sleeping now! ❤️"
        },
        level2: {
          indic: "அம்மா அப்பா, இன்று பணி நேரம் தாமதமானது, ஆனால் அறைக்கு நல்லபடியாக வந்துவிட்டேன். நாளை மதியம் அழைக்கிறேன்! 🙏",
          englishSub: "Mom & Dad, work stretched late, but reached safely. Calling tomorrow afternoon! 🙏"
        },
        level3: {
          indic: "அம்மா, நாளைய கூட்டத்திற்கான ஏற்பாடுகள் முடிந்துவிட்டன. நலமாக உள்ளேன், கவலை கொள்ளாதீர்கள்! ❤️",
          englishSub: "Mom, prep for tomorrow's meeting is done. Doing well, don't worry! ❤️"
        }
      },
      kannada: {
        level1: {
          indic: "ಅಮ್ಮಾ ಅಪ್ಪಾ, ಫ್ಲ್ಯಾಟ್‌ಗೆ ಸುರಕ್ಷಿತವಾಗಿ ತಲುಪಿದೆ. ನಾಳೆ ಬೆಳಗ್ಗೆ ಮೀಟಿಂಗ್ ಇದೆ, ಮಲಗುತ್ತಿದ್ದೇನೆ! ❤️",
          englishSub: "Mom & Dad, reached flat safely. Meeting tomorrow, sleeping! ❤️"
        },
        level2: {
          indic: "ಅಮ್ಮಾ, ಕೆಲಸ ತಡವಾಯಿತು ಆದರೆ ಸುರಕ್ಷಿತವಾಗಿ ಬಂದೆ. ಲೈಟ್ ಆಗಿ ಸೂಪ್ ಕುಡಿದೆ. ನಾಳೆ ಮಧ್ಯಾಹ್ನ ಕಾಲ್ ಮಾಡುತ್ತೇನೆ! 🙏",
          englishSub: "Mom, work was late but reached safely. Had soup. Calling tomorrow afternoon! 🙏"
        },
        level3: {
          indic: "ಅಮ್ಮಾ ಅಪ್ಪಾ, ನಾಳಿನ ಪ್ರೆಸೆಂಟೇಶನ್ ಸಿದ್ಧತೆ ಚೆನ್ನಾಗಿ ಮುಗಿದಿದೆ. ನೆಮ್ಮದಿಯಿಂದ ನಿದ್ರೆ ಮಾಡಿ! ❤️",
          englishSub: "Mom & Dad, presentation prep done nicely. Sleep comfortably! ❤️"
        }
      },
      marathi: {
        level1: {
          indic: "आई-बाबा, दादरच्या फ्लॅटवर सुरक्षित पोहोचलो. उद्या महत्त्वाची मीटिंग आहे म्हणून झोपतोय! ❤️",
          englishSub: "Aai-Baba, reached Dadar flat safely. Meeting tomorrow, sleeping! ❤️"
        },
        level2: {
          indic: "आई, आज ऑफिसमध्ये उशीर झाला पण मी सुखरूप पोहोचलो. सूप घेतलं आहे. उद्या दुपारी फोन करेन! 🙏",
          englishSub: "Aai, late at office but reached safely. Had soup. Calling tomorrow afternoon! 🙏"
        },
        level3: {
          indic: "आई-बाबा, उद्याच्या बोर्ड मीटिंगची तयारी उत्तम झाली आहे. काळजी करू नका, शांत झोपा! ❤️",
          englishSub: "Aai-Baba, board meeting prep went great. Don't worry, sleep well! ❤️"
        }
      },
      bengali: {
        level1: {
          indic: "মা-বাবা, ফ্ল্যাটে সুরক্ষিত পৌঁছে গেছি। কাল সকালে গুরুত্বপূর্ণ মিটিং আছে, শুয়ে পড়ছি! ❤️",
          englishSub: "Ma-Baba, safely reached flat. Meeting tomorrow morning, sleeping! ❤️"
        },
        level2: {
          indic: "মা, কাজে একটু দেরি হলো কিন্তু ঠিকঠাক পৌঁছে গেছি। হালকা সুপ খেয়েছি। কাল দুপুরে ফোন করব! 🙏",
          englishSub: "Ma, got late with work but arrived safely. Had soup. Will call tomorrow afternoon! 🙏"
        },
        level3: {
          indic: "মা-বাবা, আগামীকালের মিটিংয়ের সব প্রস্তুতি সম্পন্ন। শরীর একদম ঠিক আছে, চিন্তা কোরো না! ❤️",
          englishSub: "Ma-Baba, prep for tomorrow's meeting complete. Health is great, don't worry! ❤️"
        }
      },
      english: {
        level1: {
          indic: "Mom & Dad, safely reached my Dadar apartment. Big morning pitch tomorrow so turning in. Take care! ❤️",
          englishSub: "Professional check-in avoiding late call pressure."
        },
        level2: {
          indic: "Mom, late deal sprint wrapped up and I'm safely home. Had light soup, alarm is set. Calling you tomorrow afternoon once free! 🙏",
          englishSub: "Reassuring evening routine and promised callback."
        },
        level3: {
          indic: "Mom & Dad, our board preparation went exceptionally well tonight. Resting well tonight without any stress. Sleep peacefully! ❤️",
          englishSub: "Calming confidence boost for anxious parents."
        }
      }
    }
  },

  dallas: {
    id: "dallas",
    name: "NRI Student (US)",
    persona: "Sai · 23 · MS Computer Science @ Dallas, Texas",
    icon: "✈️",
    rawVoice: "Hey Amma, finishing lab work. It's 10:30 PM here which means it's 9:00 AM your morning. Made dal chawal for the week. Have your morning coffee and go for your walk peacefully.",
    audioDuration: "0:21",
    statusTags: { arrived: "Apt Safe", dinner: "Dal Chawal Made", health: "Timezone Synced" },
    translations: {
      telugu: {
        level1: {
          indic: "అమ్మా నాన్న, ఇక్కడ రాత్రి 10:30 అయ్యింది. నేను సేఫ్ గా అపార్ట్‌మెంట్‌లో ఉన్నాను. మీ ఉదయం ప్రశాంతంగా గడవాలి! ❤️",
          englishSub: "Mom & Dad, 10:30 PM here. Safe in my apartment. Have a peaceful morning! ❤️"
        },
        level2: {
          indic: "అమ్మా, ల్యాబ్ వర్క్ ముగించుకుని రూమ్ కి వచ్చాను. పప్పు అన్నం వండుకుని తిన్నాను. మీరు ఉదయం కాఫీ తాగి వాకింగ్ కి వెళ్లి రండి! 🙏",
          englishSub: "Mom, finished lab work and back in room. Cooked dal rice. Enjoy morning coffee and walk! 🙏"
        },
        level3: {
          indic: "అమ్మా నాన్న, రీసెర్చ్ వర్క్ బాగా సాగుతోంది. వంట చేసుకుని చక్కగా తింటున్నాను, ఆరోగ్యం బాగుంది. మీ ఉదయం శ్రేయస్కరం కావాలి. ఆదివారం పొద్దున్నే వీడియో కాల్ చేస్తాను! ❤️",
          englishSub: "Mom & Dad, research is progressing well. Cooking and eating well. Have a blessed morning, Sunday video call! ❤️"
        }
      },
      hindi: {
        level1: {
          indic: "मम्मी-पापा, यहाँ रात के 10:30 बज रहे हैं और मैं सुरक्षित कमरे में हूँ। आपकी सुबह मंगलमय हो! ❤️",
          englishSub: "Mom & Dad, 10:30 PM here and safe in my room. Have a wonderful morning! ❤️"
        },
        level2: {
          indic: "मम्मी, लैब का काम पूरा करके कमरे पर आ गया हूँ। दाल-चावल बना कर खा लिया है। आप सुबह की चाय पीकर टहलने जाइयेगा! 🙏",
          englishSub: "Mom, back in room after lab. Cooked dal chawal. Enjoy tea and morning walk! 🙏"
        },
        level3: {
          indic: "मम्मी-पापा, रिसर्च प्रोजेक्ट बहुत अच्छा चल रहा है। समय पर खाना और नींद पूरी हो रही है। संडे को वीडियो कॉल पर बात करेंगे! ❤️",
          englishSub: "Mom & Dad, research going very well. Eating and sleeping on time. Sunday video call! ❤️"
        }
      },
      tamil: {
        level1: {
          indic: "அம்மா, இங்கு இரவு 10:30. அறையில் பத்திரமாக இருக்கிறேன். இனிய காலை வணக்கம்! ❤️",
          englishSub: "Mom, 10:30 PM here. Safe in room. Happy morning! ❤️"
        },
        level2: {
          indic: "அம்மா அப்பா, ஆய்வுக்கூட பணி முடிந்து அறைக்கு வந்துவிட்டேன். உணவும் சமைத்து சாப்பிட்டேன். காலை நடைபயிற்சி சென்று வாருங்கள்! 🙏",
          englishSub: "Mom & Dad, lab work done, cooked and ate. Go for your morning walk! 🙏"
        },
        level3: {
          indic: "அம்மா, எனது படிப்பு சிறப்பாக செல்கிறது. ஆரோக்கியமாக உள்ளேன். ஞாயிறு அன்று விரிவாக பேசுவோம்! ❤️",
          englishSub: "Mom, studies going great. Health is good. Talking Sunday! ❤️"
        }
      },
      kannada: {
        level1: {
          indic: "ಅಮ್ಮಾ ಅಪ್ಪಾ, ಇಲ್ಲಿ ರಾತ್ರಿ 10:30 ಆಗಿದೆ. ಸುರಕ್ಷಿತವಾಗಿದ್ದೇನೆ. ನಿಮ್ಮ ಮುಂಜಾನೆ ಸುಖಕರವಾಗಿರಲಿ! ❤️",
          englishSub: "Mom & Dad, 10:30 PM here. Safe. Have a pleasant morning! ❤️"
        },
        level2: {
          indic: "ಅಮ್ಮಾ, ಲ್ಯಾಬ್ ಮುಗಿಸಿ ಬಂದೆ. ಅನ್ನ ಸಾರು ಮಾಡಿಕೊಂಡು ಊಟ ಮಾಡಿದೆ. ನೀವು ಮುಂಜಾನೆಯ ಕಾಫಿ ಕುಡಿದು ವಾಕಿಂಗ್ ಹೋಗಿ ಬನ್ನಿ! 🙏",
          englishSub: "Mom, back from lab. Cooked food. Drink coffee and go for morning walk! 🙏"
        },
        level3: {
          indic: "ಅಮ್ಮಾ ಅಪ್ಪಾ, ರಿಸರ್ಚ್ ಕೆಲಸ ಚೆನ್ನಾಗಿ ಸಾಗುತ್ತಿದೆ. ಊಟ ನಿದ್ರೆ ಎಲ್ಲಾ ಚೆನ್ನಾಗಿದೆ. ಭಾನುವಾರ ವಿಡಿಯೋ ಕಾಲ್ ಮಾಡ್ತೀನಿ! ❤️",
          englishSub: "Mom & Dad, research is progressing well. Sunday video call planned! ❤️"
        }
      },
      marathi: {
        level1: {
          indic: "आई-बाबा, इथे रात्रीचे 10:30 झाले आहेत आणि मी सुरक्षित आहे. तुमची सकाळ प्रसन्न जावो! ❤️",
          englishSub: "Aai-Baba, 10:30 PM here and safe. Have a pleasant morning! ❤️"
        },
        level2: {
          indic: "आई, लॅबचे काम संपवून रूमवर आलो. वरण-भात बनवून जेवलो. तू चहा पिऊन फिरायला जा! 🙏",
          englishSub: "Aai, back after lab work. Cooked varan-bhat. Have tea and go for a walk! 🙏"
        },
        level3: {
          indic: "आई-बाबा, रिसर्चचे काम खूप छान सुरू आहे. प्रकृती उत्तम आहे. रविवारी व्हिडिओ कॉलवर बोलू! ❤️",
          englishSub: "Aai-Baba, research work is going great. Video call on Sunday! ❤️"
        }
      },
      bengali: {
        level1: {
          indic: "মা-বাবা, এখানে রাত ১০:৩০ বাজে, আমি নিরাপদে আছি। তোমাদের শুভ সকাল! ❤️",
          englishSub: "Ma-Baba, 10:30 PM here, safe. Good morning to you! ❤️"
        },
        level2: {
          indic: "মা, ল্যাব শেষ করে ঘরে ফিরলাম। ডাল-ভাত রেঁধে খেয়েছি। তোমরা সকালের চা খেয়ে হাঁটতে যেও! 🙏",
          englishSub: "Ma, back from lab. Cooked dal-rice. Drink tea and go for morning walk! 🙏"
        },
        level3: {
          indic: "মা-বাবা, পড়াশোনা খুব ভালো চলছে। নিজের খেয়াল রাখছি। রবিবারে ভিডিও কলে দেখা হবে! ❤️",
          englishSub: "Ma-Baba, studies going very well. Taking care of myself. See you on Sunday video call! ❤️"
        }
      },
      english: {
        level1: {
          indic: "Mom & Dad, it's 10:30 PM here in Texas and I'm safely in my apartment. Wishing you a peaceful morning in India! ❤️",
          englishSub: "Timezone-aware safe check-in."
        },
        level2: {
          indic: "Mom, wrapped up my lab work and cooked dal chawal for the week. Have your morning coffee and go for your walk peacefully! 🙏",
          englishSub: "Warm daily meal & routine reassurance."
        },
        level3: {
          indic: "Mom & Dad, research progress is on track with my professor. Eating well and resting well. Looking forward to our Sunday video call! ❤️",
          englishSub: "Holistic overseas update for anxious parents."
        }
      }
    }
  }
};

// Global App State
const state = {
  viewMode: "dual", // "dual" | "youth" | "senior"
  currentScenario: "bengaluru",
  currentDisclosure: "level2",
  currentLanguage: "telugu",
  activeParentChannel: "senior", // "whatsapp" | "senior"
  isRecording: false,
  recordTimerSeconds: 0,
  recordInterval: null,
  consentApproved: true,
  lastSentTime: "9:42 PM",
  currentSlide: 1,
  totalSlides: 12,
  audioContext: null,
  audioAnalyser: null,
  audioStream: null
};

// Initialize on DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  initModeNavigation();
  initScenarioPills();
  initDisclosurePills();
  initLanguageButtons();
  initChannelTabs();
  initRecorderControls();
  initConsentActions();
  initParentReactions();
  initSlideDeckModal();
  initWaveformVisualizer();
  updateYouthAndParentDisplays();
});

/* ==========================================================================
   VIEW MODE SWITCHER (TEENAGER / SENIOR PARENT / DUAL)
   ========================================================================== */

function initModeNavigation() {
  const modeBtns = document.querySelectorAll(".mode-nav-btn");
  modeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.viewMode = btn.dataset.mode;

      document.body.classList.remove("mode-youth", "mode-senior");
      if (state.viewMode === "youth") {
        document.body.classList.add("mode-youth");
        showToast("Switched to Young Adult / Teenager Mode 🎒");
      } else if (state.viewMode === "senior") {
        document.body.classList.add("mode-senior");
        state.activeParentChannel = "senior";
        updateChannelDisplay();
        showToast("Switched to Senior Parent Portal (High-Contrast & Audio) 👵");
      } else {
        showToast("Switched to Dual-Perspective View 👥");
      }
    });
  });
}

function updateChannelDisplay() {
  const waContainer = document.getElementById("waContainer");
  const seniorContainer = document.getElementById("seniorContainer");
  const tabs = document.querySelectorAll(".channel-tab-btn");

  tabs.forEach(t => t.classList.toggle("active", t.dataset.channel === state.activeParentChannel));

  if (state.activeParentChannel === "whatsapp") {
    if (waContainer) waContainer.style.display = "flex";
    if (seniorContainer) seniorContainer.style.display = "none";
  } else {
    if (waContainer) waContainer.style.display = "none";
    if (seniorContainer) seniorContainer.style.display = "flex";
  }
}

/* ==========================================================================
   INTERACTIVE CONTROLS INITIALIZATION
   ========================================================================== */

function initScenarioPills() {
  const container = document.getElementById("scenarioPillsList");
  if (!container) return;

  container.innerHTML = "";
  Object.values(SCENARIOS).forEach((sc) => {
    const btn = document.createElement("button");
    btn.className = `scenario-pill ${sc.id === state.currentScenario ? "active" : ""}`;
    btn.dataset.scenario = sc.id;
    btn.innerHTML = `
      <span class="scenario-icon">${sc.icon}</span>
      <span>${sc.name}</span>
    `;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".scenario-pill").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      state.currentScenario = sc.id;
      updateYouthAndParentDisplays();
      playSoftChime(440, 0.08);
      showToast(`Loaded scenario: ${sc.persona}`);
    });
    container.appendChild(btn);
  });
}

function initDisclosurePills() {
  const cards = document.querySelectorAll(".disclosure-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      state.currentDisclosure = card.dataset.level;
      updateYouthAndParentDisplays();
      playSoftChime(520, 0.08);
    });
  });
}

function initLanguageButtons() {
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      langBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentLanguage = btn.dataset.lang;
      updateYouthAndParentDisplays();
      playSoftChime(600, 0.08);
      showToast(`Language switched to ${btn.innerText}`);
    });
  });
}

function initChannelTabs() {
  const tabs = document.querySelectorAll(".channel-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      state.activeParentChannel = tab.dataset.channel;
      updateChannelDisplay();
    });
  });
}

function initConsentActions() {
  const checkbox = document.getElementById("consentCheckbox");
  const sendBtn = document.getElementById("btnSendApproval");

  if (checkbox && sendBtn) {
    checkbox.checked = state.consentApproved;
    checkbox.addEventListener("change", (e) => {
      state.consentApproved = e.target.checked;
      sendBtn.disabled = !state.consentApproved;
    });

    sendBtn.addEventListener("click", () => {
      triggerSendReassurance();
    });
  }
}

function triggerSendReassurance() {
  const sendBtn = document.getElementById("btnSendApproval");
  if (!sendBtn) return;

  playWarmBlessingChime();

  sendBtn.innerHTML = `
    <svg style="width:18px;height:18px;animation:spin 1s linear infinite;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" stroke-width="4" stroke="currentColor" stroke-dasharray="32" stroke-linecap="round" fill="none"/>
    </svg>
    <span>Encrypting & Dispatching...</span>
  `;
  sendBtn.disabled = true;

  setTimeout(() => {
    sendBtn.innerHTML = `
      <svg style="width:18px;height:18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <span>Reassurance Delivered to Parents!</span>
    `;
    sendBtn.style.background = "var(--secondary-sage)";

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    state.lastSentTime = timeStr;

    updateYouthAndParentDisplays();
    triggerParentMessageAnimation();

    showToast("Reassuring update sent to parents with 100% consent. ❤️");

    setTimeout(() => {
      sendBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 2L11 13"/>
          <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
        </svg>
        <span>Approve & Send to Parents</span>
      `;
      sendBtn.style.background = "linear-gradient(135deg, var(--primary-saffron) 0%, #E76F51 100%)";
      sendBtn.disabled = false;
    }, 2800);
  }, 700);
}

function triggerParentMessageAnimation() {
  const card = document.getElementById("waMessageCard");
  const seniorCard = document.getElementById("seniorReadableCard");
  if (card) {
    card.style.animation = "none";
    void card.offsetWidth;
    card.style.animation = "fadeInMsg 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
  }
  if (seniorCard) {
    seniorCard.style.animation = "none";
    void seniorCard.offsetWidth;
    seniorCard.style.animation = "fadeInMsg 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
  }
}

/* ==========================================================================
   DISPLAY REFRESH & TRANSLATION ENGINE
   ========================================================================== */

function updateYouthAndParentDisplays() {
  const currentSc = SCENARIOS[state.currentScenario] || SCENARIOS.bengaluru;
  const langKey = state.currentLanguage || "telugu";
  const levelKey = state.currentDisclosure || "level2";

  // 1. Update Youth raw voice card
  const rawQuoteEl = document.getElementById("rawQuoteText");
  const youthPersonaEl = document.getElementById("youthPersonaText");
  const rawAudioDurationEl = document.getElementById("rawAudioDuration");

  if (rawQuoteEl) rawQuoteEl.innerText = `"${currentSc.rawVoice}"`;
  if (youthPersonaEl) youthPersonaEl.innerText = currentSc.persona;
  if (rawAudioDurationEl) rawAudioDurationEl.innerText = currentSc.audioDuration;

  // 2. Fetch softened translation from scenario table
  let trans = currentSc.translations[langKey] ? currentSc.translations[langKey][levelKey] : null;
  if (!trans && currentSc.translations.english) {
    trans = currentSc.translations.english[levelKey];
  }
  if (!trans) {
    trans = { indic: "Reached safely, doing well! ❤️", englishSub: "Direct check-in." };
  }

  // 3. Update Youth Softened Preview Box
  const previewIndicEl = document.getElementById("translatedOutputIndic");
  const previewEngSubEl = document.getElementById("translatedOutputSub");
  if (previewIndicEl) previewIndicEl.innerText = trans.indic;
  if (previewEngSubEl) previewEngSubEl.innerText = trans.englishSub;

  // 4. Update WhatsApp Receiver Card
  const waMsgText = document.getElementById("waMessageText");
  const waTimestamp = document.getElementById("waTimestamp");
  const waContactSubtitle = document.getElementById("waContactSubtitle");
  if (waMsgText) waMsgText.innerText = trans.indic;
  if (waTimestamp) waTimestamp.innerText = state.lastSentTime;
  if (waContactSubtitle) {
    const youthFirstName = currentSc.name.split(" ")[0];
    waContactSubtitle.innerText = `${youthFirstName} · Sanketam Daily Reassurance`;
  }

  // 5. Update Senior Portal Card
  const seniorText = document.getElementById("seniorMessageText");
  const seniorTimestamp = document.getElementById("seniorTimestamp");
  const seniorSender = document.getElementById("seniorSenderName");
  const arrivedTag = document.getElementById("tagArrived");
  const dinnerTag = document.getElementById("tagDinner");
  const healthTag = document.getElementById("tagHealth");

  if (seniorText) seniorText.innerText = trans.indic;
  if (seniorTimestamp) seniorTimestamp.innerText = `Received Today at ${state.lastSentTime}`;
  if (seniorSender) seniorSender.innerText = `${currentSc.name.split(" ")[0]} is Safe`;

  if (arrivedTag && currentSc.statusTags) arrivedTag.innerText = currentSc.statusTags.arrived;
  if (dinnerTag && currentSc.statusTags) dinnerTag.innerText = currentSc.statusTags.dinner;
  if (healthTag && currentSc.statusTags) healthTag.innerText = currentSc.statusTags.health;
}

/* ==========================================================================
   AUDIO RECORDING & CANVAS WAVEFORM
   ========================================================================== */

function initRecorderControls() {
  const recordBtn = document.getElementById("btnRecordMain");
  if (!recordBtn) return;

  recordBtn.addEventListener("click", async () => {
    if (!state.isRecording) {
      await startAudioRecording();
    } else {
      stopAudioRecording();
    }
  });

  const waPlayBtn = document.getElementById("waPlayBtn");
  if (waPlayBtn) {
    waPlayBtn.addEventListener("click", () => {
      speakTranslatedText();
    });
  }

  const seniorPlayBtn = document.getElementById("btnSeniorListen");
  if (seniorPlayBtn) {
    seniorPlayBtn.addEventListener("click", () => {
      speakTranslatedText();
    });
  }
}

async function startAudioRecording() {
  const recordBtn = document.getElementById("btnRecordMain");
  const timerEl = document.getElementById("recordTimer");
  const placeholderText = document.querySelector(".waveform-placeholder-text");

  try {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      state.audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      initRealAudioAnalyser(state.audioStream);
    }
  } catch (err) {
    console.log("Microphone simulation active:", err);
  }

  state.isRecording = true;
  state.recordTimerSeconds = 0;
  recordBtn.classList.add("recording");
  recordBtn.setAttribute("title", "Tap to stop recording");
  if (placeholderText) placeholderText.style.display = "none";

  playSoftChime(880, 0.1);
  showToast("Recording live voice note... (speak naturally for 15-20s)");

  state.recordInterval = setInterval(() => {
    state.recordTimerSeconds++;
    const mins = Math.floor(state.recordTimerSeconds / 60);
    const secs = state.recordTimerSeconds % 60;
    timerEl.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

    if (state.recordTimerSeconds >= 20) {
      stopAudioRecording();
      showToast("Reached 20s voice limit. Ready for softening!");
    }
  }, 1000);
}

function stopAudioRecording() {
  const recordBtn = document.getElementById("btnRecordMain");
  const placeholderText = document.querySelector(".waveform-placeholder-text");

  state.isRecording = false;
  clearInterval(state.recordInterval);
  recordBtn.classList.remove("recording");
  recordBtn.setAttribute("title", "Start Voice Recording");

  if (state.audioStream) {
    state.audioStream.getTracks().forEach(track => track.stop());
    state.audioStream = null;
  }

  if (placeholderText) {
    placeholderText.style.display = "block";
    placeholderText.innerText = "Voice note captured · Ready to review";
  }

  playSoftChime(520, 0.15);
  updateYouthAndParentDisplays();
  showToast("Voice transcribed & softened into native reassurance.");
}

function initWaveformVisualizer() {
  const canvas = document.getElementById("waveformCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let phase = 0;

  function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const width = canvas.width;
    const height = canvas.height;
    const barWidth = 4;
    const gap = 3;
    const totalBars = Math.floor(width / (barWidth + gap));

    for (let i = 0; i < totalBars; i++) {
      let barHeight = 8;

      if (state.isRecording) {
        const wave = Math.sin(phase + i * 0.25) * Math.cos(phase * 0.5 + i * 0.15);
        barHeight = Math.max(6, Math.abs(wave) * (height * 0.75));
      } else {
        barHeight = Math.max(4, Math.sin(i * 0.3) * 12 + 10);
      }

      const x = i * (barWidth + gap);
      const y = (height - barHeight) / 2;

      ctx.fillStyle = state.isRecording ? "#E63946" : "#D1D5DB";
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barHeight, 2);
      ctx.fill();
    }

    phase += 0.08;
  }

  draw();
}

function initRealAudioAnalyser(stream) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    state.audioContext = new AudioContext();
    const source = state.audioContext.createMediaStreamSource(stream);
    state.audioAnalyser = state.audioContext.createAnalyser();
    state.audioAnalyser.fftSize = 64;
    source.connect(state.audioAnalyser);
  } catch (e) {
    console.error("Audio Context setup error:", e);
  }
}

/* ==========================================================================
   WEB AUDIO API WARM CHIMES
   ========================================================================== */

function playSoftChime(freq = 528, duration = 0.15) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Audio context silent fallback
  }
}

function playWarmBlessingChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    // Dual frequency harmonic
    [528, 660, 792].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);
      gain.gain.setValueAtTime(0.06, ctx.currentTime + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.12 + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.6);
    });
  } catch (e) {}
}

/* ==========================================================================
   SPEECH SYNTHESIS (INDIC VOICE NARRATION FOR SENIOR PARENTS)
   ========================================================================== */

function speakTranslatedText() {
  playSoftChime(580, 0.2);

  if (!('speechSynthesis' in window)) {
    showToast("Voice narration synthesized.");
    return;
  }

  window.speechSynthesis.cancel();

  const currentSc = SCENARIOS[state.currentScenario] || SCENARIOS.bengaluru;
  const langKey = state.currentLanguage || "telugu";
  const levelKey = state.currentDisclosure || "level2";
  const trans = currentSc.translations[langKey] ? currentSc.translations[langKey][levelKey] : currentSc.translations.english[levelKey];

  const utterance = new SpeechSynthesisUtterance(trans.indic);

  const langCodes = {
    telugu: "te-IN",
    hindi: "hi-IN",
    tamil: "ta-IN",
    kannada: "kn-IN",
    marathi: "mr-IN",
    bengali: "bn-IN",
    english: "en-IN"
  };

  utterance.lang = langCodes[langKey] || "en-IN";
  utterance.rate = 0.92;
  utterance.pitch = 1.05;

  const seniorListenBtn = document.getElementById("btnSeniorListen");
  const seniorListenText = document.getElementById("seniorListenText");

  if (seniorListenBtn) seniorListenBtn.classList.add("speaking");
  if (seniorListenText) seniorListenText.innerText = "Playing Warm Reassurance...";

  utterance.onend = () => {
    if (seniorListenBtn) seniorListenBtn.classList.remove("speaking");
    if (seniorListenText) seniorListenText.innerText = "Listen to Update (వినండి)";
  };

  utterance.onerror = () => {
    if (seniorListenBtn) seniorListenBtn.classList.remove("speaking");
    if (seniorListenText) seniorListenText.innerText = "Listen to Update (వినండి)";
  };

  window.speechSynthesis.speak(utterance);
  showToast(`Speaking audio update in ${langKey.toUpperCase()}...`);
}

/* ==========================================================================
   PARENT REACTION CHIPS (FEEDBACK TO YOUTH)
   ========================================================================== */

function initParentReactions() {
  const chips = document.querySelectorAll(".wa-reply-chip, .btn-senior-blessing");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const text = chip.innerText.trim();
      playWarmBlessingChime();
      showToast(`Parent replied: "${text}" ❤️`);

      const youthCard = document.querySelector(".youth-column");
      if (youthCard) {
        let badge = document.getElementById("parentReactionNotice");
        if (!badge) {
          badge = document.createElement("div");
          badge.id = "parentReactionNotice";
          badge.style.cssText = `
            background: #FFE4E6;
            color: #9F1239;
            padding: 0.65rem 1.1rem;
            border-radius: var(--radius-md);
            font-size: 0.88rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            border: 1px solid #FECDD3;
            animation: fadeInMsg 0.3s ease-out;
            margin-top: 0.5rem;
          `;
          const container = document.querySelector(".consent-approval-card");
          if (container) container.appendChild(badge);
        }
        badge.innerHTML = `
          <span style="font-size:1.15rem;">🙏</span>
          <span>Parent received and sent love: <strong>${text}</strong></span>
        `;
      }
    });
  });
}

/* ==========================================================================
   SLIDE DECK MODAL (ALL 12 PRESENTATION SLIDES)
   ========================================================================== */

function initSlideDeckModal() {
  const openBtn = document.getElementById("btnOpenDeck");
  const modal = document.getElementById("deckModal");
  const closeBtn = document.getElementById("btnCloseDeck");
  const prevBtn = document.getElementById("btnPrevSlide");
  const nextBtn = document.getElementById("btnNextSlide");
  const slideImg = document.getElementById("slideImgDisplay");
  const slideCounter = document.getElementById("deckSlideCounter");
  const thumbsTray = document.getElementById("slideThumbsTray");

  if (!openBtn || !modal) return;

  if (thumbsTray) {
    thumbsTray.innerHTML = "";
    for (let i = 1; i <= state.totalSlides; i++) {
      const thumb = document.createElement("div");
      thumb.className = `slide-thumb ${i === state.currentSlide ? "active" : ""}`;
      thumb.dataset.slide = i;
      thumb.innerHTML = `<img src="./assets/slides/slide_${i}.jpg" alt="Slide ${i}" loading="lazy"/>`;
      thumb.addEventListener("click", () => {
        setSlide(i);
      });
      thumbsTray.appendChild(thumb);
    }
  }

  function setSlide(num) {
    if (num < 1) num = 1;
    if (num > state.totalSlides) num = state.totalSlides;
    state.currentSlide = num;

    if (slideImg) {
      slideImg.src = `./assets/slides/slide_${num}.jpg`;
    }
    if (slideCounter) {
      slideCounter.innerText = `Slide ${num} of ${state.totalSlides}`;
    }

    if (prevBtn) prevBtn.disabled = (num === 1);
    if (nextBtn) nextBtn.disabled = (num === state.totalSlides);

    document.querySelectorAll(".slide-thumb").forEach(t => {
      t.classList.toggle("active", parseInt(t.dataset.slide) === num);
    });
  }

  openBtn.addEventListener("click", () => {
    modal.classList.add("open");
    setSlide(state.currentSlide);
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => setSlide(state.currentSlide - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => setSlide(state.currentSlide + 1));
  }

  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "ArrowLeft") setSlide(state.currentSlide - 1);
    if (e.key === "ArrowRight") setSlide(state.currentSlide + 1);
    if (e.key === "Escape") modal.classList.remove("open");
  });
}

/* ==========================================================================
   TOAST NOTIFICATION ENGINE
   ========================================================================== */

function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast-card";
  toast.innerHTML = `
    <svg style="width:16px;height:16px;color:var(--primary-saffron);flex-shrink:0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
