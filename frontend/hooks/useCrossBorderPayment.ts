import { useEffect, useState } from "react";
import { useSuiClient } from "@mysten/dapp-kit";
import clientConfig from "@/config/clientConfig";

const useCrossBorderPayment = (id: string) => {
  const [payment, setPayment] = useState<CrossBorderPayment>();
  const client = useSuiClient();

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const app: any = await client.getObject({
          id: clientConfig.APP_ID,
          options: { showContent: true },
        });
        let payment = app.data.content.fields.cross_border_payments.filter(
          (item: any) => item.fields.id == id
        )[0];

        // Remove the fields property key and convert currency to string
        payment = {
          ...payment.fields,
          in: {
            ...payment.fields.in.fields,
            currency: new TextDecoder().decode(new Uint8Array(payment.fields.in.fields.currency))
          },
          out: {
            ...payment.fields.out.fields,
            currency: new TextDecoder().decode(new Uint8Array(payment.fields.out.fields.currency))
          }
        };

        setPayment(payment);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPayment();
  }, [id, client]);

  return { payment };
};

export default useCrossBorderPayment;
