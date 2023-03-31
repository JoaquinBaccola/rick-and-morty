import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, gender, onClose, species, image, id }) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
             <button onClick={onClose}>X</button>
         </div>
         <div className={styles.dataContainer}>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h4>{species}</h4>
         <h4>{gender}</h4>
         </div>
         <img className={styles.image}  src={image} alt={name} />
      </div>
   );
}
