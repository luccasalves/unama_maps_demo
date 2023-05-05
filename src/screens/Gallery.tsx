import { Box, Button, Divider, Text, VStack } from "native-base";
import React from "react";
import { View } from "react-native";
import { PageView } from "../components/PageView";
import { Card } from "../components/Card";

const GalleryScreen: React.FC = () => {
  let data = [
    {
      title: "Bloco A",
      subtitle: "Bloco de salas - parte central do unama ",
      img: "http://www.unama.br/sites/unama.br/files/styles/galleria_zoom/public/galeria/estruturaFisica/ea9fb16063f1b2c1194d3272b4c00b60/-010612_-_tratada_final.jpg?itok=23O-52xj",
    },

    {
      title: "Laboratórios",
      subtitle: "laboratório de informática - bloco L",
      img: "http://www.unama.br/sites/unama.br/files/styles/galleria_zoom/public/galeria/estruturaFisica/1eca2a911181f2dba08e09e510abe061/laboratorio_de_informatica-_bloco_e_-_cmapus_alcindo_cacela.jpg?itok=vyuw7gta",
    },
    {
      title: "Bloco B",
      subtitle: "Bloco de salas - parte centra-oeste do unama ",
      img: "http://www.unama.br/sites/unama.br/files/styles/galleria_zoom/public/galeria/estruturaFisica/3af5753ac5328a67b624fc49a1122ffc/-010593_-_tratada_final.jpg?itok=O34x2n72",
    },
    {
      title: "Studio de rádio",
      subtitle: "laboratório de informática - bloco L",
      img: "http://www.unama.br/sites/unama.br/files/styles/galleria_zoom/public/galeria/estruturaFisica/1eca2a911181f2dba08e09e510abe061/laboratorio_de_comunicacao_-_estudio_de_radio-bloco_e-campus_alcindo_cacela.jpg?itok=b_i9jfhr",
    },
  ];
  return (
    <PageView>
      <VStack space={8}>
        {data.map((d, i) => (
          <Card key={i} img={d.img} subtitle={d.subtitle} title={d.title} />
        ))}
      </VStack>
    </PageView>
  );
};

export default GalleryScreen;
