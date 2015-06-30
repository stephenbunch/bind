require( '@stephenbunch/buildpack/register' )( require( 'gulp' ), {
  template: 'library',
  options: {
    projectDir: __dirname,
    name: 'bind'
  }
});
