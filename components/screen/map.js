import { useNavigation } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
const navigation = useNavigation()
navigation.navigate("map");

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

import { load } from '@2gis/mapgl';

export const Map = () => {
    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [55.31878, 25.23584],
                zoom: 13,
                key: 'Your API access key',
            });
        });

        // Destroy the map on unmount
        return () => map && map.destroy();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
};

const MapWrapper = React.memo(
    () => {
        return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
    },
    () => true,
);

export const App = () => {
    return (
        <div style={{ width: '100%', height: 400 }}>
            <Map />
        </div>
    );
};