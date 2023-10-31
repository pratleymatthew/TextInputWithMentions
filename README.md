## TextBoxWithMentions
Text input that allows users to tag users, as well as other objects. Using library https://github.com/signavio/react-mentions.

## Features
- Tag users and other objects in a text field

## Widget Configuration
General Tab:
    - Select the String attribute to be edited by the user
    - Also Configure Label, Placeholder, Editablility and Visibility here 

Mentions Tab:
This is where to configure what objects can be mentioned and the associations to be set when an object is mentioned
    - Click "New"
    - Add a trigger - this is the text that will intiate the mention
    - Navigate to the "Data Source" tab
    - Select the association to be set when an object is mentioned
    - Select the data that can be selected
    - Select the attribute to display 

##Known Issues/Limitations
- Widget will remove any objects associated via the selected associations if they are not mentioned in the text
    - Workaround: Only manage the selected associations through the widget   

## Issues, suggestions and feature requests
Please raise any issues, suggestions and feature requests [here](https://github.com/pratleymatthew/TextInputWithMentions/issues)
