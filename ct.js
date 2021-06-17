// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

// @ts-nocheck
/* eslint-disable */

let System, __inst, __inst_s;

(() => {
  const mMap = new Map();
  System = {
    register(id, d, f) {
      mMap.set(id, { id, d, f, exp: {} });
    }
  };

  const gC = (data, main) => {
    const { id } = data;
    return {
      id,
      import: async id => mMap.get(id)?.exp,
      meta: { url: id, main }
    };
  };

  const gE = ({ exp }) => {
    return (id, v) => {
      const vs = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(vs)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true
        });
      }
    };
  };

  const iQ = [];

  const enq = ids => {
    for (const id of ids) {
      if (!iQ.includes(id)) {
        const { d } = mMap.get(id);
        iQ.push(id);
        enq(d);
      }
    }
  };

  const gRQ = main => {
    const rQ = [];
    let id;
    while ((id = iQ.pop())) {
      const m = mMap.get(id),
        { f } = m;
      if (!f) return;
      rQ.push([m.d, f(gE(m), gC(m, id === main))]);
      delete m.f;
    }
    return rQ;
  };

  const dr = async main => {
    const rQ = gRQ(main);
    let r;
    while ((r = rQ.shift())) {
      const [d, { execute, setters }] = r;
      for (let i = 0; i < d.length; i++) setters[i](mMap.get(d[i])?.exp);
      const e = execute();
      if (e) await e;
    }
  };

  const dr_s = main => {
    const rQ = gRQ(main);
    let r;
    while ((r = rQ.shift())) {
      const [d, { execute, setters }] = r;
      for (let i = 0; i < d.length; i++) setters[i](mMap.get(d[i])?.exp);
      execute();
    }
  };

  __inst = async id => {
    System = __inst = __inst_s = undefined;
    enq([id]);
    await dr(id);
    return mMap.get(id)?.exp;
  };

  __inst_s = id => {
    System = __inst = __inst_s = undefined;
    enq([id]);
    dr_s(id);
    return mMap.get(id)?.exp;
  };
})();

"use strict";
// import sass from 'https://dev.jspm.io/sass';
async function run() {
    const result = await Deno.compile('./jsx.tsx', undefined, {
        lib: ['esnext']
    });
    console.log(JSON.stringify(result));
    await Deno.writeFile("result.json", new TextEncoder().encode(JSON.stringify(result)));
    const [diagnostics, emitMap] = result;
    const [sourcemap, source] = Object.keys(emitMap);
    await Deno.writeFile("result.js", new TextEncoder().encode(emitMap[source]));
}
;
// function css(){
//     const result = sass.renderSync({
//         file: `./style.scss`
//     });
//     return result;
// }
// console.log(css())

__inst_s("compiler-test");
