const iter = Deno.fsEvents("./dist");
for await (const event of iter) {
  console.log(">>>> event", event);
  // { kind: "create", paths: [ "/foo.txt" ] }
}