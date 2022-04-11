import network from "network";
import { PrismaClient } from "@prisma/client";

const IpToBinString = (ip) => {
  //Crée une liste des octets de l'adresse entrée
  let arrayNetmask = ip.split(".");
  //Convertit chaque octet en valeur binaire
  for (let i = 0; i <= arrayNetmask.length - 1; i++) {
    const number = arrayNetmask[i];
    const bin = parseInt(number).toString(2).padStart(8, "0");
    arrayNetmask[i] = bin;
  }

  return arrayNetmask.join("");
};
const getPrivateIp = async () =>
  new Promise((resolve, reject) =>
    network.get_private_ip((err, ip) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(ip);
    })
  );

const getBroadcast = async (ip) =>
  new Promise((resolve, reject) =>
    network.get_active_interface((err, interfaceObj) => {
      if (err) {
        reject(err);
        return;
      }
      //Récupération du masque réseau en une seule string des valeurs binaires
      const stringMask = IpToBinString(interfaceObj["netmask"]);
      //Récupère l'indice du premier zero dans la string binaire du masque
      const firstZero = stringMask.indexOf("0");
      //Récupère l'ip de l'interface en une seule string des valeurs binaires
      const ipStringBin = IpToBinString(ip);
      //Garde la partie réseau de l'ip de l'interface
      const baseSlice = ipStringBin.slice(0, firstZero);
      //Ajoute tous les bits à 1 pour créer l'addresse de broadcast en fonction du masque
      const broadcastBin = baseSlice + "1".repeat(32 - firstZero);
      //Créer une liste de string où chaque élément contient une valeur en binaire (un octet par élément)
      let arrayBroadcast = broadcastBin.match(/.{1,8}/g);
      let broadcast = [];
      //Transforme chaque élément (binaire) en valeur décimale
      arrayBroadcast.forEach((elem) => {
        broadcast.push(parseInt(elem, 2));
      });
      //Renvoie l'adresse de broadcast sous forme de string et le masque
      resolve({
        broadcast: broadcast.join("."),
        mask: interfaceObj["netmask"],
      });
    })
  );
const getToBDD = async (obj) => {
  const prisma = new PrismaClient();
  const device = await prisma.device
    .create({
      data: {
        username: "A2L2",
        address: "127.0.0.2",
      },
    })
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET": {
      try {
        const ipa = await getPrivateIp();
        const broadcast = await getBroadcast(ipa);
        //getToBDD();
        res.status(200).send({
          text: "requete GET",
          interface: ipa,
          broadcast: broadcast,
        });
      } catch (error) {
        res.status(400).json({});
      }
      break;
    }
    case "POST": {
      try {
        const data_user = await userSchema.create(req.body);
        res.status(200).json({ data: data_user });
      } catch (error) {
        res.status(400).json({});
      }
    }
  }
};
