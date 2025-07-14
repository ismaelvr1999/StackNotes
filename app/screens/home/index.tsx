import { ScrollView, Text, View, Button, Pressable } from "react-native"
import styles from "./styles";
import Card from "../../components/card/card";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Notes</Text>
            <ScrollView> 
                <View style={styles.row}>
                    <Card title="Untitle" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Nesciunt ad aspernatur, quidem repudiandae, dignissimos sunt necessitatibus suscipit re
                     iciendis delectus vel, consequatur iste? Optio sit dolore minus voluptas libero suscipit et."></Card>
                    <Card title="Untitle" content=" Lo "></Card>
                </View>
            </ScrollView>
            <Pressable style={styles.addNote}>
                <Text style={{color:"white",fontSize: 16}}>Add task</Text>
            </Pressable>
        </View>
    )
};

export default Home;