import { clients } from "../util/constants";
import { styles } from "../util/style";
import ClientCard from "./ClientCard";

function Clients() {
  return (
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} flex-wrap`}>
        {clients.map(client => (
          <ClientCard key={client.id} logo={client.logo} />
        ))}
      </div>
    </div>
  )
}

export default Clients;