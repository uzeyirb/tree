import { useContext } from 'react';
import React from 'react';
import TreesItemForm from './TreesItemForm';
import classes from './TreesItem.module.css';
import CartContext from '../../../store/cart-context';

const TreesItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.trees}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <TreesItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default TreesItem;