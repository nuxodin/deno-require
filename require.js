import { createRequire } from "https://deno.land/std/node/module.ts";

thisGlobal.require = function(path) {
  var e = new Error();
  var calledFile = e.stack.split("\n")[2].replace(/^ +at /, '').replace(/:[0-9]+:[0-9]+/,'');
  var requireFunction = createRequireFromPath(calledFile);
  return requireFunction(path);
}

/*
todo: test if this works
Object.defineProperty(thisGlobal, 'require', {
  get:function(){
  
  }
})
*/
