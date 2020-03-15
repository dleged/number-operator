require('./index.js');
//import 'number-operator'

console.log(0.1+0.2);
console.log(0.3-0.1);
console.log(0.1*0.2);
console.log(0.3/0.2);

console.log((0.1)._plus_(0.2));
console.log((0.3)._minus_(0.1));
console.log((0.1)._times_(0.2));
console.log((0.3)._div_(0.2));

console.log((0.3)._minus_(0.1)._plus_(0.1));
console.log(('0.3')._minus_(0.1)._plus_('0.1'));