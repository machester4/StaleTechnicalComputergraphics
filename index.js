const express = require("express");
const app = express();
const lib = require("./lib");

const sampleQuery = request => {
  // here return data to client
  return request.baseUrl;
};

const sampleMutator = request => {
  // here insert data to database
  return request.baseUrl;
};

const schema = {
  // name of method is for subscribe on client -> lib.subscribe('method_name', query, callback);
  user: {
    queries: [{path: "/", handler: sampleQuery, }]
    mutators: {
      // if is emty use polling method
      "/": {
        method: "post",
        handler: sampleMutator
      },
      "/admin": {
        method: "put",
        handler: sampleMutator
      }
    }
  }
};

// Init lib
lib(app, schema);

app.listen("3000");
