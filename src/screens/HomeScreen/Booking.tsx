import React, { useState, useRef, useEffect } from "react";
import SafeAreaContainer from "../../containers/SafeAreaContainer";
import { theme, IMAGES } from "../../constants";
import {
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Linking,
} from "react-native";
import { View } from "react-native-ui-lib";
import { WebView } from "react-native-webview";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

interface BookingProps {
  url?: string;
}

const Booking = ({ url = 'https://highestpeakclothingandapparel.com/shop' }: BookingProps) => {
  const webViewRef = useRef<WebView>(null);
  const [currentUrl, setCurrentUrl] = useState<string>(url);
  const navigation = useNavigation();

  useEffect(() => {
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  }, [url]);

  useFocusEffect(
    React.useCallback(() => {
      console.log('Booking focused - Current WebView URL:', currentUrl);
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
        
        // Hide div with fourth specific data-id
        var dataIdDiv4 = document.querySelector('[data-id="2f98153a"]');
        if (dataIdDiv4) {
          dataIdDiv4.style.setProperty('display', 'none', 'important');
          dataIdDiv4.style.setProperty('visibility', 'hidden', 'important');
          dataIdDiv4.style.setProperty('opacity', '0', 'important');
          dataIdDiv4.style.setProperty('height', '0', 'important');
          dataIdDiv4.style.setProperty('overflow', 'hidden', 'important');
          console.log('Div with data-id="2f98153a" hidden successfully');
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
      
      // Function to handle cat-item link clicks and navigate to WebLink screen
      function handleCatItemNavigation() {
        console.log('Starting cat-item link detection...');
        
        // Find all list items with class cat-item
        var catItemListItems = document.querySelectorAll('li.cat-item');
        console.log('Found ' + catItemListItems.length + ' cat-item list items');
        
        // Find anchor tags inside those list items
        var catItemLinks = [];
        catItemListItems.forEach(function(li) {
          var anchor = li.querySelector('a');
          if (anchor) {
            catItemLinks.push(anchor);
          }
        });
        
        console.log('Found ' + catItemLinks.length + ' cat-item links inside list items');
        
        // Log all found links for debugging
        catItemLinks.forEach(function(link, index) {
          console.log('Cat-item link ' + (index + 1) + ':', link.href, 'Parent LI classes:', link.parentElement ? link.parentElement.className : 'none');
        });
        
        if (catItemLinks.length > 0) {
          catItemLinks.forEach(function(link) {
            // Remove any existing listeners to avoid duplicates
            link.removeEventListener('click', handleCatItemClick);
            link.addEventListener('click', handleCatItemClick);
          });
          console.log('Cat-item links click handlers attached to ' + catItemLinks.length + ' links');
        } else {
          console.log('No cat-item links found');
        }
        
        // Also handle any dynamically added links
        var catItemObserver = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
              if (node.nodeType === 1) { // Element node
                var newCatItemLinks = [];
                
                // Check if node itself is a cat-item list item
                if (node.matches && node.matches('li.cat-item')) {
                  var anchor = node.querySelector('a');
                  if (anchor) {
                    newCatItemLinks.push(anchor);
                  }
                }
                
                // Check if node has cat-item class and is a list item
                if (node.classList && node.classList.contains('cat-item') && node.tagName === 'LI') {
                  var anchor = node.querySelector('a');
                  if (anchor) {
                    newCatItemLinks.push(anchor);
                  }
                }
                
                // Find cat-item list items within the node and get their anchors
                if (node.querySelectorAll) {
                  var nestedListItems = node.querySelectorAll('li.cat-item');
                  nestedListItems.forEach(function(li) {
                    var anchor = li.querySelector('a');
                    if (anchor) {
                      newCatItemLinks.push(anchor);
                    }
                  });
                }
                
                newCatItemLinks.forEach(function(link) {
                  link.removeEventListener('click', handleCatItemClick);
                  link.addEventListener('click', handleCatItemClick);
                  console.log('Dynamic cat-item link added:', link.href);
                });
              }
            });
          });
        });
        
        catItemObserver.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
      
      // Separate function for handling cat-item clicks
      function handleCatItemClick(e) {
        e.preventDefault(); // Prevent default link behavior
        e.stopPropagation(); // Stop event bubbling
        
        var href = this.href || this.getAttribute('href');
        if (!href) {
          console.log('Cat-item link has no href');
          return;
        }
        
        // Send message to React Native app to navigate to WebLink screen with URL
        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'navigate',
            screen: 'weblink',
            url: href
          }));
        }
        console.log('Cat-item link clicked - navigating to WebLink screen with URL:', href);
      }
      
      // Function to handle privacy policy link clicks
      function handlePrivacyPolicyNavigation() {
        console.log('Starting privacy policy link detection...');
        
        // Find all links with class woocommerce-privacy-policy-link
        var privacyLinks = document.querySelectorAll('a.woocommerce-privacy-policy-link');
        console.log('Found ' + privacyLinks.length + ' privacy policy links');
        
        if (privacyLinks.length > 0) {
          privacyLinks.forEach(function(link) {
            // Remove any existing listeners to avoid duplicates
            link.removeEventListener('click', handlePrivacyPolicyClick);
            link.addEventListener('click', handlePrivacyPolicyClick);
          });
          console.log('Privacy policy links click handlers attached to ' + privacyLinks.length + ' links');
        } else {
          console.log('No privacy policy links found');
        }
        
        // Also handle any dynamically added links
        var privacyObserver = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
              if (node.nodeType === 1) { // Element node
                var newPrivacyLinks = [];
                
                // Check if node itself is a privacy policy link
                if (node.matches && node.matches('a.woocommerce-privacy-policy-link')) {
                  newPrivacyLinks.push(node);
                }
                
                // Find privacy policy links within the node
                if (node.querySelectorAll) {
                  var nestedLinks = node.querySelectorAll('a.woocommerce-privacy-policy-link');
                  nestedLinks.forEach(function(link) {
                    newPrivacyLinks.push(link);
                  });
                }
                
                newPrivacyLinks.forEach(function(link) {
                  link.removeEventListener('click', handlePrivacyPolicyClick);
                  link.addEventListener('click', handlePrivacyPolicyClick);
                  console.log('Dynamic privacy policy link added:', link.href);
                });
              }
            });
          });
        });
        
        privacyObserver.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
      
      // Separate function for handling privacy policy clicks
      function handlePrivacyPolicyClick(e) {
        e.preventDefault(); // Prevent default link behavior
        e.stopPropagation(); // Stop event bubbling
        
        // Send message to React Native app to open URL in external browser
        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'openExternalUrl',
            url: 'https://highestpeakclothingandapparel.com/privacy-policy-2/'
          }));
        }
        console.log('Privacy policy link clicked - opening in external browser');
      }
      
      // Function to handle product_type_variable navigation
      function handleProductTypeVariableNavigation() {
        console.log('Starting product_type_variable detection...');
        
        // Find ALL anchors with product_type_variable class
        var productLinks = document.querySelectorAll('a.product_type_variable');
        console.log('Found ' + productLinks.length + ' product_type_variable links initially');
        
        // Log all found links for debugging
        productLinks.forEach(function(link, index) {
          console.log('Product link ' + (index + 1) + ':', link.href, 'Classes:', link.className);
        });
        
        if (productLinks.length > 0) {
          productLinks.forEach(function(link) {
            // Remove any existing listeners to avoid duplicates
            link.removeEventListener('click', handleProductTypeVariableClick);
            link.addEventListener('click', handleProductTypeVariableClick);
          });
          console.log('Product type variable click handlers attached to ' + productLinks.length + ' links');
        } else {
          console.log('No product_type_variable links found');
        }
        
        // Also handle any dynamically added links
        var productObserver = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
              if (node.nodeType === 1) { // Element node
                var newProductLinks = [];
                
                // Check if the node itself is a product_type_variable link
                if (node.classList && node.classList.contains('product_type_variable') && node.tagName === 'A') {
                  newProductLinks.push(node);
                }
                
                // Check for product_type_variable children
                if (node.querySelectorAll) {
                  var children = node.querySelectorAll('a.product_type_variable');
                  newProductLinks = newProductLinks.concat(Array.from(children));
                }
                
                newProductLinks.forEach(function(link) {
                  link.removeEventListener('click', handleProductTypeVariableClick);
                  link.addEventListener('click', handleProductTypeVariableClick);
                  console.log('Dynamic product_type_variable link added:', link.href);
                });
              }
            });
          });
        });
        
        productObserver.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
      
      // Separate function for handling product_type_variable clicks
      function handleProductTypeVariableClick(e) {
        e.preventDefault(); // Prevent default link behavior
        e.stopPropagation(); // Stop event bubbling
        
        var href = this.href || this.getAttribute('href');
        console.log('Product type variable clicked - navigating to WebLink with URL:', href);
        
        // Send message to React Native app to navigate to WebLink screen with URL
        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'navigate',
            screen: 'weblink',
            url: href
          }));
        }
      }
      
      // Function to handle woocommerce-LoopProduct-link navigation
      function handleWooCommerceLinkNavigation() {
        console.log('Starting woocommerce-LoopProduct-link detection...');
        
        // Find ALL anchors with woocommerce-LoopProduct-link class
        var wooCommerceLinks = document.querySelectorAll('a.woocommerce-LoopProduct-link');
        console.log('Found ' + wooCommerceLinks.length + ' woocommerce-LoopProduct-link links initially');
        
        // Log all found links for debugging
        wooCommerceLinks.forEach(function(link, index) {
          console.log('WooCommerce link ' + (index + 1) + ':', link.href, 'Classes:', link.className);
        });
        
        if (wooCommerceLinks.length > 0) {
          wooCommerceLinks.forEach(function(link) {
            // Remove any existing listeners to avoid duplicates
            link.removeEventListener('click', handleWooCommerceLinkClick);
            link.addEventListener('click', handleWooCommerceLinkClick);
          });
          console.log('WooCommerce link click handlers attached to ' + wooCommerceLinks.length + ' links');
        } else {
          console.log('No woocommerce-LoopProduct-link links found');
        }
        
        // Also handle any dynamically added links
        var wooCommerceObserver = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
              if (node.nodeType === 1) { // Element node
                var newWooCommerceLinks = [];
                
                // Check if the node itself is a woocommerce-LoopProduct-link
                if (node.classList && node.classList.contains('woocommerce-LoopProduct-link') && node.tagName === 'A') {
                  newWooCommerceLinks.push(node);
                }
                
                // Check for woocommerce-LoopProduct-link children
                if (node.querySelectorAll) {
                  var children = node.querySelectorAll('a.woocommerce-LoopProduct-link');
                  newWooCommerceLinks = newWooCommerceLinks.concat(Array.from(children));
                }
                
                newWooCommerceLinks.forEach(function(link) {
                  link.removeEventListener('click', handleWooCommerceLinkClick);
                  link.addEventListener('click', handleWooCommerceLinkClick);
                  console.log('Dynamic woocommerce-LoopProduct-link added:', link.href);
                });
              }
            });
          });
        });
        
        wooCommerceObserver.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
      
      // Separate function for handling woocommerce-LoopProduct-link clicks
      function handleWooCommerceLinkClick(e) {
        e.preventDefault(); // Prevent default link behavior
        e.stopPropagation(); // Stop event bubbling
        
        var href = this.href || this.getAttribute('href');
        console.log('WooCommerce link clicked - navigating to WebLink with URL:', href);
        
        // Send message to React Native app to navigate to WebLink screen with URL
        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'navigate',
            screen: 'weblink',
            url: href
          }));
        }
      }
      
      // Run functions immediately and on DOM ready
      disableLongPressPreview();
      handleButtonNavigation();
      handleCatItemNavigation();
      handlePrivacyPolicyNavigation();
      handleProductTypeVariableNavigation();
      handleWooCommerceLinkNavigation();
      
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
          disableLongPressPreview();
          handleButtonNavigation();
          handleCatItemNavigation();
          handlePrivacyPolicyNavigation();
          handleProductTypeVariableNavigation();
          handleWooCommerceLinkNavigation();
        });
      }
      
      window.addEventListener('load', function() {
        disableLongPressPreview();
        handleButtonNavigation();
        handleCatItemNavigation();
        handlePrivacyPolicyNavigation();
        handleProductTypeVariableNavigation();
        handleWooCommerceLinkNavigation();
      });
      
      // Also run detection periodically to catch late-loading links
      var detectionInterval = setInterval(function() {
        handleButtonNavigation();
        handleCatItemNavigation();
        handlePrivacyPolicyNavigation();
        handleProductTypeVariableNavigation();
        handleWooCommerceLinkNavigation();
      }, 2000); // Check every 2 seconds
      
      // Stop checking after 30 seconds
      setTimeout(function() {
        clearInterval(detectionInterval);
        console.log('Stopped periodic link detection');
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
                  case 'weblink':
                    if (data.url) {
                      (navigation as any).navigate('WebLink', { url: data.url });
                    } else {
                      console.log('WebLink navigation requested but no URL provided');
                    }
                    break;
                  default:
                    console.log('Unknown screen:', data.screen);
                }
              }
              
              // Handle external URL opening
              if (data.type === 'openExternalUrl' && data.url) {
                Linking.openURL(data.url).catch((err) => {
                  console.error('Failed to open URL:', err);
                });
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

export default Booking;
