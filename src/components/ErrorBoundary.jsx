import {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ErrorBoundary extends Component {
  state = {hasError: false};

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch(error) {
    console.error('Butterfly Cafe page error:', error);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="page error-page">
        <section className="error-state">
          <span>🦋</span>
          <h1>Something went wrong.</h1>
          <p>We couldn't load this section right now. Try returning home or reloading the page.</p>
          <div className="error-actions">
            <Link className="btn dark" to="/" onClick={() => this.setState({hasError: false})}>
              Back to Home
            </Link>
            <button type="button" className="btn outline" onClick={this.handleReload}>
              Reload Page
            </button>
          </div>
        </section>
      </main>
    );
  }
}
