const config = {
  googleSearchCustomApiKey: "AIzaSyDJ7jHYE3lVrmGVG-k2053MYm3G42vBwJA",
  googleSearchID: "014493046936990876322:vavb8pqe6g8",
  get googleSearchURL() {
    return `https://www.googleapis.com/customsearch/v1?key=${
      this.googleSearchCustomApiKey
    }&cx=${this.googleSearchID}&q=`;
  },
  servicePublicURL: "www.service-public.fr",
  servicePublicURLInfo: {
    info: "F",
    demarche: "R",
    actualite: "A",
    dossier: "N"
  }
};

module.exports = config;
