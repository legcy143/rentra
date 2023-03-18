import style from "./styles/home.module.scss"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

const Accordion = () => {

  return (
    <main className={style.accordionDiv}>
      <AccordionCard tittle="What is Rentra?
" content="Rentra is a peer-to-peer rental marketplace that allows people to rent out their unused items and make money while also helping others save money on their rentals." />
      <AccordionCard tittle="How does Rentra work?
" content="Owners can list their items on Rentra and set their own rental rates and availability. Renters can search for items by location, category, and availability, and book rentals directly through the platform. Rentra provides secure payments and user verification to ensure a safe and easy rental process." />
      <AccordionCard tittle="What types of items can be rented on Rentra?
?
" content="Rentra allows for a wide range of items to be rented, including but not limited to sports equipment, electronics, tools, home appliances, and party supplies.
" />
      <AccordionCard tittle="How much does it cost to rent an item on Rentra?
?
" content="The rental rates are set by the owners, so the cost can vary depending on the item, location, and availability. Rentra charges a commission of 12% on all rentals.

" />
      <AccordionCard tittle="Is it safe to rent items through Rentra?

?
" content="Rentra takes safety and security seriously and has implemented measures to ensure a safe and trustworthy rental process. All users are verified and Rentra provides secure payments and insurance options for added protection.
" />
      <AccordionCard tittle="What happens if an item is damaged during the rental period?


?
" content="Rentra offers insurance options for owners to protect their items in case of damage. Renters are responsible for any damages or losses incurred during the rental period and will be charged accordingly.

" />

      <AccordionCard tittle="What if I have an issue with a rental or user?


  ?
  " content="Rentra has a dispute resolution process in place to handle any issues that may arise during the rental process. Users can contact Rentra support for assistance.

  " />
      <AccordionCard tittle="How do I get paid for my rentals?



  ?
  " content="Rentra provides secure payment options for owners, and payments are released once the rental period is complete and the item has been returned in good condition.


  " />
      <AccordionCard tittle="What if I need to cancel a rental?



  ?
  " content="Rentra allows for cancellations, but owners may have specific cancellation policies in place. Renters should review the cancellation policies before booking a rental and communicate with the owner if any changes need to be made.


  " />
    </main>
  );
};

export default Accordion;


const AccordionCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="flex items-center justify-between w-full p-4 text-lg font-medium text-left text-gray-900 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-200 mt-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{props.tittle}</span>
        <span className="ml-6">
          {isOpen ? <RemoveIcon /> : <AddIcon />}
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