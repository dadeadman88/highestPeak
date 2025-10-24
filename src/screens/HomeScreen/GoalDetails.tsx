import React from 'react';
import { View, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { IMAGES, theme, SCREEN_WIDTH } from '../../constants';
import { Typography } from '../../components/atoms/Typography';
import { CustomBtn } from '../../components/atoms/OnBoardingAtoms/OnBeardingBottomBtn';
import { onBack, navigate } from '../../navigation/RootNavigation';
import { format, isBefore, startOfDay } from 'date-fns';

const GoalDetails = () => {
  const { params }: any = useRoute();
  const slot = params?.slot || {};

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Top Image with Back Arrow */}
      <View style={{ width: '100%', height: 260 }}>
        <ImageBackground
          source={slot.image_urls ? { uri: slot.image_urls } : IMAGES.dummy}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        >
          <TouchableOpacity
            style={styles.backBtn}
            onPress={onBack}
            activeOpacity={0.7}
          >
            <Image source={IMAGES.leftIconWithColor} style={{ width: 32, height: 32 }} resizeMode="contain" />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        {/* Title */}
        <Typography textType="bold" size={theme.fontSize.large24}>
          {slot?.category_name === "fresh" ? "Fresh Cattle Classes" : "Limited Age Events"}
        </Typography>
        <Typography textType="bold" size={theme.fontSize.large20} style={{ marginBottom: 10 }}>
          {slot.title || 'Event Title'}
        </Typography>
        {/* Info Rows */}
        <View style={styles.infoRow}>
          <Image source={IMAGES.clock} style={styles.infoIcon} resizeMode="contain" />
          <Typography size={theme.fontSize.regular} color={theme.color.descColor} style={{ marginLeft: 10 }}>
            {format(new Date(slot?.created_date), 'dd MMM, yyyy')}
          </Typography>
        </View>
        {/* Description */}
        <Typography size={theme.fontSize.regular} color={theme.color.descColor} style={{ marginTop: 20, marginBottom: 30 }}>
          {slot.description || ''}
        </Typography>
        {/* Register Event Button */}
        <CustomBtn label="Register Event" onPress={() => navigate('RegisterEvent', { slot: slot })} style={{ width: '100%' }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    marginTop: 40,
    marginLeft: 16,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoIcon: {
    width: 24,
    height: 24,
    tintColor: theme.color.primary,
  },
});

export default GoalDetails;
