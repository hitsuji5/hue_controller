#hue controller

This project is about the web application in which a user can control Philips hue light by accessing the web page from the node.js server running on Raspberry Pi.
* Components
    * Philips hue lights
    * Raspberry Pi
    
* Philips hue Setup
    1. Make sure your bridge is connected to your network and is functioning properly
    2. Discover IP address of the bridge on your network
    3. Create a user id using CLIP API Debugger
* Raspberry Pi Setup
    1. Complete an Operating System installation
    2. Connect Pi to the Internet using a wired/wireless network connection
    3. Connect Pi from your computer with SSH
    4. Clone this repository
    5. Update the IP address and the user id
    6. Run the node server