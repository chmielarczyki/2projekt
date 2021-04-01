/* global coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v4.0.0-alpha.2): tooltips.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

document.querySelectorAll('[data-coreui-toggle="tooltip"]').forEach(element => {
  // eslint-disable-next-line no-new
  new coreui.Tooltip(element)
})
