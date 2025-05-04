import { useContext, useEffect, useState } from "react";
import { useSuiClient } from "@mysten/dapp-kit";
import clientConfig from "@/config/clientConfig";
import { LoginContext } from "@/contexts/ZkLoginContext";
import { LoginContextType } from "@/types/todo";
import { countries, Country } from "country-data";
import { CrossBorderPayment, Transaction } from "@/types/CrossBorderPayment";

const useCrossBorderPayment = (id?: string) => {
  const [payment, setPayment] = useState<CrossBorderPayment>(
    {} as CrossBorderPayment
  );
  const [payments, SetPayments] = useState<CrossBorderPayment[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const { address } = useContext(LoginContext) as LoginContextType;

  const client = useSuiClient();

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const app: any = await client.getObject({
          id: clientConfig.APP_ID,
          options: { showContent: true },
        });
        // console.log(app, "aoo");

        const allTransactions: Transaction[] =
          app.data?.content?.fields?.cross_border_payments?.map((item: any) => [
            {
              ...item.fields.in,
              symbol: countries.all.filter(
                (country) => country.alpha3 == item.fields.in.currency
              )[0]?.currencies[0],
              flag: countries.all.filter(
                (country) => country.alpha3 == item.fields.in.currency
              )[0]?.emoji,
            },
            {
              ...item.fields.out,
              symbol: countries.all.filter(
                (country) => country.alpha3 == item.fields.out.currency
              )[0]?.currencies[0],
              flag: countries.all.filter(
                (country) => country.alpha3 == item.fields.out.currency
              )[0]?.emoji,
            },
          ]);
        const myTransactions = allTransactions
          ?.flat()
          .filter(
            (item: Transaction) =>
              item.sender == address || item.receiver == address
          );
        setTransactions(myTransactions);
        let payments = app.data.content.fields.cross_border_payments
          .filter((item: any) => item.fields.creator == address)
          .map((item: any) => {
            const inCurrency = new TextDecoder().decode(
              new Uint8Array(item.fields.in.fields.currency)
            );
            const outCurrency = new TextDecoder().decode(
              new Uint8Array(item.fields.out.fields.currency)
            );
            //  console.log("test",countries.all.filter(item=> item.alpha3 ===inCurrency))

            return {
              ...item.fields,
              in: {
                ...item.fields.in.fields,
                currency: inCurrency,
                symbol: countries.all.filter(
                  (item) => item.alpha3 == inCurrency
                )[0]?.currencies[0],
                flag: countries.all.filter(
                  (item) => item.alpha3 == inCurrency
                )[0]?.emoji,
              },
              out: {
                ...item.fields.out.fields,
                currency: outCurrency,
                symbol: countries.all.filter(
                  (item) => item.alpha3 == outCurrency
                )[0]?.currencies[0],
                flag: countries.all.filter(
                  (item) => item.alpha3 == outCurrency
                )[0]?.emoji,
              },
            };
          });
        SetPayments(payments);

        if (id) {
          let payment = app.data.content.fields.cross_border_payments.filter(
            (item: any) => item.fields.id == id
          )[0];
          // Remove the fields property key and convert currency to string
          payment = {
            ...payment.fields,
            in: {
              ...payment.fields.in.fields,
              currency: new TextDecoder().decode(
                new Uint8Array(payment.fields.in.fields.currency)
              ),
            },
            out: {
              ...payment.fields.out.fields,
              currency: new TextDecoder().decode(
                new Uint8Array(payment.fields.out.fields.currency)
              ),
            },
          };

          setPayment(payment);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPayment();
  }, [id, client, address]);

  return { payment, payments, transactions };
};

export default useCrossBorderPayment;
