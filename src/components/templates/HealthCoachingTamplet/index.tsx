import React from "react";
import { View, Image } from "react-native";
import { IMAGES } from "../../../constants";
import { Typography } from "../../atoms/Typography";
import { format, isBefore, startOfDay } from 'date-fns';

const HealthCoachingTamplet = ({ posts = [] }) => {
  console.log(posts)
  return (
    <View style={{ paddingHorizontal: 10 }}>
      {posts.length > 0 ? (
        posts.map((item, index) => (
          <View
            key={item.event.id || index}
            style={{
              backgroundColor: '#fff',
              borderRadius: 24,
              marginVertical: 12,
              paddingBottom: 16,
              shadowColor: '#000',
              shadowOpacity: 0.08,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <Image
              source={
                item.event.image_urls
                  ? { uri: item.event.image_urls }
                  : IMAGES.dummy
              }
              style={{
                width: '100%',
                height: 180,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
              }}
              resizeMode="cover"
            />
            <View style={{ paddingHorizontal: 16, paddingTop: 12 }}>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginBottom: 4,
                  color: '#000',
                }}
              >
                {item.event.title || "Untitled"}
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: '#666',
                  fontSize: 13,
                }}
                numberOfLines={1}
              >
                {format(new Date(item?.event.created_date), 'dd MMM, yyyy') || "No description available"}
              </Typography>
              {Array.isArray(item.entries) && item.entries.length > 0 ? (
                item.entries.map((entry, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    style={{
                      color: '#666',
                      fontSize: 13,
                    }}
                  >
                    {entry.class} : {entry.entries}
                  </Typography>
                ))
              ) : (
                <Typography
                  variant="body1"
                  style={{
                    color: '#666',
                    fontSize: 13,
                  }}
                >
                  Number of Entries: N/A
                </Typography>
              )}

            </View>
          </View>
        ))
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}
        >
          <Typography
            variant="body1"
            style={{
              fontSize: 18,
              color: '#999',
              textAlign: 'center',
            }}
          >
            You have not registered any events.
          </Typography>
        </View>
      )}
    </View>
  );
};

export default HealthCoachingTamplet;