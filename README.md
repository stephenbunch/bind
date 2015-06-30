```js
import bind from '@stephenbunch/bind';

class Foo {
  @bind bar() {
    return this;
  }
}

var foo = new Foo();
expect( foo.bar.call( undefined ) ).to.equal( foo );
```
