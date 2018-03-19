var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var bufferedData = "";

  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data){
      console.log('Chunk received. Length: ', data.length,);
      bufferedData += data;
      console.log(bufferedData);
    });

    response.on('end', function(){

      console.log('Response Stream Finished');
    });

  });


}

console.log(getAndPrintHTML());