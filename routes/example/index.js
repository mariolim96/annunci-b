'use strict';
const S = require('fluent-json-schema');
module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/example',
    handler: async function (request, reply) {
      return { example: true };
    },
    schema: S.object().prop('example', S.boolean()),
  });
};
