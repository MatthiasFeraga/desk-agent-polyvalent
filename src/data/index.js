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
import LaBonneBoiteImage from "images/la-bonne-boite.png";
import LaBonneFormationImage from "images/la-bonne-formation.jpg";
import ReseauAPlusImage from "images/a-plus.png";

const data = {
  emailDomains: ["cahors.fr", "beta.gouv.fr", "modernisation.gouv.fr"],
  encartTypes: {
    informations: "informations",
    demarches: "demarches",
    reseau: "reseau"
  },
  informations: [
    {
      name: "Grand Cahors",
      link: "http://www.grandcahors.fr/IMG/html/presse.html",
      description: "Grand Cahors",
      image: GrandCahorsImage
    },
    {
      name: "Mairie de Cahors",
      link: "http://www.mairie-cahors.fr/cahors/numero01.html",
      description: "Mairie de Cahors",
      image: MairieCahorsImage
    },
    {
      name: "Service Public",
      link: "https://www.service-public.fr/",
      description: "Service Public",
      image: ServicePublicImage
    },
    {
      name: "La Région Occitanie",
      link: "https://www.laregion.fr/",
      description: "La Région Occitanie",
      image: LaRegionImage
    },
    {
      name: "Le Departement Lot",
      link: "https://lot.fr/",
      description: "Le Departement Lot",
      image: LotDepartementImage
    }
  ],
  demarches: [
    {
      name: "Caisse d'Allocation Familliale",
      link:
        "https://wwwd.caf.fr/wps/portal/caffr/login/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOID_A3dPbyDDdz9A1yNDTxdzQNDXJ19DS0CjYAKIoEKDHAARwNC-sP1o8BK8JjgpR-VnpOfBHZNpGNekrFFun5UUWpaalFqkV5pEVA4o6SkoNhK1UDVoLy8XC89Pz89J1UvOT9X1QCbloz84hL9CFSV-gW5EQa6UUmV5Y6KigD8AUIi/dl5/d5/L2dBISEvZ0FBIS9nQSEh/#/signature",
      description: "Site des allocations familiales",
      image: CAFImage
    },
    {
      name: "Mon Enfant",
      link: "http://www.mon-enfant.fr/web/guest",
      description: "Aide à trouver la solution d'accueil souhaitée",
      image: MonEnfantImage
    },
    {
      name: "Pôle Emploi",
      link:
        "https://www.pole-emploi.fr/candidat/votre-espace-personnel-votre-tableau-de-bord-unique--@/index.jspz",
      description: "Espace personnel Pôle Emploi",
      image: PoleEmploiImage
    },
    {
      name: "Assurance Maladie",
      link:
        "https://assure.ameli.fr/PortailAS/appmanager/PortailAS/assure?_somtc=true",
      description:
        "Compte ameli : suivi de remboursement, démarches en ligne, attestations...",
      image: AmeliImage
    },
    {
      name: "Mes Aides",
      link: "https://mes-aides.gouv.fr/",
      description:
        "Evaluez vos droits à 25 aides sociales. En moins de 7 minutes.",
      image: MesAidesImage
    },
    {
      name: "La bonne boite",
      link: "https://labonneboite.pole-emploi.fr/",
      description:
        "Trouvez les entreprises qui embauchent sans déposer d'offres d'emploi !",
      image: LaBonneBoiteImage
    },
    {
      name: "La bonne formation",
      link: "https://labonneformation.pole-emploi.fr/",
      description:
        "Trouvez une formation en fonction de votre profil ET du marché du travail.",
      image: LaBonneFormationImage
    }
  ],
  reseau: [
    {
      name: "Réseau A+",
      link: "https://beta.gouv.fr/startup/aplus.html",
      description:
        "La communauté des A+ vous aide à résoudre les blocages administratifs.",
      image: ReseauAPlusImage
    }
  ]
};

module.exports = data;
