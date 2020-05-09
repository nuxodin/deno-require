import { createRequire } from "https://deno.land/std@v0.42.0/node/module.ts";

/**
 * @global
 * @param {string} path - required module
 */
export function require(path) {
    const e = new Error();
    const calledFile = e.stack.split("\n")[2].replace(/^ +at /, '').replace(/:[0-9]+:[0-9]+/,'');
    const requireFunction = createRequire(calledFile);
    return requireFunction(path);
}

/**
 * makes the require function global
 */
export function globalize(){
    globalThis.require = require;
}



// todo: test if this works
// Object.defineProperty(globalThis, 'require', {
//   get:function(){ ...
//   }
// })
