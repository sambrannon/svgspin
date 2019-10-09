import React from 'react';
import AppPanel from './components/AppPanel';
import ConfigPanel from './components/ConfigPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      svgMarkup: '',
      spinDirection: 'clockwise',
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
          </AppPanel>
          <AppPanel type="preview">
            <div dangerouslySetInnerHTML={{ __html: this.state.svgMarkup }} />
          </AppPanel>
        </div>
      </div>
    );
  }
}

export default App;
