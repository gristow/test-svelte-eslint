let a = 'dupe';

if (false) {
  console.log('false');
} else if (a === 'dupe') {
  console.log('dupe');
// should complain about duplicate if-else:
} else if (a === 'dupe') {
  console.log('dupe');
}
throw 'literal should trigger eslint';

console.log('unreachable should trigger eslint');
