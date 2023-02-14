import { useSession, signIn } from "next-auth/react";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export function SubsribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();

  console.log('logado',session)

  function handleSubscribe() {
    if(!session){
        signIn('github')
        return
    }

    
  }
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
