import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";

// noinspection SpellCheckingInspection
type MeteoResponse = {
  "latitude": number;
  "longitude": number;
  "generationtime_ms": number;
  "utc_offset_seconds": number;
  "timezone": string;
  "timezone_abbreviation": string;
  "elevation": number;
  "current": {
    "time": string;
    "interval": number;
    "temperature_2m": number;
  }
};

function Temperature() {
  const queryParamsRef: RefObject<Readonly<{ [key: string]: number | string }>> = useRef(Object.freeze({
    latitude: 41.6941,
    longitude: 44.8337,
    current: 'temperature_2m',
  }));
  const queryBuilder = (paramsObj: {
    [key: string]: number | string
  }) => Object.entries(paramsObj).map(([k, v]) => `${k}=${v}`).join('&');
  const [temperature, setTemperature] = useState(-273);

  useEffect(() => {
    fetch(`https://api.open-meteo.com/v1/forecast?${queryBuilder(queryParamsRef.current)}`)
      .then(response => response.json())
      .then((data: MeteoResponse) => {
        setTemperature(data.current.temperature_2m);
        globalThis.console.debug(new Date().toISOString().split(/[TZ]/)[1], data.current.temperature_2m);
      });
  }, []);

  return (
    <>
      <label>Temperature</label>
      <input type="text" readOnly value={temperature} />
    </>
  )
}

export { Temperature };
