const test=require('node:test'),assert=require('node:assert');test('runtime',()=>assert.equal(typeof require('./server'),'function'));
