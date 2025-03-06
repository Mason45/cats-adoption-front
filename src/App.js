import React from 'react';
import { Button, Card } from 'antd';
import { Typography, Container } from '@mui/material';

function App() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to My Website
      </Typography>
      <Card title="Ant Design Card" style={{ width: 300, marginBottom: 20 }}>
        <p>This is a card from Ant Design.</p>
        <Button type="primary">Ant Design Button</Button>
      </Card>
      <Typography variant="body1" style={{ marginTop: 20 }}>
        This text is styled with MUI.
      </Typography>
    </Container>
  );
}

export default App;