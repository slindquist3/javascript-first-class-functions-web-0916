function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  function yeah () { console.log("yeah")}
  return yeah
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("yeah");
  }
}
