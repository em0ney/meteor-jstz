# em0ney:jstz

This is a meteor package of the [jstz/jsTimezoneDetect project written by Jon Nylander](https://bitbucket.org/pellepim/jstimezonedetect/overview)

## Installation

1. Install the package `meteor add em0ney:jstz`
2. Run tz determination code on the client side

    var tz = jstz.determine(); // Determines the time zone of the browser client
    tz.name(); // Returns the name of the time zone eg "Europe/Berlin"
