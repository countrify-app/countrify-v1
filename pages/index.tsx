import styles from "../styles/Home.module.css";
import { Button, Logo } from "@countrify-app/countrify-components";
import logo from "../public/logo.png";
import { years, countries } from "../utils/data"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export default function Home({ data }: any) {
  const arr = new Array<object>()
  console.log(data.dataSets[0].series);
  let employment = Object.values(data.dataSets[0].series)[0].observations;
  Object.keys(years).forEach(function (key: number, index: number) {
    if (Object.keys(years)[key] === Object.keys(employment)[key]) {
      arr.push({name: years[key], uv: employment[key][0], pv: 100});
    }
  });
  console.log(arr)
  return (
    <div className={styles.container}>
      <Button label="bouton" kind="red" />
      <LineChart width={400} height={400} data={arr}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    `https://data.un.org/ws/rest/data/IAEG-SDGs,DF_SDG_GLH,1.10/..SL_TLF_UEM.44.........../ALL/?detail=full&dimensionAtObservation=TIME_PERIOD`,
    {
      headers: {
        Accept: "text/json",
      },
    }
  ).then((response) => response.json());
  return { props: { data } };
}
