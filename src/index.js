var cacheKey = Symbol();

export default function bind( prototype, name, descriptor ) {
  var func = descriptor.value;
  return {
    configurable: true,
    enumerable: false,
    get: function() {
      if ( !this[ cacheKey ] ) {
        this[ cacheKey ] = {};
      }
      var cache = this[ cacheKey ];
      if ( !cache[ name ] ) {
        cache[ name ] = func.bind( this );
      }
      return cache[ name ];
    }
  };
};
