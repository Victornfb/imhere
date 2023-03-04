import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Participant from "../../components/Participant";
import { styles } from "./styles";

export default function Home() {
  const nomes: string[] = [
    "Victor",
    "Noeme",
    "Renata",
    "Sidnei",
    "Manoel",
    "Victor",
    "Noeme",
    "Renata",
    "Sidnei",
    "Manoel",
    "Victor",
    "Noeme",
    "Renata",
    "Sidnei",
    "Manoel",
  ];

  function handleParticipantAdd() {
    console.log(`Você clicou no botão de adicionar`);
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou no botão de remover ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta-feira, 04 de março de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={nomes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            onRemove={() => handleParticipantRemove(item)}
            name={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista
            de presença!
          </Text>
        )}
      />
    </View>
  );
}
