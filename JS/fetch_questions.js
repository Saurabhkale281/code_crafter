async function getQuestions() {


  var myHeaders = new Headers();
  myHeaders.append("Cookie", "PHPSESSID=8dc7a956c66cfa0c194077f273b39806");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
  return await fetch("httpss://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple", requestOptions)
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));;
}


getQuestions().then((res)=> console.log(res['results']))

