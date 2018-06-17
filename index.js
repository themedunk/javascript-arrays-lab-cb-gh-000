const app = "I don't do much."
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name);

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  return kitten.shift();
}
function appendKitten(name) {
  var cats = kittens;
  cats.push(name)
  return cats;
}
function removeLastKitten() {
  var cats = kittens;
  cats.pop();
  return cats;
}
function removeFirstKitten() {
  var cats = kittens;
  cats.shift();
  return cats;
}
