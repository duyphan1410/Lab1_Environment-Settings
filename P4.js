import { useState } from "react";
import React  from "react";
import { Text,Button,View } from "react-native";

export default () => {
    const [preesCount, setPressCount ] = useState(0);
    
    return (
        <View style={{alignItems:'center',marginTop:20}}>
            <Text>You 've pressed the button: {preesCount} time(s)</Text>
            <Button
                title={`Press ${preesCount} time(s)`}
                onPress={() => setPressCount(preesCount+1)}
            >
            </Button>
        </View>
    )
};