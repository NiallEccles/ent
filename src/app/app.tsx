// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { PrimaryNavigation } from "@/components/primary-navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import useStudents from "@/hooks/useStudents";

export function App() {
  const students = useStudents(25);
  console.log(students);
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
