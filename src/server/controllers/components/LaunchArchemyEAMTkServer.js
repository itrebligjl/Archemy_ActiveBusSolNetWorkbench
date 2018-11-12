const jre = require('node-jre');

const output = jre.spawnSync(
  ['java/ArchemyEAMTkServer.jar'],
  'ArchemyEAMTkServer',
  [''],
  { encoding: 'utf8' }
).stdout.trim();

console.log(output === 'Testing');
