import { Card, Button, Header } from '@repo/ui';

function App() {
  return (
    <div>
      <Header title="My New App" />
      <div style={{ padding: 40 }}>
        <Card title="Shared UI Component">
          <Button>Click Me</Button>
        </Card>
      </div>
    </div>
  );
}

export default App;


