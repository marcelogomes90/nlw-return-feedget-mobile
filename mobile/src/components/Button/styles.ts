import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.brand,
    flex: 1,
    height: 40,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 4
  },

  title: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_on_brand_color
  }
  
});