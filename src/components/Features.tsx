import React from "react";
import { Card } from "./ui/card";
import {
  Book,
  Route,
  TabletSmartphone,
  Library,
  PlayCircle,
} from "lucide-react";

const Features = () => {
  const keyFeatures = [
    {
      id: "1",
      title: "Comprehensive Course Material",
      description:
        "Detailed notes, video tutorials, and exam preparation for each subject.",
      icon: <Book width={30} height={30} />,
    },
    {
      id: "2",
      title: "Personalized Learning Paths",
      description:
        "Curated learning paths based on diploma or degree programs.",
      icon: <Route width={30} height={30} />,
    },
    {
      id: "3",
      title: "Easy Access Anytime",
      description:
        "Downloadable resources, offline viewing, and study on the go.",
      icon: <TabletSmartphone width={30} height={30} />,
    },
    {
      id: "4",
      title: "Resource Library",
      description:
        "Access a vast library of books, tutorials, and notes curated for engineering students.",
      icon: <Library width={30} height={30} />,
    },
    {
      id: "5",
      title: "Subject-Wise Video Playlists",
      description:
        "Watch curated YouTube playlists for each subject to deepen your understanding.",
      icon: <PlayCircle width={30} height={30} />,
    },
  ];
  return (
    <>
      <section className="features-section">
        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  mb-8">
          Features
        </h2>
        <div className="features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-4">
          {keyFeatures.map((feature) => {
            return (
              <Card
                key={feature.id}
                className="p-6 flex flex-col items-center text-center cursor-pointer shadow-md hover:border-blue-primary  hover:border hover:border-solid  hover:scale-105 transition-all card-glow 
      bg-[#EEEEEF] dark:bg-[#151516] xl:min-h-[220px] xl:justify-center xl:gap-1"
              >
                <div>{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title} </h3>
                <p className="text-sm font-light text-slate-500 dark:text-slate-600">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Features;
