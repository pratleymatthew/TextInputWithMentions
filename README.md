## TextBoxWithMentions
Text input that allows users to tag users, as well as other objects. Using library https://github.com/signavio/react-mentions.

## Features
- Tag users and other objects in a text field

## Widget Configuration
### General Tab:</br>
- Select the String attribute to be edited by the user</br>
- Also Configure Label, Placeholder, Editablility and Visibility here </br>

### Mentions Tab:</br>
This is where to configure what objects can be mentioned and the associations to be set when an object is mentioned.
1. Click "New"
2. Add a trigger - this is the text that will intiate the mention
3. Navigate to the "Data Source" tab
4. Select the association to be set when an object is mentioned
5. Select the data that can be selected
6. Select the attribute to display

## Known Issues/Limitations
- Widget will remove any objects associated via the selected associations if they are not mentioned in the text
    - Workaround: Only manage the selected associations through the widget
- String Attributes that are edited using this widget are best displayed using the widget, as the widget uses a text markup to display mentions

## Issues, suggestions and feature requests
Please raise any issues, suggestions and feature requests [here](https://github.com/pratleymatthew/TextInputWithMentions/issues)
