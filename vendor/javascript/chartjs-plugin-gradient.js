// chartjs-plugin-gradient@0.6.1 downloaded from https://ga.jspm.io/npm:chartjs-plugin-gradient@0.6.1/dist/chartjs-plugin-gradient.esm.js

import{isNumber as t,color as e,defined as o}from"chart.js/helpers";import{Chart as n}from"chart.js";const s=n.version;const a=s?(t,e)=>t.parse(e):(t,e)=>e;function scaleValue(e,o){const n=t(o)?parseFloat(o):a(e,o);return e.getPixelForValue(n)}
/**
 * @typedef { import("chart.js").Chart } Chart
 * @typedef { import("chart.js").Scale } Scale
 */
/**
 * check if the area is consistent
 * @param {Object} area - area to check
 * @returns {boolean}
 */const areaIsValid=t=>t&&t.right>t.left&&t.bottom>t.top
/**
 * Create a canvas gradient
 * @param {CanvasRenderingContext2D} ctx - chart canvas context
 * @param {string} axis - axis type of scale
 * @param {Object} area - scale instance
 * @returns {CanvasGradient} created gradient
 */;function createGradient(t,e,o){return"r"===e?t.createRadialGradient(o.xCenter,o.yCenter,0,o.xCenter,o.yCenter,o.drawingArea):"y"===e?t.createLinearGradient(0,o.bottom,0,o.top):t.createLinearGradient(o.left,0,o.right,0)}
/**
 * Add color stop to a gradient
 * @param {CanvasGradient} gradient - gradient instance
 * @param {Array} colors - all colors to add
 */function applyColors(t,e){e.forEach((function(e){t.addColorStop(e.stop,e.color.rgbString())}))}
/**
 * Get the gradient plugin configuration from the state for a specific dataset option
 * @param {Object} state - state of the plugin
 * @param {{key: string, legendItemKey: string}} keyOption - option of the dataset where the gradient is applied
 * @param {number} datasetIndex - dataset index
 * @returns {Object|undefined} gradient plugin configuration from the state for a specific dataset option
 */function getGradientData(t,e,o){if(t.options.has(e.key)){const n=t.options.get(e.key);const s=n.filter((t=>t.datasetIndex===o));if(s.length)return s[0]}}
/**
 * Get the pixel and its percentage on the scale, used for color stop in the gradient, for the passed value
 * @param {Scale} scale - scale used by dataset
 * @param {string|number} value - value to search
 * @returns {{pixel: number, stop: number}} the pixel and its percentage on the scale, used for color stop in the gradient
 */function getPixelStop(t,e){if("radialLinear"===t.type){const o=t.getDistanceFromCenterForValue(e);return{pixel:o,stop:o/t.drawingArea}}const o=t.options.reverse;const n=scaleValue(t,e);const s=t.getDecimalForPixel(n);return{pixel:n,stop:o?1-s:s}}const toRGBs=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055;const fromRGBs=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function interpolate(t,o,n){const s=o.color.rgb;const a=fromRGBs(s.r/255);const r=fromRGBs(s.g/255);const i=fromRGBs(s.b/255);const l=n.color.rgb;const c=fromRGBs(l.r/255);const d=fromRGBs(l.g/255);const p=fromRGBs(l.b/255);return e({r:Math.round(255*toRGBs(a+t*(c-a))),g:Math.round(255*toRGBs(r+t*(d-r))),b:Math.round(255*toRGBs(i+t*(p-i))),a:s.a+t*Math.abs(l.a-s.a)})}
