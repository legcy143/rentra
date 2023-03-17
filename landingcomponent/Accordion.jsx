import style from "./styles/home.module.scss"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

const Accordion = () => {
  
  return (
    <main className={style.accordionDiv}>
<AccordionCard tittle="first accordion" content="lorem is pum is ok but i think your have to do it again but think again"/>
<AccordionCard tittle="second accordion" content="lorem is pum is ok but i think your have to do it again but think again"/>
 
    </main>
  );
};

export default Accordion;


const AccordionCard = (props) =>{
  const [isOpen, setIsOpen] = useState(false);
  return(
    <div>
    <button
      className="flex items-center justify-between w-full p-4 text-lg font-medium text-left text-gray-900 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-200 mt-2"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span>{props.tittle}</span>
      <span className="ml-6">
        {isOpen ? <RemoveIcon/> : <AddIcon/>}
      </span>
    </button>
    {isOpen && (
      <div className="p-4 text-gray-700 bg-gray-100">
      {props.content}
      </div>
    )}
  </div>
  )
}