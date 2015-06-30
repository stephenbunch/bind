import bind from '../src/index';

describe( '@bind', function() {
  it( 'should bind the context of a given method to the object instance that it is defined on', function() {
    class Test {
      @bind foo() {
        return this;
      }
    }

    var obj = new Test();
    expect( obj.foo() ).to.equal( obj );
    expect( obj.foo.call( undefined ) ).to.equal( obj );
  });
});
