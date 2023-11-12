import { View, Text } from 'react-native';

import React from 'react'

type Props = {
    text: string;
    color: string;
}

export const Index: React.FC<Props> = ({text = 'Hello world!', color = 'red'}) => {
    return <View>
        <Text style={{padding:10,color:color}}>{text}</Text>
    </View>
}
Index.defaultProps = {
    color: 'red',
    text: 'Added For React Navigation Knowledge :)'
}
