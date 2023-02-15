import { useSession, signIn } from "next-auth/react";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubsribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();

  console.log('logado',session)

 async function handleSubscribe() {
    if(!session){
        signIn('github')
        return
    }    

    try {
      const response = await api.post('/subscribe') //nome do arquivo, que sempre será o nome da rota
    
      const {sessionId} = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout(sessionId)
    }
    catch(err){
      alert(err.message)
    }
  }
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
