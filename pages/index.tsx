import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { Button, Logo } from "@countrify-app/countrify-components";
import logo from "../public/logo.png";
import { years, countries } from "../utils/data";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const countryId = 392;

type Data = {
  annotations: [];
  attributes: (number | null)[];
  observations: {
    [index: number]: (number | null)[]
  };
};

export default function Home({ data }: any) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const arr = new Array<object>();
  let employment: Data = Object.values(data.data.dataSets[0].series)[0] as Data;
  Object.keys(years).forEach(function (value: string, index: number) {
    if (Object.keys(years)[index] === Object.keys(employment.observations)[index]) {
      arr.push({
        name: years[index],
        uv: employment.observations[index][0],
        pv: 100,
      });
    }
  });

  return (
    <div className={styles.container}>
      <Button label="bouton" kind="red" />
      {hasWindow && (
        <div>
          <LineChart width={400} height={400} data={arr}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `http://localhost:3000/api/unemployment/${countryId}`
  );
  console.log(res);
  const data = await res.json();
  return { props: { data } };
}
