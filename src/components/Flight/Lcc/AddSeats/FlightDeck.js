import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AvailableSvg from '../../../Svg/Flight/Seat/Available.svg';
import SelectedSvg from '../../../Svg/Flight/Seat/Selected.svg';
import OccupiedSvg from '../../../Svg/Flight/Seat/Occupied.svg';
import commonStyle from '../../../../layout/Style';
import Font from '../../../../layout/Font';

function FlightDeck() {
  function createColumn(length, letter, startFrom) {
    let column = [];
    for (let i = 0; i < length; i++) {
      column.push(letter + (startFrom + i));
    }
    return column;
  }
  return (
    <View>
      <View style={styles.header}>
        <View style={commonStyle.rowFlexStart}>
          <View>
            <SelectedSvg />
          </View>
          <View style={commonStyle.marginHorizontal(4)}>
            <Text style={styles.statusTitle}>Selected</Text>
          </View>
        </View>
        <View style={commonStyle.rowFlexStart}>
          <View>
            <AvailableSvg />
          </View>
          <View style={commonStyle.marginHorizontal(4)}>
            <Text style={styles.statusTitle}>Available</Text>
          </View>
        </View>
        <View style={commonStyle.rowFlexStart}>
          <View>
            <OccupiedSvg />
          </View>
          <View style={commonStyle.marginHorizontal(4)}>
            <Text style={styles.statusTitle}>Occupied</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <View style={styles.upperSection}>
            <View style={commonStyle.rowSpaceBetween}>
              <View style={commonStyle.rowSpaceEven}>
                <View>
                  {createColumn(12, 'A', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
                <View>
                  {createColumn(12, 'B', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
                <View>
                  {createColumn(12, 'C', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
              </View>
              <View style={commonStyle.rowSpaceEven}>
                <View>
                  {createColumn(12, 'A', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
                <View>
                  {createColumn(12, 'B', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
                <View>
                  {createColumn(12, 'C', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
          <View style={styles.middleSection}>
            <View style={commonStyle.rowSpaceBetween}>
              <View style={commonStyle.rowSpaceEven}>
                <View>
                  {createColumn(3, 'A', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
                <View>
                  {createColumn(3, 'B', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
                <View>
                  {createColumn(3, 'C', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
              </View>
              <View style={commonStyle.rowSpaceEven}>
                <View>
                  {createColumn(3, 'A', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
                <View>
                  {createColumn(3, 'B', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
                <View>
                  {createColumn(3, 'C', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomSection}>
            <View style={commonStyle.rowSpaceBetween}>
              <View style={commonStyle.rowSpaceEven}>
                <View>
                  {createColumn(5, 'A', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
                <View>
                  {createColumn(5, 'B', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
                <View>
                  {createColumn(5, 'C', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
              </View>
              <View style={commonStyle.rowSpaceEven}>
                <View>
                  {createColumn(5, 'A', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
                <View>
                  {createColumn(5, 'B', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
                <View>
                  {createColumn(5, 'C', 1).map((item, index) => {
                    return (
                      <View style={commonStyle.margin(4)} key={index}>
                        <AvailableSvg />
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 35,
    ...commonStyle.rowSpaceBetween,
  },
  statusTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  card: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  cardBody: {
    width: '75%',
    justifyContent: 'center',
  },
  upperSection: {
    marginVertical: 10,
  },
  middleSection: {
    marginVertical: 10,
  },
  bottomSection: {
    marginVertical: 10,
  },
});

export default FlightDeck;
