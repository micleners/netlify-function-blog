const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const url = 'https://api.github.com/users/micleners/repos';
  const response = await fetch(url);
  const json = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(json),
  };
};
