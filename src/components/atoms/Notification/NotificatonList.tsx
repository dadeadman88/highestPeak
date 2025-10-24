import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { Text, View } from "react-native-ui-lib";
import { Typography } from "../Typography";
import { IMAGES, theme } from "../../../constants";
import { commonStyles } from "../../../globalStyle";
import axios from "axios";
import { endpoints, BASE_URL} from '../../../utils/Endpoints';
import { useSelector } from "react-redux";
import { States } from "../../../utils/types";
import { onBack, navigate } from "../../../navigation/RootNavigation";

const NotificationList = (props: any) => {
  const { onPress } = props;
  const { user } = useSelector((state: States) => state.Auth);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async (isRefreshing = false) => {
    if (!isRefreshing) setLoading(true);
    try {
      const url = `${BASE_URL}${endpoints.NotificationList}`;
      const token = user?.access_token;
  
      console.log("Full URL:", url);
      console.log("Token:", token);
  
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      const resData = response?.data?.response?.data ?? [];
      console.log(resData)
      setData(resData);
      setError(false);
    } catch (err: any) {
      console.error("Error fetching notifications:", err.message);
      setError(true);
    } finally {
      if (!isRefreshing) setLoading(false);
      setRefreshing(false);
    }
  };

  const _renderItem = ({ item }: any) => {
    return (
      <>
        <TouchableOpacity onPress={() => navigate('GoalDetails', { slot: item.object_detail })}>
          <View row marginV-20>
            <Image
              source={{ uri: item.object_detail.image_urls }}
              style={{ width: 65, height: 65 }}
              resizeMode="contain"
            />
            <View marginL-10 marginT-10 flex>
              <View row spread>
                <Typography size={theme.fontSize.medium} textType="semiBold">
                  {item.object_detail.title}
                </Typography>
                <Typography color={theme.color.descColor} size={theme.fontSize.small}>
                  {item.created_date || "--:--"}
                </Typography>
              </View>
              <Typography
                style={{ width: "70%" }}
                color={theme.color.descColor}
                size={theme.fontSize.extraSmall12}
              >
                {item.message || "No details available"}
              </Typography>
            </View>
          </View>
          <View style={commonStyles.lineBar} />
        </TouchableOpacity>
      </>
    );
  };

  if (loading) {
    return (
      <View center flex>
        <ActivityIndicator size="large" color={theme.color.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View center flex padding-20>
        <Typography textType="semiBold" size={14} color="red">
          Failed to load notifications. Please try again later.
        </Typography>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      {data.length === 0 ? (
        <View center flex>
          <Typography size={14} color={theme.color.descColor}>
            No notifications found.
          </Typography>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item: any, index) => item?.id?.toString() || index.toString()}
          showsVerticalScrollIndicator={false}
          onRefresh={() => {
            setRefreshing(true);
            getData(true);
          }}
          refreshing={refreshing}
        />
      )}
    </View>
  );
};

export default NotificationList;