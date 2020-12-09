#!/usr/bin/env node
'use strict';

const body_p  = require('body-parser'),
   pyth_Shell = require('python-shell'),
      express = require('express'),
      http    = require('http'),
      ejs     = require('ejs'),
      file_s  = require('fs'),
      path    = require('path');

let indexMain = class {};

// starting indexMain Start function
indexMain.Start = function(){
	let PORT = process.env.PORT || 5000;
  let HOST = process.env.HOST || 'localhost';
  // YAO '192.168.178.64  192.168.43.76 localhost  192.168.0.16 '

    let server = express()
        .use(body_p.json())
        .use(body_p.urlencoded({ extended: true }))
        .use(express.static(__dirname))
        .set('view engine', 'ejs')
        .engine('views engine', ejs.renderFile);

    server.get('/', (req, res) => {

      res.setHeader('200', {'Content-Type': 'text/plain'});
      //########################  TESTER CADRE  ####################//
      let clientIP = req.connection.remoteAddress;
    	console.log("New connection ", clientIP); 
      var r = req.headers['user-agent'];
      var rr = req.headers['host'];
      var rrr = req.socket.remoteAddress;
      console.dir(rrr);//.socket);

      //###########################################################//
      // console.log(r);
    	res.render(path.join(__dirname + '/public/PAGE/wagen.index.ejs'));
      //res.sendFile(path.join(__dirname + '/public/page/wagen.index.html'));
    });
    // GETING MERCEDES_§%=_DETAIL
    server.get('/public/PAGE/m_e350', (req, res) => {
      res.sendFile(path.join(__dirname + '/public/PAGE/m_e350/m_e350.html'));
    } );
    server.listen(PORT, (req, res) => {
      //let clientIP = req.connection.remoteAddress;
    	console.log(`Server Start ON http://${HOST}:${PORT}`);
      // ${HOST}
    });
    //console.log(server);
};
      
indexMain.Start();
# sas
