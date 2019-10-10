import React from 'react';
import AppPanel from './components/AppPanel';
import ConfigPanel from './components/ConfigPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      svgMarkup: '<svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M66.6666667,43.3333333 L66.6666667,36.6666667 C66.6666667,35.7638889 66.3368056,34.9826389 65.6770833,34.3229167 C65.0173611,33.6631944 64.2361111,33.3333333 63.3333333,33.3333333 L37.1875,33.3333333 L47.03125,23.4895833 C47.6909722,22.8298611 48.0208333,22.0486111 48.0208333,21.1458333 C48.0208333,20.2430556 47.6909722,19.4618056 47.03125,18.8020833 L42.2916667,14.0625 C41.6666667,13.4375 40.8854167,13.125 39.9479167,13.125 C39.0104167,13.125 38.2291667,13.4375 37.6041667,14.0625 L18.75,32.9166667 L14.0104167,37.65625 C13.3854167,38.28125 13.0729167,39.0625 13.0729167,40 C13.0729167,40.9375 13.3854167,41.71875 14.0104167,42.34375 L18.75,47.0833333 L37.6041667,65.9375 C38.2291667,66.5625 39.0104167,66.875 39.9479167,66.875 C40.8854167,66.875 41.6666667,66.5625 42.2916667,65.9375 L47.03125,61.1979167 C47.65625,60.5729167 47.96875,59.7916667 47.96875,58.8541667 C47.96875,57.9166667 47.65625,57.1354167 47.03125,56.5104167 L37.1875,46.6666667 L63.3333333,46.6666667 C64.2361111,46.6666667 65.0173611,46.3368056 65.6770833,45.6770833 C66.3368056,45.0173611 66.6666667,44.2361111 66.6666667,43.3333333 Z M80,40 C80,47.2569444 78.2118056,53.9496528 74.6354167,60.078125 C71.0590278,66.2065972 66.2065972,71.0590278 60.078125,74.6354167 C53.9496528,78.2118056 47.2569444,80 40,80 C32.7430556,80 26.0503472,78.2118056 19.921875,74.6354167 C13.7934028,71.0590278 8.94097222,66.2065972 5.36458333,60.078125 C1.78819444,53.9496528 0,47.2569444 0,40 C0,32.7430556 1.78819444,26.0503472 5.36458333,19.921875 C8.94097222,13.7934028 13.7934028,8.94097222 19.921875,5.36458333 C26.0503472,1.78819444 32.7430556,0 40,0 C47.2569444,0 53.9496528,1.78819444 60.078125,5.36458333 C66.2065972,8.94097222 71.0590278,13.7934028 74.6354167,19.921875 C78.2118056,26.0503472 80,32.7430556 80,40 Z" id="Shape"></path></svg>',
      svgWidthPx: 100,
      spinDirection: 'counter-clockwise',
      spinSpeedMs: 2000,
      showGeneratedCode: false,
    };

    this.onSVGMarkupChange = this.onSVGMarkupChange.bind(this);
    this.onSpinDirectionChange = this.onSpinDirectionChange.bind(this);
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

  cssMarkup() {
    return  '@keyframes svgspin {\n' +
            '  from { transform: rotate(0deg); }\n' +
            `  to { transform: rotate(${this.state.spinDirection === 'clockwise' ? '360deg' : '-360deg'}); }\n` +
            '}\n' +
            '.svgspin {\n' +
            `  width: ${this.state.svgWidthPx}px;\n` +
            '}\n' +
            '.svgspin svg {\n' +
            '  display: block;\n' +
            '  width: 100%;\n' +
            '  height: auto;\n' +
            '  animation-name: svgspin;\n' +
            `  animation-duration: ${this.state.spinSpeedMs}ms;\n` +
            '  animation-iteration-count: infinite;\n' +
            '  animation-timing-function: linear;\n' +
            '}\n';
  }

  render() {
    return (
      <div className="app">
        <div className="app-panels">
          <AppPanel type="config">
            <ConfigPanel
              onSVGMarkupChange={this.onSVGMarkupChange}
              svgMarkup={this.state.svgMarkup}
              onSpinDirectionChange={this.onSpinDirectionChange}
              spinDirection={this.state.spinDirection}
            />
            {this.state.svgMarkup !== '' &&
              <code>
                <pre>
                  {this.cssMarkup()}
                </pre>
              </code>
            }
          </AppPanel>
          <AppPanel type="preview">
            <style
              type="text/css"
              dangerouslySetInnerHTML={{ __html: this.cssMarkup() }}
            />
            <div
              dangerouslySetInnerHTML={{ __html: this.state.svgMarkup }}
              className="svgspin"
            />
          </AppPanel>
        </div>
      </div>
    );
  }
}

export default App;
