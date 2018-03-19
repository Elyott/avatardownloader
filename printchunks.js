var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data){
      console.log('Chunk received. Length: ', data.length,);
      console.log(data, "\n")
    });

    response.on('end', function(){
      console.log('Response Stream Finished');
    });

  });
}

console.log(getAndPrintHTMLChunks());