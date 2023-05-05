import { Button } from "native-base";
import React from "react";
import { Alert, Linking } from "react-native";

// import { Container } from './styles';
interface ButtonLinkingProps {
  title: string;
  url?: string;
}

const ButtonLinking: React.FC<ButtonLinkingProps> = ({ title, url }) => {
  function openLink() {
    Linking.canOpenURL(`https://${url}`).then((res) => {
      if (res) {
        Linking.openURL(`https://${url}`);
      } else {
        Alert.alert("Não foi possível abrir essa página");
      }
    });
  }

  return (
    <Button colorScheme={"emerald"} onPress={openLink}>
      {title}
    </Button>
  );
};

export default ButtonLinking;
