// import express from 'express';
// import path from 'path';
const express = require('express')
const path =require('path')

const app = express();
const port = process.env.PORT || 8080;

app.use('/', express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }

  console.log(`Server is started on port ${port}`)
})
