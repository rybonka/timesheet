# SK Timesheet

SK Timesheet is a simple JavaScript script (Node JS) that checks whether the current date is a public holiday in Slovakia.
The script calculates the last working day of the week and the last working day of the month based on the Slovak holiday calendar. This can be a handy tool for automating tasks or making decisions based on whether it's a working day or a public holiday in Slovakia. If needed, it allows for easy adaptation to a holiday calendar for any country.

## Example of output

   ```bash
   $ node report.js
    Current Date: Wed Apr 05 2023
    Closest Friday: Fri Apr 07 2023
    • Last working day in this week due to non-working Friday: Thu Apr 06 2023
    Closest Last Day of Month: Sun Apr 30 2023
    • Last working day in this month due to non-working Last Day: Fri Apr 28 2023
    => Nothing to do on Wed Apr 05 2023
   ```

## Prerequisites

Before you start using SK Timesheet, make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

You can use SK Timesheet as follows:

1. Clone the repository:

   ```bash
   git clone https://github.com/rybonka/timesheet.git
   ```

2. Change to the project directory:

   ```bash
   cd timesheet
   ```

3. Install the required npm packages:

   ```bash
   npm install date-holidays
   ```

## Usage

To run SK Timesheet, just type the following and press enter:

```bash
node report.js
```

The script will display the current date, the closest Friday (considering holidays), and the closest last day of the month (considering holidays and weekends).

Depending on the current date, you will see a message indicating whether you should do something or if there's nothing to do.

## License

SK Timesheet is licensed under the MIT License. See the [LICENSE](https://github.com/rybonka/timesheet/blob/main/LICENSE) file for details.

## Contributing

If you encounter issues or wish to contribute to SK Timesheet, please open an [issue](https://github.com/rybonka/timesheet/issues) or submit a [pull request](https://github.com/rybonka/timesheet/pulls).

## Acknowledgments

- The "[date-holidays](https://www.npmjs.com/package/date-holidays)" npm library is used to retrieve public holiday data.
- Thanks to the open-source community for providing useful tools and libraries.

## Author

- [Oleksandr Rybonka](https://github.com/rybonka)

## Disclaimer

This script is provided as-is, and the author does not take responsibility for any consequences or actions based on its results. It is recommended to verify the accuracy of the public holiday data for your region.