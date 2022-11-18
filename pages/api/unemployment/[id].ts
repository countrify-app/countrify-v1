import type { NextApiRequest, NextApiResponse } from 'next'

type UNData = {
  data: object,
  dataSets: Array<{
    action: string,
    series: object
  }>,
  structure: object
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;
  const { id } = query;
  const data: UNData = await fetch(
    `https://data.un.org/ws/rest/data/IAEG-SDGs,DF_SDG_GLH,1.10/..SL_TLF_UEM.${id}.........../ALL/?detail=full&dimensionAtObservation=TIME_PERIOD`,
    {
      headers: {
        Accept: "text/json",
      },
    }
  ).then((response) => response.json());
  res.status(200).json({ data })
}

