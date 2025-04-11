// WebAssembly

let module = new WebAssembly.Module(Uint8Array.from([0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00]));
let instance = new WebAssembly.Instance(module);    // "WebAssembly"   (module)   (instance)   (WebAssembly.Module)   (WebAssembly.Instance)