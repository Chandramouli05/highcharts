/* eslint comma-dangle: 0, max-len: 0 */
import type ColorString from './ColorString';
/**
 * Palette for Highcharts. Palette colors are defined in highcharts.css.
 * **Do not edit this file!** This file is generated using the 'gulp palette' task.
 */
export const enum Palette {
    /**
     * Chart background, point stroke for markers and columns etc
     */
    backgroundColor = '#ffffff',
    /**
     * Strong text.
     */
    neutralColor100 = '#20202c',
    /**
     * Main text and some strokes.
     */
    neutralColor80 = '#32323c',
    /**
     * Axis la bels, axis title, connector fallback.
     */
    neutralColor60 = '#646479',
    /**
     * Credits text, export menu stroke.
     */
    neutralColor40 = '#838394',
    /**
     * Disabled texts, button strokes, crosshair etc.
     */
    neutralColor20 = '#e2e2e2',
    /**
     * Grid lines etc.
     */
    neutralColor10 = '#f0f0f0',
    /**
     * Minor grid lines etc.
     */
    neutralColor5 = '#f7f7f7',
    /**
     * Tooltip backgroud, button fills, map null points.
     */
    neutralColor3 = '#fafafa',
    /**
     * Drilldown clickable labels, color axis max color.
     */
    highlightColor100 = '#413782',
    /**
     * Selection marker, menu hover, button hover, chart border, navigator series.
     */
    highlightColor80 = '#5749ad',
    /**
     * Navigator mask fill.
     */
    highlightColor60 = '#796dbd',
    /**
     * Ticks and axis line.
     */
    highlightColor20 = '#9a92ce',
    /**
     * Pressed button, color axis min color.
     */
    highlightColor10 = '#dddbef',
    /**
     * Positive indicator color
     */
    positiveColor = '#06b535',
    /**
     * Negative indicator color
     */
    negativeColor = '#f21313',
}
/**
 * Series palettes for Highcharts. Series colors are defined in highcharts.css.
 * **Do not edit this file!** This file is generated using the 'gulp palette' task.
 */
const SeriesPalettes = {
    /**
     * Colors for data series and points.
     */
    colors: [
        '#4caffe',
        '#5352be',
        '#ff8d64',
        '#43d376',
        '#708ab9',
        '#c771f3',
        '#6cddca',
        '#dd437f',
        '#fab776',
        '#404e89'
    ] as Array<ColorString>,
};
export default SeriesPalettes;
