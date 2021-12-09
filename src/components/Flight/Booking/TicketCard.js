import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import commonStyle from '../../../layout/Style';
import Font from '../../../layout/Font';
import {Icon} from 'react-native-elements';

function TicketCard({item}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <View>
        <View style={styles.textSection}>
          <View style={commonStyle.rowSpaceBetween}>
            <View>
              <Text style={styles.name}>{item?.name}</Text>
            </View>
            <View>
              <View style={styles.textRow}>
                <Text style={styles.ticketTitle}>Ticket# </Text>
                <Text style={styles.ticketNumber}>{item?.ticketNumber}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.textSection}>
          <View style={styles.textRow}>
            <Text style={styles.specialRequestTitle}>Special Request </Text>
            <Icon
              onPress={() => setIsVisible(!isVisible)}
              name={isVisible ? 'minus' : 'plus'}
              type={'material-community'}
              size={14}
              color={'#242A37'}
            />
          </View>
        </View>
        {isVisible && (
          <>
            <View style={commonStyle.marginVertical(5)}>
              <View style={styles.textRow}>
                <Text style={styles.dataTitle}>Special Assistance: </Text>
                <Text style={styles.dataDescription}> Meet & Assist</Text>
              </View>
            </View>
            <View style={commonStyle.marginVertical(5)}>
              <View style={styles.textRow}>
                <Text style={styles.dataTitle}>Seat Preference: </Text>
                <Text style={styles.dataDescription}> Window</Text>
              </View>
            </View>
            <View style={commonStyle.marginVertical(5)}>
              <View style={styles.textRow}>
                <Text style={styles.dataTitle}>Meal Preference: </Text>
                <Text style={styles.dataDescription}>Indian Meal</Text>
              </View>
            </View>
          </>
        )}
      </View>
      <View style={commonStyle.marginVertical(4)}>
        <View style={styles.divider} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
  ticketTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  ticketNumber: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
  textSection: {
    marginVertical: 5.5,
  },
  textRow: {
    ...commonStyle.rowFlexStart,
    ...commonStyle.flex(1),
  },

  dataTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  dataDescription: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
  specialRequestTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#242A37',
  },
  divider: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#D9D9D9',
    alignSelf: 'center',
  },
});

export default TicketCard;
