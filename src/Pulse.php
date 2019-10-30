<?php

namespace Demency\PulseField;

use Laravel\Nova\Fields\Field;

class Pulse extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'pulse-field';

    /**
     * Indicates if the element should be shown on the update view.
     *
     * @var bool
     */
    public $showOnUpdate = false;

    /**
     * Indicates if the element should be shown on the create view.
     *
     * @var bool
     */
    public $showOnCreation = false;

    /**
     * Indicates if the element should be shown on the detail view.
     *
     * @var bool
     */
    public $showOnDetail = true;

    /**
     * Resolve attribute for chart filling.
     *
     * @param mixed $resource
     * @param string $attribute
     * @return mixed
     */
    protected function resolveAttribute($resource, $attribute)
    {
        $value = parent::resolveAttribute($resource, $attribute);

        // Get trend instance from meta
        $trend = $this->meta()["trend"];

        // Get request instance
        $request = request();

        // Fill request data with trend required parameters
        $request->merge([
            'timezone' => config('app.timezone'),
            'range' => $this->meta['range'] ?? array_key_first($trend->ranges()),
            'twelveHourTime' => false,
            'resourceId' => $value,
        ]);

        // Calculate data
        $calculation = $trend->calculate($request);

        // Transform trend data to chart data
        $data = collect($calculation->trend)->map(function($value, $index) {
            return [
                "index" => $index,
                "value" => $value,
            ];
        })->values();

        // Merge meta data
        $this->withMeta([
            "data" => $data,
            "title" => $this->meta['title'] ?? __("Times"),
        ]);

        // Returns value
        return $value;
    }
}
