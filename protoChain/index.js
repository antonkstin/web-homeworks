import o3 from 'goss_proto';

function getPrototype(obj) {
  const prototype = Object.getPrototypeOf(obj);
  return prototype !== null ? obj.name + ' ' + getPrototype(prototype) : obj.name;
}

console.log(getPrototype(o3.o3).split(' '));