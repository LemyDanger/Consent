'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.createUserConsent = function createUserConsent (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var body = req.swagger.params['body'].value;
  Default.createUserConsent(userId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getConsent = function getConsent (req, res, next) {
  var consentId = req.swagger.params['consentId'].value;
  Default.getConsent(consentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserConsent = function getUserConsent (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var consentId = req.swagger.params['consentId'].value;
  Default.getUserConsent(userId,consentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listConsents = function listConsents (req, res, next) {
  var preset = req.swagger.params['preset'].value;
  Default.listConsents(preset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listUserConsents = function listUserConsents (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  Default.listUserConsents(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeUserConsent = function removeUserConsent (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var consentId = req.swagger.params['consentId'].value;
  var body = req.swagger.params['body'].value;
  Default.removeUserConsent(userId,consentId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setUserConsent = function setUserConsent (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var consentId = req.swagger.params['consentId'].value;
  var body = req.swagger.params['body'].value;
  Default.setUserConsent(userId,consentId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
