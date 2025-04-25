import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width,
    height,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 80,
  },
  textContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    marginTop: 120, // push text down
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#f1f1f1',
  },
  intro: {
    marginTop: 10,
    borderRadius: 5,
    fontSize: 18,
    color: '#8D61D7',
    fontWeight: '600',
    padding: 14,
    backgroundColor: '#DFD3F4',
  },
  iconButton: {
    width: 60,
    height: 60,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  iconText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 6,
    height: 6,
    borderRadius: 2,
    marginHorizontal: 8,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 20,
    height: 6,
    borderRadius: 2,
    marginHorizontal: 8,
  },
});
