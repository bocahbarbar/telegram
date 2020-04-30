function doPost(e) {
  var token = '1190989386:AAFL6_j2OuCRRaA_hkfFU9El43c12UaVsGw';
  var stringJson =  e.postData.getDataAsString();
  var update = JSON.parse(post);
  var chat_id = update.Message.chat.id;
  var text = "hello world";
  var url = "https://api.telegram.org/bot"+token+"/sendmessages?chat_id="+encodeURIComponent(chat_id)+"&text="+encodeURIComponent(text);
  var balas = UrlFetchApp.fetch(url)
  
}
