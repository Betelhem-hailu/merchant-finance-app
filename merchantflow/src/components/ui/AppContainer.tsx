import { ScrollView } from "react-native";

export default function AppContainer({ children, style }: { children: React.ReactNode; style?: any }) {
    return (
        <ScrollView contentContainerStyle={[styles.container, style]}>
            {children}
        </ScrollView>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "flex-start",
        // height: "80%",
        padding: 30,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: "rgba(242, 206, 211, 0.38)"   
    },
};