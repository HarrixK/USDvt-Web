"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-gray-100 gap-4 flex flex-col sm:flex-row",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  borderColor,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & { borderColor?: string }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "w-40% text-left pb-5 border-b-2 transition-colors focus:outline-none",
        borderColor && "data-[state=active]:border-b-2 data-[state=active]:border-blue-600",
        "data-[state=active]:text-blue-600 data-[state=active]:font-bold text-gray-500 hover:text-gray-700",
        "data-[state=inactive]:border-gray-300 data-[state=inactive]:text-gray-500",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none mt-4", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };