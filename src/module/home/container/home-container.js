import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Dialog, {DialogContent, SlideAnimation} from 'react-native-popup-dialog';
import SearchSection from '../component/search-section';
import PointSection from '../component/point-section';
import MenuSection from '../component/menu-section';
import NewsSection from '../component/news-section';

class HomeContainer extends React.Component {
  render() {
    return (
      <View>
        <Dialog
          visible={this.props.dialog}
          onTouchOutside={this.props.onPressMore}
          onHardwareBackPress={this.props.onPressMore}
          dialogAnimation={
            new SlideAnimation({
              slideFrom: 'bottom',
            })
          }
          dialogStyle={{position: 'absolute', bottom: -13, width: '99%'}}>
          <DialogContent
            style={{
              flex: 1,
              width: '100%',
              height: 550,
              backgroundColor: '#fff',
            }}>
            <View style={{padding: 10}}>
              <Text style={{fontWeight: '500', fontSize: 14}}>
                Explore Grab
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {this.props.renderMoreMenu()}
            </View>
          </DialogContent>
        </Dialog>
        <View>
          <SearchSection />
        </View>
        <ScrollView>
          <View>
            <PointSection />
          </View>
          <View style={{marginTop: 10}}>
            <MenuSection renderMenu={this.props.renderMenu} />
          </View>
          <View>
            <NewsSection renderNews={this.props.renderNews} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default HomeContainer;
