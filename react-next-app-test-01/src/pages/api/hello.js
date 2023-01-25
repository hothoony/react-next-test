// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import HttpResponse from "./common";

// http://localhost:3000/api/hello
export default function handler(req, res) {
  
  console.log('req', req.method, req.url);

  if (req.method === 'GET') {
    handleGet(req, res);
  }
  else if (req.method === 'POST') {
    handlePost(req, res);
  }
  else if (req.method === 'PATCH') {
    handlePatch(req, res);
  }
  else if (req.method === 'DELETE') {
    handleDelete(req, res);
  }
  else {
    handleBadRequest(req, res);
  }

}

const handleGet = (req, res) => {
  const resStatus = HttpResponse.status200;
  res
    .status(200)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
      name: 'paul',
      age: 20
    });
}

const handlePost = (req, res) => {
  const resStatus = HttpResponse.status200;
  res
    .status(200)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
      name: 'paul',
      age: 20
    });
}

const handlePatch = (req, res) => {
  const resStatus = HttpResponse.status200;
  res
    .status(200)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
      name: 'paul',
      age: 20
    });
}

const handleDelete = (req, res) => {
  const resStatus = HttpResponse.status200;
  res
    .status(200)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
      name: 'paul',
      age: 20
    });
}

const handleNotFound = (req, res) => {
  const resStatus = HttpResponse.status404;
  res
    .status(404)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
    });
}

const handleBadRequest = (req, res) => {
  const resStatus = HttpResponse.status400;
  res
    .status(400)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
    });
}
