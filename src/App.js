import React from 'react';
import AppPanel from './components/AppPanel';
import ConfigPanel from './components/ConfigPanel';
import GeneratedCodeBlocks from './components/GeneratedCodeBlocks';
import StyledCheckbox from './components/StyledCheckbox';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      svgMarkup: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#7C7C7C" fill-rule="nonzero" d="M4.7 12.73a1.15 1.15 0 01-2.29 0 1.15 1.15 0 012.29 0zm4.44 1.84c0 .64-.5 1.14-1.14 1.14a1.14 1.14 0 110-2.29c.63 0 1.14.52 1.14 1.15zM2.86 8.3c0 .63-.51 1.14-1.15 1.14a1.14 1.14 0 110-2.29c.64 0 1.15.51 1.15 1.15zm10.73 4.44c0 .63-.52 1.14-1.14 1.14a1.15 1.15 0 010-2.28c.62 0 1.14.5 1.14 1.14zm-8.6-8.9a1.43 1.43 0 11-2.86 0c0-.78.64-1.42 1.42-1.42.79 0 1.43.64 1.43 1.43zM15.42 8.3a1.14 1.14 0 11-2.29 0c0-.64.51-1.15 1.15-1.15.63 0 1.14.51 1.14 1.15zM9.7 2a1.71 1.71 0 11-3.43 0 1.71 1.71 0 013.43 0zm4.74 1.84a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
      svgWidthPx: 140,
      spinDirection: 'clockwise',
      spinSpeedMs: 1700,
      showGeneratedCode: false,
      wrapperClass: 'svgspin',
      showDarkPreviewBG: false,
    };

    this.onSVGMarkupChange = this.onSVGMarkupChange.bind(this);
    this.onSpinDirectionChange = this.onSpinDirectionChange.bind(this);
    this.onSpinSpeedChange = this.onSpinSpeedChange.bind(this);
    this.onSvgWidthChange = this.onSvgWidthChange.bind(this);
    this.onSvgWidthSliderChange = this.onSvgWidthSliderChange.bind(this);
    this.onSpinSpeedSliderChange = this.onSpinSpeedSliderChange.bind(this);
    this.onTogglePreviewBackgroundColor = this.onTogglePreviewBackgroundColor.bind(this);
  };

  onSVGMarkupChange(event) {
    this.setState({
      svgMarkup: event.target.value,
    });
  };

  onSpinDirectionChange(event) {
    this.setState({
      spinDirection: event.target.id,
    });
  }

  onSpinSpeedChange(event) {
    // TODO lock this down to a number
    this.setState({
      spinSpeedMs: event.target.value,
    });
  }

  onSvgWidthChange(event) {
    // TODO lock this down to a number
    this.setState({
      svgWidthPx: event.target.value,
    });
  }

  onSvgWidthSliderChange(value) {
    this.setState({
      svgWidthPx: value,
    });
  }

  onSpinSpeedSliderChange(value) {
    this.setState({
      spinSpeedMs: value,
    });
  }

  onTogglePreviewBackgroundColor(value) {
    this.setState({
      showDarkPreviewBG: !this.state.showDarkPreviewBG,
    });
  }

  generatedCssMarkup() {
    return  '@keyframes svgspin {\n' +
            '  from { transform: rotate(0deg); }\n' +
            `  to { transform: rotate(${this.state.spinDirection === 'clockwise' ? '360deg' : '-360deg'}); }\n` +
            '}\n' +
            `.${this.state.wrapperClass} {\n` +
            `  width: ${this.state.svgWidthPx}px;\n` +
            '}\n' +
            `.${this.state.wrapperClass} svg {\n` +
            '  display: block;\n' +
            '  width: 100%;\n' +
            '  height: auto;\n' +
            '  animation-name: svgspin;\n' +
            `  animation-duration: ${this.state.spinSpeedMs}ms;\n` +
            '  animation-iteration-count: infinite;\n' +
            '  animation-timing-function: linear;\n' +
            '}\n';
  }

  generatedSvgMarkup() {
    return `<div class="${this.state.wrapperClass}">${this.state.svgMarkup}</div>`;
  }

  render() {
    return (
      <div className="app">
        <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: this.generatedCssMarkup() }}
        />
        <div className="app-panels">
          <AppPanel type="config" color="dark">
            <ConfigPanel
              onSVGMarkupChange={this.onSVGMarkupChange}
              svgMarkup={this.state.svgMarkup}
              onSpinDirectionChange={this.onSpinDirectionChange}
              spinDirection={this.state.spinDirection}
              onSpinSpeedChange={this.onSpinSpeedChange}
              spinSpeedMs={this.state.spinSpeedMs}
              onSvgWidthChange={this.onSvgWidthChange}
              svgWidthPx={this.state.svgWidthPx}
              onSvgWidthSliderChange={this.onSvgWidthSliderChange}
              onSpinSpeedSliderChange={this.onSpinSpeedSliderChange}
            />
            {this.state.svgMarkup !== '' &&
              <GeneratedCodeBlocks
                css={this.generatedCssMarkup()}
                html={this.generatedSvgMarkup()}
              />
            }
          </AppPanel>
          <AppPanel type="preview" color={this.state.showDarkPreviewBG ? 'dark' : 'light'}>
            <div className="preview-panel">
              <div className="preview-panel__svg">
                <div
                  dangerouslySetInnerHTML={{ __html: this.state.svgMarkup }}
                  className={this.state.wrapperClass}
                />
              </div>
              <div className="preview-panel__color-toggle">
                <div className="styled-checkbox">
                  <StyledCheckbox
                    id="bg-toggle"
                    checked={this.state.showDarkPreviewBG}
                    onChange={this.onTogglePreviewBackgroundColor}
                    label="Dark Background"
                  />
                </div>
              </div>
            </div>
          </AppPanel>
        </div>
      </div>
    );
  }
}

export default App;
