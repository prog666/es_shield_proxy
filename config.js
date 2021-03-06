module.exports = {
  "proxy": {
    "listen_port": 9201
  },
  "elastic": {
    "host": "localhost",
    "port": 9200,
    "using_ssl": false,
    "username": "",
    "password": ""
  },
  "limits": {
    "termsForbiddenFields": [
      'message', 'msg', 'query_string', 'request', 'request_args',
      'request_path', 'request_uri', '_id', 'data.request', 'data.url',
      'referrer'
    ],
    termsMaxSize: 40,
    searchMaxRange: 60*60*24*7,
    searchMaxFacets: 20,
    searchMaxRPS: 3,
    searchMaxDelay: 300000
  }
 };
