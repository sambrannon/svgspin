import React from 'react';
import AppPanel from './components/AppPanel';
import ConfigPanel from './components/ConfigPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      svgMarkup: '',
    };

    this.onSVGMarkupChange = this.onSVGMarkupChange.bind(this);
  };

  onSVGMarkupChange(event) {
    this.setState({
      svgMarkup: event.target.value,
    });
  };

  render() {
    return (
      <div className="app">
        <div className="app-panels">
          <AppPanel type="config">
            <ConfigPanel onSVGMarkupChange={this.onSVGMarkupChange} />
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
