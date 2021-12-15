import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Font from '../../../layout/Font';
import commonStyle from '../../../layout/Style';
import Accordion from './Accordion';
import RightTickSvg from '../../Svg/Hotel/RightTick.svg';
import VisaCardSvg from '../../Svg/VisaCard.svg';
import MasterCardSvg from '../../Svg/MasterCard.svg';

const ReadMore = ({text}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Text style={styles.primaryDescription}>
      {isReadMore ? text.slice(0, 300) : text}
      <Text onPress={toggleReadMore} style={styles.readMoreButtonText}>
        {isReadMore ? '...Read More' : ' Show Less'}
      </Text>
    </Text>
  );
};

function OverView() {
  const [amenitiesLimit, setAmenitiesLimit] = useState(10);
  const [amenities] = useState([
    {
      title: 'Bar/lounge',
    },
    {
      title: 'Outdoor pool',
    },
    {
      title: 'ATM/banking',
    },
    {
      title: 'Concierge redux',
    },
    {
      title: 'Breakfast available',
    },
    {
      title: 'Laundry facilities',
    },
    {
      title: 'Conference space',
    },
    {
      title: 'Coffee shop or cafe',
    },
    {
      title: 'Poolside bar',
    },
    {
      title: 'Hair salon',
    },
    {
      title: 'Hair salon',
    },
  ]);
  return (
    <View style={styles.container}>
      <View>
        <ReadMore
          text={
            'A stay at W Doha places you in the heart of Doha, within a 15-minute walk of Doha Corniche and City Centre Shopping Mall. This 5-star hotel is 3.1 mi (4.9 km) from Katara Beach and 4.1 mi (6.6 km) from Souq Waqif Art Gallery.Relax at the full-service spa, where you can enjoy massages and facials. You can take advantage of recreational amenities such as an outdoor pool and a 24-hour fitness center. This hotel also features complimentary wireless Internet access, concierge redux, and a hair salon.Featured amenities include a 24-hour business center, limo/town car service, and express check-in. Planning an event in Doha? This hotel has facilities measuring 8135 square feet (756 square meters), including conference space. '
          }
        />
      </View>
      <View style={styles.dividerWrapper}>
        <View style={styles.divider} />
      </View>
      <View>
        <Accordion
          title={'Services & Amenities'}
          isVisible={true}
          Content={
            <View>
              <View style={commonStyle.marginVertical(15)}>
                <Text style={styles.amenitiesHelper}>
                  Most popular facilities
                </Text>
              </View>
              <View>
                <View style={styles.amenitiesRow}>
                  {amenities &&
                    amenities.map((item, index) => {
                      return index < parseInt(amenitiesLimit, 10) ? (
                        <View key={index} style={styles.amenitiesColumn}>
                          <View>
                            <RightTickSvg />
                          </View>
                          <View style={commonStyle.marginHorizontal(8.3)}>
                            <Text style={styles.amenitiesItemTitle}>
                              {item?.title}
                            </Text>
                          </View>
                        </View>
                      ) : (
                        <View style={styles.displayNone} key={index} />
                      );
                    })}
                </View>
                {amenities &&
                  amenities?.length > 10 &&
                  amenities?.length !== amenitiesLimit && (
                    <View>
                      <TouchableOpacity
                        onPress={() =>
                          setAmenitiesLimit(parseInt(amenities?.length, 10))
                        }>
                        <Text style={styles.moreButtonText}>+ More</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                {amenities && amenities?.length === amenitiesLimit && (
                  <View>
                    <TouchableOpacity onPress={() => setAmenitiesLimit(10)}>
                      <Text style={styles.moreButtonText}>Show Less</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          }
        />
      </View>
      <View style={styles.dividerWrapper}>
        <View style={styles.divider} />
      </View>
      <View>
        <Accordion
          title={'Hotel Policies'}
          isVisible={true}
          Content={
            <View>
              <View style={commonStyle.marginVertical(12)}>
                <Text style={styles.amenitiesHelper}>Check-In & Check-Out</Text>
              </View>
              <View>
                <View style={commonStyle.rowFlexStart}>
                  <View style={commonStyle.width('50%')}>
                    <Text style={commonStyle.rowSpaceBetween}>
                      <Text style={styles.checkInOutTitle}>Check-In:</Text>
                      <Text style={styles.checkInOutText}>03:00 PM</Text>
                    </Text>
                  </View>
                  <View style={commonStyle.width('50%')}>
                    <Text style={commonStyle.rowSpaceBetween}>
                      <Text style={styles.checkInOutTitle}>Check-Out:</Text>
                      <Text style={styles.checkInOutText}>12:00 PM</Text>
                    </Text>
                  </View>
                </View>
              </View>
              <View style={commonStyle.marginVertical(20)}>
                <Text style={styles.amenitiesHelper}>
                  Special check-in instructions
                </Text>
              </View>
              <View>
                <Text style={styles.primaryDescription}>
                  Extra-person charges may apply and vary depending on property
                  policy Government-issued photo identification and a credit
                  card, debit card, or cash deposit may be required at check-in
                  for incidental charges Special requests are subject to
                  availability upon check-in and may incur additional charges;
                  special requests cannot be guaranteed The name on the credit
                  card used at check-in to pay for incidentals must be the
                  primary name on the guestroom reservation This property
                  accepts credit cards, debit cards, and cash Front desk staff
                  will greet guests on arrival.
                </Text>
              </View>
              <View style={commonStyle.marginVertical(20)}>
                <Text style={styles.amenitiesHelper}>Policies</Text>
              </View>
              <View>
                <View style={styles.policyItem}>
                  <View>
                    <View style={styles.circle} />
                  </View>
                  <View style={commonStyle.marginHorizontal(12)}>
                    <Text style={styles.primaryDescription}>
                      Reservations are required for massage services and spa
                      treatments. Reservations can be made by contacting the
                      hotel prior to arrival, using the contact information on
                      the booking confirmation.
                    </Text>
                  </View>
                </View>
                <View style={styles.policyItem}>
                  <View>
                    <View style={styles.circle} />
                  </View>
                  <View style={commonStyle.marginHorizontal(12)}>
                    <Text style={styles.primaryDescription}>
                      The property has connecting/adjoining rooms, which are
                      subject to availability and can be requested by contacting
                      the property using the number on the booking confirmation.
                    </Text>
                  </View>
                </View>
                <View style={styles.policyItem}>
                  <View>
                    <View style={styles.circle} />
                  </View>
                  <View style={commonStyle.marginHorizontal(12)}>
                    <Text style={styles.primaryDescription}>
                      A car is recommended for transportation to and from this
                      property.
                    </Text>
                  </View>
                </View>
                <View style={styles.policyItem}>
                  <View>
                    <View style={styles.circle} />
                  </View>
                  <View style={commonStyle.marginHorizontal(12)}>
                    <Text style={styles.primaryDescription}>
                      Free in-room WiFi has a 4-device limit.
                    </Text>
                  </View>
                </View>
                <View style={styles.policyItem}>
                  <View>
                    <View style={styles.circle} />
                  </View>
                  <View style={commonStyle.marginHorizontal(12)}>
                    <Text style={styles.primaryDescription}>
                      This property advises that enhanced cleaning and guest
                      safety measures are currently in place.
                    </Text>
                  </View>
                </View>
                <View style={styles.policyItem}>
                  <View>
                    <View style={styles.circle} />
                  </View>
                  <View style={commonStyle.marginHorizontal(12)}>
                    <Text style={styles.primaryDescription}>
                      Disinfectant is used to clean the property.
                    </Text>
                  </View>
                </View>
                <View style={styles.policyItem}>
                  <View>
                    <View style={styles.circle} />
                  </View>
                  <View style={commonStyle.marginHorizontal(12)}>
                    <Text style={styles.primaryDescription}>
                      Guests are provided with hand sanitizer.
                    </Text>
                  </View>
                </View>
                <View style={styles.policyItem}>
                  <View>
                    <View style={styles.circle} />
                  </View>
                  <View style={commonStyle.marginHorizontal(12)}>
                    <Text style={styles.primaryDescription}>
                      The property affirms that it follows sanitization
                      practices of Commitment to Clean (Marriott) guidelines.
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={commonStyle.marginVertical(20)}>
                  <Text style={styles.paymentMethodTitle}>Accepted Cash</Text>
                </View>
                <View>
                  <View>
                    <Text style={styles.amenitiesHelper}>
                      Debit Cards Accepted
                    </Text>
                  </View>
                  <View style={commonStyle.rowFlexStart}>
                    <View>
                      <VisaCardSvg />
                    </View>
                    <View style={commonStyle.marginHorizontal(5)}>
                      <MasterCardSvg />
                    </View>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={styles.amenitiesHelper}>
                      Credit Cards Accepted
                    </Text>
                  </View>
                  <View style={commonStyle.rowFlexStart}>
                    <View>
                      <VisaCardSvg />
                    </View>
                    <View style={commonStyle.marginHorizontal(5)}>
                      <MasterCardSvg />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  displayNone: {
    display: 'none',
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  primaryDescription: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
    lineHeight: 24,
  },
  dividerWrapper: {
    marginVertical: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth5,
    borderBottomColor: '#AAAAAA',
    width: '100%',
  },
  amenitiesTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#242A37',
  },
  amenitiesHelper: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#26698E',
  },
  amenitiesRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  amenitiesColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
    marginVertical: 7.5,
  },
  amenitiesItemTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  moreButtonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#1D8CCC',
  },
  policyItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 7.5,
    paddingVertical: 8,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#6C6C6C',
    marginVertical: 5,
  },
  paymentMethodTitle: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 16,
    color: '#242A37',
  },
  checkInOutTitle: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#6C6C6C',
  },
  checkInOutText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#F15922',
  },
  readMoreButtonText: {
    fontFamily: Font.AvenirHeavy,
    fontSize: 14,
    color: '#1D8CCC',
  },
});

export default OverView;
