import { useEffect, useState } from "react";
import RootLayout from "../components/layout/RootLayout";
import Card from "../components/ui/card/Card";
import type { Data } from "../shared/data";

const Home = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("data/data.json", {
           cache: "no-store"
         });
        const data = await res.json();
        setData(data);
      } catch (e) {
        console.error("Failed to load data", e);
      }
    };
    fetchData();
  }, []);
  return (
    <RootLayout>
      <Card data={data} />
    </RootLayout>
  );
};
export default Home;
