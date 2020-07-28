const { Engine } = require("velocity");

const velocityDataPrivate = require("./velocity.private.data.json");
const velocityData = require("./velocity.data.prod.json");


const engine = new Engine({ template: "./dist/statics/index.vm" || "./src/index.vm" });

module.exports = data => {
  return engine.render({
    ...velocityData,
    ...velocityDataPrivate,
    ...data
  });
};
