import {configureStylesheet} from '@borjomeeee/rn-styles';

export const configureStyles = () => {
  configureStylesheet({
    text: () => ({
      fontFamily: 'Inter-Regular',
      fontSize: 16,
    }),

    medium: () => ({
      fontFamily: 'Inter-SemiBold',
    }),

    bold: () => ({
      fontFamily: 'Inter-ExtraBold',
    }),

    container: () => ({
      paddingHorizontal: 20,
    }),
  });
};
