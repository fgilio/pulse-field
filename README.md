# Pulse Field

This field allows you to add a trend metric to the index of a resource.

## Example

![Example](https://raw.githubusercontent.com/demency/pulse-field/v1.0.0/example.png)

## Requirements

This package requires:

- PHP ^7.3.
- Laravel Nova ^2.6.1.

##  Installation

You can install this package in a Laravel app that uses Nova via composer:

```
composer require demency/pulse-field
```

## Usage

Add the following code in your own resource implementation:

```
<?php

...

class YourResource extends Resource {

    ...

    public function fields(Request $request)
    {
        // Replace this variable with your own trend.
        $trend = (new YourOwnTrendClass());

        return [
            ...

            // Are you ready?
            // --------------
            // 1. Add field implementation.
            // 2. Set trend instance as meta.
            // 3. Use first range or specify directly the range.
            Pulse::make(__('Pulse'), 'id')
                ->withMeta([
                    "trend" => $trend,
                    "range" => array_key_first($trend->ranges()),
                    "title" => __("Executions")
                ]),
        ];
    }
```

## Translations

The following strings are available for translation:

|String|Description|
|---|---|
|Times|If you dont set title meta data, this will fallback using "Times" string as pulse unit.|
|Waiting for data|If trend calculation returns a list with zero values, the component will be rendered using "Waiting for data" text.|

### Example JSON

```
// Add this line on your own i18n file... 
// in my case /resources/lang/vendor/nova/es.json
{
    "Waiting for data": "Esperando información",
    "Pulse": "Pulso"
}
```

## To-do

- [ ] Add details view implementation.

## Changelog

### 1.0.0

- Recently published, currently this package can be used only for indexing purpose.

## Disclaimer

This package isn't tested. Feel free to make PR with improvements.


