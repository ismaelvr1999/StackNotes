import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { FlatList } from 'react-native-gesture-handler';
import { View, Text } from "react-native";
import { Ref, useMemo } from 'react';
import styles from './bottomSheetColors.styles';
import noteColors from "@constants/noteColors";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, sizes } from "@constants/index";
import { Pressable } from 'react-native';
type Props = {
    bottomSheetRef: Ref<BottomSheet> | undefined;
    handleChangeColor: (color:string) => void;
    noteColor: string
}

const BottomSheetColors = ({ bottomSheetRef,handleChangeColor,noteColor }: Props) => {
    const colorsList = useMemo(() => Object.values(noteColors), []);
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
                            <Pressable
                                onPress={() => handleChangeColor(color.item)}
                            >
                                
                            <View
                                style={{ backgroundColor: color.item, ...styles.colorContainer }}
                            >
                                {color.item === noteColor &&
                                    <Icon name="done" size={sizes.FONT_XL} color={colors.ICON} />
                                }
                            </View>
                            </Pressable>
                        );
                    }}
                >
                </FlatList>
            </BottomSheetView>
        </BottomSheet>
    );
}

export default BottomSheetColors;