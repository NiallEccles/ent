import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  TooltipProvider,
} from "@/components/ui/tooltip"

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <div className="max-w-6xl mx-auto mt-5 px-5">
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </div>
  </StrictMode>
);
