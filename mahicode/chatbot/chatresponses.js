function getBotResponse(input) {
  
  if (input == "hi") {
    
    return "namaste";
  } 
  if(input== "starting"){
    return '<img style="width: 90%;" src="./images/starting.jpg" alt="starting">'
  }
  if(input== "booklist"){
    return '<img style="width: 90%;" src="./images/booklist.jpg" alt="booklist">'
  }
  if(input== "strategy"){
    return "How to cover a subject"+ '<img style="width: 90%;" src="./images/strategy.jpg" alt="strategy">'
  }
  if(input== "notes"){
    return  '<img style="width: 90%;" src="./images/notes.jpg" alt="notes">'
  }
  if (input== "first reading"){
    return '<img style="width: 90%;" src="./images/first_reading.jpg" alt="first reading">'
  }
  if(input== "empty"){
    return "हम आपसे माफ़ी चाहेंगे, लेकिन इस बटन के जवाब की जानकारी अभी तक अपलोड नहीं की गई है, लेकिन जल्द से जल्द अपलोड कर दी जाएगी <br>"+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">main manu</button>';
  }
 
 //main message button
  if (input == "main manu") {
    return "<b>Main Manu</b>" + "<br>" +
      '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="prelimsButton()">Prelims</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainsButton()">Mains</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="optionalButton()">Optional</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="essayButton()">Essay</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="languagePaperButton()">Language Papers</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="interviewButton()">Interview</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="firstReadingButton()">First reading</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="notesButton()">Notes</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="revisionButton()">Revision</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="booklistButton()">Booklist</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="startingButton()">Starting</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="analisisButton()">Analysis</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="lifeProblemsButton()">Life related problems</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="eNotesButton()">E-notes</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="illnessButton()">Illness</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="strategyButton()">Strategy</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="selfStudyButton()">Self Study</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mediumButton()">Medium</button>' + "<br>" + "<b>Other Buttons</b>" + "<br>" + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;font-size:11px;" onclick="upsccseMeaningButton()">What is the UPSC Cse</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;font-size:11px;" onclick="fullFormsButton()">Full forms</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;font-size:11px;" onclick="collectorButton()">कलेक्टर कैसे बनें?</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;font-size:11px;" onclick="moremainButton()">more buttons</button>';
  }
  if (input == "more buttons"){
    return "<b>Some important Buttons</b>" +'<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="cseFFButton()">CSE</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="irsFFButton()">IRS</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="essayButton()">Essay</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="fullFormsButton()">Full forms</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="languagePaperButton()">Language paper</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">Main manu</button>';
  }
  if (input== "prelims") {
    return "<b>Prelims</b>" + "<br>" + "UPSC Cse प्रारम्भिक परीक्षा अर्थात् Preliminary Exam को pre या prelims के नाम से भी जाना जाता है इस चरण पर दो प्रश्न पत्र (GS mcq paper, CSAT paper) आते हैं, मुख्य परीक्षा देने के लिए इन्हें पास करना अनिवार्य है इनके बारे में ज्यादा जाने" + "<br>" + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="gsmcqPaperButton()">GS mcq paper</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="csatPaperButton()">CSAT Paper</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">Main Manu</button>';
  }
  
  if (input == "mains"){
  return "<b>Mains</b>"+ "<br>"+ "mains अर्थात् मुख्य परीक्षा, प्रारम्भिक परीक्षा के दोनों पेपर पास करके मैरिट ( लगभग 90-105 अंक) में आने के बाद आपको मुख्य परीक्षा देने का मौका मिलता है, यह मौका कुल वैकेंसी से लगभग 12-13 गुणा उम्मीदवारों (लगभग 10-12 हजार) को मिलता है । मुख्य परीक्षा में आपको 9 प्रश्न पत्र पास करने होते हैं, यथा:- 2 भाषा प्रश्न पत्र ( अंग्रेजी व कोई एक भारतीय भाषा), 1 निबंध प्रश्न पत्र, 4 सामान्य अध्ययन प्रश्न पत्र, 2 वैकल्पिक प्रश्न पत्र" +'<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="languagePaperButton()">Language Paper</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="essayButton()">Essay</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="optionalButton()">Optional</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="gsPaper1Button()">General Studies Paper 1</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="gsPaper2Button()">General Studies Paper 2</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="gsPaper3Button()">General Studies Paper 3</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="gsPaper4Button()">General Studies Paper 4</button>'+"<br>" + "<br>" + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">Main manu</button>' + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="moremainButton()">More buttons</button>' 
  }
  if(input== "optional"){
  return "<b>Optional</b>" + "</br>" + "UPSC सिविल परीक्षा में आपको एक वैकल्पिक विषय का चयन करना होता है जिसके 250-250 नंबर के दो प्रश्न पत्र दिए जाते हैं, वैकल्पिक विषय के पेपर सर्वाधिक अंक दिलवाने वाले प्रश्न पत्र होते हैं, वैकल्पिक विषय आपका किसी खास विषय में पारंगतता और रुचि को दर्शाता है" + "<br>"+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="emptyButton()">More about optional</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="emptyButton()">Optional subjects list</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="emptyButton()">optional strategy</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="emptyButton()">How to choose Optional</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">Main Manu</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="moremainButton()">more buttons</button>';
  }
  if(input== "essay"){
    return "UPSC मुख्य परीक्षा में एक 250 का निबंध प्रश्न पत्र आता है जिसमें 4-4 विकल्पों के दो निबंध प्रश्न आते है आपको प्रत्येक प्रश्न से एक निबंध लिखना होता है, प्रत्येक निबंध 125 अंक का होता है।<br>" + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="emptyButton()">more about Essay paper</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="emptyButton()">all about essay writing</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">main manu</button>';
  }
  if(input== "language papers"){
    return "UPSC मुख्य परीक्षा में दो भाषा पेपर भी लिए जाते हैं, एक अंग्रेजी का व दूसरा किसी भारतीय भाषा का(22 में से एक), इनमें 25% (प्रत्येक में 300 में से 75+) अंक लाने होते हैं अन्यथा मुख्य परीक्षा के अन्य प्रश्न पत्रों की जांच नहीं होती है, इन प्रश्न पत्रों के अंक अंतिम परिणाम में नहीं जोड़े जाते हैं  <br>"+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">main manu</button>';
  }
  if(input== "upsc cse"){
    return "UPSC एक संघीय लोक सेवा आयोग है जो अखिल भारतीए सेवाएं सहित सभी 'A' समूह की सेवाओं हेतु भर्ती परीक्षाएं आयोजित करवाता है, हालांकि UPSC का दायरा इससे आगे भी है जिसकी हम फिर कभी चर्चा करेंगे। <br><b>CSE</b><br> CSE (sivil service exam) एक UPSC द्वारा आयोजित की जाने वाली परीक्षा है जिसे हिंदी में सिविल/नागरिक सेवा परीक्षा भी कहते हैं इसके तहत IAS, IPS, IRS जैसे कई बड़े पदों हेतु आवेदन लिए जाते हैं।" + '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="fullFormsButton()">full forms</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">main manu</button>';
  }
  if(input== "upsc related full forms"){
    return "<b>Full forms</b><br>"+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="upscFFButton()">UPSC</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="cseFFButton()">CSE</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="iasFFButton()">IAS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="ipsFFButton()">IPS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="ifsFFButton()">IFS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="irsFFButton()">IRS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">main manu</button>';
  }
  if(input== "कलेक्टर कैसे बने?"){
    return "कलेक्टर बनने के वैसे तो सरकार ने कई विकल्प दिए हैं परन्तु सबसे लोकप्रिय तरीका है परीक्षा देकर, upsc एक CSE नाम की परीक्षा आयोजित करवाता है जिसमें पास होने वाले व्यक्ति को कई पद आवंटित किए जाते है जिसमें से एक है IAS, IAS ही आगे चलकर कलेक्टर बनता है। ये पद रैंक के अनुसार आवंटित किए जाते हैं यदि आप सामान्य श्रेणी से हैं और CSE परीक्षा में शीर्ष 80 वां स्थान प्राप्त कर लेते हैं तो आपका IAS बनना संभावित है हालांकि ऐसा ही हो अनिवार्य नहीं है इसके कुछ और पहलू भी होते हैं। <br>"+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="upscFFButton()">UPSC?</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="cseFFButton()">CSE</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="iasFFButton()">IAS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">main manu</button>'
  }
  if(input == "upsc full form"){
    return "<b>UPSC</b><br>UPSC = Union Public Service Commission<br>(भारतीय संघ लोक सेवा आयोग)<br>"+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="cseFFButton()">CSE</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="iasFFButton()">IAS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="ipsFFButton()">IPS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">main manu</button>';
  }
  if(input == "cse full form"){
    return "<b>CSE</b><br>CSE = Civil Services Exam<br>(सिविल/नागरिक सेवा परीक्षा)"+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="iasFFButton()">IAS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="ipsFFButton()">IPS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">main manu</button>';
  }
  if(input== "ias full form"){
    return "<b>IAS</b><br>IAS = Indian Administrative Service (भारतीय प्रशासनिक सेवा)"+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="upscFFButton()">upsc</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="ipsFFButton()">IPS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">main manu</button>';
  }
  if(input== "ips full form"){
    return "<b>IPS</b><br>IPS = Indian Police Service<br>(भारतीय पुलिस सेवा)"+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="iasFFButton()">IAS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="cseFFButton()">cse</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">main manu</button>';
  }
  if(input== "ifs full form"){
    return "<b>IFS</b><br>IFS = Indian Foreign Service<br>(भारतीय विदेश सेवा)<br>"+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="iasFFButton()">IAS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="ipsFFButton()">IPS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">main manu</button>';
  }
  if(input== "irs full form"){
    return "<b>IRS</b><br>IRS = Indian Revenue Service<br>(भारतीय राजस्व सेवा)<br>"+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="iasFFButton()">IAS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="ipsFFButton()">IPS</button>'+ '<button style="margin:5px;outline:none; border:1px solid gray;border-radius:30px;" onclick="mainManuButton()">main manu</button>';
  }
    else {
    return "माफ करना समझ नहीं आया, कुछ और पूछो ... ";
  }
}
