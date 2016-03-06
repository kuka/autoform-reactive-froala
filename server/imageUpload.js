Router.route("/upload_image_froala", {
  name: "upload.image.froala",
  where: 'server',
  action: function() {
    var client, fs, name, pf, req, rsp, source;
    pf = this.request.files[0].name.split(".");
    pf = pf[pf.length - 1];
    name = moment().format('X') + "." + pf;
    if (Meteor.isServer) {
      fs = Npm.require('fs');
      source = this.request.files[0].data;
      client = S3.knox;
      req = client.put(name, {
        'Content-Length': source.length
      });
      rsp = this.response;
      req.on('response', function(res) {
        if (200 === res.statusCode) {
          rsp.writeHead(200, {
            'Content-Type': 'text/json'
          });
          return rsp.end(JSON.stringify({
            link: req.url
          }));
        }
      });
      return req.end(source);
    }
  }
});
