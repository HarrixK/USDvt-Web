import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const apiUrl = process.env.NEXT_CONTACT_FORM_API as string;
    const apiKey = process.env.NEXT_AWS_API_KEY as string;

    const awsResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: apiKey,
      },
      body: JSON.stringify(req.body),
    });

    const data = await awsResponse.json();
    return res.status(awsResponse.status).json(data);
  } catch (error) {
    return res.status(500).json({ message: (error as Error).message });
  }
}