/**
 * Calculate a color from gradient stop color by a value of the dataset.
 * @param {Object} state - state of the plugin
 * @param {{key: string, legendItemKey: string}} keyOption - option of the dataset where the gradient is applied
 * @param {number} datasetIndex - dataset index
 * @param {number} value - value used for searching the color
 * @returns {Object} calculated color
 */function getInterpolatedColorByValue(t,e,o,n){const s=getGradientData(t,e,o);if(!s||!s.stopColors.length)return;const{stop:a}=getPixelStop(s.scale,n);let r,i;for(const t of s.stopColors){if(t.stop===a)return t.color;t.stop<a?r=t:t.stop>a&&!i&&(i=t)}return i?interpolate(a,r,i):r}const r=[{key:"backgroundColor",legendItemKey:"fillStyle"},{key:"borderColor",legendItemKey:"strokeStyle"}];const legendBoxHeight=(t,e)=>e.labels&&e.labels.font&&o(e.labels.font.size)?e.labels.font.size:t.options.font.size;function setLegendItem(t,e,o,n,s){const a=getGradientData(t,o,n.datasetIndex);if(!a||!a.stopColors.length)return;const r=createGradient(e,a.axis,s);applyColors(r,a.stopColors);n[o.legendItemKey]=r}function buildArea(t,{boxWidth:e,boxHeight:o}){return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+e,xCenter:t.left+e/2,yCenter:t.top+o/2,drawingArea:Math.max(e,o)/2}}function applyGradientToLegendByDatasetIndex(t,e,o,n){const s=t.legend.legendHitBoxes[o.datasetIndex];const a=buildArea(s,n);areaIsValid(a)&&r.forEach((function(n){setLegendItem(e,t.ctx,n,o,a)}))}function applyGradientToLegendByDataIndex(t,e,o,n){for(const s of t.legend.legendItems)r.forEach((function(t){const a=o.data[s.index];const r=getInterpolatedColorByValue(e,t,n,a);r&&r.valid&&(s[t.legendItemKey]=r.rgbString())}))}
/**
 * @typedef { import("chart.js").Chart } Chart
 */
/**
 * Udpate the legend items, applying the gradients
 * @param {Chart} chart - chart instance
 * @param {Object} state - state of the plugin
 */function updateLegendItems(t,e){const o=t.legend;const n=o.options;const s=n.labels.boxHeight?n.labels.boxHeight:legendBoxHeight(t,n);const a=n.labels.boxWidth;const r=t.data.datasets;for(let n=0;n<r.length;n++){const i=o.legendItems[n];i.datasetIndex===n?applyGradientToLegendByDatasetIndex(t,e,i,{boxWidth:a,boxHeight:s}):applyGradientToLegendByDataIndex(t,e,r[n],n)}}const i=new Map;const l=s?(t,e)=>t[e+"Scale"]:(t,e)=>t.controller["_"+e+"Scale"];function addColors(t,o,n){for(const s of Object.keys(o)){const{pixel:a,stop:r}=getPixelStop(t,s);if(isFinite(a)&&isFinite(r)){const t=e(o[s]);t&&t.valid&&n.push({stop:Math.max(0,Math.min(1,r)),color:t})}}n.sort(((t,e)=>t.stop-e.stop))}function setValue(t,e,o,n){e[o]=n;t.dataset&&(t.dataset.options?t.dataset.options[o]=n:t.dataset[o]=n)}function getStateOptions(t,e,o,n){let s=t.options.get(o);if(s){if(!e.hidden){s=s.filter((t=>t.datasetIndex!==n));t.options.set(o,s)}}else{s=[];t.options.set(o,s)}return s}function updateDataset(t,e,o,n,s){const a=t.ctx;const r=t.getDatasetMeta(s);if(!r.hidden)for(const[i,c]of Object.entries(o)){const{axis:o,colors:d}=c;if(!d)continue;const p=l(r,o);if(!p){console.warn(`Scale not found for '${o}'-axis in datasets[${s}] of chart id ${t.id}, skipping.`);continue}const f=getStateOptions(e,r,i,s);const g={datasetIndex:s,axis:o,scale:p,stopColors:[]};f.push(g);const u=createGradient(a,o,p);addColors(p,d,g.stopColors);if(g.stopColors.length){applyColors(u,g.stopColors);setValue(r,n,i,u)}}}var c={id:"gradient",beforeInit(t){const e={};e.options=new Map;i.set(t,e)},beforeDatasetsUpdate(t){const e=t.chartArea;if(!areaIsValid(e))return;const o=i.get(t);const n=t.data.datasets;for(let e=0;e<n.length;e++){const s=n[e];const a=s.gradient;a&&updateDataset(t,o,a,s,e)}},afterUpdate(t){const e=i.get(t);t.legend&&false!==t.legend.options.display&&s&&updateLegendItems(t,e)},destroy(t){i.delete(t)}};export{c as default};

