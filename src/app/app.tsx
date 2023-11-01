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
      <Tabs defaultValue="presets" className="w-[400px]">
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
        <TabsContent value="presets">Make changes to your account here.</TabsContent>
        <TabsContent value="custom">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
