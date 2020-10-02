import React from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { HEIGHT, HEIGHT_SCALE, WIDTH, WIDTH_SCALE } from '../../constants/constants';
import { pFontSize, pStyle, ptColor } from '../../constants/styles';
import MyTouchableOpacity from './MyTouchableOpacity';
import PRow from './PRow';
import DatePicker from 'react-native-date-picker';

const styleButton = {
  flex: 1,
  borderRightWidth: 0.5,
  borderColor: ptColor.borderColor,
  paddingTop: 16 * HEIGHT_SCALE,
  paddingBottom: 12 * HEIGHT_SCALE,
};
export default class DatePickerModal extends React.PureComponent {
  static instance = null;

  static show(title = '', func = () => {}, date, width, height) {
    if (DatePickerModal.instance) {
      DatePickerModal.instance.setState({ visible: false }, () => {
        DatePickerModal.instance.setState({
          visible: true,
          title: title,
          func: func,
          currentTime: date,
          width,
          height,
        });
      });
    }
  }
  static hide() {
    if (DatePickerModal.instance) {
      DatePickerModal.instance.setState({ visible: false });
      DatePickerModal.instance.state.func(DatePickerModal.instance.state.currentTime);
    }
  }
  constructor(props) {
    super(props);
    DatePickerModal.instance = this;

    this.state = {
      visible: false,
      title: '',
      detail: '',
      func: () => {},
      text: 'Yes',
      textCancel: 'Cancel',
      currentTime: {},
    };
  }
  _handlePickingDate = (date) => {
    this.setState({ currentTime: date });
  };
  render() {
    return (
      <Modal
        deviceWidth={this.state.width}
        animationIn="fadeIn" // or without prop
        animationOut="fadeOut" // or without prop
        backdropTransitionOutTiming={0}
        deviceHeight={this.state.height}
        hideModalContentWhileAnimating={true}
        isVisible={DatePickerModal?.instance?.state?.visible || false}
        style={{
          margin: 0,
          padding: 0,
          flex: 1,
          zIndex: 9999,
          elevation: 9999,
          position: 'absolute',
          bottom: 0,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 20,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}>
          <DatePicker
            mode="date"
            date={this.state.currentTime}
            style={{
              width: WIDTH,
              height: this.state.height * 0.3,
              backgroundColor: 'white',
              borderRadius: 20,
            }}
            onDateChange={(date) => this._handlePickingDate(date)}
          />
          <View
            style={{
              flexDirection: 'row',
              width: this.state.width * 0.8,
              justifyContent: 'space-between',
            }}>
            <MyTouchableOpacity
              style={{
                borderRadius: 5,
                backgroundColor: '#fff',
                height: 50,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}
              onPress={() => DatePickerModal.instance.setState({ visible: false })}>
              <Text style={[pStyle.textButtonOutLine, { color: ptColor.appColor }]}>CANCLE</Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity
              style={{
                borderRadius: 5,
                backgroundColor: '#fff',
                height: 50,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}
              onPress={() => DatePickerModal.hide()}>
              <Text style={[pStyle.textButtonOutLine, { color: ptColor.appColor }]}>OK</Text>
            </MyTouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
