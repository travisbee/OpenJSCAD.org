// title      : Cube with Parameter
// author     : Travis Bee
// license    : MIT License
// revision   : 0
// tags       : Cube
// file       : Cube-Param.jscad

function getParameterDefinitions() {
  return [
    {
      name: 'size', 
      type: 'float', 
      initial: 20,
      caption: "Size of the cube:", 
    },
  ];
}

function main (params) {
  return cube({size: params.size, center: true});
}
