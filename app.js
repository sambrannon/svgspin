document.addEventListener('DOMContentLoaded', function () {
  // Default Values
  const SVG_VALUE = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#7C7C7C" fill-rule="nonzero" d="M4.7 12.73a1.15 1.15 0 01-2.29 0 1.15 1.15 0 012.29 0zm4.44 1.84c0 .64-.5 1.14-1.14 1.14a1.14 1.14 0 110-2.29c.63 0 1.14.52 1.14 1.15zM2.86 8.3c0 .63-.51 1.14-1.15 1.14a1.14 1.14 0 110-2.29c.64 0 1.15.51 1.15 1.15zm10.73 4.44c0 .63-.52 1.14-1.14 1.14a1.15 1.15 0 010-2.28c.62 0 1.14.5 1.14 1.14zm-8.6-8.9a1.43 1.43 0 11-2.86 0c0-.78.64-1.42 1.42-1.42.79 0 1.43.64 1.43 1.43zM15.42 8.3a1.14 1.14 0 11-2.29 0c0-.64.51-1.15 1.15-1.15.63 0 1.14.51 1.14 1.15zM9.7 2a1.71 1.71 0 11-3.43 0 1.71 1.71 0 013.43 0zm4.74 1.84a2 2 0 11-4 0 2 2 0 014 0z"/></svg>';
  const SVG_WIDTH_PX = '140';
  const SPIN_DURATION_MS = 1700;
  const SPIN_DIRECTION = 'clockwise';
  const WRAPPER_CLASS = 'svgspin';

  // Form field IDs
  const CODE_INPUT = 'code-input';
  const WIDTH_INPUT = 'svg-width-input';
  const SPIN_DURATION = 'svg-spin-duration';
  const DIRECTION_CHECKBOX_CLOCKWISE = 'spin-direction-clockwise';
  const DIRECTION_CHECKBOX_COUNTER_CLOCKWISE = 'spin-direction-counter-clockwise';
  const GENERATED_HTML_INPUT = 'generated-code-html';
  const GENERATED_CSS_INPUT = 'generated-code-css';
  const PREVIEW_CONTAINER = 'preview-container';
  const BACKGROUND_TOGGLE = 'bg-toggle';
  const PREVIEW_PANEL = 'preview-panel';
  const PREVIEW_PANEL_DARK_CLASS = 'app-panel--dark';
  const CONFIG_FORM = 'config-form';

  // Markup Templates
  function HTMLTemplate(svg) {
    return `<div class="${WRAPPER_CLASS}">${svg}</div>`;
  }

  function CSSTemplate(config) {
    return '@keyframes svgspin {\n' +
    '  from { transform: rotate(0deg); }\n' +
    `  to { transform: rotate(${config.direction === 'clockwise' ? '360deg' : '-360deg'}); }\n` +
    '}\n' +
    `.${WRAPPER_CLASS} {\n` +
    `  width: ${config.width}px;\n` +
    '}\n' +
    `.${WRAPPER_CLASS} svg {\n` +
    '  display: block;\n' +
    '  width: 100%;\n' +
    '  height: auto;\n' +
    '  animation-name: svgspin;\n' +
    `  animation-duration: ${config.duration}ms;\n` +
    '  animation-iteration-count: infinite;\n' +
    '  animation-timing-function: linear;\n' +
    '}\n';
  }

  function formIsValid() {
    if (
      document.getElementById(CODE_INPUT).value.length > 0 &&
      document.getElementById(WIDTH_INPUT).value.length > 0 &&
      document.getElementById(SPIN_DURATION).value.length > 0 &&
      (
        document.getElementById(DIRECTION_CHECKBOX_CLOCKWISE).checked ||
        document.getElementById(DIRECTION_CHECKBOX_COUNTER_CLOCKWISE).checked
      )
    ) {
      return true;
    }

    console.warn('Form is invalid');
    return false;
  }

  function generatedCSSMarkup(config) {
    if (formIsValid()) {
      document.getElementById(GENERATED_CSS_INPUT).value = CSSTemplate(config);
    }
  }

  function generatedHTMLMarkup(svg) {
    if (formIsValid()) {
      document.getElementById(GENERATED_HTML_INPUT).value = HTMLTemplate(svg);
    }
  }

  function updatePreview() {
    if (formIsValid()) {
      const svgMarkup = document.getElementById(CODE_INPUT).value;
      const cssConfig = {
        direction: document.getElementById(DIRECTION_CHECKBOX_CLOCKWISE).checked ? 'clockwise' : 'counter-clockwise',
        width: document.getElementById(WIDTH_INPUT).value,
        duration: document.getElementById(SPIN_DURATION).value,
      };

      document.head.insertAdjacentHTML('beforeend', `<style>${CSSTemplate(cssConfig)}</style>`);
      document.getElementById(PREVIEW_CONTAINER).innerHTML = HTMLTemplate(svgMarkup);
    }
  }

  function togglePreviewBackgroundColor() {
    document.getElementById(PREVIEW_PANEL).classList.toggle(PREVIEW_PANEL_DARK_CLASS);
  }

  function injectDefaultFormValues() {
    document.getElementById(CODE_INPUT).value = SVG_VALUE;
    document.getElementById(WIDTH_INPUT).value = SVG_WIDTH_PX;
    document.getElementById(SPIN_DURATION).value = SPIN_DURATION_MS;
    document.querySelector(`input[type="radio"][id="spin-direction-${SPIN_DIRECTION}"]`).checked = true;

    generatedCSSMarkup({
      directon: SPIN_DIRECTION,
      width: SVG_WIDTH_PX,
      duration: SPIN_DURATION_MS,
    });
    generatedHTMLMarkup(SVG_VALUE);
    updatePreview();
  }

  function init() {
    injectDefaultFormValues();
  }

  document.getElementById(BACKGROUND_TOGGLE).addEventListener('change', function(event) {
    togglePreviewBackgroundColor(event);
  });

  document.getElementById(CONFIG_FORM).addEventListener('change', function() {
    updatePreview();
  });

  init();
}, false);
