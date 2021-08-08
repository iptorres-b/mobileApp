import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import UserSesion from '../../libs/sessions';
import Colors from '../../res/Colors';

class Profile extends React.Component {
    state = {
        user: {
            profile: {},
        },
        token: '',
        picture: {},
    };

    componentDidMount = () => {
        this.getUserData()
    }
//in the profile screen this function will help us bring the data of our user
    getUserData = async () => {
        let user = await UserSesion.instance.getUser()
        console.log(user.username)
        let token = await UserSesion.instance.getToken(user.username)
        this.setState({ user: user, token: token })
        console.log(this.state)
    }
//this method is to choose a different photo, to upload it
    handleChooseProfileImage = () => {
        const options = {
            includeBase64: false,
            mediaType: 'photo',
        }

        launchImageLibrary(options, response => {
            if (!response.didCancel) {
                let photo = response.assets[0].uri
                this.setState({ picture: photo })
                this.editProfilePicture()
            }
        })

    }
//this is to edit the profile picture
    editProfilePicture = async () => {
        const { user, token, picture } = this.state
        let response = await UserSesion.instance.editProfile(
            user.id,
            token,
            picture,
        )
        console.log(response)
        this.setState({ user: response })
    }

    render() {
        const { user } = this.state;

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <View style={styles.badge}>
                    <Image
                        style={styles.header}
                        source={{ uri: `${user.profile.hero_badge}` }}
                    />
                    <Image
                        style={styles.profileImage}
                        source={{ uri: `${user.profile.profile_pic}` }}
                    />
                    <TouchableOpacity
                        style={styles.profileEdit}
                        onPress={this.handleChooseProfileImage}>
                        <Image
                            style={styles.camera}
                            source={require('../../assets/camera.png')}
                        />
                    </TouchableOpacity>

                    <View style={styles.userInfo}>
                        <Text style={styles.name}>
                            {user.first_name} {user.last_name}
                        </Text>
                        <Text style={styles.age}>{user.profile.age}</Text>
                    </View>
                    <Text style={styles.city}>{user.profile.city}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.charade,
    },
    badge: {
        margin: 20,
        marginTop: 90,
        width: '90%',
        height: '80%',
        backgroundColor: Colors.white,
        borderRadius: 20,
    },
    header: {
        width: '100%',
        height: '30%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    profileImage: {
        width: 160,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 100,
        borderWidth: 5,
        borderColor: Colors.white,
        position: 'absolute',
        top: 130,
        left: '23%',
    },
    profileEdit: {
        width: 35,
        height: 35,
        padding: 5,
        borderRadius: 20,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 100,
        top: 260,
    },
    camera: {
        flex: 2,
        width: '100%',
        height: '100%',
    },
    userInfo: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center',
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.blackPearl,
    },
    age: {
        fontSize: 28,
        color: Colors.zircon,
        marginLeft: 20,
    },
    city: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
        color: Colors.zircon,
    },
    data: {
        padding: 20,
        marginTop: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: Colors.zircon,
    },
    dataColumns: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dataInfo: {
        marginTop: 20,
        fontSize: 28,
        fontWeight: 'bold',
        marginHorizontal: 25,
        color: Colors.charade,
    },
    smallText: {
        color: Colors.zircon,
    },
});

export default Profile;