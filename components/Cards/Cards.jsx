import Card from '../Card/Card.jsx';

function Cards({ characters, onClose }) {
   return(
      <div style={{display:"flex" , justifyContent: "space-between"}}>
         {
            characters.map(({id, name, species, gender, image}) => {
              return <Card
              key={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              id={id}
              onClose={() => onClose(id)}
              />
            })
         }
      </div>
   )
    
}

export default Cards;