import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import { getBusinessName, generateImageForBusiness } from "./helpers/services";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get("/generate-business-name", async (req: Request, res: Response) => {
  const { business_type } = req.body;

  const business_type_formatted = business_type.trim();

  if (!business_type_formatted)
    return res
      .status(400)
      .json({ success: false, msg: "No business type provided." });

  const openaiData = await getBusinessName(business_type_formatted);

  const businessName = openaiData.choices[0].text?.trim();

  if (!businessName)
    return res
      .status(400)
      .json({ success: false, msg: "Could not get a valid business name" });

  return res.json({ success: true, business_type: businessName });
});

app.get("/generate-business-image", async (req: Request, res: Response) => {
  const { business_name } = req.body;

  const business_name_formatted = business_name.trim();

  if (!business_name_formatted)
    return res
      .status(400)
      .json({ success: false, msg: "No business name provided." });

  const openaiData = await generateImageForBusiness(business_name_formatted);

  const businessImageUrl = openaiData.data[0].url;

  if (!businessImageUrl)
    return res.status(400).json({
      success: false,
      msg: "Could not generate a valid business image",
    });

  return res.json({ success: true, business_image_url: businessImageUrl });
});

app.listen(PORT, () => console.log("Listening at port: " + PORT));
