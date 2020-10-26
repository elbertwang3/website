// const d3 = require("d3");
module.exports = {
  /**
   * Any Google Doc and Google Sheet files to be synced with this project.
   */
  files: [
    // {
    //   fileId: "1Yrs4SU9f15hWeS308uIUrDyFA5j7x9IvPArRSgZVf28",
    //   type: "doc",
    //   name: "datum",
    // },
    {
      fileId: "1FWteK89WtlICE8gRyJMF5YsRefKCXYwvundjfi_QtDg",
      type: "sheet",
      name: "data",
    },
    // {
    //   fileId: "128ssXlXKpnW_KViDvpGs0pCXS3Rf7UiwRekSHb4yGbk",
    //   type: "sheet",
    //   name: "edu",
    // },
  ],
  /**
   * The dataMutators option makes it possible to modify what's returned by
   * the data fetchers. This is a good place to restructure the raw data, or
   * to do joins with other data you may have.
   *
   * Example:
   * dataMutators: {
   *   // the function name should match one of the `name` values in `files`
   *   votes(originalData) {
   *   // what you return in this function is what ends up in the JSON file
   *   return originalData;
   * },
  },
   */
  dataMutators: {},

  /**
   * `createAPI` makes it possible to bake out a series of JSON files that get
   * deployed with your project. This is a great way to break up data that users
   * only need a small slice of based on choices they make. The toolkit expects
   * this to return an array of objects. Each object should have a "key" and
   * a "value" - the "key" determines the URL, the "value" is what is saved at
   * that URL.
   */
  createAPI(data) {
    return null;
  },
};
