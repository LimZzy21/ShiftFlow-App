"use client";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui";
import { NAV_TABS } from "./config";
import { useRouter } from "next/navigation";

export const NavigateTabs = () => {
  const router = useRouter();

  const handleNavigateTab = (path: string) => {
    router.push(path);
  };

  return (
    <div
      className={
        "absolute bg-white/10 backdrop-blur-lg border-t border-white/20 w-full bottom-0  flex items-center justify-center py-2"
      }
    >
      <Tabs defaultValue={"/"}>
        <TabsList className={"gap-3"}>
          {NAV_TABS.map((tab) => (
            <TabsTrigger
              key={tab.path}
              value={tab.path}
              onClick={() => handleNavigateTab(tab.path)}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
