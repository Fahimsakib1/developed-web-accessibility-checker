// const retext = require('retext');
// const retextReadability = require('retext-readability')
// const english = require('retext-english')
// const reporter = require('vfile-reporter')
// const retextProfanities = require('retext-profanities')

function text(paragraph) {
  (async () => {
    // Dynamically import the modules
    const retext = await import("retext");
    const retextReadability = await import("retext-readability");
    const english = await import("retext-english");
    const retextProfanities = await import("retext-profanities");

    // Your logic here
    const file = await retext()
      .use(english)
      .use(retextReadability)
      .use(retextProfanities)
      .process(paragraph);

    console.log(String(file));
    console.error("XXXXXXXXXXXX FILE XXXXXXXXXXXXXXX", reporter(file));
  })();

  // (async () => {
  //     const retextModule = await import('retext');
  //     console.log('Retext Module:', retextModule);
  // })();
}

export default text;