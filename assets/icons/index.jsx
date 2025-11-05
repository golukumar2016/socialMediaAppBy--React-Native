import React from 'react';
import { StyleSheet } from 'react-native'; // Reverted to 'react-native' for a CLI project

// Import the icon sets you want to use from react-native-vector-icons
// Make sure you have this package installed: npm install react-native-vector-icons
// And linked: npx react-native-asset
import AntDesign from 'react-native-vector-icons/AntDesign'; // Removed /dist
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Removed /dist
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Removed /dist
import Ionicons from 'react-native-vector-icons/Ionicons'; // Removed /dist
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Removed /dist
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Removed /dist
import Entypo from 'react-native-vector-icons/Entypo'; // Removed /dist
import Feather from 'react-native-vector-icons/Feather'; // Removed /dist

/**
 * A mapping of icon type names to their corresponding component.
 * This allows us to dynamically select the correct icon set.
 */
const iconSets = {
  ant: AntDesign,
  fontawesome: FontAwesome,
  fontawesome5: FontAwesome5,
  ionicons: Ionicons,
  material: MaterialIcons,
  materialcommunity: MaterialCommunityIcons,
  entypo: Entypo,
  feather: Feather,
  // Add any other sets you need here
};

/**
 * A unified icon component for the entire app.
 *
 * @param {object} props - Component props.
 * @param {string} props.type - The icon library to use (e.g., 'material', 'ionicons'). Defaults to 'material'.
 * @param {string} props.name - The name of the icon to display.
 * @param {number} [props.size=24] - The size of the icon.
 * @param {string} [props.color='#000'] - The color of the icon.
 * @param {object|Array} [props.style] - Custom styles to apply, used for positioning (margin, padding, etc.).
 * @returns {React.Component|null} The rendered icon component or a fallback.
 */
const AppIcon = ({ type = 'material', name, size = 24, color = '#000', style }) => {
  // Look up the icon component from our map
  const IconComponent = iconSets[type];

  if (!name) {
    // If no icon name is provided, render nothing or a default placeholder
    console.warn('AppIcon component rendered without a "name" prop.');
    return null;
  }

  if (!IconComponent) {
    // Fallback for an unknown icon type
    console.warn(`Icon type "${type}" is not recognized. Defaulting to MaterialIcons.`);
    // You can return a default error icon here
    return (
      <MaterialIcons
        name="error-outline"
        size={size}
        color="red"
        style={style}
      />
    );
  }

  // Render the correct icon component with all the props
  return (
    <IconComponent
      name={name}
      size={size}
      color={color}
      style={[styles.icon, style]} // Combine default styles with custom ones
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    // You can add default styles for all icons here if you want
    // For example, to prevent text selection highlighting on web
    userSelect: 'none',   //this is user do user cannot select that and move that form one position to another position
  },
});

export default AppIcon;