import SegmentedControl from '@react-native-segmented-control/segmented-control';
import JSSegmentedControl from '@react-native-segmented-control/segmented-control/js/SegmentedControl.js';

const isFabricEnabled = global.nativeFabricUIManager !== null;

// Forcing the JS implementation for Fabric as the native module is not compatible with Fabric yet.
export default isFabricEnabled ? JSSegmentedControl : SegmentedControl;
