# React-Native-Bar-Code-Scanner
A QR code scanner component for React Native.


![qrcode-reader](https://raw.githubusercontent.com/lazaronixon/react-native-qrcode-reader/master/screenshots/screen.png)

## Getting started
1. Install [react-native-camera](https://github.com/lwansbrough/react-native-camera/blob/master/README.md#getting-started).
2. Copy QRCodeScreen.js to your project.



## Properties

#### `cancelButtonVisible`

Values: true, false (default)

Use the `cancelButtonVisible` property to display or hidden cancel button on bottom of view.

#### `cancelButtonTitle`

Value: `Cancel` (default)

Use the `cancelButtonTitle` property to change text of button cancel.

#### `onSucess`

Will call the specified method when a barcode is detected in the camera's view.
Event contains a string with the barcode.

#### `onCancel`
Will call the specified method when cancel button was pressed.
