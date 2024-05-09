import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import AboutScreen from './AboutScreen';
import CustomTabBar from '../components/CustomTabBar';

const MainScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef(null);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    if (pagerRef.current) {
      pagerRef.current.setPage(pageNumber);
    }
  };

  return (
    <View style={styles.container}>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={e => setCurrentPage(e.nativeEvent.position)}
      >
        <View key="1">
          <HomeScreen />
        </View>
        <View key="2">
          <SettingsScreen />
        </View>
        <View key="3">
          <AboutScreen />
        </View>
      </PagerView>
      <CustomTabBar navigation={{ navigate: handlePageChange }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  pagerView: {
    flex: 1,
  }
});

export default MainScreen;
