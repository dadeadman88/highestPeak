import React, { useEffect, useRef, useState } from "react";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native-ui-lib";
import { WebView } from "react-native-webview";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IMAGES, theme, SCREENS } from "../../constants";

type RouteParams = {
  url: string;
};

const WebLink = () => {
  const webViewRef = useRef<WebView>(null);
  const navigation = useNavigation();
  const route = useRoute();
  const { url } = (route.params || {}) as RouteParams;
  const [currentUrl, setCurrentUrl] = useState<string>(url);

  useEffect(() => {
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  }, [url]);

  const injectedJS = `
    (function() {
      function hideHeader() {
        // First, aggressively target div[data-elementor-type="header"] specifically
        var headerDivs = document.querySelectorAll('div[data-elementor-type="header"]');
        headerDivs.forEach(function(element) {
          element.style.setProperty('display', 'none', 'important');
          element.style.setProperty('visibility', 'hidden', 'important');
          element.style.setProperty('opacity', '0', 'important');
          element.style.setProperty('height', '0', 'important');
          element.style.setProperty('min-height', '0', 'important');
          element.style.setProperty('max-height', '0', 'important');
          element.style.setProperty('overflow', 'hidden', 'important');
          element.style.setProperty('margin', '0', 'important');
          element.style.setProperty('padding', '0', 'important');
          // Also hide parent elements that might contain the header
          var parent = element.parentElement;
          if (parent && (parent.getAttribute('data-elementor-type') === 'header' || parent.classList.contains('elementor-location-header'))) {
            parent.style.setProperty('display', 'none', 'important');
            parent.style.setProperty('visibility', 'hidden', 'important');
            parent.style.setProperty('opacity', '0', 'important');
            parent.style.setProperty('height', '0', 'important');
            parent.style.setProperty('overflow', 'hidden', 'important');
          }
        });
        
        var selectors = [
          'div[data-elementor-type="header"]',
          '[data-elementor-type="header"]',
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
          '.main-header',
          // Footer-related selectors
          '[data-elementor-type="footer"]',
          '.elementor-location-footer',
          'footer.site-footer',
          '.site-footer',
          'footer',
          '#colophon'
        ];
        
        var jotformDiv = document.getElementById('JotformAgent-01980ba621a275e3906b74b23e9751fded35');
        if (jotformDiv) {
          jotformDiv.style.setProperty('display', 'none', 'important');
          jotformDiv.style.setProperty('visibility', 'hidden', 'important');
          jotformDiv.style.setProperty('opacity', '0', 'important');
          jotformDiv.style.setProperty('height', '0', 'important');
          jotformDiv.style.setProperty('overflow', 'hidden', 'important');
        }
        
        var scrollTopDiv = document.getElementById('ast-scroll-top');
        if (scrollTopDiv) {
          scrollTopDiv.style.setProperty('display', 'none', 'important');
          scrollTopDiv.style.setProperty('visibility', 'hidden', 'important');
          scrollTopDiv.style.setProperty('opacity', '0', 'important');
          scrollTopDiv.style.setProperty('height', '0', 'important');
          scrollTopDiv.style.setProperty('overflow', 'hidden', 'important');
        }
        
        var footerElements = document.querySelectorAll('[data-elementor-type="footer"]');
        if (footerElements.length > 0) {
          footerElements.forEach(function(footer) {
            footer.style.setProperty('display', 'none', 'important');
            footer.style.setProperty('visibility', 'hidden', 'important');
            footer.style.setProperty('opacity', '0', 'important');
            footer.style.setProperty('height', '0', 'important');
            footer.style.setProperty('overflow', 'hidden', 'important');
          });
        }
        
        var dataIdDiv = document.querySelector('[data-id="59d3cf30"]');
        if (dataIdDiv) {
          dataIdDiv.style.setProperty('display', 'none', 'important');
          dataIdDiv.style.setProperty('visibility', 'hidden', 'important');
          dataIdDiv.style.setProperty('opacity', '0', 'important');
          dataIdDiv.style.setProperty('height', '0', 'important');
          dataIdDiv.style.setProperty('overflow', 'hidden', 'important');
        }
        
        var dataIdDiv2 = document.querySelector('[data-id="281ea513"]');
        if (dataIdDiv2) {
          dataIdDiv2.style.setProperty('display', 'none', 'important');
          dataIdDiv2.style.setProperty('visibility', 'hidden', 'important');
          dataIdDiv2.style.setProperty('opacity', '0', 'important');
          dataIdDiv2.style.setProperty('height', '0', 'important');
          dataIdDiv2.style.setProperty('overflow', 'hidden', 'important');
        }
        
        var dataIdDiv3 = document.querySelector('[data-id="31c72849"]');
        if (dataIdDiv3) {
          dataIdDiv3.style.setProperty('display', 'none', 'important');
          dataIdDiv3.style.setProperty('visibility', 'hidden', 'important');
          dataIdDiv3.style.setProperty('opacity', '0', 'important');
          dataIdDiv3.style.setProperty('height', '0', 'important');
          dataIdDiv3.style.setProperty('overflow', 'hidden', 'important');
        }
        
        var dataIdDiv4 = document.querySelector('[data-id="2f98153a"]');
        if (dataIdDiv4) {
          dataIdDiv4.style.setProperty('display', 'none', 'important');
          dataIdDiv4.style.setProperty('visibility', 'hidden', 'important');
          dataIdDiv4.style.setProperty('opacity', '0', 'important');
          dataIdDiv4.style.setProperty('height', '0', 'important');
          dataIdDiv4.style.setProperty('min-height', '0', 'important');
          dataIdDiv4.style.setProperty('max-height', '0', 'important');
          dataIdDiv4.style.setProperty('overflow', 'hidden', 'important');
          dataIdDiv4.style.setProperty('margin', '0', 'important');
          dataIdDiv4.style.setProperty('padding', '0', 'important');
        }
        
        var dataIdDiv5 = document.querySelector('[data-id="6ff245"]');
        if (dataIdDiv5) {
          dataIdDiv5.style.setProperty('display', 'none', 'important');
          dataIdDiv5.style.setProperty('visibility', 'hidden', 'important');
          dataIdDiv5.style.setProperty('opacity', '0', 'important');
          dataIdDiv5.style.setProperty('height', '0', 'important');
          dataIdDiv5.style.setProperty('min-height', '0', 'important');
          dataIdDiv5.style.setProperty('max-height', '0', 'important');
          dataIdDiv5.style.setProperty('overflow', 'hidden', 'important');
          dataIdDiv5.style.setProperty('margin', '0', 'important');
          dataIdDiv5.style.setProperty('padding', '0', 'important');
        }
        
        var dataIdDiv6 = document.querySelector('[data-id="78a9e717"]');
        if (dataIdDiv6) {
          dataIdDiv6.style.setProperty('display', 'none', 'important');
          dataIdDiv6.style.setProperty('visibility', 'hidden', 'important');
          dataIdDiv6.style.setProperty('opacity', '0', 'important');
          dataIdDiv6.style.setProperty('height', '0', 'important');
          dataIdDiv6.style.setProperty('min-height', '0', 'important');
          dataIdDiv6.style.setProperty('max-height', '0', 'important');
          dataIdDiv6.style.setProperty('overflow', 'hidden', 'important');
          dataIdDiv6.style.setProperty('margin', '0', 'important');
          dataIdDiv6.style.setProperty('padding', '0', 'important');
        }
        
        var dataIdDiv7 = document.querySelector('[data-id="382662a4"]');
        if (dataIdDiv7) {
          dataIdDiv7.style.setProperty('display', 'none', 'important');
          dataIdDiv7.style.setProperty('visibility', 'hidden', 'important');
          dataIdDiv7.style.setProperty('opacity', '0', 'important');
          dataIdDiv7.style.setProperty('height', '0', 'important');
          dataIdDiv7.style.setProperty('min-height', '0', 'important');
          dataIdDiv7.style.setProperty('max-height', '0', 'important');
          dataIdDiv7.style.setProperty('overflow', 'hidden', 'important');
          dataIdDiv7.style.setProperty('margin', '0', 'important');
          dataIdDiv7.style.setProperty('padding', '0', 'important');
        }
        
        var hiddenCount = 0;
        
        selectors.forEach(function(selector) {
          var elements = document.querySelectorAll(selector);
          elements.forEach(function(element) {
            element.style.setProperty('display', 'none', 'important');
            element.style.setProperty('visibility', 'hidden', 'important');
            element.style.setProperty('opacity', '0', 'important');
            element.style.setProperty('height', '0', 'important');
            element.style.setProperty('min-height', '0', 'important');
            element.style.setProperty('max-height', '0', 'important');
            element.style.setProperty('overflow', 'hidden', 'important');
            element.style.setProperty('margin', '0', 'important');
            element.style.setProperty('padding', '0', 'important');
            hiddenCount++;
          });
        });
        
        var stickyElements = document.querySelectorAll('[style*="position: sticky"], [style*="position: fixed"]');
        stickyElements.forEach(function(element) {
          if (element.offsetHeight > 50) {
            element.style.setProperty('display', 'none', 'important');
            hiddenCount++;
          }
        });
        return hiddenCount;
      }
      
      var initialHidden = hideHeader();
      var interval = setInterval(function(){ hideHeader(); }, 200);
      setTimeout(function(){ clearInterval(interval); }, 15000);
      
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideHeader);
      }
      window.addEventListener('load', hideHeader);

      // Observe DOM mutations (SPA/content loads) - keep observer running longer
      try {
        var observer = new MutationObserver(function(){ hideHeader(); });
        observer.observe(document.documentElement || document.body, { 
          childList: true, 
          subtree: true, 
          attributes: true,
          attributeFilter: ['style', 'class']
        });
        setTimeout(function(){ observer.disconnect(); }, 60000);
      } catch (e) {}

      // Hook history API for SPA navigations
      try {
        var _pushState = history.pushState;
        history.pushState = function(){ var r = _pushState.apply(this, arguments); setTimeout(hideHeader, 50); return r; };
        var _replaceState = history.replaceState;
        history.replaceState = function(){ var r = _replaceState.apply(this, arguments); setTimeout(hideHeader, 50); return r; };
        window.addEventListener('popstate', function(){ setTimeout(hideHeader, 50); });
      } catch (e) {}
      
      function disableLongPressPreview() {
        var touchStartTime = 0;
        var longPressTimer = null;
        document.addEventListener('contextmenu', function(e) { e.preventDefault(); return false; });
        document.addEventListener('touchstart', function(e) {
          touchStartTime = Date.now();
          longPressTimer = setTimeout(function() { e.preventDefault(); }, 500);
        }, { passive: false });
        document.addEventListener('touchmove', function() {
          if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
        }, { passive: true });
        document.addEventListener('touchend', function() {
          if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
        }, { passive: true });
        document.addEventListener('selectstart', function(e) { e.preventDefault(); return false; });
        var style = document.createElement('style');
        style.id = 'header-hider-style';
        style.textContent = 'div[data-elementor-type="header"], [data-elementor-type="header"], .elementor-location-header, header.elementor-location-header, .elementor-header, header[data-elementor-type="header"], .elementor-section-wrap .elementor-section[data-elementor-type="header"], .elementor-section[data-elementor-type="header"], .elementor-location-header .elementor-section-wrap, .site-header, header.site-header, .header-wrapper, .main-header, [data-elementor-type="footer"], .elementor-location-footer, footer.site-footer, .site-footer, footer, #colophon { display: none !important; visibility: hidden !important; opacity: 0 !important; height: 0 !important; min-height: 0 !important; max-height: 0 !important; overflow: hidden !important; margin: 0 !important; padding: 0 !important; } * { -webkit-touch-callout: none !important; -webkit-user-select: none !important; user-select: none !important; -webkit-tap-highlight-color: transparent !important; } a, button { -webkit-touch-callout: none !important; -webkit-user-select: none !important; -webkit-tap-highlight-color: transparent !important; }';
        var existingStyle = document.getElementById('header-hider-style');
        if (existingStyle) {
          existingStyle.remove();
        }
        document.head.appendChild(style);
      }
      disableLongPressPreview();
    })();
    true;
  `;

  return (
    <SafeAreaContainer safeArea={true}>
      <View style={{ flex: 1, paddingHorizontal: 15, backgroundColor: "#fff" }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={IMAGES.leftIconWithColor} style={{ width: 24, height: 24, top: -15 }} />
          </TouchableOpacity>
          <Image source={IMAGES.loginLogo} style={styles.logo} resizeMode="contain" />
        </View>
        <WebView
          key={url}
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
          onNavigationStateChange={(navState) => {
            setCurrentUrl(navState.url);
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
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal:10
  },
  logo: {
    height:40,
    marginLeft: 12,
    width: "50%",
    marginBottom: 30,
  },
});

export default WebLink;



