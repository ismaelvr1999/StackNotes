import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { FlatList } from 'react-native-gesture-handler';
import { View, Text, ColorValue } from "react-native";
import { Ref, useMemo } from 'react';
import styles from './bottomSheetColors.styles';
import noteColors from "@constants/noteColors";
const BottomSheetColors = ({ bottomSheetRef }: { bottomSheetRef: Ref<BottomSheet> | undefined }) => {
    const colorsList = useMemo(()=> Object.keys(noteColors),[]);
    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            backgroundStyle={styles.backgroundStyle}
            enablePanDownToClose>
            <BottomSheetView style={{ padding: 10 }}>
                <Text style={styles.title}>
                    Colors
                </Text>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={colorsList}
                    keyExtractor={color => color}
                    renderItem={(color) => {
                        return (
                            <View
                                style={{backgroundColor: color.item, ...styles.colorContainer}}
                            >
                                
                            </View>
                        );
                    }}
                >
                </FlatList>
            </BottomSheetView>
        </BottomSheet>
    );
}

export default BottomSheetColors;