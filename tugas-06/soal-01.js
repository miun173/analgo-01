#!/usr/bin/env node

function main() {
  const mtx = [
    [0,1,1,0,0,0,0,0],
    [1,0,1,1,1,0,0,0],
    [1,1,0,0,1,0,1,1],
    [0,1,0,1,1,0,0,0],
    [0,1,1,1,0,1,0,0],
    [0,0,0,0,1,0,0,0],
    [0,0,1,0,0,0,0,1],
    [0,0,1,0,0,0,1,0]
  ];

  mtx.forEach(m => console.log(m))
}

main();