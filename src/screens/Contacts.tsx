import React from "react";
import { Button, Heading, VStack, Image, Center } from "native-base";
import { PageView } from "../components/PageView";
import ButtonLinking from "../components/ButtonLinking";
import { Linking } from "react-native";

const ContactsScreen: React.FC = () => {
  function openTest() {
    Linking.canOpenURL("https://expo.dev").then((res) => {
      if (res) {
        Linking.openURL("https://expo.dev");
      }
    });
  }
  return (
    <PageView>
      <VStack space={4}>
        <Center>
          <Image
            source={require("../../assets/unama_logo.png")}
            alt="logo unama"
            size={200}
          />
        </Center>
        <Heading textAlign={"center"}>Conecte-se com a unama</Heading>

        <ButtonLinking url="www.unama.br/" title="Site oficial" />
        <ButtonLinking url="cra.sereducacional.com/" title="CRA" />
        <ButtonLinking
          url="www.instagram.com/unamaoficial/"
          title="@unamaoficial"
        />
        <ButtonLinking
          url="www.instagram.com/computacaounamabelem/"
          title="@cursos computação belém"
        />
      </VStack>
    </PageView>
  );
};

export default ContactsScreen;
