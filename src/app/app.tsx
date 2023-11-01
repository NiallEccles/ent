// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { PrimaryNavigation } from "@/components/primary-navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function App() {
  return (
    <div>
      <PrimaryNavigation/>
      <Tabs defaultValue="presets" className="w-full">
        <TabsList>
          <TabsTrigger value="presets">Presets</TabsTrigger>
            <Tooltip>
              <TooltipTrigger>
                <TabsTrigger value="custom" disabled={true}>
                  Custom
                </TabsTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Coming soon!</p>
              </TooltipContent>
            </Tooltip>
        </TabsList>
        <TabsContent value="presets">
          <div className="w-full h-full bg-muted rounded-md p-2">hello</div>
        </TabsContent>
        <TabsContent value="custom">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
