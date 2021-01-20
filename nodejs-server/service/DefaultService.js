'use strict';


/**
 * create a user consent
 * set a user consent
 *
 * userId Long ID of user  return
 * body UserConsent UserConsent object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.createUserConsent = function(userId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get a specific consent
 *
 * consentId Long ID of consent to return
 * returns Object
 **/
exports.getConsent = function(consentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get one conents for a specific user
 * get a specific consent for a specific user
 *
 * userId Long ID of user  return
 * consentId Long ID of consent to  return
 * returns Object
 **/
exports.getUserConsent = function(userId,consentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all consents or for a presetted scenario
 * Get all consents or a preset for a given scenario
 *
 * preset String pass an optional key for a presettet collecting (optional)
 * returns List
 **/
exports.listConsents = function(preset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Zustimmung eRezept",
  "description" : "Zustimmung zur Verwendung des eRezepts",
  "id" : 0,
  "key" : "use_erezept"
}, {
  "name" : "Zustimmung eRezept",
  "description" : "Zustimmung zur Verwendung des eRezepts",
  "id" : 0,
  "key" : "use_erezept"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all conents for a specific user
 * get all conents for a specific user
 *
 * userId Long ID of user  return
 * returns List
 **/
exports.listUserConsents = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "consentId" : 6,
  "id" : 0,
  "value" : 1
}, {
  "consentId" : 6,
  "id" : 0,
  "value" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * set a user consent
 * set a user consent
 *
 * userId Long ID of user  return
 * consentId Long ID of consent to  return
 * body UserConsent UserConsent object that needs to be added to the store
 * returns Object
 **/
exports.removeUserConsent = function(userId,consentId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * set a user consent
 * set a user consent
 *
 * userId Long ID of user  return
 * consentId Long ID of consent to  return
 * body UserConsent UserConsent object that needs to be added to the store
 * returns Object
 **/
exports.setUserConsent = function(userId,consentId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

