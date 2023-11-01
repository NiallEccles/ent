// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { Button } from "@/components/ui/button"

export function App() {
  return (
    <div>
      <Button>Click me</Button>
      <NxWelcome title="ent" />
    </div>
  );
}

export default App;
