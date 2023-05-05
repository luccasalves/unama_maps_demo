import {
  AspectRatio,
  Box,
  Image,
  Center,
  Stack,
  Heading,
  Text,
  HStack,
} from "native-base";

interface CardProps {
  img: string;
  title: string;
  subtitle: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  img = "https://www.unama.br/sites/unama.br/files/styles/galleria_zoom/public/galeria/estruturaFisica/1eca2a911181f2dba08e09e510abe061/laboratorio_de_informatica-_bloco_e_-_cmapus_alcindo_cacela.jpg?itok=vyuw7gta",
}) => (
  <Box alignItems="center">
    <Box
      maxW="80"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: img,
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="emerald.600"
          _dark={{
            bg: "violet.400",
          }}
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        >
          IMAGEM ILUSTRATIVA
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {title}
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: "emerald.500",
            }}
            _dark={{
              color: "violet.400",
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            {subtitle}
          </Text>
        </Stack>
        <Text fontWeight="400">
          O prédio da UNAMA na Alcindo Cacela é o mais antigo da Universidade da
          Amazônia e abriga diversos centros de ensino e pesquisa. Na estrutura,
          laboratórios modernos, auditórios, estúdios de TV, Fotografia e Rádio,
          além de uma infinidade de serviços.
        </Text>
        <HStack
          alignItems="center"
          space={4}
          justifyContent="space-between"
        ></HStack>
      </Stack>
    </Box>
  </Box>
);
