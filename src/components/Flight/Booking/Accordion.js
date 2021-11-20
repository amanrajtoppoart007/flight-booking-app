import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import Font from '../../../layout/Font';

function Accordion({title, Content}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <ListItem.Accordion
        containerStyle={styles.container}
        icon={{name: 'plus', type: 'font-awesome', size: 20}}
        expandIcon={{name: 'minus', type: 'font-awesome', size: 20}}
        content={
          <>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{title}</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}>
        {expanded && Content}
      </ListItem.Accordion>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(157,196,241,0.5)',
  },
  title: {
    fontFamily: Font.AvenirMedium,
    fontSize: 14,
    color: '#26698E',
  },
});
export default Accordion;
