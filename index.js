'use strict';

const request = require('request-promise-native');
const urlParse = require('url').parse;
const isUrl = require('is-url');
const isImage = require('is-image');

module.exports = async (url) => {
  if (!url) return false;
  const http = url.lastIndexOf('http');
  if (http != -1) url = url.substring(http);
  if (!isUrl(url)) return isImage(url);
  let pathname = urlParse(url).pathname;
  if (!pathname) return false;
  // Remove query string from url
  const last = pathname.search(/[:?&]/);
  if (last != -1) pathname = pathname.substring(0, last);
  try {
    const res = await request({
      method: 'HEAD',
      uri: url,
      resolveWithFullResponse: true,
    });
    if (!res) return false;
    if (!(res.statusCode >= 200 && res.statusCode < 300)) return false;
    const headers = res.headers;
    if (!headers) return false;
    const contentType = headers['content-type'];
    if (!contentType) return false;
    return contentType.search(/^image\//) != -1;
  } catch (e) {
    return false;
  }
};