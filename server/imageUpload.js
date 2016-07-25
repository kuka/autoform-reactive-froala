Router.route('/upload_image', {
  name: 'upload.image.froala',
  where: 'server',
  action: function() {
    var fs = Npm.require('fs');
    var AWS = Npm.require('aws-sdk');
    var Busboy = Npm.require('busboy');
    var crypto = Npm.require('crypto');

    var request = this.request;
    var response = this.response;

    AWS.config.update({
      accessKeyId     : S3.config.key,
      secretAccessKey : S3.config.secret
    });

    if (request.method === 'POST') {
      var busboy = new Busboy({ headers: request.headers });

      var s3 = new AWS.S3();
      var s3Res = {};

      busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        if (!filename) {
          // If filename is not truthy it means there's no file
          return;
        }

        // Generate date based folder prefix
        var datePrefix = moment().format('YYYY[/]MM');
        var key = crypto.randomBytes(10).toString('hex');
        var hashFilename = key + '-' + filename;
        // var path = '/froala/' + datePrefix + '/' + hashFilename;
        var path = 'froala/' + hashFilename;

        var params = {
          Bucket: S3.config.bucket,
          Body: file,
          Key: path,
          ACL: 'public-read',
          ContentType: mimetype
        };

        var options = { 
          // partSize: 10 * 1024 * 1024, 
          // queueSize: 1 
        };

        s3.upload(params, options, function(err, data) {
          if (data) { s3Res.link = data.Location; }
          response.writeHead(200, { 'Connection': 'close' });
          response.write(JSON.stringify(s3Res));
          response.end();
        }).on('httpUploadProgress', function(evt) { 
          // console.log(evt); 
        });
      });

      return request.pipe(busboy);
    }

    response.writeHead(404);
    response.end();
  }
});
