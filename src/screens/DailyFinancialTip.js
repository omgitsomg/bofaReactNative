import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
} from 'react-native';
import React, { useState } from 'react';

import figmaColors from '../res/figmaColors';
import fonts from '../res/fonts';
import { useNavigation } from '@react-navigation/native';

// This page is for the Daily Financial Tip

/*************************************************************************************************
 * The reason why there are screen and window is due to Android
 * Android devices may have a bottom menubar on their screen
 * Screen are the dimensions without the menubar
 * Window are the dimensions with the menubar
 * Screen will be bigger than Window
*************************************************************************************************/

// Create two constants to hold the image
// Create a 
const inactiveBookmark = require('../res/images/inactiveBookmark.png');
const activeBookmark = require('../res/images/activeBookmark.png');
const bookmarks = { inactiveBookmark, activeBookmark };

const DailyFinancialTip = () => {
    const navigation = useNavigation();

    

    const [inactive, setActive] = useState(bookmarks.inactiveBookmark);

    return (
        <ImageBackground source={require('../res/images/dailyFinancialTipBackground.png')} style={styles.container}>
            <View>
                {/* This will be the top portion of the screen with the back button and bookmark button */}
                <View style={styles.topContainer}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                            <View style={styles.backButtonContainer}>
                                <Image source={require('../res/images/financialTipBackArrow.png')} />
                                <Text style={styles.whiteTextStyle}>Back</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.bookmarkContainer}>
                        <TouchableOpacity onPress={() => {
                            if(inactive === bookmarks.inactiveBookmark)
                            {
                                setActive(bookmarks.activeBookmark)
                            }
                            else
                            {
                                setActive(bookmarks.inactiveBookmark)
                            }
                        }}>
                            <Image source={ inactive } />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* This will be the middle portion of the screen with daily financial tip text */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Check to see if your credit card has any deals on gas to save money as gas prices rise.</Text>
                    <ScrollView>
                        <Text style={styles.subtext}>
                        With oil prices reaching their highest level since 2014 after Russia attacked Ukraine on Thursday,
                        the effect could potentially be felt in higher gas prices that may come as the U.S. is already experiencing its highest level of inflation in 40 years. {'\n'} {'\n'}
                        Rhule shared five tips for how to save money in multiple areas: {'\n'} {'\n'}
                        Check to see if your credit card has any deals on gas, as some cards will give you double points or cash back for gas purchases.
                        </Text>
                    </ScrollView>

                </View>
                
                {/* This will be the bottom portion of the screen with the back button and bookmark button */}
                <View style={styles.botContainer}>
                    <Text style={styles.whiteTextStyle}> DAILY FINANCIAL TIP</Text>
                    <Text style={styles.dateStyle}> DATE GOES HERE </Text>

                </View>

            </View>
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    topContainer: {
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center', // center of the container, which has a height of 10% of the viewing port
    },
    textContainer: {
        height: '80%',
        width: '85%',
        borderRadius: 20,
        backgroundColor: figmaColors.primaryOffWhite,
    },
    botContainer: {
        height: '10%',
        alignItems: 'flex-end'
    },
    backButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bookmarkContainer: {
        paddingLeft: 225
    },
    title: {
        fontFamily: fonts.mainFont,
        fontWeight: '700',
        fontSize: 24,
        alignItems: 'center',
        textAlign: 'center',
        color: figmaColors.primaryOffBlack,
        padding: 20
    },
    subtext: {
        fontFamily: fonts.mainFont,
        fontWeight: '400',
        fontSize: 18,
        padding: 30,
        color: figmaColors.primaryOffBlack
    },
    whiteTextStyle: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        color: figmaColors.primaryOffWhite
    },
    dateStyle: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        color: figmaColors.primaryOffWhite
    }
})

export default DailyFinancialTip;