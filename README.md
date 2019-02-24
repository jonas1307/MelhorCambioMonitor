# MelhorCambioMonitor
This is a Node.js application which monitors BRL/EUR buying rate from actual exchange houses in Brazil using an API provided by [melhorcambio.com](https://www.melhorcambio.com/) website.

Based on a [Cron](https://en.wikipedia.org/wiki/Cron) expression, the application gets the rate and then stores it on a .csv file for further reference. This project was conceived for personal use, in order to support currency exchange for individuals who need to trade cash for travelling, for instance.

The app's default expression triggers the functionality from monday to friday, between 9am and 6pm, each 5 minutes.

## Built With

* [got](https://github.com/sindresorhus/got) - Simplifies HTTP requests
* [node-cron](https://github.com/node-cron/node-cron) - Adds support for Cron expressions

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
