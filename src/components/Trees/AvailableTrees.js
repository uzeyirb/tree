import Card from '../UI/Card';
import TreesItem from './TreesItem/TreesItem';
import classes from './AvailableTrees.module.css';
import React from 'react';
const DUMMY_TREES = [
  {
    id: 'm1',
    name: 'Red maple',
    description: 'It is a medium to large sized tree, reaching heights of 27 to 38 metres',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Loblolly pine,',
    description: 'One of the fastest growing southern pines, this tree is used as a quick-screen in many landscapes!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Sweetgum ',
    description: 'Sweetgum is one of the most aggressive pioneer tree species and quickly takes over abandoned fields and unmanaged cut-over forests.',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Flowering Dogwood',
    description: 'Flowering dogwood is one of the most common understory hardwoods you will see in both hardwood and coniferous forests in eastern North America.',
    price: 18.99,
  },
];

const AvailableTrees = () => {
  const treesList = DUMMY_TREES.map((tree) => (
    <TreesItem
      key={tree.id}
      id={tree.id}
      name={tree.name}
      description={tree.description}
      price={tree.price}
    />
  ));

  return (
    <section className={classes.trees}>
      <Card>
        <ul>{treesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableTrees;