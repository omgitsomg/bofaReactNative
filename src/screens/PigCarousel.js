import {
    Text,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import React, 
        {useCallback,
        useRef,
        useState} from 'react';
import figmaColors from '../res/figmaColors';
import LinearGradient from 'react-native-linear-gradient';
import OrangeButton from "../components/OrangeButton";
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';
import { Pagination } from 'react-native-snap-carousel';

const pigItem = [
    {
        ImagePath: require('../res/images/piggy_cycle1.png')
    },
    {
        ImagePath: require('../res/images/piggy_2.png')
    },
    {
        ImagePath: require('../res/images/piggy_3.png')
    },
    {
        ImagePath: require('../res/images/piggy_4.png')
    },
    {
        ImagePath: require('../res/images/piggy_5.png')
    },
    {
        ImagePath: require('../res/images/piggy_6.png')
    },
]


// This page is for the Terms & Conditions page with the Privacy Policy
function PigCarousel (props) {

    // This is used for the Pagination
    // activeIndex is the current value
    // setActiveIndex is a function that changes activeIndex
    // The useState initializes activeIndex to 0
    const [activeIndex, setActiveIndex] = useState(() => {
        return 0
    });

    // This is used for the carousel
    // carouselItems is the current Item
    // setCarouselItem is the function that changes carouselItems
    // The useState initializes carouselItems to the array of cardItems
    // defined at the top
    const [carouselItems, setCarouselItem] = useState(pigItem);

    const ref = useRef(null);

    const renderPigItem = useCallback(({item, index}) => (
        <View style={styles.subcontainer}>
            <Image source={require('../res/images/leftArrow.png')} />
            <Image style={styles.imageSize} source={ item.ImagePath } />
            <Image source={require('../res/images/rightArrow.png')} />
        </View>
    ), []);


    return (
        <LinearGradient  
            colors={[figmaColors.primaryGreen, figmaColors.primaryTeal]}
            style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.title}>Choose Your Piggy!</Text>
                <Text style={styles.subtitle}>You can change your pig later</Text>
            </View>

            <View>
                <Carousel
                        layout="default"
                        ref={ref}
                        data={carouselItems}
                        sliderWidth={390}
                        itemWidth={340}
                        renderItem={renderPigItem}
                        onSnapToItem={(index) => setActiveIndex(index)}
                />
                <Pagination 
                    dotsLength={pigItem.length}
                    carouselRef={ref}
                    activeDotIndex={activeIndex}
                    dotStyle={styles.activeDotStyle}
                    inactiveDotStyle={styles.inactiveDotStyle}
                    inactiveDotOpacity={0.5}
                    inactiveDotScale={1}
                />
            </View>
            <OrangeButton
                text='confirm'
                navigatepage='HomePage'
            />

        </LinearGradient>
    )
}

// Note:
// Using paddingBottom or padding on the pagination does will increase the size of the dots
// Use marginBottom to increase the padding between the pagination dots and the siblings in the container

const styles = StyleSheet.create({
    // This is the main container that controls the WHOLE screen
    container: {
        flex: 1,
        paddingTop: 30
    },
    // Be care of adding left and bottom attributes when pulling from figma
    // This acts as the card container
    subcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 30,
        height: 400,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 5,
    },
    header: {
        paddingBottom: 30
    },
    // This refers to the main title of the Pig Carousel
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 40,
        fontWeight: '800',
        color: figmaColors.primaryOffWhite,
        textAlign: 'center'
    },
    // This refers to the subtitle of the card
    subtitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: '400',
        color: figmaColors.primaryOffWhite,
        textAlign: 'center'
    },
    imageSize: {
        width: 250,
        height: 250,
        resizeMode: 'contain' // Adding resizeMode with contain will resize the image without having the image clipped
    },
    activeDotStyle: {
        width: 15,
        height: 15,
        borderRadius: 10,
        marginHorizontal: 3,
        marginBottom: 25, // This will push/add margins between the dots and other elements
        backgroundColor: figmaColors.primaryOffWhite
    },
    inactiveDotStyle: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        backgroundColor: 'transparent'
    }

});

export default PigCarousel;