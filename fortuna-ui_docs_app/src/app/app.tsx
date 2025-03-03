import { Button } from 'packages/button/src/lib/button';
import './app.module.css';

export function App() {
  return (
    <div className="container">
      <header>
        <h1>fortuna UI Components</h1>
      </header>

      <main>
        <section className="component-section">
          <h2>Button Component</h2>
          
          <div className="component-demo">
            <h3>Variants</h3>
            <div className="button-grid">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>

            <h3>Sizes</h3>
            <div className="button-grid">
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>

            <h3>States</h3>
            <div className="button-grid">
              <Button disabled>Disabled Button</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
