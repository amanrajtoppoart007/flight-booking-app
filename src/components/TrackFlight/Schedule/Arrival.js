import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Cell, Row, Table, TableWrapper} from 'react-native-table-component';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';
import DeerSvg from '../../Svg/Deer.svg';

function Arrival() {
  const [tableHead] = useState(['Arrival', 'From', 'Status', 'Flight']);
  const [tableData] = useState([
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
    ['6:20 PM', 'DOH', 'On Time', 'QR 3810'],
  ]);

  const element = (data, index) => {
    switch (index) {
      case 2:
        return <Text style={styles.statusText}>{data}</Text>;
      case 3:
        return (
          <View style={commonStyle.rowSpaceEven}>
            <View>
              <DeerSvg />
            </View>
            <View>
              <Text style={styles.cellText}>{data}</Text>
            </View>
          </View>
        );
      default:
        return <Text style={styles.cellText}>{data}</Text>;
    }
  };

  return (
    <View>
      <Table>
        <Row
          data={tableHead}
          style={styles.HeadStyle}
          textStyle={styles.headerTitle}
        />
      </Table>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Table>
          {tableData &&
            tableData.map((rowData, index) => {
              return (
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={element(cellData, cellIndex)} />
                  ))}
                </TableWrapper>
              );
            })}
        </Table>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  HeadStyle: {
    height: 50,
    alignContent: 'center',
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth5,
    borderBottomColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#242A37',
  },
  statusText: {
    fontSize: 14,
    color: '#13A869',
  },
  cellText: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  row: {
    height: 45,
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth5,
    borderBottomColor: '#DDDDDD',
  },
});

export default Arrival;
