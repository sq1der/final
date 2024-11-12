# EspressoDay Café Website

## Project Description
EspressoDay is a local café website that allows users to browse the menu, make inquiries, and interact with various sections such as customer reviews, popular items, business hours, and more. The website also features dynamic elements like a theme toggle, user authentication, and real-time greetings.

## Key Features
- **User Authentication**: Users can log in and out. Their login status is stored using `localStorage` to persist between sessions.
- **Theme Toggle**: Users can switch between dark and light themes, with the choice saved in `localStorage`.
- **Filter Settings**: Users can filter items by category (e.g., coffee, tea, snacks). The selected filter is saved in `localStorage` and reapplied when the user returns to the page.
- **Interactive Elements**: Includes a FAQ accordion, popup contact form, background color change button, and sound notification.
- **Date & Time Display**: The current date and time are displayed dynamically.
- **Personalized Greetings**: A greeting message that changes based on the time of day and the user's name.

## Managing User Preferences
User preferences, such as the theme selection and login status, are stored in the browser's `localStorage`. This ensures that the settings persist even when the user revisits the website:
- **Login**: Username and login status are saved to `localStorage` and used to display a personalized greeting upon page load.
- **Theme Selection**: The theme preference (dark or light mode) is saved and reapplied when the user returns to the site.
- **Filters**: Selected filters (e.g., category) are stored and reapplied automatically.

## Contributing
Feel free to fork the project and submit pull requests. If you have any suggestions or find bugs, please open an issue on GitHub.

## License
This project is open-source and available under the MIT License.
