import { fonts } from "@/hooks/useCacheResources";
import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flexGrow: 1,
    },
    tagStylesModal: {
        borderRadius: 10,
        backgroundColor: "#F0F4F0",
        marginVertical: 10,
        alignSelf: "center",
    },
    tag: {
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    tagTextNormal: {
        fontSize: 18,
        fontFamily: fonts.primary.semibold,
    },
    imageContainer: {
        position: 'relative',
    },
    mainImage: {
        width: width,
        borderRadius: 32,
        resizeMode: 'cover',
        paddingHorizontal: 10,
    },
    circleButton: {
        width: 55,
        height: 55,
        borderRadius: 33,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 4,
    },
    downArrowButton: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        width: 55,
        height: 55,
        borderRadius: 33,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    crossButton: {
        position: 'absolute',
        top: -10,
        right: 110
    },
    detailsContainer: {
        paddingHorizontal: 10,
        paddingVertical: 24,
    },
    generateSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    counter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '40%',
        paddingLeft: 0,
        paddingRight: 10,
    },
    button: {
        backgroundColor: "#EDEBEE",
        borderRadius: 16,
        padding: 15,
    },
    countContainer: {
        borderRadius: 20,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    countText: {
        fontSize: 26,
        color: "#000",
        fontFamily: fonts.primary.bold,
    },
    generatedImageContainer: {
        margin: 5,
        marginTop: 0,
        backgroundColor: "#f0f0f0",
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        borderWidth: 2,
        borderColor: 'white',
    },
    selectedImageContainer: {
        borderColor: 'black',
    },
    generatedImage: {
        width: 116,
        height: 116,
        resizeMode: 'cover',
    },
    checkmarkContainer: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 12,
        padding: 2,
    },
    selectionActions: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    crossIcon: { position: 'absolute', right: 30, top: 30 }
});