import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { View } from "react-native-ui-lib";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { WebView } from "react-native-webview";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { theme, IMAGES } from "../../constants";

interface ProfileProps {
  url?: string;
}

const Profile = ({ url = 'https://highestpeakclothingandapparel.com/cart' }: ProfileProps) => {
  const webViewRef = useRef<WebView>(null);
  const [currentUrl, setCurrentUrl] = useState<string>(url);
  const navigation = useNavigation();

  // Load URL only when component mounts or URL changes
  useEffect(() => {
    if (webViewRef.current) {
      // Reload the WebView only when URL changes or component mounts
      webViewRef.current.reload();
    }
  }, [url]);

  // Optional: Track when screen comes into focus (without reloading)
  useFocusEffect(
    React.useCallback(() => {
      // Just log the current URL without reloading
      console.log('Profile screen focused - Current WebView URL:', currentUrl);
    }, [currentUrl])
  );

  const injectedJS = `
    (function() {
      function hideHeader() {
        // Try multiple selectors for Elementor header
        var selectors = [
          'div[data-elementor-type="header"]',
          '.elementor-location-header',
          'header.elementor-location-header',
          '.elementor-header',
          'header[data-elementor-type="header"]',
          '.elementor-section-wrap .elementor-section[data-elementor-type="header"]',
          '.elementor-section[data-elementor-type="header"]',
          '.elementor-location-header .elementor-section-wrap',
          '.site-header',
          'header.site-header',
          '.header-wrapper',
          '.main-header'
        ];
        
        // Hide specific Jotform div
        var jotformDiv = document.getElementById('JotformAgent-01980ba621a275e3906b74b23e9751fded35');
        if (jotformDiv) {
          jotformDiv.style.setProperty('display', 'none', 'important');
          jotformDiv.style.setProperty('visibility', 'hidden', 'important');
          jotformDiv.style.setProperty('opacity', '0', 'important');
          jotformDiv.style.setProperty('height', '0', 'important');
          jotformDiv.style.setProperty('overflow', 'hidden', 'important');
          console.log('Jotform div hidden successfully');
        }
        
        // Hide scroll-to-top button
        var scrollTopDiv = document.getElementById('ast-scroll-top');
        if (scrollTopDiv) {
          scrollTopDiv.style.setProperty('display', 'none', 'important');
          scrollTopDiv.style.setProperty('visibility', 'hidden', 'important');
          scrollTopDiv.style.setProperty('opacity', '0', 'important');
          scrollTopDiv.style.setProperty('height', '0', 'important');
          scrollTopDiv.style.setProperty('overflow', 'hidden', 'important');
          console.log('Scroll-to-top button hidden successfully');
        }
        
        // Hide footer
        var footerElements = document.querySelectorAll('[data-elementor-type="footer"]');
        if (footerElements.length > 0) {
          footerElements.forEach(function(footer) {
            footer.style.setProperty('display', 'none', 'important');
            footer.style.setProperty('visibility', 'hidden', 'important');
            footer.style.setProperty('opacity', '0', 'important');
            footer.style.setProperty('height', '0', 'important');
            footer.style.setProperty('overflow', 'hidden', 'important');
          });
          console.log('Footer elements hidden successfully (' + footerElements.length + ' found)');
        }
        
        // Hide div with specific data-id
        var dataIdDiv = document.querySelector('[data-id="59d3cf30"]');
        if (dataIdDiv) {
          dataIdDiv.style.setProperty('display', 'none', 'important');
          dataIdDiv.style.setProperty('visibility', 'hidden', 'important');
          dataIdDiv.style.setProperty('opacity', '0', 'important');
          dataIdDiv.style.setProperty('height', '0', 'important');
          dataIdDiv.style.setProperty('overflow', 'hidden', 'important');
          console.log('Div with data-id="59d3cf30" hidden successfully');
        }
        
        // Hide div with another specific data-id
        var dataIdDiv2 = document.querySelector('[data-id="281ea513"]');
        if (dataIdDiv2) {
          dataIdDiv2.style.setProperty('display', 'none', 'important');
          dataIdDiv2.style.setProperty('visibility', 'hidden', 'important');
          dataIdDiv2.style.setProperty('opacity', '0', 'important');
          dataIdDiv2.style.setProperty('height', '0', 'important');
          dataIdDiv2.style.setProperty('overflow', 'hidden', 'important');
          console.log('Div with data-id="281ea513" hidden successfully');
        }
        
        // Hide div with third specific data-id
        var dataIdDiv3 = document.querySelector('[data-id="31c72849"]');
        if (dataIdDiv3) {
          dataIdDiv3.style.setProperty('display', 'none', 'important');
          dataIdDiv3.style.setProperty('visibility', 'hidden', 'important');
          dataIdDiv3.style.setProperty('opacity', '0', 'important');
          dataIdDiv3.style.setProperty('height', '0', 'important');
          dataIdDiv3.style.setProperty('overflow', 'hidden', 'important');
          console.log('Div with data-id="31c72849" hidden successfully');
        }
        
        // Hide elements with return-to-shop class
        var returnToShopElements = document.querySelectorAll('.return-to-shop');
        if (returnToShopElements.length > 0) {
          returnToShopElements.forEach(function(element) {
            element.style.setProperty('display', 'none', 'important');
            element.style.setProperty('visibility', 'hidden', 'important');
            element.style.setProperty('opacity', '0', 'important');
            element.style.setProperty('height', '0', 'important');
            element.style.setProperty('overflow', 'hidden', 'important');
          });
          console.log('Elements with class "return-to-shop" hidden successfully (' + returnToShopElements.length + ' found)');
        }
        
        var hiddenCount = 0;
        var foundElements = [];
        
        selectors.forEach(function(selector) {
          var elements = document.querySelectorAll(selector);
          elements.forEach(function(element) {
            foundElements.push(selector + ': ' + element.tagName + '.' + element.className);
            element.style.setProperty('display', 'none', 'important');
            element.style.setProperty('visibility', 'hidden', 'important');
            element.style.setProperty('opacity', '0', 'important');
            element.style.setProperty('height', '0', 'important');
            element.style.setProperty('overflow', 'hidden', 'important');
            hiddenCount++;
          });
        });
        
        // Also try to hide any sticky headers
        var stickyElements = document.querySelectorAll('[style*="position: sticky"], [style*="position: fixed"]');
        stickyElements.forEach(function(element) {
          if (element.offsetHeight > 50) { // Likely a header if it's tall
            element.style.setProperty('display', 'none', 'important');
            hiddenCount++;
          }
        });
        
        // Debug logging
        if (foundElements.length > 0) {
          console.log('Found and hidden ' + hiddenCount + ' header elements:');
          foundElements.forEach(function(info) {
            console.log('  - ' + info);
          });
        }
        
        return hiddenCount;
      }
      
      // Run immediately
      var initialHidden = hideHeader();
      
      // Keep checking every 200ms for faster response
      var interval = setInterval(function() {
        var hidden = hideHeader();
        if (hidden > 0) {
          console.log('Hidden ' + hidden + ' header elements on retry');
        }
      }, 200);
      
      // Stop after 15 seconds to save resources
      setTimeout(function() { 
        clearInterval(interval); 
        console.log('Stopped header hiding attempts after 15 seconds');
      }, 15000);
      
      // Also run when DOM is fully loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideHeader);
      }
      
      // Run on window load as well
      window.addEventListener('load', hideHeader);
      
      // Function to disable long press preview and context menu
      function disableLongPressPreview() {
        var touchStartTime = 0;
        var touchStartPosition = { x: 0, y: 0 };
        var longPressTimer = null;
        
        // Disable context menu on all elements
        document.addEventListener('contextmenu', function(e) {
          e.preventDefault();
          return false;
        });
        
        // Handle touch events more selectively
        document.addEventListener('touchstart', function(e) {
          touchStartTime = Date.now();
          touchStartPosition = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
          };
          
          // Set a timer for long press detection
          longPressTimer = setTimeout(function() {
            // This is a long press - prevent default behavior
            e.preventDefault();
          }, 500); // 500ms threshold for long press
        }, { passive: false });
        
        document.addEventListener('touchmove', function(e) {
          // Clear long press timer if user is scrolling
          if (longPressTimer) {
            clearTimeout(longPressTimer);
            longPressTimer = null;
          }
        }, { passive: true });
        
        document.addEventListener('touchend', function(e) {
          // Clear long press timer on touch end
          if (longPressTimer) {
            clearTimeout(longPressTimer);
            longPressTimer = null;
          }
        }, { passive: true });
        
        // Disable text selection which can trigger preview
        document.addEventListener('selectstart', function(e) {
          e.preventDefault();
          return false;
        });
        
        // Add CSS to disable text selection and user interaction
        var style = document.createElement('style');
        style.textContent = \`
          * {
            -webkit-touch-callout: none !important;
            -webkit-user-select: none !important;
            -khtml-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
            -webkit-tap-highlight-color: transparent !important;
          }
          a, button {
            -webkit-touch-callout: none !important;
            -webkit-user-select: none !important;
            -webkit-tap-highlight-color: transparent !important;
          }
        \`;
        document.head.appendChild(style);
        
        console.log('Long press preview disabled (scrolling enabled)');
      }
      
      // Function to handle button clicks and navigate to React Native screens
      function handleButtonNavigation() {
        console.log('Starting shop link detection...');
        
        // Find ALL links that contain /shop/ in their href
        var shopLinks = document.querySelectorAll('a[href*="/shop/"]');
        console.log('Found ' + shopLinks.length + ' shop links initially');
        
        // Also check for links with different patterns
        var allLinks = document.querySelectorAll('a');
        var shopLinksAlt = [];
        allLinks.forEach(function(link) {
          if (link.href && link.href.includes('/shop/')) {
            shopLinksAlt.push(link);
          }
        });
        console.log('Found ' + shopLinksAlt.length + ' shop links via href check');
        
        // Combine both methods
        var allShopLinks = Array.from(new Set([...shopLinks, ...shopLinksAlt]));
        console.log('Total unique shop links: ' + allShopLinks.length);
        
        // Log all found links for debugging
        allShopLinks.forEach(function(link, index) {
          console.log('Shop link ' + (index + 1) + ':', link.href, 'Classes:', link.className);
        });
        
        if (allShopLinks.length > 0) {
          allShopLinks.forEach(function(link, index) {
            // Remove any existing listeners to avoid duplicates
            link.removeEventListener('click', handleShopClick);
            link.addEventListener('click', handleShopClick);
          });
          console.log('Shop links click handlers attached to ' + allShopLinks.length + ' links');
        } else {
          console.log('No shop links found');
        }
        
        // Also handle any dynamically added links
        var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
              if (node.nodeType === 1) { // Element node
                var newShopLinks = node.querySelectorAll ? node.querySelectorAll('a[href*="/shop/"]') : [];
                if (node.matches && node.matches('a[href*="/shop/"]')) {
                  newShopLinks = [node];
                }
                
                // Also check href directly
                if (node.href && node.href.includes('/shop/')) {
                  newShopLinks = [node];
                }
                
                newShopLinks.forEach(function(link) {
                  link.removeEventListener('click', handleShopClick);
                  link.addEventListener('click', handleShopClick);
                  console.log('Dynamic shop link added:', link.href);
                });
              }
            });
          });
        });
        
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
      
      // Separate function for handling shop clicks
      function handleShopClick(e) {
        e.preventDefault(); // Prevent default link behavior
        e.stopPropagation(); // Stop event bubbling
        
        // Send message to React Native app to navigate to booking screen
        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'navigate',
            screen: 'booking'
          }));
        }
        console.log('Shop link clicked - navigating to booking screen:', this.href);
      }
      
      // Run functions immediately and on DOM ready
      disableLongPressPreview();
      handleButtonNavigation();
      
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
          disableLongPressPreview();
          handleButtonNavigation();
        });
      }
      
      window.addEventListener('load', function() {
        disableLongPressPreview();
        handleButtonNavigation();
      });
      
      // Also run detection periodically to catch late-loading links
      var detectionInterval = setInterval(function() {
        handleButtonNavigation();
      }, 2000); // Check every 2 seconds
      
      // Stop checking after 30 seconds
      setTimeout(function() {
        clearInterval(detectionInterval);
        console.log('Stopped periodic shop link detection');
      }, 30000);
      
      console.log('Header hiding script initialized. Initially hidden: ' + initialHidden + ' elements');
    })();
    true;
  `;

  return (
    <SafeAreaContainer safeArea={true}>
      <View style={{ flex: 1, paddingHorizontal: 15, backgroundColor:"#fff" }}>
        {/* Header */}
        <View style={styles.header}>
          {/* Logo */}
          <Image
            source={IMAGES.loginLogo}
            style={styles.logo}
            resizeMode="contain"
          />
          {
            /*
             <View style={styles.headerIcons}>
            <TouchableOpacity style={{ marginRight: 16 }}>
                <Image
                    source={IMAGES.notification}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  />
                  <View style={[styles.badge, {top:-7}]}>
                    <Text style={styles.badgeText}>2</Text>
                 </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartWrapper}>
                  <Image
                    source={IMAGES.cart}
                    style={{ width: 25, height: 25, resizeMode: "contain" }}
                  />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>2</Text>
                </View>
            </TouchableOpacity>
          </View>
            */
          }
         
        </View>


        {/* Commented out ScrollView content */}
        {/* 
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{paddingHorizontal:15}}>
            <Text style={styles.sectionTitle}>Discover</Text>
            <Text style={styles.subTitle}>New Collections</Text>

            <View style={styles.swiperWrapper}>
              <Swiper autoplay dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
                {dummyProducts.map((item) => (
                  <View key={item.id} style={styles.swiperCard}>
                    <Image source={{ uri: item.image }} style={styles.swiperImg} />
                    <View style={{ padding: 12 }}>
                      <Text style={styles.category}>{item.category}</Text>
                      <Text style={styles.swiperTitle}>{item.title}</Text>
                      <Text style={styles.price}>{item.price}</Text>
                    </View>
                  </View>
                ))}
              </Swiper>
            </View>
          </View>

          <View style={{paddingHorizontal:15, marginTop:20}}>
            <Text style={[styles.sectionTitle, {textAlign:"center"}]}>Find Your Fit</Text>
            <Text style={[styles.subTitle, {textAlign:"center"}]}>Latest Collections</Text>
          </View>
          

          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={renderProduct}
            numColumns={2}
            contentContainerStyle={{ paddingVertical: 16 }}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            showsVerticalScrollIndicator={false}
          />

        </ScrollView>
        */}

        {/* WebView with enhanced props for debugging */}
        <WebView
          key={url} // Force re-render when URL changes
          ref={webViewRef}
          source={{ uri: url }}
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={false}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          injectedJavaScript={injectedJS}
          injectedJavaScriptBeforeContentLoaded={injectedJS}
          onMessage={(event) => {
            const message = event.nativeEvent.data;
            console.log('WebView message:', message);
            
            try {
              const data = JSON.parse(message);
              
              // Handle navigation commands from website
              if (data.type === 'navigate') {
                switch (data.screen) {
                  case 'profile':
                    navigation.navigate('Profile' as never);
                    break;
                  case 'subscription':
                    navigation.navigate('Subscription' as never);
                    break;
                  case 'booking':
                    navigation.navigate('Booking' as never);
                    break;
                  case 'exercise':
                    navigation.navigate('Exercise' as never);
                    break;
                  case 'workout':
                    navigation.navigate('Workout' as never);
                    break;
                  case 'notification':
                    navigation.navigate('Notification' as never);
                    break;
                  case 'home':
                    navigation.navigate('Home' as never);
                    break;
                  default:
                    console.log('Unknown screen:', data.screen);
                }
              }
            } catch (error) {
              // Handle non-JSON messages
              console.log('Non-JSON message:', message);
            }
          }}
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
          onLoadEnd={() => {
            console.log('WebView loaded successfully');
          }}
          onNavigationStateChange={(navState) => {
            setCurrentUrl(navState.url);
            console.log('WebView navigated to:', navState.url);
          }}
          mixedContentMode="compatibility"
          thirdPartyCookiesEnabled={true}
          allowsBackForwardNavigationGestures={true}
        />
 

     
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal:10
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
  },
  logo: {
    height:40,
    width: "50%",
    marginBottom: 30,
  },
  headerIcons: {
    flexDirection: "row",
    width:"50%",
    justifyContent:"flex-end",
    height:40,
    alignItems:"center"
  },
  cartWrapper: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -10,
    right: -8,
    backgroundColor: theme.color.primary || "brown",
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 4,
    minWidth: 20,
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: theme.color.primary,
  },
  subTitle: {
    fontSize: 14,
    color: "#777",
    marginVertical: 5,
  },
  swiperWrapper: {
    height: 400,
    borderRadius: 20,
    overflow: "hidden",
    paddingHorizontal:10,
    marginVertical:10
  },
  swiperCard: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  swiperImg: {
    width: "100%",
    height: 260,
    resizeMode: "cover",
  },
  swiperTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign:"center"
  },
  dot: {
    backgroundColor: "#ccc",
    width: 6,
    height: 6,
    borderRadius: 3,
    marginBottom: -10
  },
  activeDot: {
    backgroundColor: theme.color.primary,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: -10
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardImg: {
    width: "100%",
    height: 140,
    borderRadius: 10,
    marginBottom: 10,
  },
  category: {
    fontSize: 12,
    color: "#8c7b75",
    marginBottom: 4,
    textAlign:"center"
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    textAlign:"center"
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#C5AC8E",
    marginVertical:10,
    textAlign:"center"
  },
  optionBtn: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 2,
    paddingVertical: 12,
    alignItems: "center",
  },
  optionText: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default Profile;
