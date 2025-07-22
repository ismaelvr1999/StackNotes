import ButtonIcon from "@components/buttonIcon/buttonIcon";

type HearderProps = {
    onBack: ()=> void;
}
const Hearder = ({ onBack }: HearderProps) => {
    return (
        <ButtonIcon
            nameIcon="arrow-back"
            accessibilityLabel="go back"
            onPress={onBack}
        />
    );
}

export default Hearder;