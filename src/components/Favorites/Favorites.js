import React from 'react';
import {
    View,
    ActivityIndicator,
    FlatList,
    StyleSheet,
    StatusBar,
} from 'react-native';
import Colors from '../../res/Colors';
import Storage from '../../libs/storage';
import BadgesItem from '../BadgesScreen/BadgesItem';
import exampleStyles from '../../styles/example';
import Loader from '../Generics/Loader';

class Favorites extends React.Component {
    state={
        loading: false,
        badges: undefined,
    };

    componentDidMount = () => {
        this.getFavorites();
        this.focusEvent();
    };
// this one is to get the favorites badges in the list
    getFavorites = async () => {
        this.setState({loading: true, badges: undefined});
        try {
            const allKeys = await Storage.instance.getAllKeys();
            const keys = allKeys.filter(key => key.includes('favorite-'));
            const favs = await Storage.instance.multiGet(keys);
            const favorites = favs.map(fav => JSON.parse(fav[1]));
            this.setState({loading: false, badges: favorites});
        } catch (err) {
            console.log('get favorites', err);
        }
    };
// this is for getting the badges detail even when we are on favorites screen
    handlePress = item => {
        this.props.navigation.navigate('FavoritesDetails', {item});
    };
// this is to bring the favorites
    focusEvent = () => {
        this.focusListener = this.props.navigation.addListener('focus', () => {
            this.getFavorites();
        });
    };
//and here we call the method focus listener
    componentWillUnmount = () => {
        this.focusListener();
    };

    render(){
        const {badges, loading} = this.state

        if(loading===true && !badges){
           <Loader />
        }
        return(
            <View 
                style={[
                    styles.favoritesContainer, 
                    exampleStyles.container, 
                    exampleStyles.horizontal,
            ]}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <FlatList 
                    style={styles.list}
                    data={badges}
                    renderItem={({item}) => (
                        <BadgesItem item={item} onPress={() => this.handlePress(item)} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    favoritesContainer: {
        paddingTop: 45,
    },  
    list: {
        width: '100%',
        paddingHorizontal: 10,
    },
});

export default Favorites;