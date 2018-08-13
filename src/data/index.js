import GrandCahorsImage from "images/grand-cahors.png";
import MairieCahorsImage from "images/mairie-cahors.png";
import ServicePublicImage from "images/service-public.png";
import LaRegionImage from "images/la-region.png";
import LotDepartementImage from "images/lot-departement.jpeg";
import CAFImage from "images/caf.png";
import MonEnfantImage from "images/mon-enfant.png";
import PoleEmploiImage from "images/pole-emploi.jpg";
import AmeliImage from "images/ameli.png";
import MesAidesImage from "images/mes-aides.jpg";

const data = {
  emailDomains: ["cahors.fr", "beta.gouv.fr", "modernisation.gouv.fr"],
  GoogleSearchCustomApiKey: "AIzaSyDOhofRtJJoZSZ3Jw77Nc6_xA5rvi7fEzg",
  GoogleSearchID: "016550067971777540424:on93fby9gya",
  informations: [
    {
      link: "http://www.grandcahors.fr/IMG/html/presse.html",
      description: "Grand Cahors",
      image: GrandCahorsImage
    },
    {
      link: "http://www.mairie-cahors.fr/cahors/numero01.html",
      description: "Mairie de Cahors",
      image: MairieCahorsImage
    },
    {
      link: "https://www.service-public.fr/",
      description: "Service Public",
      image: ServicePublicImage
    },
    {
      link: "https://www.laregion.fr/",
      description: "La Région Occitanie",
      image: LaRegionImage
    },
    {
      link: "https://lot.fr/",
      description: "Le Departement Lot",
      image: LotDepartementImage
    }
  ],
  demarches: [
    {
      link:
        "https://wwwd.caf.fr/wps/portal/caffr/login/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOID_A3dPbyDDdz9A1yNDTxdzQNDXJ19DS0CjYAKIoEKDHAARwNC-sP1o8BK8JjgpR-VnpOfBHZNpGNekrFFun5UUWpaalFqkV5pEVA4o6SkoNhK1UDVoLy8XC89Pz89J1UvOT9X1QCbloz84hL9CFSV-gW5EQa6UUmV5Y6KigD8AUIi/dl5/d5/L2dBISEvZ0FBIS9nQSEh/#/signature",
      description: "Caisse d'Accolcation Familliale",
      image: CAFImage
    },
    {
      link: "http://www.mon-enfant.fr/web/guest",
      description: "Mon Enfant",
      image: MonEnfantImage
    },
    {
      link:
        "https://www.pole-emploi.fr/candidat/votre-espace-personnel-votre-tableau-de-bord-unique--@/index.jspz",
      description: "Pôle Emploi",
      image: PoleEmploiImage
    },
    {
      link:
        "https://assure.ameli.fr/PortailAS/appmanager/PortailAS/assure?_somtc=true",
      description: "Assurance Maladie",
      image: AmeliImage
    },
    {
      link: "https://mes-aides.gouv.fr/",
      description: "Mes Aides",
      image: MesAidesImage
    }
  ]
};

module.exports = data;
