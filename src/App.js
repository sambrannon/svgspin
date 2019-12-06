import React from 'react';
import AppPanel from './components/AppPanel';
import ConfigPanel from './components/ConfigPanel';
import GeneratedCodeBlocks from './components/GeneratedCodeBlocks';
import StyledCheckbox from './components/StyledCheckbox';
import GithubCorner from './components/GithubCorner';
import { GITHUB_URL } from './constants';

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

    this.onInputChange = this.onInputChange.bind(this);
    this.onToggleStateBool = this.onToggleStateBool.bind(this);
  };

  onInputChange(stateKey, stateValue) {
    this.setState({
      [stateKey]: stateValue,
    });
  }

  onToggleStateBool(stateKey) {
    this.setState({
      [stateKey]: !this.state[stateKey],
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
            <div className="config-panel">
              <div className="config-panel__main">
                <div className="config-panel__form">
                  <ConfigPanel
                    svgMarkup={this.state.svgMarkup}
                    spinDirection={this.state.spinDirection}
                    spinSpeedMs={this.state.spinSpeedMs}
                    svgWidthPx={this.state.svgWidthPx}
                    onSVGMarkupChange={event => this.onInputChange('svgMarkup', event.target.value)}
                    onSpinDirectionChange={event => this.onInputChange('spinDirection', event.target.id)}
                    onSpinSpeedChange={event => this.onInputChange('spinSpeedMs', event.target.value)}
                    onSvgWidthChange={event => this.onInputChange('svgWidthPx', event.target.value)}
                    onSvgWidthSliderChange={value => this.onInputChange('svgWidthPx', value)}
                    onSpinSpeedSliderChange={value => this.onInputChange('spinSpeedMs', value)}
                  />
                </div>
                {this.state.svgMarkup !== '' &&
                  <GeneratedCodeBlocks
                    css={this.generatedCssMarkup()}
                    html={this.generatedSvgMarkup()}
                  />
                }
              </div>
              <div className="config-panel__footer">
                <p>Made by Nice people in Minnesota</p>
              </div>
            </div>
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
                    onChange={() => this.onToggleStateBool('showDarkPreviewBG')}
                    label="Dark Background"
                  />
                </div>
              </div>
            </div>
          </AppPanel>
        </div>
        <GithubCorner url={GITHUB_URL} />
      </div>
    );
  }
}

export default App;
