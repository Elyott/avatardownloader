var https = require('https');

function getHTML (options, callback) {

  var bufferedData = "";

  https.get(options, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data){
      console.log('Chunk received. Length: ', data.length,);
      bufferedData += data;
    });

    response.on('end', function(){
      callback(bufferedData);
      console.log('Response Stream Finished');
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);