## TextBoxWithMentions
Text input that allows users to tag users, as well as other objects. Using library https://github.com/signavio/react-mentions.

## Features
- Tag users and other objects in a text field

## Widget Configuration
General Tab:</br>
- Select the String attribute to be edited by the user</br>
- Also Configure Label, Placeholder, Editablility and Visibility here </br>
</br>
Mentions Tab:</br>
This is where to configure what objects can be mentioned and the associations to be set when an object is mentioned.</br>
- Click "New"</br>
- Add a trigger - this is the text that will intiate the mention</br>
- Navigate to the "Data Source" tab</br>
- Select the association to be set when an object is mentioned</br>
- Select the data that can be selected</br>
- Select the attribute to display </br>

## Known Issues/Limitations
- Widget will remove any objects associated via the selected associations if they are not mentioned in the text
    - Workaround: Only manage the selected associations through the widget   

## Issues, suggestions and feature requests
Please raise any issues, suggestions and feature requests [here](https://github.com/pratleymatthew/TextInputWithMentions/issues)
