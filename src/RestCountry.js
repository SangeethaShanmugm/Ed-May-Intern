import { useEffect, useState } from "react";
import axios from "axios";

export function RestCountry() {
  const [apidata, setApidata] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all"
    ).then((res) => {
      setApidata(res.data);
      console.log(res.data);
      console.log(res.data[0].name.common);
    }).catch(err => { console.log(err); });

  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>common Name</th>
            <th>official Name</th>
          </tr>
        </thead>
        <tbody>
          {apidata.map((d, i) => {

            return (
              <tr key={i.name}>
                <td>{d.name?.common}</td>
                <td>{d.name?.official}</td>
              </tr>
            );

          })}
        </tbody>
      </table>
    </>
  );
}
