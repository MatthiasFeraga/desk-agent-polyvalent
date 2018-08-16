const config = {
  googleSearchCustomApiKey: "AIzaSyDOhofRtJJoZSZ3Jw77Nc6_xA5rvi7fEzg",
  googleSearchID: "016550067971777540424:on93fby9gya",
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
