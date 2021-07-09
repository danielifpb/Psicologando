import React from 'react';
import { 
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Modal,
    ScrollView 
} from 'react-native'; 
 
import { styles } from './styles';

import {Header} from '../../components/Header';

import Image0 from '../../assets/imageMotivacion/image0.jpg';
import Image1 from '../../assets/imageMotivacion/image1.jpg';
import Image2 from '../../assets/imageMotivacion/image2.jpg';
import Image3 from '../../assets/imageMotivacion/image3.jpg';
import Image4 from '../../assets/imageMotivacion/image4.jpg';
import Image5 from '../../assets/imageMotivacion/image5.jpg';
import Image6 from '../../assets/imageMotivacion/image6.jpg';
 
export class MotivationPanel extends React.Component {
    state = {
        modalVisible: false,
        modalImage: Image0,
        images: [
            Image0,
            Image1,
            Image2,
            Image3,
            Image4,
            Image5,
            Image6,
        ]
    }

    setModalVisible(visible, imageKey){
        this.setState({ modalImage: this.state.images[imageKey]});
        this.setState({ modalVisible: visible});
    }

    getImage(){
        return this.state.modalImage;
    }

    render(){

        let images = this.state.images.map((val, key)=> {
                return <TouchableWithoutFeedback key={key}
                        onPress={() => { this.setModalVisible(true, key)}}>
                            <View style={styles.imagewrap}>
                                <Image source={val} style={{flex:1, width: null, alignSelf:'stretch'}}/>
                            </View>
                        </TouchableWithoutFeedback>
        });

        return (
            <View style={styles.container}>
                 <Header 
                    headerTitle="Painel Motivacional" 
                />
                <ScrollView>
                    <View style={styles.content}>

                        <Modal style={styles.modal} animationType={'fade'}
                                transparent={true} visible={this.state.modalVisible}
                                onRequestClose={() => {}}>

                                <View style={styles.modal}> 
                                    <Text 
                                        style={styles.text} 
                                        onPress={() => {this.setModalVisible(false)}}
                                    >
                                        Fechar
                                    </Text>

                                    <Image source={this.state.modalImage} style={{flex:1, width: null, alignSelf:'stretch'}}/>

                                </View>             
                        </Modal>

                        {images}
                    </View>
                </ScrollView>
            </View>
        );
    }
}


