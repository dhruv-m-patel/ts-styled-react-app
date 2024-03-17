declare module 'meddleware' {
  function meddleware(middleware: any);
  export = meddleware;
}

declare module 'shortstop-handlers' {
  function path(dir: string);
  function require(path: string);
  function env();
}

declare module 'shortstop-regex' {
  function shortStopRegex();
  export = shortStopRegex;
}
