var https = require('https');

function getAndPrintHTML (options) {

  var bufferedData = "";

  https.get(options, function(response){

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

console.log(getAndPrintHTML(requestOptions));