// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { PrimaryNavigation } from "@/components/primary-navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { faker } from '@faker-js/faker';

export function App() {
  const randomName = faker.person.fullName();
  console.log(randomName);
  return (
    <div>
      <PrimaryNavigation/>
      <Tabs defaultValue="presets" className="w-full">
        <TabsList>
          <TabsTrigger value="presets">Presets</TabsTrigger>
          <TabsTrigger value="custom" disabled={true}>
            Custom
          </TabsTrigger>
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
