import net from "net";
import os from "os";
import network from "network";
import { PrismaClient } from "@prisma/client";

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
        getToBDD();
        res.status(200).send({ text: "requete GET", interface: ipa });
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
