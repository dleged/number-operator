# number-operator
> Because JS uses the IEEE 754 double version (64-bit), and it has this problem as long as it uses the IEEE 754 language. So when we calculate the number operation, there will be a precision error


# Installation

```bash
npm install -D number-operator
```

# Usage
> Normal environment computing
```
> console.log(0.1+0.2); 
0.30000000000000004 ❌

> console.log(0.3-0.1);
0.19999999999999998 ❌

> console.log(0.1*0.2);
0.020000000000000004 ❌

> console.log(0.3/0.2);
1.4999999999999998 ❌

```
> use number-operator
```
require('number-operator');
or
//import 'number-operator'

> console.log((0.1)._plus_(0.2));
0.3 🙆

> console.log((0.3)._minus_(0.1));
0.2 🙆

> console.log((0.1)._times_(0.2));
0.02 🙆

> console.log((0.3)._div_(0.2));
1.5 🙆

```
> chained call

```
> console.log((0.3)._minus_(0.1)._plus_(0.1));
0.3 🙆
```

>String type can also be used

```
> console.log(('0.3')._minus_(0.1)._plus_('0.1'));
0.3 🙆
```
